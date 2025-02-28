import React from "react"
import styled from "styled-components"
import { FaLinkedinIn } from "react-icons/fa"

function AccesoLinkedin() {
  return (
    <EtiquetaA
      aria-label="Acceso a cuenta de Linkedin"
      href="https://www.linkedin.com/in/proyeccion-electroluz/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedinIn />
    </EtiquetaA>
  )
}

export default AccesoLinkedin

const EtiquetaA = styled.a`
  color: var(--white);

  &:hover {
    color: var(--colorlinkedin);
  }
`
