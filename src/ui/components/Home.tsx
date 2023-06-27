import './Home.css'
import { Searchbar } from './PokeContainer/Searchbar'
import { Pokedex } from './PokeContainer/Pokedex'
import { Navbar } from './PokeContainer/Navbar'
import { useEffect, useState } from 'react'
import { Pokemon } from '../../core/domain/model/Pokemon'
import { pokemonService } from '../../core/service/pokemonService'
import { LoadingScreen } from './LoadingScreen'

export const Home = () => {
  const [query, setQuery] = useState('')
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const getPokemons = async () => {
    const pokemons = await pokemonService.getPokemons(300, 24)
    setPokemons(pokemons)
  }

  useEffect(() => {
    setIsLoading(true)
    getPokemons()
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (query.length >= 3) {
      const filtered = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(query.toLowerCase()))
      setIsLoading(true)
      setFilteredPokemons(filtered)
      setIsLoading(false)
    } else {
      setFilteredPokemons(pokemons)
    }
  }, [query, pokemons])

  if (filteredPokemons.length === 0) {
    console.log('No hay pokemons con ese nombre')
  }

  if (isLoading || !pokemons) {
    return <LoadingScreen />
  }

  return (
    <section className="container">
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        <Searchbar query={query} setQuery={setQuery} />
        <Pokedex pokemons={filteredPokemons} />
      </main>

      <footer className="footer-container">
        <h3>Footer de ejemplo</h3>
      </footer>
    </section>
  )
}

/* <Searchbar query={query} setQuery={handleFilter} />
        {filteredPokemons.length === 0 ? (
          <p>No se encontraron Pokémon con ese nombre.</p>
        ) : (
          <Pokedex pokemons={filteredPokemons} />
        )} */
