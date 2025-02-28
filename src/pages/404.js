import * as React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import LogoEmpresa from "../components/LogoEmpresa"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

const Error = () => (
  <Layout>
    <Container className="mt-5 mb-5 pt-5 pb-5 text-center">
      <Row>
        <Col xs={12} sm={6}>
          <LogoEmpresa />
        </Col>
        <Col xs={12} sm={6} className="text-sm-start">
          <Titulo className="mt-5 pt-5">Página no encontrada</Titulo>
          <Parrafo className="pt-3 pb-3">
            La página que estás buscando pudo haber sido removida, renombrada o
            no está dispoonible temporalmente.
          </Parrafo>
          <Linkn to="/">Volver a página de inicio</Linkn>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default Error

const Titulo = styled.h1`
  font-size: 38px;
  color: var(--blueOscuro);
  font-weight: 700;
`
const Linkn = styled(Link)`
  display: block;
  text-decoration: none;
  color: var(--blueNeored);
  font-weight: 600;
  &:hover {
    color: var(--blueOscuro);
  }
`
const Parrafo = styled.p``
