import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import {
  SectionContainer,
  AnimatedTitle,
} from "../components/styles/GlobalStyles"

function TemplateGoogleDirecciones() {
  return (
    <SectionContainer>
      <AnimatedTitle>Visitá nuestros locales comerciales</AnimatedTitle>
      <Container>
        <Row className="">
          <Col xs={12} sm={4} className="text-center ">
            <NombreSucursal>Sucursal Reconquista</NombreSucursal>
            <div className="ratio ratio-4x3">
              <iframe
                className="GoogleMap"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9856.012246135577!2d-59.644171520463004!3d-29.146203677730725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x49a1a809345ab3f!2sProyeccion%20Electroluz%20S.R.L.!5e0!3m2!1ses!2sar!4v1604086458382!5m2!1ses!2sar"
                title="Sucursal reconquista"
                width={400}
                height={350}
                frameBorder={0}
                aria-hidden={false}
              ></iframe>
            </div>
            <DireccionSucursal>
              Patricio Diez 175 - Reconquista - Sta fe
            </DireccionSucursal>
          </Col>
          <Col xs={12} sm={4} className="text-center ">
            <NombreSucursal>Sucursal Avellaneda</NombreSucursal>
            <div className="ratio ratio-4x3">
              <iframe
                className="GoogleMap"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13943.20411417926!2d-59.664078!3d-29.111555!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaecd93a5f823f49a!2sProyecci%C3%B3n%20Electroluz!5e0!3m2!1ses!2sar!4v1604095271982!5m2!1ses!2sar"
                title="Sucursal avellaneda"
                width={400}
                height={350}
                frameBorder={0}
                aria-hidden={false}
              ></iframe>
            </div>
            <DireccionSucursal>
              Calle 2 Nº 50 - Avellaneda - Sta fe
            </DireccionSucursal>
          </Col>
          <Col xs={12} sm={4} className=" text-center ">
            <NombreSucursal>Sucursal San Lorenzo</NombreSucursal>
            <div className="ratio ratio-4x3">
              <iframe
                title="Sucursal San lorenzo"
                className="GoogleMap"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13424.69006661744!2d-60.737723!3d-32.7346095!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5d04a2cbb29a6739!2sProyecci%C3%B3n%20Electroluz%20S.R.L.!5e0!3m2!1ses!2sar!4v1604094979431!5m2!1ses!2sar"
                width={400}
                height={350}
                frameBorder={0}
                aria-hidden={false}
              ></iframe>
            </div>
            <DireccionSucursal>
              Blvd. Oroño 938 - San Lorenzo - Sta fe
            </DireccionSucursal>
          </Col>
        </Row>
      </Container>
    </SectionContainer>
  )
}

export default TemplateGoogleDirecciones

const NombreSucursal = styled.h4`
  color: var(--blueOscuro);
  font-weight: 600;
`
const DireccionSucursal = styled.p`
  font-size: 14px;
  font-weight: 600;
`
