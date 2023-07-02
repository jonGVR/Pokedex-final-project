import './Home.css'
import { useEffect, useState } from 'react'
import { Searchbar } from '../ui/components/PokeContainer/Searchbar'
import { ListOfPokemon } from '../ui/components/PokeContainer/ListOfPokemon'
import { Navbar } from '../ui/components/PokeContainer/Navbar'
import { Pokemon } from '../core/domain/model/Pokemon'
import { pokemonService } from '../core/service/pokemonService'
import { LoadingScreen } from '../ui/components/LoadingScreen'

export const Home: React.FC = () => {
  const [query, setQuery] = useState('')
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPokemons = async () => {
    const pokemons = await pokemonService.getPokemons(0, 100)
    setPokemons(pokemons)
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    getPokemons()
  }, [])

  useEffect(() => {
    if (query.length >= 3) {
      const filtered = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(query.toLowerCase()))
      setFilteredPokemons(filtered)
    } else {
      setFilteredPokemons(pokemons)
    }
  }, [query, pokemons])

  if (isLoading || !pokemons) {
    return <LoadingScreen />
  }

  return (
    <section className="home-container">
      <header>
        <Navbar />
      </header>
      <main className="home__main-container">
        <Searchbar query={query} setQuery={setQuery} />
        <ListOfPokemon pokemons={filteredPokemons} />
      </main>

      <footer className="home__footer-container">
        <h3>Footer de ejemplo</h3>
      </footer>
    </section>
  )
}
