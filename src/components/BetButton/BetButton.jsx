import React from 'react'

const BetButton = props => {
  return(
    <div>
      <button className="btn btn-info" onClick={() => props.betting(1)}>1</button>
      <button className="btn btn-info" onClick={() => props.betting(2)}>2</button>
      <button className="btn btn-info" onClick={() => props.betting(3)}>3</button>
      <button className="btn btn-info" onClick={() => props.betting(4)}>4</button>
      <button className="btn btn-info" onClick={() => props.betting(5)}>5</button>
    </div>
  )
}

export default BetButton;