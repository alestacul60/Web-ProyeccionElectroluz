import React, { useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  SectionContainer,
  AnimatedTitle,
} from "../components/styles/GlobalStyles"
import { NuestrasUnidadesData } from "../data/NuestrasUnidadesData"
import AOS from "aos"
import "aos/dist/aos.css"

const NuestrasUnidades = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      anchorPlacement: "center-center",
      mirror: true,
      offset: 100,
    })
  }, [])

  return (
    <SectionContainer id="adns">
      <AnimatedTitle data-aos="fade-up" data-aos-offset="50" className="mt-4">
       UNIDADES DE NEGOCIOS
      </AnimatedTitle>
      <WrapperGrid data-aos="fade-up">
        {NuestrasUnidadesData.map((item, index) => {
          return (
            <Card key={index}>
              <IconUnit>{item.icon}</IconUnit>
              <TitleUnit>{item.title}</TitleUnit>
              <ButtonProduct to={item.path} aria-label={item.title}>
                {item.but}
              </ButtonProduct>
            </Card>
          )
        })}
      </WrapperGrid>
    </SectionContainer>
  )
}

export default NuestrasUnidades

export const Container = styled.div`
  background-color: cyan;
  padding: 4rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const WrapperGrid = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  position: relative;
  width: 260px;
  height: 190px;
  margin: 5px;
  color: var(--blueOscuro);
  background: var(--grisclaro);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transition: all 1s cubic-bezier(0.39, 0.575, 0.565, 1);
  overflow: hidden;
  z-index: 3;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid var(--blueOscuro);
  }
`

const TitleUnit = styled.p`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.36px;
`

const IconUnit = styled.div``

export const ButtonProduct = styled(Link)`
  font-size: 0.8rem;
  line-height: 1;
  border-radius: 0;
  outline: 0;
  border: 1px solid var(--blueOscuro);
  color: var(--blueOscuro);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  width: 150px;
  display: inline-block;
  text-align: center;
  padding: 10px;
  transition: all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
  cursor: pointer;
  height: auto;
  background-color: transparent;

  &:hover {
    background: var(--blueOscuro);
    color: var(--white);
  }
`
