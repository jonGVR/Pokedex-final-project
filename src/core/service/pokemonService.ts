import { Pokemon } from "../domain/model/Pokemon";
import { PokemonList } from "../domain/model/PokemonList";
import { pokeApiRespository } from "../infrastructure/pokeApiRepository";

const getPokemon = async (identifier: string): Promise<Pokemon> => {
  return await pokeApiRespository.getPokemon(identifier);
};

const getAllPokemon = async (offset: number, limit: number): Promise<PokemonList> => {
  return await pokeApiRespository.getAllPokemon(offset, limit);
}

export const pokemonService = {
  getPokemon,
  getAllPokemon
};
