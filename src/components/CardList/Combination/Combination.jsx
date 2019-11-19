import React from "react";

const DrawCombination = props => {
  const combinationList = {
    royalFlush: 1,
    streetFlush: 2,
    care: 3,
    fullHouse: 4,
    flush: 5,
    street: 6,
    set: 7,
    twoPairs: 8,
    pair: 9,
    highCard: 10
  };

  const cards = [...props.cards].sort((a,b) => a.weight - b.weight);
  const combination = combinationList[props.combination];
  let str = "У вас комбинация : ";

  switch (combination) {
    case 1:
      str += ` Роял-флеш от ${cards[0].ranks} до ${cards[4].ranks}`;
      break;
    case 2:
      if (cards[3].weight === 4 && cards[4].weight=== 13){
        cards.splice(0,0,...cards.splice(4,1));
      }
      str += ` Стрит флеш от ${cards[0].ranks} до ${cards[4].ranks}`;
      break;
    case 3:
      str += ` Карэ из ${cards[2].ranks}`;
      break;
    case 4:
      str += ` Фул хаус из ${cards[0].ranks} и ${cards[4].ranks}`;
      break;
    case 5:
      str += ` Флеш из масти ${cards[4].suit}`;
      break;
    case 6:
      str += ` Стрит от ${cards[0].ranks} до ${cards[4].ranks}`;
      break;
    case 7:
      str += ` Сет из ${cards[2].ranks}`;
      break;
    case 8:
      str += ` Две пары из ${cards[1].ranks} и  ${cards[3].ranks}`;
      break;
    case 9:
      let filter = cards.filter((elem, index, currentMass) =>
        1 < currentMass.filter(element => element.ranks === elem.ranks).length
          ? true
          : false
      );
      str += ` Пара из ${filter[0].ranks}`;
      break;
    default:
      str += ` Cтаршая карта ${cards[4].ranks}`;
      break;
  }

  return <p className='text-primary font-weight-bold'>{str}</p>;
};

export default DrawCombination;
