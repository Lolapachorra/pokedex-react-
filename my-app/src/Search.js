import React, { useState } from 'react';

function Search() {
  const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(""); // Estado para armazenar o erro

  const fetchPokemon = async () => {
    try {
      setError(""); // Limpa o erro ao iniciar uma nova busca
      const response = await fetch(
        `https://pokedex.mimo.dev/api/pokemon/${input.toLowerCase()}`
      );

      if (!response.ok) {
        throw new Error("Pokemon not found");
      }

      const data = await response.json();
      setPokemon(data); // Define o Pokémon se a busca foi bem-sucedida
    } catch (err) {
      setPokemon(null); // Limpa qualquer resultado anterior
      setError(err.message); // Define a mensagem de erro
    }
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

      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Exibe a mensagem de erro */}

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
