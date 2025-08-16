import * as C from "./styles";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";
import { SyntheticEvent, useState } from "react";
import { fetchPokemon } from "../../api/fetchPokemon";
import { Pokemon } from "../../types/Pokemon";

type SearchFieldProps = {
  setPokemonList: (data: Pokemon[]) => void;
  setError: (value: boolean) => void;
  setLoading: (value: boolean) => void;
};

export const SearchField = (props: SearchFieldProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    props.setLoading(true);
    const requestPokemon = await fetchPokemon(inputValue.toLowerCase());

    requestPokemon.response.ok
      ? props.setPokemonList([requestPokemon.data])
      : props.setError(requestPokemon.error);

    props.setLoading(false);
    setInputValue("");
  };

  return (
    <C.Container onSubmit={handleSubmit}>
      <C.InputText
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Pesquisar Pokémon"
        required
      />
      <C.SearchButton>
        <SearchIcon />
      </C.SearchButton>
    </C.Container>
  );
};
