import React, { useEffect } from "react"
import styled from "styled-components"
import { Row, Col, Form } from "react-bootstrap"
import { ButtonW } from "../components/ButtonW"
import {
  SectionContainer,
  AnimatedTitle,
} from "../components/styles/GlobalStyles"

import AOS from "aos"
import "aos/dist/aos.css"

const Escribinos = () => {
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
      <Row className="my-4 me-4">
        <Col sm={4}>
          <AnimatedTitle data-aos="fade-up">
            Escribinos, estamos para ayudarte
          </AnimatedTitle>
          <TextoDescripcion data-aos="fade-up">
            ¿Necesitás asesoría? Contanos lo que necesitás, dejá tus datos y nos
            comunicaremos con vos a la brevedad.
          </TextoDescripcion>
        </Col>
        <Col sm={8}>
          <Form className="my-4 ">
            <Row className="ms-2" data-aos="fade-up">
              <Col sm={6}>
                <Form.Control placeholder="Nombre *" />
              </Col>
              <Col sm={6} className="mt-4 mt-sm-0">
                <Form.Control placeholder="Apellido *" />
              </Col>
            </Row>
            <Row className="my-4 ms-2" data-aos="fade-up" data-aos-delay="150">
              <Col sm={6}>
                <Form.Control placeholder="Telefono *" />
              </Col>
              <Col sm={6} className="mt-4 mt-sm-0">
                <Form.Control placeholder="Mail *" />
              </Col>
            </Row>
            <Row className="my-4 ms-2">
              <Col>
                <Form.Control placeholder="Consulta *" as="textarea" rows={3} />
              </Col>
            </Row>
            <Row className="ms-4">
              <ButtonW to="/#">Enviar Mensaje</ButtonW>
            </Row>
          </Form>
        </Col>
      </Row>
    </SectionContainer>
  )
}

export default Escribinos

const TextoDescripcion = styled.p`
  margin-top: 2rem;
  font-size: 16px;
  font-weight: 400;
  color: var(--grisoscuro);
  margin-left: 1rem;
`
