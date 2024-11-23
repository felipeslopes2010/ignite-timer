import { useContext } from "react";
import { CyclesContext } from "../..";
import { useFormContext } from "react-hook-form";

import { FormContainer, TaskInput, MinutesAmountInput } from "./styles"

export function NewCycleForm() {
    const { activeCycle } = useContext(CyclesContext);
    const { register } = useFormContext();
    
    return (
        <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput
                id="task"
                list="task-suggestions"
                type="text"
                placeholder="Dê um nome para o seu projeto"
                disabled={!!activeCycle}
                {...register("task")}
            />

            <datalist id="task-suggestions">
                <option value="Projeto 1"></option>
                <option value="Projeto 2"></option>
                <option value="Projeto 3"></option>
                <option value="Projeto 4"></option>
            </datalist>

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput
                id="minutesAmount"
                type="number"
                placeholder="00"
                step={5}
                min={5}
                max={60}
                disabled={!!activeCycle}
                {...register("minutesAmount", { valueAsNumber: true })}
            />

            <span>minutos.</span>
        </FormContainer>
    )
}