import "./style.css";

function Card({ name, id, type }) {
  const pokemonImg = (t1) => {
    if (t1 <= 9) {
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${t1}.png`;
    } else if (t1 <= 99) {
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${t1}.png`;
    } else if (t1 >= 100) {
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${t1}.png`;
    }
  };
  const upper = (palvra) => palvra[0].toUpperCase() + palvra.substring(1);

  const notIndefined = () => {
    if (type[1]) {
      return upper(type[1].type.name);
    }
    return " ";
  };

  const forward = () => {
    if (type[1]) {
      return " /";
    }
    return " ";
  };

  return (
    <div className="pokemon-card hover blur  ">
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
      <img className="img" src={pokemonImg(id)} />
    </div>
  );
}
export default Card;
