import React from "react"
import styled from "styled-components"
import { Container, Row, Col, Button, Carousel } from "react-bootstrap"

const TarjetaProductosFabrica = props => {
  return (
    <Container className="p-4 margentop ">
      <Row className="">
        <Col xs={12} sm={5} className="bordeContainer ">
          <Row className="">
            <Col xs={12} className="text-center">
              <Carousel className="d-block w-100" variant="dark">
                {props.imagenes.map((image, index) => (
                  <Carousel.Item key={index} className="">
                    {image.img}
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={7} className="tarjeta">
          <TituloProducto>{props.titulo}</TituloProducto>
          <TipoProducto>{props.tipo}</TipoProducto>
          <DescTipoProducto>{props.desc_tipo}</DescTipoProducto>
          <TipoProducto>Caracteristicas</TipoProducto>
          {props.items.map((desc, index) => (
            <Items key={index}>{desc.item}</Items>
          ))}

          <DescTipoProducto>{props.desc_producto}</DescTipoProducto>
          <Button>Descargar PDF</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default TarjetaProductosFabrica

const TituloProducto = styled.h2`
  font-size: 28px;
  font-weight: 500;
  line-height: 38px;
  letter-spacing: 0px;
  text-align: left;
  padding-top: 1rem;
  padding-bottom: 1rem;
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
  padding: 1rem 0;
`
const Items = styled.p`
  margin: 0;
  padding: 0;
`
