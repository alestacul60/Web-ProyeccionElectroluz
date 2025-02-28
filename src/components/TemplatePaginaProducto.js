import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container, Row, Col, Button, Carousel } from "react-bootstrap"
import { FaFilePdf } from "react-icons/fa"

const TemplatePaginaProducto = props => {
  const fotos = props.fotosproducto.edges
  const data = props.bandejasescaleradata
  return (
    <Container className="p-4 margentop ">
      <Row className="">
        <Col xs={12} sm={5} className=" bordeContainer ">
          <Row className="">
            <Col xs={12} className="text-center">
              <Carousel className="d-block w-100" variant="dark">
                {fotos.map((image, index) => (
                  <Carousel.Item key={index} className="w-100">
                    <GatsbyImage
                      image={getImage(
                        image.node.childImageSharp.gatsbyImageData
                      )}
                      alt={image.node.base.split(`_`).join(` `).split(`.`)[0]}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={7} className="tarjeta">
          <TituloProducto>{data.titulo}</TituloProducto>
          <TipoProducto>{data.tipo}</TipoProducto>
          <DescTipoProducto>{data.desc_tipo}</DescTipoProducto>
          <TipoProducto>Características</TipoProducto>
          {data.items.map((desc, index) => (
            <Items key={index}>{desc.item}</Items>
          ))}

          <DescTipoProducto>{data.desc_producto}</DescTipoProducto>

          <Button
            variant="outline-primary"
            href={data.catalogo}
            download={`${data.titulo} - ${data.tipo}`}
          >
            <FaFilePdf />
            Descargar PDF
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default TemplatePaginaProducto

const TituloProducto = styled.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: left;
`
const TipoProducto = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0px;
  text-align: left;
`
const DescTipoProducto = styled.h2`
  font-size: 16px;
  font-weight: 300;
  line-height: 26px;
  letter-spacing: var(--grisoscuro);
  text-align: left;
  letter-spacing: -0.15px;
`
const Items = styled.p`
  margin: 0;
  padding: 0;
  letter-spacing: -0.15px;
  color: var(--grisoscuro);
`
