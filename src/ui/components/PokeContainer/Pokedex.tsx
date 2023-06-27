import { Pokemon } from '../../../core/domain/model/Pokemon'
import { Card } from './Card'
import './Pokedex.css'

interface Props {
  pokemons: Pokemon[]
}

export const Pokedex = ({ pokemons }: Props) => {
  return (
    <div className="pokedex-container">
      {pokemons.length > 0 ? (
        pokemons.map(pokemon => {
          return <Card key={pokemon.index} pokemon={pokemon} />
        })
      ) : (
        <p className="">No se han encontrado pokemon con ese nombre</p>
      )}
    </div>
  )
}
