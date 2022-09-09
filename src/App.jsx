import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import "./App.css";
import Card from "./components/card";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [serch, setSerch] = useState(" ");
  useEffect(() => {
    getPokemon();
  }, []);

  function getPokemon() {
    let points = [];
    for (var i = 1; i < 250; i++) {
      points.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
     //?? points.length == 250 ? 
    }
  

    axios
      .all(points.map((points) => axios.get(points)))
      .then((res) => setPokemon(res));
  }

  return (
    <div className="container-all">
      <nav>
        <img
          className="logo"
          src="https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png"
          alt=""
        />
        <div className="serch">
          <input
            type="text"
            className="serch"
            placeholder="Serch... "
            onChange={(ev) => setSerch(ev.target.value)}
          />
          {
            <button type="submit">
              <i>
                <FaSearch />
              </i>
            </button>
          }
        </div>
      </nav>
      <div className="container">
        <div className="content">
          {pokemon
            .filter((pokemon) => {
              if (serch == " ") {
                return pokemon;
              } else if (pokemon.data.name.includes(serch.toLowerCase())) {
                return pokemon;
              }
            })
            .map((pokemon) => (
              <Card
                key={pokemon.data.id}
                name={pokemon.data.name}
                id={pokemon.data.id}
                type={pokemon.data.types}
               stats={pokemon.data.stats}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
