import React from "react"
import styled from "styled-components"
import AccesoFacebook from "./AccesosComunes/AccesoFacebook"
import AccesoInstagram from "./AccesosComunes/AccesoInstagram"
import AccesoLinkedin from "./AccesosComunes/AccesoLinkedin"

const FooterSidebar = () => {
  return (
    <>
      <Wrapper>
        <div>
          <Seguinos>Seguinos</Seguinos>
        </div>
        <Iconos>
          <AccesoFacebook />
          <AccesoInstagram />
          <AccesoLinkedin />
        </Iconos>
      </Wrapper>
    </>
  )
}

export default FooterSidebar

const Wrapper = styled.div`
  width: 85%;
  height: 3.5rem;
  color: var(--white);
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid white;
  padding-top: 5px;
  padding-bottom: 10px;
  padding-right: 2rem;
  padding-left: 2rem;
`
const Seguinos = styled.p`
  margin-bottom: 0;
  font-style: normal;
  letter-spacing: -0.13px;
  font-size: 18px;
  font-weight: 100;
`

export const Iconos = styled.div`
  width: 40%;
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: space-evenly;
  cursor: pointer;
`
