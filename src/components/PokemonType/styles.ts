import styled from "styled-components";

export const Type = styled.button<{ color: string }>`
  background: ${(props) => props.color};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  flex-shrink: 0;

  font-family: "Montserrat";
  font-size: 1rem;
  line-height: 150%;
  font-weight: 400;
  text-transform: capitalize;
  color: #fff;

  img {
    width: 1rem;
    height: 1rem;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 1rem;
  line-height: 150%;
  font-weight: 400;
`;
