import { Pokemon } from "../domain/model/Pokemon";
import { PokemonList } from "../domain/model/PokemonList";
import { PokemonDTO } from "./pokeApiDTO";
import { Result } from "./pokeListApiDTO";

const mapData = (pokemon: PokemonDTO): Pokemon => {
  return {
    name: pokemon.name,
    index: pokemon.id,
    imgUrl: pokemon.sprites.other["official-artwork"].front_default,
    types: pokemon.types.map(({type}) => type.name),
    weight: pokemon.weight,
    height: pokemon.height,
    description: pokemon.species.name,
  };
};

const mapList = (pokemonList: Result): PokemonList => {
  return {
    name: pokemonList.name,
    url: pokemonList.url
  }
}

export const pokeApiMapper = {
  mapData,
  mapList
};
