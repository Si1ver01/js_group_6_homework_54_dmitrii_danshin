import React,{Fragment} from 'react'

const DrawBtn = props => {

  const Buttons = (
    <Fragment>
      <button className="btn btn-primary my-2" onClick={props.drawCard}>
        Draw card ({props.quantityDraw})
      </button>
      <button className="btn btn-primary my-2" onClick={props.pickWin}>
        Забрать выиграш
      </button>
    </Fragment>
  )

  return(
    <div>
      {props.drawing ? Buttons : null}
    </div>
  )
}

export default DrawBtn;