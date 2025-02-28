import * as React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import TemplateHeroSlider from "../components/TemplateHeroSlider"
import Servicios from "../components/Servicios"
import TemplateBrands from "../components/TemplateBrands"
import TemplateResponsableCluster from "../components/TemplateResponsableCluster"
import { ServiciosInfraestructuraData } from "../data/ServiciosData"
import { datos_infraestructura } from "../data/datosClusters"
import { ResponsableClusterObrasInfraestructura } from "../data/TelefonosData"

const Infraestructura = ({ data }) => (
  <Layout>
    <Seo title="Infraestructura" />
    <TemplateHeroSlider
      imagenesSlider={data.allFile.edges}
      datos_energia={datos_infraestructura}
    />
    <TemplateResponsableCluster
      responsable={ResponsableClusterObrasInfraestructura}
      columnas="4"
    />
    <Servicios {...ServiciosInfraestructuraData} />
    <TemplateBrands slidersbrands={data.slidersbrands.edges} />
  </Layout>
)

export default Infraestructura

export const queryInfraestructura = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "infraestructura" } }) {
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
      filter: { relativeDirectory: { eq: "brands/infraestructurabrands" } }
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
