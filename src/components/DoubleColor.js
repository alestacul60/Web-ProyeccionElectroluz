import React, { useEffect } from "react"
import styled from "styled-components"
import { Button } from "./Button"
import { StaticImage } from "gatsby-plugin-image"
import AOS from "aos"
import "aos/dist/aos.css"

const DoubleColor = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      mirror: true,
      offset: 50,
      delay: 0,
    })
  }, [])
  return (
    <Container>
      <CardLeft data-aos="fade-right">
        <TextContent>
          <Title>CATÁLOGO DE PRODUCTOS</Title>
          <Button to="/fabrica">VER CÁTALOGO</Button>
        </TextContent>
        <Background>
          <BgLeft></BgLeft>
          <StaticImage
            src="../assets/images/FondoProyeccion.png"
            width={1000}
            // height={540}
            alt="Tienda Neored"
            placeholder="tracedSVG"
            quality="40"
          />
        </Background>
      </CardLeft>

      <CardRight data-aos="fade-left">
        <TextContent>
          <Title>ELECTROLUZ NEORED</Title>
          <Button to="/ventas">PROMOCIONES</Button>
        </TextContent>
        <Background>
          <BgRight></BgRight>
          <StaticImage
            src="../assets/images/FondoNeored.png"
            width={1000}
            // height={540}
            alt="Productos desarrollados por Proyección Electroluz"
            placeholder="tracedSVG"
            quality="40"
          />
        </Background>
      </CardRight>
    </Container>
  )
}

export default DoubleColor

const Container = styled.div`
  overflow-x: hidden;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    margin: 0 auto;
  }
`
const Background = styled.div``

const BgLeft = styled.div`
  position: absolute;
  background: var(--blueOscuro);
  background-blend-mode: multiply;
  mix-blend-mode: normal;
  opacity: 0.95;

  height: 100%;
  width: 100%;
  z-index: 1;
`
const BgRight = styled.div`
  position: absolute;
  background: var(--grisoscuroBg);
  background-blend-mode: multiply;
  mix-blend-mode: normal;
  opacity: 0.95;
  height: 100%;
  width: 100%;
  z-index: 1;
`

const CardLeft = styled.div`
  position: relative;
`
const CardRight = styled.div`
  position: relative;
`
const TextContent = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.p`
  font-size: 1.5rem;
  color: var(--white);
  font-weight: 600;
  margin: 2rem 0;
  padding-bottom: 1rem;
  overflow: hidden;
  position: relative;
  z-index: 2;
  ::before {
    position: absolute;
    content: "";
    bottom: 0;
    border-bottom: 2px solid var(--white);
    text-align: center;
    width: 20%;
    transition: all 0.5s ease;
  }

  ${CardLeft}:hover & {
    ::before {
      width: 100%;
    }
  }

  ${CardRight}:hover & {
    ::before {
      width: 100%;
    }
  }
`
export const ButtonA = styled.button`
  font-size: 0.75rem;
  line-height: 1;
  border-radius: 0;
  outline: 0;
  border: 1px solid var(--white);
  color: var(--blueOscuro);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  width: 150px;
  display: inline-block;
  text-align: center;
  padding: 10px;
  transition: all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
  cursor: pointer;
  height: auto;
  background-color: var(--white);

  &:hover {
    background: var(--blueOscuro);
    color: var(--white);
  }
`
