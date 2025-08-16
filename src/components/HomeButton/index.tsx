import * as C from "./styles";
import { ReactComponent as HomeIcon } from "../../assets/icon-home.svg";
import { fetchPokemonList } from "../../api/fetchPokemonList";
import { Pokemon } from "../../types/Pokemon";

type HomeButtonProps = {
  setPokemonList: (data: Pokemon[]) => void;
  setLoading: (value: boolean) => void;
  setPage: (value: number) => void;
  setShowPagination: (value: boolean) => void;
  disabledButton: boolean;
  setDisabledButton: (value: boolean) => void;
};

export const HomeButton = (props: HomeButtonProps) => {
  const handleClick = async () => {
    props.setLoading(true);
    props.setDisabledButton(true);
    props.setPokemonList(await fetchPokemonList(1));
    props.setLoading(false);
    props.setDisabledButton(false);
    props.setPage(1);
    props.setShowPagination(true);
  };

  return (
    <C.HomeButton
      className="button"
      onClick={handleClick}
      disabled={props.disabledButton ? true : false}
    >
      <HomeIcon />
      Início
    </C.HomeButton>
  );
};
