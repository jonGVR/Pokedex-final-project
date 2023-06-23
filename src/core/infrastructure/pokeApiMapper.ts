import { Pokemon } from '../domain/model/Pokemon'
import { PokemonDTO } from './pokeApiDTO'

const mapData = (pokemon: PokemonDTO): Pokemon => {
  return {
    name: pokemon.name,
    index: pokemon.id,
    imgUrl: pokemon.sprites.other['official-artwork'].front_default,
    types: pokemon.types.map(({ type }) => type.name),
    weight: pokemon.weight,
    height: pokemon.height
  }
}

export const pokeApiMapper = {
  mapData
}
