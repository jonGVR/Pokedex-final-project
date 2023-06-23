import weightIcon from '../../../assets/svg/weight-icon.svg'
import heightIcon from '../../../assets/svg/height-icon.svg'
import { Pokemon } from '../../../core/domain/model/Pokemon'
import { Tag } from './Tag/Tag'
import './Card.css'

interface Props {
  pokemon: Pokemon
}

export const Card = ({ pokemon }: Props) => {
  const mainType = pokemon.types[0]
  const numberToText = (num: number) => '#' + num.toString().padStart(3, '0')

  return (
    <div className="card__container" style={{ background: `var(--pokemon__type--${mainType})` }}>
      <section className="card__header">
        <h1>{pokemon.name}</h1>
        <h2>{pokemon.name}</h2>
        <span>{numberToText(pokemon.index)}</span>
      </section>
      <section className="card__pokemon-img">
        <img src={pokemon.imgUrl} alt="pokemon-img" />
      </section>

      <section className="card__info">
        <section className="card__type">
          {pokemon.types.map(type => {
            return <Tag style={{ background: `var(--pokemon__type--${type})` }} type={type} />
          })}
        </section>
        <section className="card__about" style={{ color: `var(--pokemon__type--${mainType})` }}>
          <h2>About</h2>
        </section>

        <section className="card__size-pokemon">
          <section className="card__measure">
            <div className="card__measure-values">
              <img src={weightIcon} alt="weight-icon" />
              <span>{pokemon.weight} kg</span>
            </div>
            <div className="card__measure-span">
              <span>Weight</span>
            </div>
          </section>

          <span className="vertical-line"></span>

          <section className="card__measure">
            <div className="card__measure-values">
              <img src={heightIcon} alt="height-icon" />
              <span>{pokemon.height} m</span>
            </div>
            <div className="card__measure-span">
              <span>Height</span>
            </div>
          </section>
        </section>
      </section>
    </div>
  )
}
