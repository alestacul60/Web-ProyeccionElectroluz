import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

const SeccionEnDesarrollo = () => (
  <Layout>
    <Seo title="Sección en Desarrollo" />
    <Container className="mt-5 mb-5 pt-5 pb-5 text-center">
      <Row>
        <Col xs={12} sm={6}>
          <StaticImage
            className="mt-3 w-75"
            src="../assets/images/logo/logo.png"
            alt="Seccion en desarrollo"
          />
        </Col>
        <Col xs={12} sm={6} className="text-sm-start">
          <Titulo className="mt-2 pt-2">Sección en desarrollo</Titulo>
          <Parrafo className="pt-3 pb-3">
            Te pedimos disculpas por las molestias ocasionadas, estamos
            trabajando en el contenido de esta sección.
          </Parrafo>
          <Linkn to="/">Volver a página de inicio</Linkn>
          <Linkn to="/nosotros">
            ¿Queres conocer un poco de nuestra historia?
          </Linkn>
          <Linkn to="/fabrica/">¿Conoces nuestros productos?</Linkn>
          <Linkn to="/politicasdecalidad/">Políticas de calidad</Linkn>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default SeccionEnDesarrollo

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
