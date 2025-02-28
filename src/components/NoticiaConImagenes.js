import React, { useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { SectionContainer, AnimatedTitle } from "./styles/GlobalStyles"

import { Container, Row, Col, Carousel } from "react-bootstrap"
import { TextWrapper, Paragraph } from "./InfoSectionStyles"
import AOS from "aos"
import "aos/dist/aos.css"

const NoticiaConImagenes = ({ noticia, imgNoticias }) => {
  const { titulo, copete, descripcion, items, descripcion2, parrafos } = noticia

  useEffect(() => {
    AOS.init({
      duration: 600,
      mirror: true,
      anchorPlacement: "top-bottom",
      offset: 50,
      delay: 0,
    })
  }, [])

  return (
    <SectionContainer>
      <Container data-aos="fade-up">
        <Row className="row flex-row-reverse">
          <Col
            xs={12}
            lg={6}
            className="text-center order-last align-self-center"
          >
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
          </Col>
          <Col xs={12} lg={6}>
            <TextWrapper>
              <AnimatedTitleinfo data-aos="fade-up">{titulo}</AnimatedTitleinfo>
              <Paragraph data-aos="fade-up">
                <strong className="">{copete}</strong>
                <br />
                <br />
                {descripcion}
                <div className="mt-2">
                  {items &&
                    items?.map(i => (
                      <p className="font-bold" key={i.item}>
                        {i.item}
                      </p>
                    ))}
                  {parrafos?.map(parrafo => (
                    <p className="font-bold" key={parrafo}>
                      {parrafo}
                    </p>
                  ))}
                </div>

                {descripcion2 && <p>{descripcion2}</p>}
              </Paragraph>
            </TextWrapper>
          </Col>
        </Row>
      </Container>
    </SectionContainer>
  )
}

export default NoticiaConImagenes

const AnimatedTitleinfo = styled(AnimatedTitle)`
  margin-left: 0;
`
