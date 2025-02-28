import React, { useEffect } from "react"
import styled from "styled-components"
import {
  SectionContainer,
  AnimatedTitle,
} from "../components/styles/GlobalStyles"
import { Container, Row, Col } from "react-bootstrap"
import {
  TextWrapper,
  Paragraph,
  ImgWrapper,
} from "../components/InfoSectionStyles"
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
        <Row>
          <Col xs={12} lg={6} className="text-center order-1 ">
            <ImgWrapper>{props.img}</ImgWrapper>
          </Col>
          <Col xs={12} lg={6}>
            <TextWrapper>
              <AnimatedTitleinfo data-aos="fade-up">
                {props.titulo}
              </AnimatedTitleinfo>
              <Paragraph data-aos="fade-up">{props.texto}</Paragraph>
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
