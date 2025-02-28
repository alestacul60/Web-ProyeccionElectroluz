import React, { useState, useEffect } from "react"
import styled from "styled-components"
import ModalGoogleMaps from "../components/Modals/ModalGoogleMaps"
import { SectionContainer } from "../components/styles/GlobalStyles"
import { Container, Row, Col, Accordion } from "react-bootstrap"
import { IoCallOutline, IoLocationOutline } from "react-icons/io5"
import {
  TelefonosPlantasData,
  TelefonosOficinasData,
} from "../data/TelefonosData"
import AOS from "aos"
import "aos/dist/aos.css"

const Telefonos = () => {
  const [model, setModel] = useState(false)
  const [tempData, setTempdata] = useState([])

  const getData = (
    ciudad,
    direccion,
    telefono,
    whatsapp,
    mail,
    google_maps
  ) => {
    let tempData = [ciudad, direccion, telefono, whatsapp, mail, google_maps]

    setTempdata(item => [1, ...tempData])
    return setModel(true)
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true,
      anchorPlacement: "top-bottom",
      offset: 150,
      delay: 100,
    })
  }, [])
  return (
    <>
      <SectionContainer className="d-none d-sm-flex ">
        <Container className="text-center ">
          <Row>
            <Col xs={12} md={6} className="text-end ">
              <TitleBlue>Plantas Industriales</TitleBlue>
              {TelefonosPlantasData.map((item, index) => {
                return (
                  <DataContainer key={index}>
                    <DataCiudad>{item.ciudad}</DataCiudad>
                    <DataLink
                      href="#"
                      onClick={() =>
                        getData(
                          item.ciudad,
                          item.direccion,
                          item.telefono,
                          item.whatsapp,
                          item.google_maps
                        )
                      }
                    >
                      <IoLocationOutline1 /> {item.direccion}
                    </DataLink>

                    <DataLink href={`tel: ${item.telefono}`}>
                      <IoCallOutline1 />
                      {item.telefono}
                    </DataLink>
                  </DataContainer>
                )
              })}
            </Col>
            <Col xs={12} md={6} className="text-start">
              <TitleBlue>Oficinas Administrativas</TitleBlue>
              {TelefonosOficinasData.map((item, index) => {
                return (
                  <DataContainer key={index}>
                    <DataCiudad>{item.ciudad}</DataCiudad>
                    <DataLink
                      href="#"
                      onClick={() =>
                        getData(
                          item.ciudad,
                          item.direccion,
                          item.telefono,
                          item.whatsapp,
                          item.google_maps
                        )
                      }
                    >
                      <IoLocationOutline1 /> {item.direccion}
                    </DataLink>

                    <DataLink href={`tel: ${item.telefono}`}>
                      <IoCallOutline1 />
                      {item.telefono}
                    </DataLink>
                  </DataContainer>
                )
              })}
            </Col>
          </Row>
        </Container>
      </SectionContainer>
      <SectionContainer className="d-sm-none">
        <TitleBlue>Plantas Industriales</TitleBlue>
        <Container>
          <Accordion flush>
            {TelefonosPlantasData.map((item, index) => {
              return (
                <Accordion.Item eventKey={item.ind} key={index}>
                  <Accordion.Header>{item.ciudad}</Accordion.Header>
                  <Accordion.Body>
                    <DataLink
                      href="#"
                      onClick={() =>
                        getData(
                          item.ciudad,
                          item.direccion,
                          item.telefono,
                          item.whatsapp,
                          item.google_maps
                        )
                      }
                    >
                      <IoLocationOutline1 /> {item.direccion}
                    </DataLink>
                    <DataLink href={`tel: ${item.telefono}`}>
                      <IoCallOutline1 />
                      {item.telefono}
                    </DataLink>
                  </Accordion.Body>
                </Accordion.Item>
              )
            })}
          </Accordion>{" "}
        </Container>

        <TitleBlue className="d-sm-none">Oficinas Administrativas</TitleBlue>
        <Container>
          <Accordion className="d-sm-none" flush>
            {TelefonosOficinasData.map((item, index) => {
              return (
                <Accordion.Item eventKey={item.ind} key={index}>
                  <Accordion.Header>{item.ciudad}</Accordion.Header>
                  <Accordion.Body>
                    <DataLink
                      href="#"
                      onClick={() =>
                        getData(
                          item.ciudad,
                          item.direccion,
                          item.telefono,
                          item.whatsapp,
                          item.google_maps
                        )
                      }
                    >
                      <IoLocationOutline1 /> {item.direccion}
                    </DataLink>
                    <DataLink href={`tel: ${item.telefono}`}>
                      <IoCallOutline1 />
                      {item.telefono}
                    </DataLink>
                  </Accordion.Body>
                </Accordion.Item>
              )
            })}
          </Accordion>{" "}
        </Container>
      </SectionContainer>

      {model && (
        <ModalGoogleMaps
          ciudad={tempData[1]}
          direccion={tempData[2]}
          telefono={tempData[3]}
          whatsapp={tempData[4]}
          mail={tempData[5]}
          google_maps={tempData[6]}
          model={model}
          hide={() => {
            setModel(false)
          }}
        />
      )}
    </>
  )
}

export default Telefonos

const DataContainer = styled.div`
  padding: 1rem;
`
const TitleBlue = styled.span`
  font-size: 1.6rem;
  color: var(--blueOscuro);
  font-weight: 700;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--blueNeored);
`
const DataCiudad = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--blueOscuro);
  margin-bottom: 1 rem;
`
export const DataLink = styled.a`
  display: block;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: var(--grisoscuro);
  margin-bottom: 0.1rem;
  &:hover {
    color: var(--blueNeored);
    cursor: pointer;
  }
`

export const IoCallOutline1 = styled(IoCallOutline)`
  margin-right: 5px;
  color: var(--coloriconotelefonos);
  font-size: var(--iconotelefonos);
`
export const IoLocationOutline1 = styled(IoLocationOutline)`
  margin-right: 3px;
  color: var(--coloriconotelefonos);
  font-size: var(--iconotelefonos);
`
