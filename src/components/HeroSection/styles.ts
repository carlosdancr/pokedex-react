import styled from "styled-components";
import pokeballBackground from "../../assets/background-pokeball.svg";

export const Container = styled.div`
  background: linear-gradient(180deg, #ee8328 0%, #e14318 100%);
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 25rem;
    height: 25rem;
    background: url(${pokeballBackground}) no-repeat;
    background-size: cover;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &::before {
    left: -12.5rem;
  }

  &::after {
    right: -12.5rem;
  }

  @media (max-width: 31.25rem) {
    &::before,
    &::after {
      display: none;
    }
  }
`;

export const Content = styled.div`
  margin: 4.5rem 0 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 71.88rem) {
    flex-direction: column;
  }

  @media (max-width: 31.25rem) {
    margin: 3.5rem 0 5rem;
  }
`;

export const CharizardData = styled.div`
  max-width: 26.13rem;

  @media (max-width: 71.88rem) {
    max-width: 37.5rem;
    text-align: center;
  }

  @media (max-width: 31.25rem) {
    text-align: left;
  }
`;

export const CharizardNumber = styled.span`
  font-size: 1.5rem;
  line-height: 135%;
  font-weight: 700;
`;

export const CharizardTypes = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 0.5rem 0;

  button {
    cursor: default;
  }

  @media (max-width: 71.88rem) {
    justify-content: center;
  }

  @media (max-width: 31.25rem) {
    justify-content: flex-start;
  }
`;

export const CharizardName = styled.h1`
  font-size: 4rem;
  line-height: 135%;
  font-weight: 700;
  text-transform: uppercase;

  @media (max-width: 31.25rem) {
    font-size: 3rem;
  }
`;

export const CharizardDescription = styled.p`
  font-size: 1rem;
  line-height: 150%;
  font-weight: 400;
  margin-bottom: 1.5rem;
`;

export const MoreDetailsButton = styled.button`
  width: 100%;
  height: 3rem;
  background: #fff;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  line-height: 150%;
  font-weight: 700;
  color: #e14318;

  svg {
    width: 1.5rem;
    height: 1.5rem;

    path {
      fill: currentColor;
    }
  }

  @media (max-width: 71.88rem) {
    width: 13rem;
    margin: 0 auto;
  }

  @media (max-width: 31.25rem) {
    width: 100%;
  }
`;

export const Divider = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 13.25rem;
    margin: 0 auto;
  }

  &::before {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      #ffffff 100%
    );
  }

  &::after {
    background: linear-gradient(
      180deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  svg {
    width: 3.5rem;
    height: 3.5rem;
  }

  @media (max-width: 71.88rem) {
    position: static;
    transform: initial;
    flex-direction: row;
    align-items: center;
    margin: 2rem 0;

    &::before,
    &::after {
      width: 13.25rem;
      height: 1px;
    }

    &::before {
      background: linear-gradient(
        270deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    &::after {
      background: linear-gradient(
        90deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }
`;

export const CharizardImg = styled.div`
  img {
    width: 30.5rem;
    height: auto;
  }
`;
