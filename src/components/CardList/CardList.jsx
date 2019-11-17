import React from "react";
import CardItem from "./CardItem/CardItem.jsx";
import "./CardList.css";
import DrawCombination from "./Combination/Combination.jsx";

const CardList = props => {
  // console.log(props);
  return (
    <div>
      <div>
        <DrawCombination cards={props.cards} combination={props.combination} />
      </div>
      <div className="playingCards faceImages">
      {props.cards.map((cardItem, index) => (
        <CardItem
          rank={cardItem.ranks}
          suit={cardItem.suit}
          key={index}
          selectCard={() => props.selectCard(index)}
          selected={cardItem.selected}
        />
      ))}
    </div>
    </div>

  );
};

export default CardList;
