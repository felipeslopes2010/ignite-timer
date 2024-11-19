import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 2.5rem;
        height: 2.5rem;
    }

    nav {
        display: flex;
        gap: 0.5rem;

        a {
            width: 3rem;
            height: 3rem;

            display: flex;
            align-items: center;
            justify-content: center;

            color: ${props => props.theme["gray-100"]};

            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;

            &:hover {
                border-bottom: 3px solid ${props => props.theme["green-300"]};
            }

            &.active {
                color: ${props => props.theme["green-500"]};
            }
        }
    }


`;