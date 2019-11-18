import React from "react";
import Th from './Th/Th.jsx'
import './WinTableThead.css'

const WinTableThead = props => {
 
  const massArgs = ['Coins',1,2,3,4,5]

  return (
    <thead className="black white-text">
      <tr>
        {massArgs.map((elem,index)=>
          <Th select={props.select} name={elem} key={index} index={index}/>
        )}
      </tr>
    </thead>
  );
};

export default WinTableThead;
