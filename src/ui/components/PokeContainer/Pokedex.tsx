import { useState, useEffect } from 'react'
import { Pokemon } from '../../../core/domain/model/Pokemon'
import { pokemonService } from '../../../core/service/pokemonService'
import { Card } from './Card'
import './Pokedex.css'
import { LoadingScreen } from '../LoadingScreen'

export const Pokedex = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const getPokemons = async () => {
    const pokemons = await pokemonService.getPokemons(30, 20)
    setPokemons(pokemons)
  }

  useEffect(() => {
    setIsLoading(true)
    getPokemons()
    setIsLoading(false)
  }, [])

  if (isLoading || !pokemons) {
    return <LoadingScreen />
  }

  // const filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(query.toLocaleLowerCase()))

  return (
    <div className="pokedex-container">
      {pokemons?.map(pokemon => {
        return <Card key={pokemon.index} pokemon={pokemon} />
      })}
    </div>
  )
}
