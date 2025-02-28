import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import {
  SectionContainer,
  AnimatedTitle,
} from "../components/styles/GlobalStyles"

const TemplateGridProveedores = data => {
  return (
    <SectionContainer>
      <AnimatedTitle>
        Algunos de los proveedores que confían en nuestra representación
      </AnimatedTitle>
      <Container className=" text-center">
        <Row className="">
          {data.imagenesProveedores.map((image, key) => (
            <Col xs={6} md={2} key={key} className="mb-3 ">
              <Item>
                <GatsbyImageLogo
                  image={getImage(image.node.childImageSharp.gatsbyImageData)}
                  alt={image.node.base.split(`_`).join(` `).split(`.`)[0]}
                />
              </Item>
            </Col>
          ))}
        </Row>
      </Container>
    </SectionContainer>
  )
}

export default TemplateGridProveedores
const Item = styled.div``
const GatsbyImageLogo = styled(GatsbyImage)`
   width:120px;
  transition: all 0.3s ease-in-out;
   filter: grayscale(100%);
  transition: all 0.3s ease-in-out;

  &:hover  {
    filter: grayscale(0%);
`
