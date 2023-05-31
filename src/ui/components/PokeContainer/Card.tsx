import "../PokeContainer/Card.css";
import "../../../ui/_styles/index";
import weightIcon from "../../../assets/svg/weight-icon.svg";
import heightIcon from "../../../assets/svg/height-icon.svg";
import { Pokemon } from "../../../core/domain/model/Pokemon";
import { useState, useEffect } from "react";
import { pokemonService } from "../../../core/service/pokemonService";

export const Card = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  const getPokemon = async () => {
    const pokemon = await pokemonService.getPokemon("");
    setPokemon(pokemon);
  };

  useEffect(() => {
    getPokemon();
  });

  return (
    <div className="card__container">
      <section className="card__header">
        <h1>{pokemon?.name}</h1>
        <span>{pokemon?.index}</span>
      </section>
      <section className="card__pokemon-img">
        <img src={pokemon?.imgUrl} alt="charmander" />
      </section>

      <section className="card__info">
        <section className="card__type">
          <h2>Fire</h2>
        </section>

        <section className="card__about">
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
    </div>
  );
};
