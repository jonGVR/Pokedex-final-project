import { Pokemon } from "../domain/model/Pokemon";
import { PokemonDTO } from "./pokeApiDTO";

const mapData = (pokemon: PokemonDTO): Pokemon => {
  return {
    name: pokemon.name,
    index: pokemon.id,
    imgUrl: pokemon.sprites.front_default,
    types: {
      firstType: pokemon.types[0].type.name,
      secondType: pokemon.types[1]?.type.name,
    },
    weight: pokemon.weight,
    height: pokemon.height,
    description: pokemon.species.name,
  };
};
export const pokeApiMapper = {
  mapData,
};
