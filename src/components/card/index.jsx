import { useState } from "react";
import "./style.css";

function Card({ name, id, type, stats }) {
  const [active, setActive] = useState(false);
  const pokemonImg = () => {
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id
      .toString()
      .padStart(3, "0")}.png`;
  };
  const upper = (palvra) => palvra[0].toUpperCase() + palvra.substring(1);

  const notIndefined = () => {
    if (type[1]) {
      return upper(type[1].type.name);
    }
    return " ";
  };
  const toggle = () => {
    Array.from(document.querySelectorAll(".pokemon")).forEach(function (
      el
    ) {
      el.classList.remove("select");
    });
    Array.from(document.querySelectorAll(".stats")).forEach(function (
      el
    ) {
      el.classList.add("hidden");
    });
    setActive(!active);
  };
  const forward = () => {
    if (type[1]) {
      return " /";
    }
    return " ";
  };

  return (
    <div className={` pokemon ${active ? "select" : " "}`}  onClick={toggle}>
      <div className={`pokemon-card  ${ active ? " " :"hover blur" }`} onClick={toggle}>
        <div className="title">
          <span className="nome">{upper(name)} </span>
          <div className="types">
            <span className={upper(type[0].type.name)}>
              {upper(type[0].type.name)}
            </span>
            {forward()}
            <span className={notIndefined()}> {notIndefined()} </span>
          </div>
        </div>
        <img className="img" src={pokemonImg()} onClick={toggle} />
        </div>
        <div className={`stats ${active ? " " : "hidden"}`}>
          <span> HP: {stats[0].base_stat}</span>
          <span> Attack: {stats[1].base_stat}</span>
          <span> Defense: {stats[2].base_stat}</span>
          <span> Sp.Atk: {stats[3].base_stat}</span>
          <span> Sp.Def: {stats[4].base_stat}</span>
          <span> Speed: {stats[5].base_stat}</span>
        </div>
    </div>
  );
}
export default Card;
