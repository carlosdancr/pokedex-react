import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-top: 1.5rem;

  & > svg {
    width: 9.56rem;
    height: 3.5rem;
  }

  @media (max-width: 31.25rem) {
    & > svg {
      width: 8.19rem;
      height: 3rem;
    }
  }
`;
