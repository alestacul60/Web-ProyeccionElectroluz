import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import Slider from "react-slick"
import { SectionContainer, AnimatedTitle } from "./styles/GlobalStyles"

const TemplateAutomatismo = data => {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    initialSlide: 0,
  }
  const fotos = data.fotosproducto
  const textos = data.textos

  return (
    <BackWithColor fondo={data.ColorFondo}>
      <Container>
        <Row>
          <Col xs={12} sm={4} className="text-center">
            <Slider {...settings} className="ps-4 pe-4 pt-4">
              {fotos.map((image, index) => {
                return (
                  <Col key={index} className="w-100 h-100">
                    <GatsbyImage
                      image={getImage(
                        image.node.childImageSharp.gatsbyImageData
                      )}
                      alt={image.node.base.split(`_`).join(` `).split(`.`)[0]}
                    />
                  </Col>
                )
              })}
            </Slider>
          </Col>
          <Col xs={12} sm={8}>
            <TituloAnimado>{textos.titulo}</TituloAnimado>
            <Descripcion>{textos.descripcion}</Descripcion>
            <Subtitulo>{textos.subtitulo}</Subtitulo>
            <ul>
              {textos.aplicaciones.map((aplicacion, index) => {
                return <li key={index}>{aplicacion.item}</li>
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </BackWithColor>
  )
}
export default TemplateAutomatismo

const TituloAnimado = styled(AnimatedTitle)``
const Descripcion = styled.p`
  margin-top: 2rem;
`
const Subtitulo = styled.p`
  margin-top: 2rem;
  font-weight: 600;
`
const BackWithColor = styled(SectionContainer)`
  background-color: ${({ fondo }) => (fondo ? `white` : `#F6F6F6`)};
`
