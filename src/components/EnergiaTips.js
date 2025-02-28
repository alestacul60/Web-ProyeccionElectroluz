import React from "react"
import { EnergiaTipsData } from "../data/EnergiaTipsData"
import { SectionContainer } from "./styles/GlobalStyles"
import {
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesText,
  ServicesH2,
} from "./Services"

const EnergiaTips = () => {
  return (
    <SectionContainer>
      <ServicesWrapper>
        {EnergiaTipsData.map((item, index) => {
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

export default EnergiaTips
