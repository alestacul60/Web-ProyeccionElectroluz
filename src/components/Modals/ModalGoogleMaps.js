import React, { Component } from "react"
import styled from "styled-components"
import { Modal, Button } from "react-bootstrap"

export default class ModalGoogleMaps extends Component {
  render() {
    return (
      <>
        <Modal show={this.props.model} onHide={this.props.hide}>
          <Modal.Header closeButton>
            <Title>{this.props.ciudad}</Title>
          </Modal.Header>
          <Modal.Body>
            <div className="ratio ratio-4x3">
              <iframe
                className="GoogleMap"
                src={this.props.mail}
                title={this.props.ciudad}
                width={400}
                height={350}
                frameBorder={0}
                aria-hidden={false}
              ></iframe>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Direccion className="text-start">{this.props.direccion}</Direccion>
            <Button variant="outline-primary" onClick={this.props.hide}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

const Title = styled.p`
  font-size: 20px;
  color: var(--blueOscuro);
`
const Direccion = styled.p`
  font-size: 16px;
`
