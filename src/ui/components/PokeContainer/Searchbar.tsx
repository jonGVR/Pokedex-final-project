import './Searchbar.css'
import searchIcon from '../../../assets/svg/Vector.svg'

interface Props {
  query: string
  setQuery: (query: string) => void
}

export const Searchbar = ({ query, setQuery }: Props) => {
  // const isEnterKeyPressed = e => {
  //   return e.keyCode === 13
  // }

  // const handleChange = e => {
  //   if (isEnterKeyPressed) {
  //     onSearch(e.target.value)
  //   }
  // }

  return (
    <div className="searchbar-container">
      <input className="searchbar" type="search" placeholder="Search a Pokemon" value={query} />
      <img className="searchbar-icon" src={searchIcon} alt="searchbar-icon" />
    </div>
  )
}
