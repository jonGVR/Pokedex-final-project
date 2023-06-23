import { Pokemon } from '../domain/model/Pokemon'
import { pokeApiRespository } from '../infrastructure/pokeApiRepository'

const getPokemon = async (identifier: string): Promise<Pokemon> => {
  return await pokeApiRespository.getPokemon(identifier)
}

const getPokemons = async (offset: number, limit: number): Promise<Pokemon[]> => {
  return await pokeApiRespository.getPokemons(offset, limit)
}

export const pokemonService = {
  getPokemon,
  getPokemons
}
