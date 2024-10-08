import React, { useState, useEffect } from "react";

function Pokedex() {
  const [pokemons, setPokemons] = useState([
    { name: "Bulbasaur", url: "https://pokedex.mimo.dev/api/pokemon/1/" },
    { name: "Ivysaur", url: "https://pokedex.mimo.dev/api/pokemon/2/" },
    { name: "Venusaur", url: "https://pokedex.mimo.dev/api/pokemon/3/" },
  ]);

  const fetchPokemons = async () => {
    fetch("https://pokedex.mimo.dev/api/pokemon")
      .then((response) => response.json())
      .then((data) => setPokemons(data));
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="pokedex">
      <h2>All Pokemon</h2>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <img
              src={`https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/${
                pokemon.url.split("/").filter(Boolean).pop()
              }.png`}
              alt={pokemon.name}
            />
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pokedex;