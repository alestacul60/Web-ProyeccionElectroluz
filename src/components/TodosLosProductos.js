import React from "react"
import styled from "styled-components"
import { Container, Row, Col, Accordion } from "react-bootstrap"
import { ButtonProduct } from "../components/NuestrasUnidades"

import "../components/TodosLosProductos.css"

const TodosLosProductos = data => {
  console.log(data)

  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={3}>
          <Container>
            <Accordion className="pt-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Filtro #1</Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Filtro #2</Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Filtro #3</Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Asesor className="d-none d-sm-block">
              <Asesorate>Asesoramiento y cotizaciones</Asesorate>
              <Telefono>+54 34824 12635</Telefono>
            </Asesor>
          </Container>
        </Col>
        <Col xs={12} sm={9}>
          <Row
            xs="auto"
            className="FondoProductos justify-content-center justify-content-sm-start"
          >
            {data.productosdestacados.map((item, index) => {
              return (
                <Col key={index} className="text-center text-white">
                  <Card>
                    <Col xs={6} sm={12} className="text-center">
                      <Imga src={item.img} alt={item.alt}></Imga>
                    </Col>
                    <Col xs={6} sm={12} className="text-center">
                      <Titulo>{item.titulo}</Titulo>
                      <SubTitulo>{item.subtitulo}</SubTitulo>
                      <ButtonProduct to={item.path}>
                        {item.button}
                      </ButtonProduct>
                    </Col>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Col>
        <Col xs={12} sm={3} className="d-sm-none">
          <Container>
            <Asesor>
              <Asesorate>Asesoramiento y cotizaciones</Asesorate>
              <Telefono>+54 34824 12635</Telefono>
            </Asesor>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default TodosLosProductos

const Card = styled.div`
  background-color: var(--white);
  width: 210px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  padding: 0 1rem;

  @media screen and (max-width: 460px) {
    width: 335px;
    height: 160px;
    display: flex;
    flex-direction: row;
    margin-right: 1rem;
    padding-right: 1rem;
  }
`

const Titulo = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: var(--grisoscuro);
  padding-top: 2rem;
  @media screen and (max-width: 460px) {
    padding-top: 0.5rem;
  }
`
const SubTitulo = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: var(--grisoscuro);
  padding-bottom: 2rem;
  @media screen and (max-width: 460px) {
    padding-bottom: 0.5rem;
  }
`

const Imga = styled.img`

  @media screen and (max-width: 460px) {
    width: 150px;
    display: flex;
    flex-direction: row;

`
const Asesor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  border-radius: 3px;
  background-color: var(--blueOscuro);
  text-align: center;
  padding: 1rem;
`

const Asesorate = styled.h4`
  color: var(--white);
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--blueNeored);
`
const Telefono = styled.p`
  color: var(--white);
`
