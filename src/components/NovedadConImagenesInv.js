import React, { useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { SectionContainer, AnimatedTitle } from "./styles/GlobalStyles"
import { Container, Row, Col, Carousel } from "react-bootstrap"
import { TextWrapper } from "./InfoSectionStyles"
import AOS from "aos"
import "aos/dist/aos.css"

const NovedadConImagenesInv = ({ novedad, imgNoticias }) => {
  const { titulo, copete, parrafos } = novedad

  useEffect(() => {
    AOS.init({
      duration: 600,
      mirror: true,
      anchorPlacement: "top-bottom",
      offset: 0,
      delay: 0,
    })
  }, [])

  return (
    <SectionContainer>
      <Container data-aos="fade-up">
        <Row className="row align-items-center">
          <Columna xs={12} lg={6} className="text-center" orden="invertir">
            <Carousel className="d-block w-100" variant="dark">
              {imgNoticias.map((image, index) => (
                <Carousel.Item key={index} className="w-100 ">
                  <GatsbyImage
                    className="w-75"
                    image={getImage(image.node.childImageSharp.gatsbyImageData)}
                    alt={image.node.base.split(`_`).join(` `).split(`.`)[0]}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Columna>
          <Col xs={12} lg={6}>
            <TextWrapper>
              <AnimatedTitleinfo className="">{titulo}</AnimatedTitleinfo>
              <strong className="mb-3">{copete}</strong>
              {parrafos.map(parrafo => (
                <ParrafosNovedad key={parrafo}>{parrafo}</ParrafosNovedad>
              ))}
            </TextWrapper>
          </Col>
        </Row>
      </Container>
    </SectionContainer>
  )
}

export default NovedadConImagenesInv

const AnimatedTitleinfo = styled(AnimatedTitle)`
  margin-left: 0;
`
const ParrafosNovedad = styled.p`
  color: var(--grisoscuro);
`
const Columna = styled(Col)`
  text-align: center !important;
  order: ${props => (props.orden === "invertir" ? "1!important" : "")};
`
