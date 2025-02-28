import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Iconos } from "./FooterSidebar"
import AccesoFacebook from "./AccesosComunes/AccesoFacebook"
import AccesoInstagram from "./AccesosComunes/AccesoInstagram"
import AccesoLinkedin from "./AccesosComunes/AccesoLinkedin"
import { Container, Row, Col } from "react-bootstrap"
import { LinkComunica } from "./styles/GlobalStyles"

const Footer = () => {
  return (
    <FooterContent>
      <FooterContainer>
        <FooterImgWrapper>
          <StaticImage
            src="../assets/images/logo/logo-retro.png"
            alt="Logo Proyección Electroluz SRL"
            height={88}
            placeholder="none"
            quality="40"
          />
        </FooterImgWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Secciones</FooterLinkTitle>
            <FooterLink to="/">Inicio</FooterLink>
            <FooterLink to="/nosotros/">Nosotros</FooterLink>
            <FooterLink to="/novedades/">Novedades</FooterLink>
            <FooterLink to="/politicasdecalidad/">
              Política de Calidad
            </FooterLink>
            <FooterLink to="/recursos-humanos/">Recursos Humanos</FooterLink>

            <FooterLink to="/buenaspracticas/">Buenas Prácticas</FooterLink>
            <FooterLink to="/contacto/">Contacto</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Catálogo Online</FooterLinkTitle>
            <FooterLink to="/fabrica/celda-mt-33kv/">Celdas MT 33kV</FooterLink>
            <FooterLink to="/fabrica/celda-mt-13-2kv/">
              Celdas MT 13,2kV
            </FooterLink>
            <FooterLink to="/fabrica/tablero-bt-tgbt/">
              Tableros TGBT
            </FooterLink>
            <FooterLink to="/fabrica/tablero-bt-ccm/">Tableros CCM</FooterLink>
            <FooterLink to="/fabrica/electrocentros/">
              Electrocentros
            </FooterLink>
            <FooterLink to="/fabrica/bandeja-escalera/">
              Bandejas tipo Escalera
            </FooterLink>
            <FooterLink to="/fabrica/bandeja-perforada/">
              Bandejas tipo Perforada
            </FooterLink>
            <FooterLink to="/fabrica/iluminacion-columnas/">
              Columnas de Iluminación
            </FooterLink>
            <FooterLink to="/fabrica/iluminacion-torres/">
              Torres de Iluminación
            </FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Accesos</FooterLinkTitle>
            <FooterLinkExt
              href="http://reconquista.electroluz.com:8901/documentos/"
              target="_top"
            >
              Documentos - Interno
            </FooterLinkExt>
            <FooterLinkExt
              href="https://zimbra.electroluz.com:8443/"
              target="_top"
            >
              WebMail fuera de Oficina
            </FooterLinkExt>
            <FooterLinkExt href="https://172.16.16.9/" target="_top">
              WebMail Interno
            </FooterLinkExt>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle className="mt-5">Seguinos</FooterLinkTitle>
            <Iconos>
              <AccesoFacebook />
              <AccesoInstagram />
              <AccesoLinkedin />
            </Iconos>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterContainer>
      <TodosLosDerechos>
        <Container>
          <Row>
            <Col
              lg={6}
            >{`© ${new Date().getFullYear()} Electroluz | Todos los derechos reservados`}</Col>
            <Col lg={6} className="text-end">
              <LinkComunica
                href={`https://wa.me/5493482318980`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Developed by <strong>NDG</strong>
              </LinkComunica>
            </Col>
          </Row>
        </Container>
      </TodosLosDerechos>
    </FooterContent>
  )
}

export default Footer
const TodosLosDerechos = styled.div`
  margin: auto;
  border-top: 1px solid var(--white);
  width: 90vw;
  padding-bottom: 2rem;
  padding-top: 1rem;
  color: var(--white);
  font-size: 14px;
  font-weight: 300;
`
const FooterContainer = styled.div`
  margin: auto;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  background: var(--black);

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 991px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`
const FooterContent = styled.div`
  background-color: black;
`

const FooterLinksWrapper = styled.div`
  padding-top: 2rem;
`
const FooterLinkTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.15px;
  line-height: 26px;
  margin-bottom: 16px;
`
const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem 2 rem;
  color: var(--white);

  @media screen and(max-width:400px) {
    padding: 1rem;
  } ;
`
const FooterLink = styled(Link)`
  margin-bottom: 0.5rem;
  text-decoration: none;
  font-size: 16px;
  text-align: center;
  width: 100%;
  color: var(--white);
  font-weight: 100;
  transition: all 0.15s ease-in-out;
  &:hover {
    font-weight: 600;
    cursor: pointer;
    color: var(--white);
  }
`
const FooterLinkExt = styled.a`
  margin-bottom: 0.5rem;
  text-decoration: none;
  font-size: 16px;
  text-align: center;
  width: 100%;
  color: var(--white);
  font-weight: 100;
  transition: all 0.15s ease-in-out;
  &:hover {
    font-weight: 600;
    cursor: pointer;
    color: var(--white);
  }
`

const FooterImgWrapper = styled.div`
  margin: 2rem auto;
  height: 50%;
`
