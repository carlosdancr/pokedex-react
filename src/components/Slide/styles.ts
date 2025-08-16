import styled from "styled-components";

export const SlideContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Slide = styled.div`
  max-width: 23rem;
  overflow: hidden;

  @media (max-width: 31.25rem) {
    max-width: 100%;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      width: 1rem;
    }

    &::-webkit-scrollbar-track {
      background: #060b28;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #2f5aff;
      border-radius: 0.5rem;
      border: 0.25rem solid #060b28;
    }
  }
`;

export const SlideContent = styled.div<{ slidePosition: number }>`
  display: flex;
  gap: 0.5rem;
  transform: translateX(${(props) => `${props.slidePosition}rem`});
  transition: 0.4s;
`;

export const SlideButton = styled.button`
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 2rem;
    height: 2rem;
  }

  &[disabled] {
    opacity: 0.5;
    cursor: default;
  }
`;
