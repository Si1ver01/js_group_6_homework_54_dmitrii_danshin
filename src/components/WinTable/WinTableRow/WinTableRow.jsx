import React from "react";
import Td from './Td/Td.jsx'
import "./WinTableRow.css";

const WinTableRow = props => {
  const massArg = [props.name,1*props.multiplayer,2*props.multiplayer,3*props.multiplayer,4*props.multiplayer,5*props.multiplayer]
  let classSelect = ``;
  const select = props.selectRow === props.multiplayer;
  if(select){
    classSelect +='select';
  }
  return (
    <tr className={classSelect}>
      {massArg.map((elem,index) => <Td name={elem} key={index} index={index} selectCol={props.selectCol}/>)}
    </tr>
  );
};

export default WinTableRow;
