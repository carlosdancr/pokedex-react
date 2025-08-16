import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: ${() => (window.innerHeight < 650 ? "flex-start" : "center")};

  overflow-y: scroll;

  @media (max-width: 62.5rem) {
    align-items: start;
  }

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
`;

const modal = keyframes`
  to {
    opacity: initial;
    transform: initial; 
  }
`;

export const Modal = styled.div`
  background: rgba(6, 11, 40, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 1.5rem;
  position: relative;
  display: grid;
  grid-template-columns: 21rem 3.5rem 34.75rem;
  align-items: end;
  opacity: 0;
  transform: scale(0.8);
  animation: ${modal} 0.4s forwards;
  margin: ${() => (window.innerHeight < 650 ? "12.87rem 1rem 7rem" : "0")};

  @media (max-width: 62.5rem) {
    width: 100%;
    grid-template-columns: 1fr;
    margin: 14rem 1rem 7rem;
  }
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

  &::after {
    content: "";
    display: block;
    width: 12.5rem;
    height: 12.5rem;
    background: ${(props) => props.color};
    filter: blur(128px);
    position: absolute;
    top: 0;
    left: 4.25rem;
  }

  @media (max-width: 62.5rem) {
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const PokemonData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2.5rem;

  @media (max-width: 62.5rem) {
    padding: 7rem 0 2rem;
  }
`;

export const PokemonImg = styled.div`
  position: absolute;
  top: -9.38rem;
  left: 2.5rem;

  @media (max-width: 62.5rem) {
    top: -10.5rem;
    left: 50%;
    transform: translateX(-50%);
  }
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
  margin-top: 1.5rem;

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

export const Divider = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  svg {
    width: 3.5rem;
    height: 3.5rem;
  }

  &::before,
  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 7.75rem;
    background: rgba(255, 255, 255, 0.25);
    margin: 0 auto;
  }

  @media (max-width: 62.5rem) {
    flex-direction: row;
    align-items: center;

    svg {
      width: 3rem;
      height: 3rem;
    }

    &::before,
    &::after {
      width: 100%;
      height: 1px;
    }

    svg {
      flex-shrink: 0;
    }
  }
`;

export const PokemonStats = styled.div`
  padding: 2.5rem 4.5rem 2.5rem 2.5rem;

  @media (max-width: 62.5rem) {
    padding: 2rem 1.5rem 2.5rem;
  }
`;

export const StatsTitle = styled.span`
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 400;
  display: block;
  margin-bottom: 1rem;
`;

export const StatsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  span {
    font-size: 1rem;
    line-height: 1;
    font-weight: 400;
    display: inline-block;
  }

  span:nth-child(1) {
    min-width: 4.38rem;
  }

  span:nth-child(2) {
    min-width: 1.88rem;
    margin: 0 1.25rem;
    font-weight: 700;
    text-align: center;
  }

  li {
    display: flex;
    align-items: center;
  }

  @media (max-width: 31.25rem) {
    span:nth-child(2) {
      margin: 0 0.75rem;
    }
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 0.5rem;
  border-radius: 0.25rem;
  background: #555;
  overflow: hidden;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
`;

const progressBar = keyframes`
    to {
      transform: initial;
    }
`;

export const ProgressBarFill = styled.div<{ base_stat: number }>`
  width: ${(props) =>
    props.base_stat >= 100 ? "100%" : `${props.base_stat}%`};
  background: ${(props) => (props.base_stat >= 50 ? "#1CD80E" : "#FF364E")};
  box-shadow: 0 0 0.75rem 0.25rem
    ${(props) =>
      props.base_stat >= 50
        ? "rgba(28, 216, 14, 0.25)"
        : "rgba(255, 54, 78, 0.25)"};
  height: 0.5rem;
  border-radius: 0.25rem;
  transform: translate3d(-100%, 0, 0);
  animation: ${progressBar} 2s forwards;
`;

export const CloseButton = styled.button<{ mobile: boolean }>`
  background: none;
  position: absolute;
  top: 1.5rem;
  right: ${(props) => (props.mobile ? "1rem " : "1.5rem")};

  svg {
    width: 3rem;
    height: 3rem;
  }
`;
