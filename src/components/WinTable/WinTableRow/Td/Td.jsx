import React from 'react'

const Td = props =>{
  let classSelect = ``;
  const select = props.selectCol === props.index;
  if(props.index === 0){
    classSelect +='font-weight-bold';
  }
  if (select){
    classSelect += 'select'
  }
 

  return(
    <td className={classSelect}>
      {props.name}
    </td>
  )
}

export default Td;