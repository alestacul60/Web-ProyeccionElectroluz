import React from "react"
import { Component } from "react"
import ReactDOM from "react-dom"
import { Modal, Button } from "react-bootstrap"

// Use a ternary operator to make sure that the document object is defined
const portalRoot = document.getElementById("my-portal")

export default class Portal extends Component {
  constructor(props) {
    super(props)
    // Use a ternary operator to make sure that the document object is defined
    this.el =
      typeof document !== `undefined` ? document.createElement("div") : null
  }

  componentDidMount = () => {
    portalRoot.appendChild(this.el)
  }

  componentWillUnmount = () => {
    portalRoot.removeChild(this.el)
  }

  render() {
    const { children, close, show } = this.props
    console.log(this.props)
    // Check that this.el is not null before using ReactDOM.createPortal

    return ReactDOM.createPortal({ children }, portalRoot)
  }
}
