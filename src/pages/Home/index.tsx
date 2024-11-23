import { useState, useEffect, createContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod";
import { differenceInSeconds } from "date-fns";

import { Play, HandPalm } from "phosphor-react";

import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";

import { HomeContainer, StartCountdownButton, StopCountdownButton } from "../../pages/Home/styles";

const newCycleFormValidationSchema = zod.object({
    task: zod
        .string()
        .min(1, "Informe a tarefa"),
    minutesAmount: zod
        .number()
        .min(5, "O ciclo precisa ser de no mínimo 5 minutos.")
        .max(60, "O ciclo precisa ser de no máximo 60 minutos."),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
    startDate: Date;
    interruptedDate?: Date;
    finishedDate?: Date;
}

interface CyclesContextType {
    activeCycle: Cycle | undefined;
    activeCycleId: String | null;
    markCurrentCycleAsFinished: () => void;
}

export const CyclesContext = createContext({} as CyclesContextType);

export function Home() {
    const [cycles, setCycles] = useState<Cycle[]>([]);
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId);

    function markCurrentCycleAsFinished() {
        setCycles(prevState => prevState.map(cycle => {
            if (cycle.id === activeCycleId) {
                return { ...cycle, finishedDate: new Date() };
            } else {
                return cycle;
            }
        }));
    }

    // function handleCreateNewCycle(data: NewCycleFormData) {
    //     const id = String(new Date().getTime());

    //     const newCycle: Cycle = {
    //         id,
    //         task: data.task,
    //         minutesAmount: data.minutesAmount,
    //         startDate: new Date(),
    //     }

    //     setCycles(prevState => [...prevState, newCycle]);
    //     setActiveCycleId(id);
    //     setAmountSecondsPassed(0);

    //     reset();
    // }

    function handleInterruptCycle() {
        setCycles(prevState => prevState.map(cycle => {
            if (cycle.id === activeCycleId) {
                return { ...cycle, interruptedDate: new Date() };
            } else {
                return cycle;
            }
        }));

        setActiveCycleId(null);
    }

    // const task = watch("task");
    // const isSubmitDisabled = !task;

    return (
        <HomeContainer>
            <form /*onSubmit={handleSubmit(handleCreateNewCycle)}*/>
                <CyclesContext.Provider value={{ activeCycle, activeCycleId, markCurrentCycleAsFinished }}>
                    {/*<NewCycleForm />*/}
                    <Countdown />
                </CyclesContext.Provider>

                {
                    activeCycle ? (
                        <StopCountdownButton onClick={handleInterruptCycle} type="button">
                            <HandPalm size={24} />
                            Interromper
                        </StopCountdownButton>
                    ) : (
                        <StartCountdownButton type="submit" /*disabled={isSubmitDisabled}*/>
                            <Play size={24} />
                            Começar
                        </StartCountdownButton>
                    )
                }
            </form>
        </HomeContainer>
    )
}