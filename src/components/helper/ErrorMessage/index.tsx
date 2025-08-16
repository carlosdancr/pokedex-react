import * as C from "./styles";
import imgSrc from "../../../assets/img-pikachu-sad-min.png";

export const ErrorMessage = () => {
  return (
    <C.Container>
      <C.ErrorMessage>
        <img src={imgSrc} width="32" height="32" alt="Pikachu" />
        <span>Ops, pokémon não encontrado!</span>
      </C.ErrorMessage>
    </C.Container>
  );
};
