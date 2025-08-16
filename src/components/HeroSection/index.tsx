import * as C from "./styles";
import { ReactComponent as BoltIcon } from "../../assets/icon-bolt.svg";
import { ReactComponent as DividerIcon } from "../../assets/divider-fire.svg";
import { Waves } from "../Waves";
import { PokemonType } from "../PokemonType";
import { Header } from "../Layout/Header";
import { fetchPokemon } from "../../api/fetchPokemon";
import imgSrc from "../../assets/img-charizard-min.png";
import { Pokemon } from "../../types/Pokemon";

type HeroSectionProps = {
  setModal: (value: boolean) => void;
  setPokemonData: (data: Pokemon) => void;
};

export const HeroSection = ({ setModal, setPokemonData }: HeroSectionProps) => {
  const handleClick = async () => {
    const { data } = await fetchPokemon("charizard");
    setPokemonData(data);
    setModal(true);
  };

  return (
    <C.Container>
      <Header />
      <div className="main-container">
        <C.Content>
          <C.CharizardData>
            <C.CharizardNumber>#006</C.CharizardNumber>
            <C.CharizardTypes>
              <PokemonType type={"fire"} tabIndex={false} />
              <PokemonType type={"flying"} tabIndex={false} />
            </C.CharizardTypes>
            <C.CharizardName>Charizard</C.CharizardName>
            <C.CharizardDescription>
              Charizard se assemelha a um grande tradicional dragão europeu.
              Apesar da semelhança, Charizard é explicitamente um Pokémon dos
              tipos Fogo e Voador, e não um tipo Dragão, exceto em sua forma
              "Mega Charizard X"; No entanto, ele pode aprender ataques do tipo
              Dragão.
            </C.CharizardDescription>
            <C.MoreDetailsButton onClick={handleClick}>
              <BoltIcon />
              Mais Detalhes
            </C.MoreDetailsButton>
          </C.CharizardData>

          <C.Divider>
            <DividerIcon />
          </C.Divider>

          <C.CharizardImg>
            <img
              src={imgSrc}
              width="488"
              height="528"
              alt="Imagem do Charizard"
            />
          </C.CharizardImg>
        </C.Content>
      </div>

      <Waves />
    </C.Container>
  );
};
