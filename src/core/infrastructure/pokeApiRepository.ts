import { Pokemon } from '../domain/model/Pokemon'
import { PokemonDTO, PokemonListDTO } from './pokeApiDTO'
import { pokeApiMapper } from './pokeApiMapper'

const BASE_URL = 'https://pokeapi.co/api/v2'

const getPokemonWithDetails = async (identifier: string): Promise<Pokemon> => {
  const pokemonUrl = `${BASE_URL}/pokemon/${identifier}`
  const response = await fetch(pokemonUrl)
  const pokemonDTO: PokemonDTO = await response.json()

  return pokeApiMapper.mapData(pokemonDTO)
}

// esto es necesario porque la pokeapi es una mierda

const getPokemonsMetadata = async (offset: number, limit: number): Promise<PokemonListDTO[]> => {
  const allPokemonsUrl = `${BASE_URL}/pokemon/?offset=${offset}&limit=${limit}`
  const response = await fetch(allPokemonsUrl)
  const { results } = await response.json()
  console.log(results)

  return results
}

const getPokemonsWithDetails = async (offset: number, limit: number): Promise<Pokemon[]> => {
  const pokemonsMetadata = await getPokemonsMetadata(offset, limit)
  const detailsRequests = pokemonsMetadata.map((pokemon: PokemonListDTO) => getPokemonWithDetails(pokemon.name))
  const pokemonsWithDetails = await Promise.all(detailsRequests)
  console.log('xd', detailsRequests)
  console.log('details', pokemonsWithDetails)
  return pokemonsWithDetails
}

export const pokeApiRespository = {
  getPokemon: getPokemonWithDetails,
  getPokemons: getPokemonsWithDetails
}
