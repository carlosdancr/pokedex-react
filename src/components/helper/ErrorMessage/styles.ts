import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 50vh;
`;

const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: initial;
    transform: initial;
  }
`;

export const ErrorMessage = styled.div`
  max-width: 21rem;
  height: 3.5rem;
  background: linear-gradient(180deg, #151a37 0%, rgba(21, 26, 55, 0) 100%);
  border: 1px solid #24293f;
  border-radius: 0.5rem;
  margin: 0 auto;
  animation: ${zoomIn} 0.8s;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1rem;
    line-height: 150%;
    font-weight: 700;
    color: #ffffff;
  }
`;
