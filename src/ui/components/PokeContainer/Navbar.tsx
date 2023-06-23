import pokeball from '../../../assets/svg/Pokeball.svg'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className="header-container">
      <img className="header-logo" src={pokeball} alt="Pokeball" />
      <h1 className="header-title">My Pokedex</h1>
    </div>
  )
}
