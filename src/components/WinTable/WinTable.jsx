import React from "react";
import WinTableThead from "./WinTableThead/WinTableThead.jsx";
import WinTableRow from "./WinTableRow/WinTableRow.jsx";
import './WinTable.css';

const DrawTable = props => {
  const combinationList = {
    royalFlush: 10,
    streetFlush: 9,
    care: 8,
    fullHouse: 7,
    flush: 6,
    street: 5,
    set: 4,
    twoPairs: 3,
    pair: 2,
    highCard : 0
  };
  const combination = combinationList[props.combination];
  const arrayCombination = Object.entries(combinationList);

  return (
    <div className="container">
      <table className="table w-50 win-table">
        <WinTableThead select={props.bet}/>
        <tbody>
          {arrayCombination.map((elem,index) => 
            <WinTableRow name={elem[0]} multiplayer={elem[1]} selectCol={props.bet} selectRow={combination} index={index+1} key={index}/>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DrawTable;
