import React from 'react'

const BetButton = props => {
  return(
    <div>
      <button className="btn btn-info" onClick={() => props.betting(1)}>1 <i className="fas fa-dollar-sign mr-1"></i></button>
      <button className="btn btn-info" onClick={() => props.betting(2)}>2 <i className="fas fa-dollar-sign mr-1"></i></button>
      <button className="btn btn-info" onClick={() => props.betting(3)}>3 <i className="fas fa-dollar-sign mr-1"></i></button>
      <button className="btn btn-info" onClick={() => props.betting(4)}>4 <i className="fas fa-dollar-sign mr-1"></i></button>
      <button className="btn btn-info" onClick={() => props.betting(5)}>5 <i className="fas fa-dollar-sign mr-1"></i></button>
    </div>
  )
}

export default BetButton;