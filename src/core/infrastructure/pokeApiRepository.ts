import { Pokemon } from "../domain/model/Pokemon";
import { PokemonList } from "../domain/model/PokemonList";
import { pokeApiMapper } from "./pokeApiMapper";
// import { PokemonListDTO } from "./pokeListApiDTO";

const BASE_URL = "https://pokeapi.co/api/v2";

const getPokemon = async (identifier: string): Promise<Pokemon> => {
  const pokemonUrl = `${BASE_URL}/pokemon/${identifier}`;
  const response = await fetch(pokemonUrl);
  const jsonResponse = await response.json();

  return pokeApiMapper.mapData(jsonResponse);
};

const getAllPokemon = async (offset: number, limit: number): Promise<PokemonList> => {
  const allPokemonsUrl =  `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
  const response = await fetch(allPokemonsUrl);
  const jsonResponse = await response.json();
  console.log("jsonResponse", jsonResponse)
  console.log("results",jsonResponse.results)
  console.log("mapperrrrrr", pokeApiMapper.mapList(jsonResponse.results))

  return pokeApiMapper.mapList(jsonResponse)
}

export const pokeApiRespository = {
  getPokemon,
  getAllPokemon
}