import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    "HomeButton ."
    "SearchFilter SearchField";
  align-items: end;
  row-gap: 1.5rem;
  column-gap: 2rem;
  margin: 4.5rem 0;
  border-bottom: 1px solid #24293f;
  padding-bottom: 2.19rem;

  @media (max-width: 56.25rem) {
    grid-template-columns: 1fr auto;

    grid-template-areas:
      "SearchFilter HomeButton"
      "SearchField SearchField";
  }

  @media (max-width: 42.5rem) {
    grid-template-columns: 1fr;

    grid-template-areas:
      "HomeButton HomeButton"
      "SearchFilter SearchFilter"
      "SearchField SearchField";
  }

  @media (max-width: 31.25rem) {
    margin: 3.5rem 0 3rem;
    padding-bottom: 1.5rem;
  }
`;
