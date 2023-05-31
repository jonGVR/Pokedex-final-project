import { Pokemon } from "../domain/model/Pokemon";
import { pokeApiMapper } from "./pokeApiMapper";

const BASE_URL = "https://pokeapi.co/api/v2";

const getPokemon = async (identifier: string): Promise<Pokemon> => {
  const pokemonUrl = `${BASE_URL}/pokemon/${identifier}`;
  const response = await fetch(pokemonUrl);
  const jsonResponse = await response.json();

  return pokeApiMapper.mapData(jsonResponse);
};

export const pokeApiRespository = {
  getPokemon,
};
