import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 9rem;
`;

export const PokemonList = styled.div`
  margin: 12.75rem auto 2.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 12.5rem;
  column-gap: 2rem;

  @media (max-width: 61.25rem) {
    grid-template-columns: repeat(2, 1fr);

    div:last-child {
      grid-column: 1/ -1;
    }
  }

  @media (max-width: 40.94rem) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 31.25rem) {
    margin-top: 11.94rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: wait;
  }
`;
