import { SocialMedia } from "../../SocialMedia";
import * as C from "./styles";

export const Footer = () => {
  return (
    <div className="main-container">
      <C.Container>
        <C.Copy>
          <span>Direitos de imagem para Nintendo & The Pokémon Company</span>
          <span>Dados pegos da API - pokeapi.co</span>
        </C.Copy>
        <SocialMedia />
      </C.Container>
    </div>
  );
};
