import styled from "styled-components";

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