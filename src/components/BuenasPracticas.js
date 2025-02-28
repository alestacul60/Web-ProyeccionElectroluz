import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { SectionContainer, AnimatedTitle } from "./styles/GlobalStyles"
import "../components/InfoTexto.css"

const BuenasPracticas = () => {
  return (
    <>
      <SectionContainer>
        <Container>
          <Row>
            <Col xs={12} className="text-dark">
              <Texto>
                Desde hace años, Proyección Electroluz se distingue por su
                accionar proactivo en cuestiones como la sustentabilidad y
                responsabilidad social. Esto representa para nosotros un deber
                de progreso constante, comprometidos a satisfacer las demandas y
                necesidades de las generaciones actuales y futuras. Es por ello
                que trabajamos activamente para lograr un ambiente saludable y
                agradable, de crecimiento y capacitación de lo más valioso que
                posee la empresa: las personas.
              </Texto>
              <Texto>
                El respeto por el medioambiente es un valor diferenciador, de
                tal manera estamos continuamente actualizándonos para ser
                eficientes en la producción y uso de energía, la protección de
                la biodiversidad y la gestión de los residuos y el agua.
              </Texto>
              <Texto>
                Trabajamos respetando los valores éticos y morales, considerando
                el cuidado de nuestros recursos humanos y naturales como un
                factor clave en el desarrollo de la organización.
              </Texto>
              <Texto>
                Nos comprometemos a trabajar en el derecho de todo ciudadano a
                gozar de un ambiente amable y saludable, respetando los valores
                éticos y morales, basándonos en los principios de prevención de
                accidentes, de bienestar físico y mental, de manera tal de
                asegurar el cumplimiento de todos los requisitos legales
                obligatorios y también aquellos propios que sean asumidos.
                Consideramos fervientemente que la protección de nuestra gente,
                así como los recursos naturales son factores claves en el
                continuo desarrollo de la organización.
              </Texto>
            </Col>
          </Row>
        </Container>
      </SectionContainer>
      <SectionContainer>
        <Container>
          <Row>
            <Col xs={12} sm={4} className="textosbuenaspracticas">
              <AnimatedTitle2>Recurso Humano</AnimatedTitle2>
              <Subtitulo className="text-dark"></Subtitulo>
            </Col>
            <Col xs={12} sm={8} className="text-dark">
              <Texto>
                Atención de las demandas y necesidades vinculadas a los
                diferentes puestos de trabajo, incluyendo su formación y
                capacitación actualizada.
              </Texto>
              <Texto>
                Inclusión al grupo de trabajo de personas jóvenes, dando el
                mismo valor y oportunidad sin distinción de géneros.
              </Texto>
            </Col>
          </Row>
        </Container>
      </SectionContainer>
      <SectionContainer>
        <Container>
          <Row>
            <Col xs={12} sm={4} className="textosbuenaspracticas">
              <AnimatedTitle2>Recurso Natural</AnimatedTitle2>
              <Subtitulo className="text-dark"></Subtitulo>
            </Col>
            <Col xs={12} sm={8} className="text-dark">
              <Texto>
                Obras de energía realizadas tanto en Argentina como en varios
                países del exterior con calidad internacional, bajo NORMAS ISO
                9001:2015.
              </Texto>
              <Texto>Energías Renovables: Eólica, Solar, Biomasa</Texto>
            </Col>
          </Row>
        </Container>
      </SectionContainer>
    </>
  )
}

export default BuenasPracticas

const AnimatedTitle2 = styled(AnimatedTitle)`
  padding-top: 0;
`
const Subtitulo = styled.p``
const Texto = styled.p``
