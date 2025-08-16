import * as C from "./styles";
import { ReactComponent as LeftArrowIcon } from "../../assets/icon-arrow-left.svg";
import { ReactComponent as RightArrowIcon } from "../../assets/icon-arrow-right.svg";
import { ReactNode, SyntheticEvent, useState } from "react";
import { useMedia } from "../../hooks/useMedia";

type SlideProps = {
  children: ReactNode;
};

export const Slide = ({ children }: SlideProps) => {
  const [slidePosition, setSlidePosition] = useState(0);
  const mobile = useMedia("(max-width: 31.25rem)");

  const slideNavigation = ({ currentTarget }: SyntheticEvent) => {
    const direction = (currentTarget as HTMLButtonElement).value;

    direction === "next"
      ? setSlidePosition(slidePosition <= -87.5 ? -87.5 : slidePosition - 12.5)
      : setSlidePosition(slidePosition === 0 ? 0 : slidePosition + 12.5);
  };

  return (
    <C.SlideContainer>
      {!mobile && (
        <C.SlideButton
          value="prev"
          onClick={slideNavigation}
          disabled={slidePosition === 0 && true}
        >
          <LeftArrowIcon />
        </C.SlideButton>
      )}
      <C.Slide>
        <C.SlideContent slidePosition={slidePosition}>
          {children}
        </C.SlideContent>
      </C.Slide>
      {!mobile && (
        <C.SlideButton
          value="next"
          onClick={slideNavigation}
          disabled={slidePosition === -87.5 && true}
        >
          <RightArrowIcon />
        </C.SlideButton>
      )}
    </C.SlideContainer>
  );
};
