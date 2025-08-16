import styled, { keyframes } from "styled-components";

const fadeDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -32px, 0);
  }
  to {
    opacity: initial;
    transform: initial;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(6, 11, 40, 0.15);
  border: 1px solid #24293f;
  border-bottom: none;
  border-radius: 1.5rem;
  padding-top: 7rem;
  position: relative;
  animation: ${fadeDown} 0.8s;
`;

export const CardOverlay = styled.div<{ color: string }>`
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);

  &::after {
    content: "";
    display: block;
    width: 12.5rem;
    height: 12.5rem;
    background: ${(props) => props.color};
    filter: blur(128px);
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: 0.8s;
  }
`;

export const PokemonImg = styled.div`
  position: absolute;
  top: -10.5rem;
`;

export const PokemonNumber = styled.span`
  font-size: 1.25rem;
  line-height: 135%;
  font-weight: 700;
`;

export const PokemonType = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    cursor: default;
  }
`;

export const PokemonName = styled.span`
  font-size: 2rem;
  line-height: 135%;
  font-weight: 700;
  text-transform: capitalize;
  text-align: center;
  display: block;
  margin: 0.25rem 0.5rem 0.75rem;
`;

export const PokemonFeatures = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 1.5rem 0 2rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const PokemonWeight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      font-weight: 700;
    }
  }

  span {
    font-size: 1rem;
    line-height: 150%;
    font-weight: 400;
  }
`;

export const PokemonHeight = styled(PokemonWeight)``;

export const MoreDetailsButton = styled.button<{ color: string }>`
  width: calc(100% + 2px);
  height: 3rem;
  background: ${(props) => props.color};
  border-radius: 0 0 1.5rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  line-height: 150%;
  font-weight: 700;
  color: #ffffff;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
