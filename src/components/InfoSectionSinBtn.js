import React from "react"
import styled from "styled-components"
import { SectionContainer, AnimatedTitle } from "./styles/GlobalStyles"
import { Container, Row, Col } from "react-bootstrap"
import { TextWrapper, ImgWrapper } from "./InfoSectionStyles"

const InfoSection = props => {
  return (
    <SectionContainer>
      <Container>
        <Row>
          <Col xs={12} sm={6} className="text-center">
            <ImgWrapper>{props.img}</ImgWrapper>
          </Col>
          <Col xs={12} sm={6}>
            <TextWrapper>
              <AnimatedTitleinfo>{props.titulo}</AnimatedTitleinfo>
              <Paragraph>{props.texto1}</Paragraph>
              <Paragraph>{props.texto2}</Paragraph>
              <Paragraph>{props.texto3}</Paragraph>
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
export const Paragraph = styled.p`
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  font-size: 16px;
  justify-content: left;
  line-height: 24px;
  color: var(--grisoscuro);
  text-align: left;
`
