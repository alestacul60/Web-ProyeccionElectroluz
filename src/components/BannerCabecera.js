import React from "react"
import styled from "styled-components"

const BannerCabecera = props => {
  return (
    <Contenedor fluid>
      <BgDatos>
        <Titulo>{props.titulo}</Titulo>
      </BgDatos>
      <div>{props.imagen}</div>
    </Contenedor>
  )
}

export default BannerCabecera

const Contenedor = styled.div`
  display: flex;
  justify-content: center;
  color: var(--white);
  align-items: center;
  height: 35vh;
  position: relative;
  overflow: hidden;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`
const BgDatos = styled.div`
  position: absolute;
  height: 100vh;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 13rem;
  z-index: 3;
  @media screen and (max-width: 460px) {
    width: 100%;
    padding: 0 1rem;
  }
`
const Titulo = styled.h1`
  font-size: 3rem;
  font-weight: 700;

  @media screen and (max-width: 460px) {
    font-size: 2.1rem;
  }
`
