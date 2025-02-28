import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TemplateHeroSlider from "../components/TemplateHeroSlider"
import RecursosHumanos from "../components/RecursosHumanos"
import MisionyValores from "../components/MisionyValores"
import { datos_rrhh } from "../data/datosClusters"

const recursoshumanos = ({ data }) => (
  <Layout>
    <Seo title="Recursos Humanos" />
    <TemplateHeroSlider
      imagenesSlider={data.allFile.edges}
      datos_energia={datos_rrhh}
    />
    <RecursosHumanos slidersbrands={data.slidersbrands.edges} />
    <MisionyValores />
  </Layout>
)

export default recursoshumanos

export const recursoshumanosquery = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "recursos-humanos-portada" } }) {
      edges {
        node {
          base
          childImageSharp {
            gatsbyImageData(
              quality: 90
              transformOptions: { cropFocus: CENTER }
            )
          }
        }
      }
    }
    slidersbrands: allFile(
      filter: { relativeDirectory: { eq: "recursos-humanos-galeria" } }
    ) {
      edges {
        node {
          base
          childImageSharp {
            gatsbyImageData(
              quality: 90
              transformOptions: { cropFocus: CENTER }
            )
          }
        }
      }
    }
  }
`
