import React from "react"
import styled from "styled-components"
import { Container } from "react-bootstrap"
import Carousel from "react-elastic-carousel"
import {
  SectionContainer,
  AnimatedTitle,
} from "../components/styles/GlobalStyles"
import "../components/LogoSlider.css"

const LogosSlider = props => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 4 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]

  return (
    <SectionContainer>
      <AnimatedTitle>{props.titulo}</AnimatedTitle>
      <Container>
        <Carousel breakPoints={breakPoints} className="mt-3">
          {props.logos.map((item, index) => {
            return (
              <Item key={index}>
                <Imga src={item.ruta} alt={item.texto}></Imga>
              </Item>
            )
          })}
        </Carousel>
      </Container>
    </SectionContainer>
  )
}

export default LogosSlider

const Item = styled.div``
const Imga = styled.img`
  width: 125px;
  filter: grayscale(100%);
  transition: all 0.3s ease-in-out;

  ${Item}:hover & {
    filter: grayscale(0%);
  }
`
