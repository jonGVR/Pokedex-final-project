import './Details.css'
import { Navbar } from '../ui/components/PokeContainer/Navbar'
import { Pokemon } from '../core/domain/model/Pokemon'
import { useEffect, useState } from 'react'
import { pokemonService } from '../core/service/pokemonService'
import { LoadingScreen } from '../ui/components/LoadingScreen'
import { PokemonDetails } from '../ui/components/PokeContainer/PokemonDetails'

export const Details: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon>()
  const [isLoading, setIsLoading] = useState(true)

  const getPokemon = async () => {
    const pokemon = await pokemonService.getPokemon('pikachu')
    setPokemon(pokemon)
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    getPokemon()
  }, [])

  if (isLoading || !pokemon) {
    return <LoadingScreen />
  }
  return (
    <section className="details-container">
      <header>
        <Navbar />
      </header>
      <main className="details__main-container">
        <PokemonDetails pokemon={pokemon} />
      </main>
    </section>
  )
}
