import React, { useEffect } from "react"
import styled from "styled-components"
import { ButtonW } from "./ButtonW"
import AOS from "aos"
import Sustentabilidad from "../assets/images/catalogos/sustentabilidad.pdf"
import "aos/dist/aos.css"

const HeroQuery = ({ videoPortada, imgPortada }) => {
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
      <HeroBg1>
        <VideoBg
          src={videoPortada}
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
          alt="video de presentacion"
        />
      </HeroBg1>
      <HeroBg2>
        <img src={imgPortada} alt="Logo" />
      </HeroBg2>

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
          <ButtonW href="#adns" aria-label="NUESTROS SERVICIOS">
            Nuestros servicios
          </ButtonW>
          <ButtonSustentable
            href={Sustentabilidad}
            aria-label="Sustentabilidad"
            className="mt-2"
            target="_blank"
          >
            Sustentabilidad
          </ButtonSustentable>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroQuery

const ButtonSustentable = styled.a`
  font-size: 0.75rem;
  background-color: #066f3c;
  line-height: 1;
  font-weight: 500;
  border-radius: 0;
  outline: 0;
  border: 1px solid #066f3c;
  color: var(--white);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-block;
  text-align: center;
  padding: 10px;
  padding-left: 3.25rem;
  padding-right: 3.25rem;
  height: auto;
  transition: all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
  cursor: pointer;

  &:hover {
    background: var(--white);
    color: #066f3c;
    font-weight: 500;
    border: 1px solid #066f3c;
  }
`

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
const HeroBg1 = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  visibility: hidden;
  display: none;

  @media (min-width: 440px) {
    visibility: visible;
    display: block;
  }
`

const HeroBg2 = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  visibility: visible;
  display: block;
  @media (min-width: 440px) {
    visibility: hidden;
    display: none;
  }
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
    padding-left: 0;
  }
`

const HeroH1 = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 85%;
  }
  @media screen and (max-width: 460px) {
    font-size: 2rem;
    width: 90%;
  }
`
const HeroP = styled.p`
  font-size: 1.2rem;
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
    font-size: 1rem;
    width: 100%;
    font-weight: 400;
    margin-bottom: 2rem;
  }
`
