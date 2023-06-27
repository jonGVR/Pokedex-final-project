import './Searchbar.css'
import searchIcon from '../../../assets/svg/Vector.svg'

interface Props {
  query: string
  setQuery: (query: string) => void
}

export const Searchbar = ({ query, setQuery }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <div className="searchbar-container">
      <input className="searchbar" type="search" placeholder="Search a Pokemon" value={query} onChange={handleChange} />
      <img className="searchbar-icon" src={searchIcon} alt="searchbar-icon" />
    </div>
  )
}
