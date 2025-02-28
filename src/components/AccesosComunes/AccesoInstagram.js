import React from "react"
import styled from "styled-components"
import { FaInstagram } from "react-icons/fa"

function AccesoInstagram() {
  return (
    <EtiquetaA
      aria-label="Acceso a cuenta de Instagram"
      href="https://www.instagram.com/electroluzneored"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram />
    </EtiquetaA>
  )
}

export default AccesoInstagram

const EtiquetaA = styled.a`
  color: var(--white);
  &:hover {
    color: var(--colorinstagram);
  }
`
