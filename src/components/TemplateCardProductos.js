import React, { useState } from "react"

import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container, Row, Col, Button } from "react-bootstrap"
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhoneVolume,
  FaMapMarkerAlt,
  FaFilePdf,
} from "react-icons/fa"
import { TelefonosLocalesComercialesData } from "../data/TelefonosData"

import ModalGoogleMaps from "../components/Modals/ModalGoogleMaps"
import {
  SectionContainer,
  AnimatedTitle,
} from "../components/styles/GlobalStyles"
import EnviarWhatsapp from "../components/EnviarWhatsapp"
import catalogoPDF from "../assets/images/catalogos/LocalesComerciales.pdf"

import Publicidad from "../components/Publicidad"
import publicidad1 from "../assets/images/ventas/publicidades/CAJA_ DE_ EMBUTIR.gif"
import publicidad2 from "../assets/images/ventas/publicidades/ARTEFACTO_ILUMINACION_SOLAR_ 203.gif"
import publicidad3 from "../assets/images/ventas/publicidades/LUMINARIA_EMERGENCIA.gif"

const TemplateCardProductos = data => {
  const nodos = data.productosPromo
  const getData = (
    ciudad,
    direccion,
    telefono,
    whatsapp,
    mail,
    google_maps
  ) => {
    let tempData = [ciudad, direccion, telefono, whatsapp, mail, google_maps]

    setTempdata(local => [1, ...tempData])
    return setModel(true)
  }

  const [model, setModel] = useState(false)
  const [tempData, setTempdata] = useState([])

  return (
    <>
      <SectionContainer>
        <AnimatedTitle>Descubrí los productos que ofrecemos</AnimatedTitle>
        <Container fluid>
          <Row>
            <Col xs={12} sm={5} lg={3}>
              <Container className="text-center eliminopaddingcontainer">
                {TelefonosLocalesComercialesData.map((local, key) => {
                  return (
                    <Asesor className="" key={key}>
                      <Asesorate> Sucursal {local.sucursal}</Asesorate>
                      <LinkComunica
                        href="#"
                        onClick={() =>
                          getData(
                            local.ciudad,
                            local.direccion,
                            local.telefono,
                            local.whatsapp,
                            local.google_maps
                          )
                        }
                      >
                        <FaMapMarkerAlt className="me-1" /> {local.direccion}
                      </LinkComunica>
                      {local.emails?.map((email, index)=>{
                        return(
                          <LinkComunica href={`mailto:${email}`}>
                        <FaEnvelope className="me-1" /> {email}
                      </LinkComunica>
                        )
                      })}
                      <LinkComunica href={`tel: ${local.telefono}`}>
                        <FaPhoneVolume className="me-1" /> {local.telefono}
                      </LinkComunica>
                      <LinkComunica
                        href={`https://wa.me/${local.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaWhatsapp className="me-1" />
                        {local.whatsapp}
                      </LinkComunica>
                    </Asesor>
                  )
                })}
                <Asesor className="">
                  <Asesorate>Descargas</Asesorate>

                  <LinkComunica
                    href={catalogoPDF}
                    download="Catálogo Locales Comerciales Proyección Electroluz"
                  >
                    <FaFilePdf className="me-1" />
                    Catálogo Locales Comerciales
                  </LinkComunica>
                </Asesor>
                <Container className="mt-2 mb-2">
                  <MediosDePago className="">Medios de Pago</MediosDePago>
                  <Row>
                    <Col xs={4}>
                      <StaticImage
                        src="../assets/images/certificaciones/logo-mercadopago.jpg"
                        alt="Mercado Pago"
                        title="Mercado Pago"
                      />
                    </Col>
                    <Col xs={4}>
                      <StaticImage
                        src="../assets/images/certificaciones/logo-transferencia.jpg"
                        alt="Transferencia bancaria"
                        title="Mercado Pago"
                      />
                    </Col>
                    <Col xs={4}>
                      <StaticImage
                        src="../assets/images/certificaciones/logo-visa.jpg"
                        alt="Visa credito"
                        title="Tarjeta de credito/debito"
                      />
                    </Col>
                  </Row>
                </Container>
              </Container>
            </Col>
            <Col xs={12} sm={7} lg={9} className="FondoProductos">
              <Container className="eliminopaddingcontainer">
                <Row
                  xs="auto"
                  className="ps-0 pe-0 justify-content-center justify-content-sm-start"
                >
                  <Publicidad publicidad={publicidad1} />
                  <Publicidad publicidad={publicidad2} />

                  {nodos.map((nodo, key) => {
                    const desc = nodo.node.descuento
                    const preciooriginal = nodo.node.preciooriginal
                    return (
                      <Col xs={12} sm={4} lg={3} xxl={2} className="pe-0 ps-0">
                        <Card key={key}>
                          {desc === "0" ? (
                            <span></span>
                          ) : (
                            <Descuento>{nodo.node.descuento} OFF</Descuento>
                          )}
                          <Col xs={6} sm={12} className="text-center">
                            <GatsbyImage
                              image={getImage(
                                nodo.node.img.childImageSharp.gatsbyImageData
                              )}
                              alt={nodo.node.alt}
                            />
                          </Col>
                          <Col xs={6} sm={12} className="text-center">
                            <Titulo>{nodo.node.titulo}</Titulo>
                            <MarcaModelo>{nodo.node.marca}</MarcaModelo>
                            <MarcaModelo>{nodo.node.modelo}</MarcaModelo>
                            {preciooriginal > "0" ? (
                              <MarcaModelo>
                                <SpanPrecioViejo className="me-2">
                                  ${nodo.node.preciooriginal}
                                </SpanPrecioViejo>
                                - ${nodo.node.preciocondescuento}
                              </MarcaModelo>
                            ) : (
                              <p></p>
                            )}
                            <Buttonn
                              className="w-100"
                              variant="outline-primary"
                              onClick={() => EnviarWhatsapp(nodo)}
                            >
                              <FaWhatsapp className="lead me-2" />
                              CONSULTAR
                            </Buttonn>
                          </Col>
                        </Card>
                      </Col>
                    )
                  })}
                  <Publicidad publicidad={publicidad3} />
                </Row>
              </Container>
            </Col>
            <Col xs={12} sm={3} className="d-sm-none">
              <Container>
                <Asesor>
                  <Asesorate>Asesoramiento y cotizaciones</Asesorate>
                  <Telefono>+54 34824 12635</Telefono>
                </Asesor>
              </Container>
            </Col>
          </Row>
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
export default TemplateCardProductos

const Card = styled.div`
  position: relative;
  background-color: var(--white);
  width: 210px;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  padding: 0 10px;

  @media screen and (max-width: 460px) {
    width: 320px;
    height: 200px;
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
  }
`
const Descuento = styled.p`
  position: absolute;
  top: 10px;
  left: 10px;
  background: red;
  font-size: 14px;
  font-weight: 600;
  color: white;
  padding: 2px 5px;
  border-radius: 2px;
  z-index: 2;
`

const Titulo = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: var(--blueoscuro);
  padding-top: 1rem;
  @media screen and (max-width: 460px) {
    padding-top: 0.5rem;
  }
`
const MarcaModelo = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: var(--grisoscuro);
`

const Asesor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  border-radius: 3px;
  background-color: var(--blueOscuro);
  text-align: center;
  padding: 0.5rem;
`

const Asesorate = styled.h4`
  color: var(--white);
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--blueNeored);
`
const Telefono = styled.p`
  color: var(--white);
`
const Buttonn = styled(Button)`
  border-radius: 0;
  font-size: 0.75rem;;
  justify-self: flex-end;
`
const SpanPrecioViejo = styled.span`
  text-decoration: line-through;
  font-weight: 300;
`
const LinkComunica = styled.a`
  font-size: 0.95rem;
  display: block;
  color: white;
  padding-bottom: 3px;
  text-decoration: none;
  &:hover {
    color: var(--blueNeored);
  }
`
const MediosDePago = styled.h4`
  color: var(--blueOscuro);
  font-weight: 600;
  padding: 1rem 0;
  border-bottom: 1px solid var(--blueNeored);
`

export const DataLink = styled.a`
  display: block;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  color: var(--grisoscuro);
  margin-bottom: 0.1rem;
  &:hover {
    color: var(--blueNeored);
    cursor: pointer;
  }
`
