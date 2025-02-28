import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import {
  SectionContainer,
  AnimatedTitle,
} from "../components/styles/GlobalStyles"
import "../components/InfoTexto.css"

const InfoTexto = props => {
  return (
    <SectionContainer>
      <Container>
        <Row>
          <Col xs={12} sm={4} className="paddingderecho">
            <AnimatedTitle2>{props.titulo}</AnimatedTitle2>
            <Subtitulo className="text-dark">{props.subtitulo}</Subtitulo>
          </Col>
          <Col xs={12} sm={8} className="text-dark">
            <Texto>{props.texto}</Texto>
            <ul>
              {props.links.map((item, index) => {
                return (
                  <li className="" key={index}>
                    {item.titulo}
                  </li>
                )
              })}
            </ul>
            <Texto>{props.texto2}</Texto>
          </Col>
        </Row>
      </Container>
    </SectionContainer>
  )
}

export default InfoTexto

const AnimatedTitle2 = styled(AnimatedTitle)`
  padding-top: 0;
`
const Subtitulo = styled.p`
  font-size: 14px;
  text-align: justify;
`
const Texto = styled.p`
  font-size: 15px;
  text-align: justify;
`
