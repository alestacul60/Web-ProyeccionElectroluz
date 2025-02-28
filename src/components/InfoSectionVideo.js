import React, { useEffect } from "react"
import styled from "styled-components"
import {
  SectionContainer,
  AnimatedTitle,
} from "./styles/GlobalStyles"
import { ButtonProduct } from "./NuestrasUnidades"
import { Container, Row, Col } from "react-bootstrap"
import {
  TextWrapper,
  Paragraph,
  
} from "./InfoSectionStyles"
import AOS from "aos"
import "aos/dist/aos.css"

const InfoSection = props => {
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
        <Row className="row">
          <Col xs={12} lg={6} className="text-center order-last">
          <div className="ratio ratio-4x3">
          <iframe src="https://www.youtube.com/embed/VPRyWoeKTqY" title="Gateway IOT WIFI by Proyección Electroluz" allowFullScreen></iframe>
          </div>
          </Col>
          <Col xs={12} lg={6}>
            <TextWrapper>
              <AnimatedTitleinfo data-aos="fade-up">
              Nuevo Producto: Gateway IOT WIFI
              </AnimatedTitleinfo>
              <Paragraph data-aos="fade-up"> <strong className="">¿Problemas de alta temperatura en Tableros de Baja Tensión (BT) y Celdas de Media Tensión (MT)?</strong><br/><br/>La gestión online de humedad y temperatura de tableros y celdas, mediante una app en tu celular, ayuda al mantenimiento preventivo de éstos, evitando las pérdidas de dinero generadas por rotura de los mismos.</Paragraph>
              <ButtonProduct to={`/gateway`} aria-label="Conoce nuestros servicios" className="w-100">
           MÁS INFO
          </ButtonProduct>
            </TextWrapper>
          </Col>
        </Row>
      </Container>
    </SectionContainer>
  )
}

export default InfoSection

const AnimatedTitleinfo = styled(AnimatedTitle)`
  margin-left: 0;
`
