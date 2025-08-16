import UsePagination from "../Pagination";
import { PokemonCard } from "../PokemonCard";
import * as C from "./styles";
import { ReactComponent as AddIcon } from "../../assets/icon-add.svg";
import { ReactComponent as UpArrowIcon } from "../../assets/icon-arrow-up.svg";
import { ErrorMessage } from "../helper/ErrorMessage";
import { Loading } from "../helper/Loading";
import { Pokemon } from "../../types/Pokemon";

type PokedexProps = {
  setModal: (value: boolean) => void;
  setPokemonData: (data: Pokemon) => void;
  pokemonList: Pokemon[];
  setPokemonList: (data: Pokemon[]) => void;
  pokemonAmount: number;
  setPokemonAmount: (value: number) => void;
  error: boolean;
  loading: boolean;
  setLoading: (value: boolean) => void;
  page: number;
  setPage: (value: number) => void;
  showPagination: boolean;
  setShowPagination: (value: boolean) => void;
  disabledButton: boolean;
  searchBarRef: React.MutableRefObject<HTMLDivElement>;
};

export const Pokedex = (props: PokedexProps) => {
  if (props.error) return <ErrorMessage />;
  else
    return (
      <C.Wrapper>
        <div className="main-container">
          {props.loading ? (
            <Loading />
          ) : (
            <C.PokemonList>
              {props.pokemonList.map((pokemon) => (
                <PokemonCard
                  key={pokemon.id}
                  pokemon={pokemon}
                  setModal={props.setModal}
                  setPokemonData={props.setPokemonData}
                />
              ))}
            </C.PokemonList>
          )}
          {props.pokemonList.length > 1 &&
            props.loading === false &&
            props.showPagination === true && (
              <UsePagination
                setPokemonList={props.setPokemonList}
                setLoading={props.setLoading}
                searchBarRef={props.searchBarRef}
                page={props.page}
                setPage={props.setPage}
              />
            )}
          {props.pokemonList.length > 1 &&
            props.loading === false &&
            props.showPagination === false && (
              <C.ButtonContainer>
                {props.pokemonAmount < 54 && (
                  <button
                    className="button"
                    onClick={() =>
                      props.setPokemonAmount(props.pokemonAmount + 9)
                    }
                    disabled={props.disabledButton ? true : false}
                  >
                    <AddIcon />
                    Mostrar mais pokémons
                  </button>
                )}

                <button
                  className="button"
                  onClick={() => {
                    window.scrollTo({
                      top: props.searchBarRef.current.offsetTop - 56,
                    });
                  }}
                >
                  <UpArrowIcon />
                </button>
              </C.ButtonContainer>
            )}
        </div>
      </C.Wrapper>
    );
};
