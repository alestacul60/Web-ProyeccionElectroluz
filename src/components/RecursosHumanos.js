import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { SectionContainer, AnimatedTitle } from "./styles/GlobalStyles"
import Slider from "react-slick"

import "../components/InfoTexto.css"

const RecursosHumanos = data => {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  }
  return (
    <SectionContainer>
      <Container>
        <Row>
          <Col xs={12} sm={4} className="textosbuenaspracticas">
            <Slider {...settings}>
              {data.slidersbrands.map((image, key) => (
                <GatsbyImage
                  image={getImage(image.node.childImageSharp.gatsbyImageData)}
                  alt={image.node.base.split(`_`).join(` `).split(`.`)[0]}
                />
              ))}
            </Slider>
          </Col>
          <Col xs={12} sm={8} className="text-dark">
            <AnimatedTitle2>Gestión de Recursos Humanos</AnimatedTitle2>
            <Subtitulo className="text-dark">
              La política de Recursos Humanos constituye un marco de referencia
              para todos los integrantes de la Empresa.
            </Subtitulo>
            <Texto>
              La misma se desarrolla sobre la base del compromiso, el trabajo en
              equipo, la capacitación permanente y la mejora continua.
              Proyección Electroluz brinda un ambiente en el cual los valores
              tienen una singular importancia, para ello se busca incorporar
              personas socialmente responsables y con alto potencial para asumir
              desafíos. La cultura de trabajo se ve sustentada en los siguientes
              valores:
            </Texto>
            <Item className="">
              El compromiso hacia la organización y los clientes.
            </Item>
            <Item className="">
              La innovación y la creatividad como camino hacia el crecimiento
              tanto de la persona como de la Empresa.
            </Item>
            <Item className="">La honestidad y la conducta ética.</Item>
          </Col>
        </Row>
      </Container>
    </SectionContainer>
  )
}

export default RecursosHumanos

const AnimatedTitle2 = styled(AnimatedTitle)`
  padding-top: 0;
`
const Subtitulo = styled.p`
  margin-top: 2rem;
`
const Texto = styled.p``
const Item = styled.li`
  text-align: justify;
  padding: 5px 0;
`
