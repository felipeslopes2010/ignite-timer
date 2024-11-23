import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod";

import { CyclesContext } from "../../contexts/CyclesContext";
import { NewCycleForm } from "./components/NewCycleForm";

import { Play, HandPalm } from "phosphor-react";

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

export function Home() {
    const { activeCycle, createNewCycle, interruptCurrentCycle } = useContext(CyclesContext);

    const newCycleForm = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: "",
            minutesAmount: 5,
        }
    });
    
    const { handleSubmit, watch, /*reset*/ } = newCycleForm;

    const task = watch("task");
    const isSubmitDisabled = !task;

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(createNewCycle)}>
                    <FormProvider {...newCycleForm}>
                        <NewCycleForm />
                    </FormProvider>
                    <Countdown />

                {
                    activeCycle ? (
                        <StopCountdownButton onClick={interruptCurrentCycle} type="button">
                            <HandPalm size={24} />
                            Interromper
                        </StopCountdownButton>
                    ) : (
                        <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
                            <Play size={24} />
                            Começar
                        </StartCountdownButton>
                    )
                }
            </form>
        </HomeContainer>
    )
}