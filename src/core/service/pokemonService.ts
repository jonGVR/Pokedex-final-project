import { Pokemon } from "../domain/model/Pokemon";
import { pokeApiRespository } from "../infrastructure/pokeApiRepository";

const getPokemon = async (identifier: string): Promise<Pokemon> => {
  return await pokeApiRespository.getPokemon(identifier);
};

export const pokemonService = {
  getPokemon,
};
