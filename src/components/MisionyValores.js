import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { SectionContainer, AnimatedTitle } from "./styles/GlobalStyles"
import "../components/InfoTexto.css"

const MisionyValores = () => {
  return (
    <>
      <SectionContainer>
        <Container>
          <Row>
            <Col xs={12} sm={4} className="textosbuenaspracticas">
              <AnimatedTitle2>Misión</AnimatedTitle2>
              <Subtitulo className="text-dark"></Subtitulo>
            </Col>
            <Col xs={12} sm={8} className="text-dark">
              <Texto>
                Lograr la satisfacción del cliente, comprometidos en la mejora
                constante brindando soluciones de calidad en productos y
                servicios eléctricos
              </Texto>
            </Col>
          </Row>
        </Container>
      </SectionContainer>
      <SectionContainer>
        <Container>
          <Row>
            <Col xs={12} sm={4} className="textosbuenaspracticas">
              <AnimatedTitle2>Nuestros Valores</AnimatedTitle2>
              <Subtitulo className="text-dark"></Subtitulo>
            </Col>
            <Col xs={12} sm={8} className="text-dark">
              <Texto>
                La misma se desarrolla sobre la base del compromiso, el trabajo
                en equipo, la capacitación permanente y la mejora contínua.
                Proyección Electroluz brinda un ambiente en el cual los valores
                tienen una singular importancia, para ello se busca incorporar
                personas socialmente responsables y con alto potencial para
                asumir desafíos.
              </Texto>
            </Col>
          </Row>
        </Container>
      </SectionContainer>
      <SectionContainer>
        <Container>
          <Row>
            <Col xs={12} sm={4} className="textosbuenaspracticas">
              <AnimatedTitle2>Visión</AnimatedTitle2>
              <Subtitulo className="text-dark"></Subtitulo>
            </Col>
            <Col xs={12} sm={8} className="text-dark">
              <Texto>
                Solucionar integralmente con calidad y tecnología de vanguardia
                las diversificadas necesidades de energía, mejorando el estándar
                de vida
              </Texto>
            </Col>
          </Row>
        </Container>
      </SectionContainer>
    </>
  )
}

export default MisionyValores

const AnimatedTitle2 = styled(AnimatedTitle)`
  padding-top: 0;
`
const Subtitulo = styled.p``
const Texto = styled.p``
