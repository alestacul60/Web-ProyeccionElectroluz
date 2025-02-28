import React, { useEffect } from "react"
import styled from "styled-components"
import Video from "../assets/videos/portada01-22.mp4"
import { ButtonW } from "../components/ButtonW"
import AOS from "aos"
import "aos/dist/aos.css"

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      mirror: true,
      anchorPlacement: "top-bottom",
      offset: 0,
      delay: 100,
    })
  }, [])

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1 data-aos="fade-up" data-aos-offset="0">
            Soluciones Eléctricas Integrales
          </HeroH1>
          <HeroP data-aos="fade-up" data-aos-offset="0">
            Somos una empresa líder en el rubro <br /> electro-industrial y
            ofrecemos soluciones integrales, venta minorista y mayorista de
            materiales eléctricos.
          </HeroP>
          <ButtonW href="#adns" aria-label="Conoce nuestros servicios">
            Nuestros servicios
          </ButtonW>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  color: var(--white);
  align-items: center;
  height: 95vh;
  padding: 0 1rem;
  position: relative;
  margin-top: var(--heightMenu);
  overflow: hidden;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`
const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`
const HeroContent = styled.div`
  z-index: 2;
  height: 90vh;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 3rem;

  @media screen and (max-width: 460px) {
    margin: 1rem 0;
    justify-content: space-evenly;
    align-items: flex-start;
    height: 80vh;
    padding-left: 0;
  }
`

const HeroH1 = styled.h1`
  font-size: 48px;
  font-weight: 700;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 85%;
  }
  @media screen and (max-width: 460px) {
    font-size: 35px;
    width: 90%;
  }
`
const HeroP = styled.p`
  font-size: 20px;
  line-height: 25px;
  margin-top: 2rem;
  margin-bottom: 5rem;
  font-weight: 400;
  line-height: 2rem;
  text-align: justify;
  width: 50%;
  @media screen and (max-width: 768px) {
    text-align: left;
    width: 100%;
  }
  @media screen and (max-width: 460px) {
    text-align: initial;
    font-size: 16px;
    width: 100%;

    font-weight: 400;
    margin-bottom: 2rem;
  }
`
