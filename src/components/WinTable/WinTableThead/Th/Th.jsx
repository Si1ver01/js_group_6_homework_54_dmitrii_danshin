import React from 'react'

const Th = props =>{
  let classSelect = ``;
  const select = props.select === props.index;
  select ? classSelect += 'select' : classSelect = ``;

  return(
    <th className={classSelect}>
      {props.name}
    </th>
  )
}

export default Th;