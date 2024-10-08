import React, { useState, useEffect } from 'react';

function Search() {
 const [input, setInput] = useState("");
 const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async () => {
    const response = await fetch(
      `https://pokedex.mimo.dev/api/pokemon/${input.toLowerCase()}`
    );
    const data = await response.json();
    setPokemon(data);
  };

  return (
    <div className="search">
      <h2>Search a Pokemon</h2>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter Pokemon name..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={fetchPokemon}>Search</button>
      </div>
      {pokemon && (
        <div className="pokemon-card">
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </div>
      )}
    </div>
  );
}

export default Search;