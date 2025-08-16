import styled from "styled-components";

export const HomeButton = styled.button`
  grid-area: HomeButton;
  justify-self: start;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  &[disabled] {
    opacity: 0.5;
    cursor: wait;
  }
`;
