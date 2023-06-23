import './Home.css'
import { Searchbar } from './PokeContainer/Searchbar'
import { Pokedex } from './PokeContainer/Pokedex'
import { Navbar } from './PokeContainer/Navbar'
import { useState } from 'react'

export const Home = () => {
  // const [filteredPokemons, setfilteredPokemons] = useState([])

  // const handleChange = input => {
  //   const result = pokemons.filter(pokemon => pokemon.name.toLoweCase().includes(input.toLocaleLowerCase()))
  //   setfilteredPokemons(result)
  // }
  const [query, setQuery] = useState('')

  return (
    <section className="container">
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        <Searchbar query={query} setQuery={setQuery} />
        <Pokedex />
      </main>

      <footer className="footer-container">
        <h3>Esto es un footer de ejemplo</h3>
      </footer>
    </section>
  )
}
