import * as C from "./styles";
import { SearchFilter } from "../SearchFilter";
import { SearchField } from "../SearchField";
import { Pokemon } from "../../types/Pokemon";
import { HomeButton } from "../HomeButton";

type SearchBarProps = {
  setPokemonList: (data: Pokemon[]) => void;
  pokemonAmount: number;
  setPokemonAmount: (value: number) => void;
  setError: (value: boolean) => void;
  setLoading: (value: boolean) => void;
  setPage: (value: number) => void;
  setShowPagination: (value: boolean) => void;
  disabledButton: boolean;
  setDisabledButton: (value: boolean) => void;
  searchBarRef: React.MutableRefObject<HTMLDivElement>;
};

export const SearchBar = (props: SearchBarProps) => {
  return (
    <div className="main-container" ref={props.searchBarRef}>
      <C.Container>
        <HomeButton
          setPokemonList={props.setPokemonList}
          setLoading={props.setLoading}
          setPage={props.setPage}
          setShowPagination={props.setShowPagination}
          disabledButton={props.disabledButton}
          setDisabledButton={props.setDisabledButton}
        />
        <SearchFilter
          setPokemonList={props.setPokemonList}
          pokemonAmount={props.pokemonAmount}
          setPokemonAmount={props.setPokemonAmount}
          setLoading={props.setLoading}
          setShowPagination={props.setShowPagination}
          setDisabledButton={props.setDisabledButton}
        />
        <SearchField
          setPokemonList={props.setPokemonList}
          setError={props.setError}
          setLoading={props.setLoading}
        />
      </C.Container>
    </div>
  );
};
