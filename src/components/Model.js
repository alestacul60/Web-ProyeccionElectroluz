import React, { Component } from "react"
import { Modal, Button } from "react-bootstrap"
export default class Model extends Component {
  render() {
    return (
      <>
        <Modal show={this.props.model} onHide={this.props.hide}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.cargo}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.props.nombre}</p>
            <p>{this.props.mail}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.hide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}
