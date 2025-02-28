import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import { SectionContainer, AnimatedTitle } from "./styles/GlobalStyles"
import "../components/InfoTexto.css"

const PoliticaDeCalidad = props => {
  return (
    <SectionContainer>
      <Container>
        <Row>
          <Col xs={12} sm={4} className="textosbuenaspracticas">
            <AnimatedTitle2>Comité de Gestión de Calidad</AnimatedTitle2>
            <Subtitulo className="text-dark ">
              Es nuestro propósito, consolidarnos en este mercado globalizado,
              como Empresa de Calidad Internacional.
            </Subtitulo>
            <StaticImage
              className="mt-3"
              src="../assets/images/certificaciones/isooriginal.jpg"
              alt="certificacion iso"
            />
          </Col>
          <Col xs={12} sm={8} className="text-dark">
            <Texto>
              Los siguientes principios son los que conforman la Política de
              Calidad de la Empresa:
            </Texto>
            <Item className="">
              Asegurar la calidad uniforme de los productos elaborados, los que
              cumplirán con estándares establecidos y así brindar un uso seguro
              y apropiado, garantizando a los clientes, la plena satisfacción a
              sus requerimientos y/o especificaciones.
            </Item>
            <Item className="">
              La calidad no está entendida como el resultado del azar ni de
              ajustes técnicos aislados, sino que está instalada como un{" "}
              <strong>proceso sistemático</strong> que comprende a todos los
              sectores de la empresa y requiere la participación de los
              proveedores y se extiende a los clientes
            </Item>
            <Item className="">
              La importancia que se le otorga a la <strong>calidad</strong>, se
              manifiesta mucho antes de que se concrete el producto final,
              abarcando:
            </Item>
            <Textoitems className="ps-5">
              La Gestión Comercial <br />
              Las Compras <br /> El Diseño y los Procesos <br /> La Instalación
              <br />
              El Servicio de Pos Venta
            </Textoitems>
            <Item className="">
              Esta intención manifiesta de Política de Calidad, solo puede ser
              ejecutada, con la plena ayuda y participación de todos los
              integrantes de Proyección Electroluz SRL, quienes contribuirán a
              mantener y evaluar el Sistema de Calidad, informando los
              contratiempos, sugiriendo mejoras, cooperando en auditorias y
              cumpliendo con los procedimientos establecidos y, es por ello, la
              previsión de esta Dirección en suministrar los elementos técnicos,
              la capacitación y entrenamiento necesarios, junto con la debida
              motivación.
            </Item>
            <Item className="">
              Por otro lado, se mantendrán las necesarias previsiones para que
              los productos elaborados cumplan con las disposiciones legales,
              referidas a la seguridad y al medio ambiente.
            </Item>
            <Texto>
              Con esto, la Organización define y documenta su Política de
              Calidad y para conseguir todo lo antedicho, adopta:
            </Texto>
            <Texto className="fst-italic fw-bold">
              Diseño, Comercialización, Fabricación, Automatización y Montaje
              llave en mano de Proyectos Eléctricos aplicables a la generación y
              distribución de energía en Baja, Media y Alta Tensión, a Procesos
              Industriales, Obras de Infraestructura y Saneamiento, generación
              de energías renovables y sustentables.
            </Texto>
            <Texto>
              Con el total convencimiento de que es el camino más adecuado para
              lograr el propósito, la Dirección de Proyección Electroluz SRL,
              declara su compromiso y responsabilidad en la implementación de
              este Sistema.
            </Texto>
            <Row className="text-center">
              <Col>
                <StaticImage
                  className="rounded-circle w-50"
                  src="../assets/images/certificaciones/jorge.jpg"
                  alt="Jorge Raúl Faccioli socio gerente"
                />
                <SocioGerente className="fw-bold mt-3">
                  Jorge Raúl Faccioli
                </SocioGerente>
                <Socio>Socio Gerente</Socio>
              </Col>
              <Col>
                <StaticImage
                  className="rounded-circle w-50"
                  src="../assets/images/certificaciones/graciela.jpg"
                  alt="Graciela Raquel Faccioli socio gerente"
                />
                <SocioGerente className="fw-bold mt-3">
                  Graciela Raquel Faccioli
                </SocioGerente>
                <Socio>Socio Gerente</Socio>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </SectionContainer>
  )
}

export default PoliticaDeCalidad

const AnimatedTitle2 = styled(AnimatedTitle)`
  padding-top: 0;
  font-size: 20px;
`
const Subtitulo = styled.p`
  margin-top: 2rem;
`
const Texto = styled.p``
const Item = styled.li`
  text-align: justify;
  padding: 5px 0;
`
const SocioGerente = styled.p`
  padding: 0;
  margin-bottom: 1px;
`
const Socio = styled.p`
  padding-top: 2px;
`
const Textoitems = styled(Texto)`
  color: var(--blueNeored);
`
