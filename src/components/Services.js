import React, { useEffect } from "react"
import styled from "styled-components"
import { ServicesData } from "../data/ServicesData"
import { SectionContainer } from "../components/styles/GlobalStyles"
import AOS from "aos"
import "aos/dist/aos.css"

const Services = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <SectionContainer
      data-aos="fade-right"
      data-aos-delay="200"
      data-aos-duration="1000"
    >
      <ServicesWrapper>
        {ServicesData.map((item, index) => {
          return (
            <ServicesCard key={index}>
              <ServicesIcon>{item.icon}</ServicesIcon>
              <ServicesH2>{item.title}</ServicesH2>
              <ServicesText>{item.desc}</ServicesText>
            </ServicesCard>
          )
        })}
      </ServicesWrapper>
    </SectionContainer>
  )
}

export default Services

export const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 1rem;
  grid-gap: 3rem;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 375px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`

export const ServicesCard = styled.div`
  overflow: hidden;
  display: flex;
  background: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 371px;
  width: 345px;
  max-width: 460px;
  margin: 10px 0;
  position: relative;

  transition: all 0.8s ease;

  ::before {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    border-bottom: 3px solid transparent;
    border-left: 3px solid transparent;
    width: 0;
    height: 0;
    transition: all 0.8s ease;
  }
  ::after {
    position: absolute;
    content: "";
    right: 0;
    top: 0;
    border-top: 3px solid transparent;
    border-right: 3px solid transparent;
    width: 0;
    height: 0;
    transition: all 0.5s ease;
  }

  &:hover {
    transform: scale(1.03);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    ::after,
    ::before {
      border-color: var(--blueNeored);
      width: 100%;
      height: 100%;
    }
  }
`

export const ServicesIcon = styled.div`
  margin-bottom: 10px;
`

export const ServicesH2 = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`

export const ServicesText = styled.p`
  font-size: 16px;
  color: #5d5d5d;
  text-align: center;
  padding: 1rem;
`
