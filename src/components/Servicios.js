import React, { useEffect } from "react"
import styled from "styled-components"
import {
  SectionContainerGris,
  AnimatedTitleGris,
} from "../components/styles/GlobalStyles"
import AOS from "aos"
import "aos/dist/aos.css"

const Servicios = props => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true,
      offset: 100,
    })
  }, [])
  return (
    <SectionContainerGris>
      <AnimatedTitleGris>{props.titulo}</AnimatedTitleGris>
      <ServicesWrapper>
        {props.tarjetas.map((item, index) => {
          return (
            <ServicesCard key={index}>
              <ServicesIcon>{item.icon}</ServicesIcon>
              <ServicesH2>{item.title}</ServicesH2>
              <ServicesText>{item.desc}</ServicesText>
            </ServicesCard>
          )
        })}
      </ServicesWrapper>
    </SectionContainerGris>
  )
}

export default Servicios

export const ServicesWrapper = styled.div`
  padding: 2rem 12rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  grid-gap: 4rem;

  @media screen and (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem 3rem;
    padding: 2rem 5rem;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem 3rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem 2rem;
    padding: 2rem 2rem;
  }
  @media screen and (max-width: 460px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem 0;
    padding: 2rem 0;
  }
`

export const ServicesCard = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 380px;
  width: 100%;
  background: #ffffff;
  box-shadow: 7px 7px 26px 0px #00000015;
  transition: all 0.8s ease;
  padding: 1rem 1rem;
`

export const ServicesIcon = styled.div`
  padding: 10px 0;
`

export const ServicesH2 = styled.h2`
  font-size: 20px;
  font-weight: 600;

  color: var(--blueOscuro);
`

export const ServicesText = styled.p`
  font-size: 16px;
  color: var(--blueOscuro);
  text-align: left;
`
