import React from "react"
import styled from "styled-components"
import { Container, Table } from "react-bootstrap"
import { SectionContainer, AnimatedTitle } from "./styles/GlobalStyles"
import { ContactosDatos } from "../data/TelefonosData"
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa"
import { DataLink } from "../components/Telefonos"

const Contactos = () => {
  return (
    <SectionContainer>
      <AnimatedTitle>Comunicación y contactos</AnimatedTitle>
      <Parrafo>
        Para ofrecerte una respuesta inmediata y personalizada, a continuación,
        presentamos una lista de correos electrónicos y teléfonos del staff que
        corresponden a los diferentes sectores, para poder comunicarte con
        nosotros.
      </Parrafo>
      <Container>
        <Table striped bordered hover size="sm" responsive>
          <thead>
            <tr>
              <th>Sector</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Interno</th>
            </tr>
          </thead>
          <tbody>
            {ContactosDatos.map(contacto => {
              return (
                <tr key={contacto.interno}>
                  <td>{contacto.nombre}</td>
                  <td>
                    <DataLink href={`mailto: ${contacto.mail}`}>
                      <FaEnvelope className="me-2" />
                      {contacto.mail}
                    </DataLink>
                  </td>
                  <td>
                    <DataLink href={`tel: ${contacto.telefono}`}>
                      <FaPhoneAlt className="me-1 " />
                      {contacto.telefono}
                    </DataLink>
                  </td>
                  <td>{contacto.interno}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Container>
    </SectionContainer>
  )
}

export default Contactos

const Parrafo = styled.p``
