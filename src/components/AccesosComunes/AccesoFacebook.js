import React from "react"
import styled from "styled-components"
import { FaFacebookF } from "react-icons/fa"

function AccesoFacebook() {
  return (
    <EtiquetaA
      aria-label="Acceso a cuenta de Facebook"
      href="https://www.facebook.com/electroluzneored"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFacebookF />
    </EtiquetaA>
  )
}

export default AccesoFacebook

const EtiquetaA = styled.a`
  color: var(--white);
  &:hover {
    color: var(--colorfacebook);
  }
`
