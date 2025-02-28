import React from "react"
import { FaWhatsapp, FaEnvelope } from "react-icons/fa"
import { Container, Row, Col } from "react-bootstrap"
import {
  SectionContainer,
  AnimatedTitle,
  Asesor,
  CargoCluster,
  Asesorate,
  LinkComunica,
} from "./styles/GlobalStyles"

const TemplateResponsableCluster = ({ responsable, columnas }) => {
  return (
    <SectionContainer>
      <AnimatedTitle>Comunicate con nosotros</AnimatedTitle>
      <Container>
        <Row className="justify-content-center">
          {responsable.map((persona, key) => {
            return (
              <Col key={key} xs={12} sm={columnas} lg={columnas}>
                <Asesor className="">
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
        </Row>
      </Container>
    </SectionContainer>
  )
}

export default TemplateResponsableCluster
