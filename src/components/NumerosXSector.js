import React, { useEffect } from "react"
import styled from "styled-components"
import { SectionContainer } from "../components/styles/GlobalStyles"
import { Row, Col, Container } from "react-bootstrap"

import AOS from "aos"
import "aos/dist/aos.css"

const NumerosXSector = props => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      mirror: true,
      offset: 100,
      anchorPlacement: "top-bottom",
    })
  }, [])
  return (
    <SectionContainer>
      <Container>
        <Row data-aos="fade-up">
          {props.datos.map((item, index) => {
            return (
              <Col md={6} lg={6} xl={4} key={index}>
                <Tarjeta>
                  <NumeroTarjeta>{item.numero}</NumeroTarjeta>
                  <DatosTarjeta>
                    <TituloTarjeta>
                      {item.titulo} <br />
                      <SpanDesc>{item.subtitulo}</SpanDesc>
                    </TituloTarjeta>
                  </DatosTarjeta>
                </Tarjeta>
              </Col>
            )
          })}
        </Row>
      </Container>
    </SectionContainer>
  )
}

export default NumerosXSector

const Tarjeta = styled.div`
  display: flex;
  margin-top: 2rem;
  border-bottom: 2px solid var(--blueNeored);
  justify-content: center;
  padding: 0;
`
const DatosTarjeta = styled.div`
  display: flex;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
const NumeroTarjeta = styled.p`
  font-size: 3.4rem;
  font-weight: 700;
  color: var(--blueOscuro);
  text-align: end;
  @media screen and (max-width: 768px) {
    font-size: 45px;
  }
`
const TituloTarjeta = styled.p`
  color: var(--grisoscuro);
`
const SpanDesc = styled.span`
  color: var(--black);
  font-weight: 700;
`
