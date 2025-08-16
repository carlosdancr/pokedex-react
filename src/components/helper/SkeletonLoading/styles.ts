import styled, { keyframes } from "styled-components";

export const Container = styled.div<{ skeleton: boolean }>`
  display: grid;

  img {
    min-width: 16rem;
    min-height: 16rem;
    grid-area: 1/1;
    opacity: ${({ skeleton }) => (skeleton ? "0" : "1")};
    transition: 0.2s;
  }
`;

const skeletonLoading = keyframes`
  from {
    background-position: 0;
  }
  to {
    background-position: -200%;
  }
`;

export const Skeleton = styled.div`
  grid-area: 1/1;
  height: 100%;
  background-image: linear-gradient(
    90deg,
    #24293f 0px,
    #060b28 50%,
    #24293f 100%
  );
  background-color: #24293f;
  background-size: 200%;
  border-radius: 50%;
  animation: ${skeletonLoading} 1.5s infinite linear;
`;
