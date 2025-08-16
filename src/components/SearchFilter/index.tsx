import * as C from "./styles";
import { SyntheticEvent, useEffect, useState } from "react";
import { fetchPokemonByType } from "../../api/fetchPokemonByType";
import { Slide } from "../Slide";
import { PokemonType } from "../PokemonType";
import { pokemonTypes } from "../../pokemonTypes";
import { Pokemon } from "../../types/Pokemon";

type SearchFilterProps = {
  setPokemonList: (data: Pokemon[]) => void;
  pokemonAmount: number;
  setPokemonAmount: (value: number) => void;
  setLoading: (value: boolean) => void;
  setShowPagination: (value: boolean) => void;
  setDisabledButton: (value: boolean) => void;
};

export const SearchFilter = (props: SearchFilterProps) => {
  const [selectedType, setSelectedType] = useState("");

  const handleClick = async (e: SyntheticEvent) => {
    const typeName = (e.currentTarget as HTMLButtonElement).value;
    setSelectedType(typeName);
    props.setPokemonAmount(9);
    props.setLoading(true);
    props.setPokemonList(await fetchPokemonByType(typeName));
    props.setLoading(false);
    props.setShowPagination(false);
  };

  useEffect(() => {
    if (selectedType) {
      (async () => {
        props.setDisabledButton(true);
        props.setPokemonList(
          await fetchPokemonByType(selectedType, props.pokemonAmount)
        );
        props.setDisabledButton(false);
      })();
    }
  }, [props.pokemonAmount]);

  return (
    <C.Container>
      <C.Title>Pesquisar por tipos</C.Title>
      <Slide>
        {pokemonTypes.map(({ name }) => (
          <PokemonType
            key={name}
            type={name}
            tabIndex={true}
            handleClick={handleClick}
          />
        ))}
      </Slide>
    </C.Container>
  );
};
