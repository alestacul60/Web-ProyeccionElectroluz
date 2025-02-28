import React from "react"
import ReactDOM from "react-dom"
import { Modal, Button } from "react-bootstrap"

const Portal2 = () => {
  return show
    ? ReactDOM.createPortal(
        <div className="modelito">
          <p>{children}</p>
          <button onClick={close}>cerrar</button>
        </div>,

        document.getElementById("my-portal")
      )
    : null
}
export default Portal2
