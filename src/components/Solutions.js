import React from "react"
import { Row, Tabs, Tab } from "react-bootstrap"
import { SectionContainer } from "../components/styles/GlobalStyles"
import Servicios from "../components/Servicios"
import {
  ServiciosIndustriaData,
  ServiciosEnergiaLineasData,
} from "../data/ServiciosData"
import "../components/Solutions.css"

const Solutions = () => {
  return (
    <>
      <SectionContainer>
        <Row>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className=""
          >
            <Tab
              eventKey="home"
              title="Lineas de transmisión eléctricas"
              className=""
            >
              <Servicios {...ServiciosEnergiaLineasData} />
            </Tab>
            <Tab eventKey="profile" title="Estaciones Transformadoras">
              <Servicios {...ServiciosIndustriaData} />
            </Tab>
          </Tabs>
        </Row>
      </SectionContainer>
    </>
  )
}

export default Solutions
