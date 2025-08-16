import * as C from "./styles";
import { ReactComponent as PokemonLogo } from "/src/assets/logo-pokemon.svg";
import { SocialMedia } from "../../SocialMedia";

export const Header = () => {
  return (
    <div className="main-container">
      <C.Container>
        <PokemonLogo />
        <SocialMedia />
      </C.Container>
    </div>
  );
};
