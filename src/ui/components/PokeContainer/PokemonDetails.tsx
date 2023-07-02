import { Pokemon } from '../../../core/domain/model/Pokemon'

interface Props {
  pokemon: Pokemon
}

export const PokemonDetails: React.FC<Props> = ({ pokemon }) => {
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.imgUrl} alt="" />
    </div>
  )
}
