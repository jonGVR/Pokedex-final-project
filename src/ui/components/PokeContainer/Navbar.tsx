import { useNavigate } from 'react-router-dom'
import pokeball from '../../../assets/svg/Pokeball.svg'
import './Navbar.css'

export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="header-container">
      <button onClick={() => navigate(0)} className="header-btn">
        <img className="header-logo" src={pokeball} alt="Pokeball" />
        <h1 className="header-title">My Pokedex</h1>
      </button>
    </div>
  )
}
