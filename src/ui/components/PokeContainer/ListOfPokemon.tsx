import { Pokemon } from '../../../core/domain/model/Pokemon'
import { Card } from './Card'
import './ListOfPokemon.css'

interface Props {
  pokemons: Pokemon[]
}

const Pokedex = ({ pokemons }: Props) => {
  return (
    <div className="pokedex-container">
      {pokemons.map(pokemon => {
        return <Card key={pokemon.index} pokemon={pokemon} />
      })}
    </div>
  )
}

const NoResults = () => {
  return (
    <div className="noresult-container">
      <p className="noresult-text">No se encontraron pokemon con ese nombre</p>
    </div>
  )
}

export const ListOfPokemon: React.FC<Props> = ({ pokemons }) => {
  if (pokemons.length === 0) return <NoResults />

  return <Pokedex pokemons={pokemons} />
}
