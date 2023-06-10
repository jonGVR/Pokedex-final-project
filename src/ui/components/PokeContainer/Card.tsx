import "../PokeContainer/Card.css";
import "../../../ui/_styles/index";
import weightIcon from "../../../assets/svg/weight-icon.svg";
import heightIcon from "../../../assets/svg/height-icon.svg";
import { Pokemon } from "../../../core/domain/model/Pokemon";
import { useState, useEffect } from "react";
import { pokemonService } from "../../../core/service/pokemonService";
import { Tag } from "./Tag/Tag";
import { PokemonList } from "../../../core/domain/model/PokemonList";

export const Card = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [allPokemon, setAllPokemon] = useState<PokemonList>();

  const getPokemon = async () => {
    const pokemon = await pokemonService.getPokemon("45");
    setPokemon(pokemon);
  };
  
  const getAllPokemon = async () => {
    const allPokemon = await pokemonService.getAllPokemon(20, 20)
    console.log("allPokemon", allPokemon)
    setAllPokemon(allPokemon);
  }

  useEffect(() => {
    getPokemon();
    getAllPokemon();
  }, []);

  console.log("hola", allPokemon)

  const mainType = pokemon?.types[0]

  return (
    <div className="card__container" style={{background: `var(--pokemon__type--${mainType})`}}>
      <section className="card__header">
        <h1>{pokemon?.name}</h1>
        <span>{pokemon?.index}</span>
      </section>
      <section className="card__pokemon-img">
        <img src={pokemon?.imgUrl} alt="charmander" />
      </section>

      <section className="card__info">
        <section className="card__type">
          {pokemon?.types.map((type) => {
           return <Tag style={{background: `var(--pokemon__type--${type})`}} type={type}/> })}
        </section>
        <section className="card__about" style={{color: `var(--pokemon__type--${mainType})`}}>
          <h2>About</h2>
        </section>

        <section className="card__size-pokemon">
          <section className="card__measure">
            <div className="card__measure-values">
              <img src={weightIcon} alt="weight-icon" />
              <span>{pokemon?.weight} kg</span>
            </div>
            <div className="card__measure-span">
              <span>Weight</span>
            </div>
          </section>

          <span className="vertical-line"></span>

          <section className="card__measure">
            <div className="card__measure-values">
              <img src={heightIcon} alt="height-icon" />
              <span>{pokemon?.height} m</span>
            </div>
            <div className="card__measure-span">
              <span>Height</span>
            </div>
          </section>
        </section>

        <section className="card__description">
          <p>xd</p>
        </section>
      </section>
      {/* <div>
        {allPokemon.map((pokemon) => {
          return ()
        })}
      </div> */}
    </div>
    
  );
};
