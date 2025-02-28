import * as React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import TemplateHeroSlider from "../components/TemplateHeroSlider"
import Servicios from "../components/Servicios"
import TemplateBrands from "../components/TemplateBrands"
import TemplateResponsableCluster from "../components/TemplateResponsableCluster"
import NovedadConVideo from "../components/NovedadConVideo"
import NovedadConImagenes from "../components/NovedadConImagenes"
import TemplateTreeCards from "../components/TemplateTreeCards"
import { ServiciosSaneamientoData } from "../data/ServiciosData"
import { datos_saneamiento } from "../data/datosClusters"
import { ResponsableClusterObrasSaneamiento } from "../data/TelefonosData"
import {
  novedadesSaneamientoIrigoyen,
  saneamientoIntro,
} from "../data/NovedadesData"
const Saneamiento = ({ data }) => {
  const saneamientoIntroduccion = data.saneamientoIntro.edges
  return (
    <Layout>
      <Seo title="Obras de Saneamiento" />
      <TemplateHeroSlider
        imagenesSlider={data.allFile.edges}
        datos_energia={datos_saneamiento}
      />
      <TemplateResponsableCluster
        responsable={ResponsableClusterObrasSaneamiento}
        columnas="4"
      />
      <NovedadConImagenes
        imgNoticias={saneamientoIntroduccion}
        novedad={saneamientoIntro}
      />
      <TemplateTreeCards
        cards={data.allSaneamientoLoteosUrbanosJson.edges}
        tituloCards="Nuestros servicios de construcción"
        columnas="3"
      />

      <NovedadConVideo novedad={novedadesSaneamientoIrigoyen} />
      <Servicios {...ServiciosSaneamientoData} />
      <TemplateBrands slidersbrands={data.slidersbrands.edges} />
    </Layout>
  )
}

export default Saneamiento

export const querySaneamiento = graphql`
  query {
    saneamientoIntro: allFile(
      filter: { relativeDirectory: { eq: "saneamiento/saneamiento-intro" } }
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
    allFile(filter: { relativeDirectory: { eq: "saneamiento" } }) {
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

    allSaneamientoLoteosUrbanosJson {
      edges {
        node {
          id
          titulo
          items
          thumbnail
          alt
          ruta
        }
      }
    }
    slidersbrands: allFile(
      filter: { relativeDirectory: { eq: "brands/saneamientobrands" } }
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
