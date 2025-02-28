import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import { SectionContainer, AnimatedTitle } from "./styles/GlobalStyles"

const TemplateTreeCards = data => {
  return (
    <SectionContainer>
      <AnimatedTitle>{data.tituloCards}</AnimatedTitle>
      <Container className=" text-center">
        <Row className="justify-content-center ">
          {data.cards.map((image, key) => (
            <Col xs={12} lg={data.columnas} key={key} className="mb-3 ">
              <Item className="border border-1 text-start">
                <GatsbyImage
                  className="w-100"
                  image={getImage(
                    image.node.thumbnail.childImageSharp.gatsbyImageData
                  )}
                  alt={image.node.alt}
                />
                <TitleContainer>
                  {image.node.tituloGris ? (
                    <TitleGris>{image.node.tituloGris}</TitleGris>
                  ) : (
                    <></>
                  )}
                  {image.node.titulo ? (
                    <Title>{image.node.titulo}</Title>
                  ) : (
                    <></>
                  )}
                  {image.node.subtitulo ? (
                    <SubTitle>{image.node.subtitulo}</SubTitle>
                  ) : (
                    <></>
                  )}
                  {image.node.descripcion ? (
                    <Description>{image.node.descripcion}</Description>
                  ) : (
                    <></>
                  )}

                  <ul>
                    {image.node.items?.map((item, index) => {
                      return <li key={index}>{item}</li>
                    })}
                  </ul>
                </TitleContainer>
              </Item>
            </Col>
          ))}
        </Row>
      </Container>
    </SectionContainer>
  )
}

export default TemplateTreeCards

const Item = styled.div`
  box-shadow: 7px 7px 26px 0px #00000015;
`
const TitleContainer = styled.div`
  margin: 1rem;
  align-items: stretch;
`

const Title = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
`
const SubTitle = styled.p``

const TitleGris = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 26px;
  margin-top: 5px;
`
const Description = styled.p`
  border-top: 1px solid var(--grislinea);
  padding-top: 1rem;
  height: 200px;
  display: flex;
  align-items: stretch;
`
