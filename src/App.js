import React, { useState } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";


function App() {
  const [pokemon, setPokemon] = useState(['bulba', 'charmander']);

  axios.get("https://pokeapi.co/api/v2/pokemon")

  return (
    <PokemonList pokemon={pokemon} />
  );
}

export default App;
