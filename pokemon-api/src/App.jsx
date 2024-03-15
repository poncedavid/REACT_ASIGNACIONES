import { useState } from "react";
import axios from "axios";
import PokemonGrid from "./components/PokemonGrid";

import "./styles/App.css";

const App = () => {
  const [pokemons, setPokemons] = useState([]); // definimos el estado de pokemons
  const [isDisabled, setIsDisabled] = useState(false); // defimos el estado para el boton

  const handleAllPokemons = async () => {
    try {
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=807"
      );
      setPokemons(data.results);
      setIsDisabled(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app-container">
      <h1>Pokemones API</h1>
      <p>
        Al presionar el siguiene botón obtendrá 807 pokemones con su respectiva
        imagen
      </p>
      <div className="action-content">
        <button 
        className="btn"
        onClick={handleAllPokemons}
        disabled = {isDisabled}
        >Fetch Pokemon
        </button>
        <span> Cantidad de pokemons: {pokemons.length}</span>
      </div>

      <PokemonGrid pokemons={pokemons}/>
    </div>
  );
};

export default App;
