import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import styled from "styled-components"
import { FaAngleRight } from "react-icons/fa"
import { Container, Row, Col, Card } from "react-bootstrap"
import {
  SectionContainer,
  AnimatedTitle,
} from "../../components/styles/GlobalStyles"

const novedades = ({ data }) => {
  const articulos = data.allMdx.nodes
  return (
    <Layout>
      <Seo title="Novedades" />
      {/* <BannerCabecera {...bannernosotros} /> */}
      <SectionContainer>
        <Container>
          <Row>
            <Col xs={12} sm={4} className="paddingderecho">
              <AnimatedTitle className="mb-3">
                Artículos de interés
              </AnimatedTitle>
              <TitleResumen className="text-dark mt-4">
                Encuentre aquí entrevistas y contenido actualizado sobre
                productos y servicios brindados por Proyección Electroluz.
              </TitleResumen>
            </Col>
            <Col xs={12} sm={8}>
              <Container>
                <Row xs={1} md={2} className="ps-md-5 pe-md-5 g-4">
                  {articulos.map((articulo, index) => {
                    return (
                      <Col index={articulo.id}>
                        <Card>
                          <GatsbyImage
                            image={getImage(articulo.frontmatter.portada_image)}
                            alt={articulo.frontmatter.portada_image_alt}
                          />
                          <Card.Body>
                            <CardDate>{articulo.frontmatter.date}</CardDate>
                            <CardDescription>
                              {articulo.frontmatter.resumen}
                            </CardDescription>
                            <Card.Footer className="bg-white">
                              <LinkCard to={articulo.slug}>
                                Ver más <FaAngleRight />
                              </LinkCard>
                            </Card.Footer>
                          </Card.Body>
                        </Card>
                      </Col>
                    )
                  })}
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </SectionContainer>
    </Layout>
  )
}
export default novedades

export const query = graphql`
  query novedades {
    allMdx(
      sort: { fields: frontmatter___date, order: ASC }
      filter: { frontmatter: { filtro: { eq: "novedades" } } }
    ) {
      nodes {
        frontmatter {
          date
          title
          resumen
          portada_image_alt
          portada_image {
            childImageSharp {
              gatsbyImageData(height: 250)
            }
          }
        }
        id
        slug
      }
    }
  }
`

const CardDate = styled.p`
  font-size: 14px;
  font-weight: 300;
  letter-spacing: -0.13px;
  color: var(--grisclaro);
`
const CardDescription = styled.p`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.13px;
  color: var(--grisoscuro);
`
const LinkCard = styled(Link)`
  font-size: 16px;
  color: var(--grisoscuro);
  letter-spacing: -0.2px;
  font-weight: 400;
  margin-top: 10px;
  :hover {
    color: var(--grisoscuro);
    font-weight: 600;
  }
`
const TitleResumen = styled.p`
  padding-left: 1rem;
`
