import React from "react";

const CardItem = props => {
  const suits = {
    k: "♣",
    d: "♦",
    h: "♥",
    s: "♠"
  };
  const suitsName = {
    k: "clubs",
    d: "diams",
    h: "hearts",
    s: "spades"
  };
  let classCard = `card rank-${props.rank.toLowerCase()} ${suitsName[props.suit]}`;
  if (props.selected){
    classCard += ' mb-5'
  }

  return (
    <span className={classCard} onClick={props.selectCard}>
      <span className="rank">{props.rank}</span>
      <span className="suit">{suits[props.suit]}</span>
    </span>
  );
};

export default CardItem;
