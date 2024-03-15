import React from "react";

const PokemonItem = ({ pokemon, idx }) => {
  return (
    <div className="pokemon-grid__item">
      <span>{pokemon.name}</span>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx + 1}.png`}
        className="pokemon-grid__item-img"
        alt={`imagen de ${pokemon.name}`}
      />
    </div>
  );
};

export default PokemonItem;
