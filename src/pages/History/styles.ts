import styled from "styled-components";

export const HistoryContainer = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;

    padding: 3.5rem;

    h1 {
        font-size: 1.5rem;
        color: ${props => props.theme["gray-100"]};
    }
`;

export const HistoryList = styled.div`
    flex: 1;
    margin-top: 2rem;
    overflow: auto;

    table {
        width: 100%;
        border-collapse: collapse;
        min-width: 600px;

        th {
            padding: 1rem;

            font-size: 0.875rem;
            line-height: 1.6;
            text-align: left;
            color: ${props => props.theme["gray-100"]};
            
            background-color: ${props => props.theme["gray-600"]};

            &:first-child {
                border-top-left-radius: 8px;
                padding-left: 1.5rem;
            }

            &:last-child {
                border-top-right-radius: 8px;
                padding-right: 1.5rem;
            }
        }

        td {
            padding: 1rem;

            font-size: 0.875rem;
            line-height: 1.6;

            background-color: ${props => props.theme["gray-700"]};
            border-top: 4px solid ${props => props.theme["gray-800"]};

            &:first-child {
                width: 50%;
                padding-left: 1.5rem;
            }

            &:last-child {
                padding-right: 1.5rem;
            }
        }
    }
`;

const STATUS_COLORS = {
    green: 'green-500',
    yellow: 'yellow-500',
    red: 'red-500',
} as const;

interface StatusProps {
    statusColor: keyof typeof STATUS_COLORS; 
}

export const Status = styled.span<StatusProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    line-height: 0;

    &::before {
        content: '';
        
        width: 0.5rem;
        height: 0.5rem;

        border-radius: 50%;

        background: ${props => props.theme[STATUS_COLORS[props.statusColor]]};
    }
`;