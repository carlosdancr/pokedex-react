import { Pokemon } from "../types/Pokemon";

export const fetchPokemon = async (pokemon: string) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  let response;
  let data: Pokemon;
  let error;

  try {
    response = await fetch(URL);
    data = await response.json();
    error = false;
  } catch {
    data = null;
    error = true;
  }

  return { response, data, error };
};
