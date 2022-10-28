import React from "react";

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="cardItem">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <div className="cardName">{pokemon.name}</div>
      <div className="cardType">
        <div>タイプ</div>
        {pokemon.types.map((types) => {
          return (
            <div>
              <span className="typeName">{types.type.name}</span>
            </div>
          );
        })}
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <p className="title">高さ：{pokemon.height}</p>
        </div>
        <div className="cardData">
          <p className="title">重さ：{pokemon.weight}</p>
        </div>
        <div className="cardData">
          <p className="title">アビリティ：{pokemon.abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
