import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaWhatsapp, FaEnvelope } from "react-icons/fa"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { ButtonProduct } from "./NuestrasUnidades"
import { ResponsableClusterObrasFabricacion } from "../data/TelefonosData"
import {
  SectionContainer,
  AnimatedTitle,
  CargoCluster,
  LinkComunica,
  Asesorate,
} from "./styles/GlobalStyles"

const TemplateFabricaGrid = data => {
  const nodos = data.productosdestacados
  return (
    <SectionContainer>
      <AnimatedTitle>Conocé nuestros productos</AnimatedTitle>
      <Container fluid>
        <Row>
          <Col xs={12} sm={3}>
            <Container className="text-center eliminopaddingcontainer">
              <AsesorateTitulo>Asesorate:</AsesorateTitulo>
              {ResponsableClusterObrasFabricacion.map((persona, index) => {
                return (
                  <Col xs={12}>
                    <Asesor className="" key={index}>
                      <Asesorate>{persona.nombre}</Asesorate>
                      <CargoCluster>{persona.cargo}</CargoCluster>
                      <LinkComunica href={`mailto:${persona.mail}`}>
                        <FaEnvelope className="me-1" /> {persona.mail}
                      </LinkComunica>

                      <LinkComunica
                        href={`https://wa.me/${persona.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaWhatsapp className="me-1" />+{persona.whatsapp}
                      </LinkComunica>
                    </Asesor>
                  </Col>
                )
              })}
            </Container>
          </Col>
          <Col xs={12} sm={7} lg={9} className="FondoProductos">
            <Container className="eliminopaddingcontainer">
              <Row xs="auto" className="auto pt-2 ps-0 pe-0">
                {nodos.map((nodo, index) => {
                  return (
                    <Col xs={12} sm={4} lg={3} xxl={2} className="" key={index}>
                      <Card>
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

                          <ButtonProduct to={nodo.node.ruta}>
                            Ver Producto
                          </ButtonProduct>
                        </Col>
                      </Card>
                    </Col>
                  )
                })}
              </Row>
            </Container>
          </Col>
          {/* <Col xs={12} sm={3} className="d-sm-none">
            <Container>
              <Asesor>
                <Asesorate>Asesoramiento y cotizaciones</Asesorate>
                <Telefono>+54 34824 12635</Telefono>
              </Asesor>
            </Container>
          </Col> */}
        </Row>
      </Container>
    </SectionContainer>
  )
}

export default TemplateFabricaGrid

const Card = styled.div`
  background-color: var(--white);
  width: 210px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  /* padding: 0 1rem; */

  @media screen and (max-width: 460px) {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
  }
`
const AsesorateTitulo = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: var(--blueOscuro);
  padding-top: 1rem;
`

const Titulo = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: var(--grisoscuro);
  padding-top: 2rem;
  @media screen and (max-width: 460px) {
    padding-top: 0.5rem;
  }
`
const Asesor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  border-radius: 3px;
  background-color: var(--blueOscuro);
  text-align: center;
  padding: 1rem 0.5rem;
`

// const Telefono = styled.p`
//   color: var(--white);
// `
