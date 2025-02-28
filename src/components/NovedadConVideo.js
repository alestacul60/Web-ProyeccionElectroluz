import React, { useEffect } from "react"
import styled from "styled-components"
import { SectionContainer, AnimatedTitle } from "./styles/GlobalStyles"
import { Container, Row, Col } from "react-bootstrap"
import { TextWrapper } from "./InfoSectionStyles"
import AOS from "aos"
import "aos/dist/aos.css"

const NovedadConVideo = ({ novedad }) => {
  const { titulo, link_video, parrafos } = novedad

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
        <Row className="row align-items-center">
          <Col xs={12} lg={6} className="text-center order-last">
            <div className="ratio ratio-4x3">
              <iframe
                src={link_video}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <TextWrapper>
              <AnimatedTitleinfo data-aos="fade-up">{titulo}</AnimatedTitleinfo>
              {parrafos.map(parrafo => (
                <ParrafosNovedad key={parrafo}>{parrafo}</ParrafosNovedad>
              ))}
            </TextWrapper>
          </Col>
        </Row>
      </Container>
    </SectionContainer>
  )
}

export default NovedadConVideo

const AnimatedTitleinfo = styled(AnimatedTitle)`
  margin-left: 0;
`
const ParrafosNovedad = styled.p`
  color: var(--grisoscuro);
`
