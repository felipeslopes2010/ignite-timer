import styled from "styled-components";

export const HomeContainer = styled.main`
    flex: 1;
  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }
`;

export const FormContainer = styled.div`
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    font-size: 1.125rem;
    font-weight: 700;
    flex-wrap: wrap;
    color: ${props => props.theme["gray-100"]};
    
    span {
        color: ${props => props.theme["gray-100"]};
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.6;
    }

`;

const BaseInput = styled.input`
    height: 2.5rem;
    padding: 0 0.5rem;

    color: ${props => props.theme["gray-100"]};
    font-size: 1.125rem;
    font-weight: 700;

    border: none;
    border-bottom: 2px solid ${props => props.theme["gray-500"]};

    background: transparent;

    &::placeholder {
        color: ${props => props.theme["gray-500"]};
    }

    &:focus {
        box-shadow: none;
        border-color: ${props => props.theme["green-500"]};
    }
`;

export const TaskInput = styled(BaseInput)`
    text-align: center;
    flex: 1;

    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
`;

export const MinutesAmountInput = styled(BaseInput)`
    text-align: center;
    width: 4rem;
`;

export const CountdownContainer = styled.div`
    display: flex;
    gap: 1rem;

    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
    line-height: 8rem;

    span {
        padding: 2rem 1rem;
        border-radius: 8px;
        background: ${props => props.theme["gray-700"]};
    }
`;

export const Separator = styled.div`
    display: flex;
    justify-content: center;

    width: 4rem;
    padding: 2rem 0;
    
    font-family: 'Roboto Mono', sans-serif;
    color: ${props => props.theme["green-500"]};

    overflow: hidden;
`;

export const BaseCountdownButton = styled.button`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem;
    gap: 0.5rem;

    border: none;
    border-radius: 8px;

    font-weight: 700;
    color: ${props => props.theme["gray-100"]};

    cursor: pointer;

    &:disabled{
        opacity: 0.7;
        cursor: not-allowed;
    }
`;

export const StartCountdownButton = styled(BaseCountdownButton)`
    background: ${props => props.theme["green-500"]};

    &:not(:disabled):hover{
        background: ${props => props.theme["green-700"]};
    }
`;

export const StopCountdownButton = styled(BaseCountdownButton)`
    background: ${props => props.theme["red-500"]};

    &:not(:disabled):hover{
        background: ${props => props.theme["red-700"]};
    }
`;