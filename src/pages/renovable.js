import * as React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import TemplateHeroSlider from "../components/TemplateHeroSlider"
import NumerosXSector from "../components/NumerosXSector"
import Servicios from "../components/Servicios"
import TemplateBrands from "../components/TemplateBrands"
import TemplateTreeCards from "../components/TemplateTreeCards"
import TemplateResponsableCluster from "../components/TemplateResponsableCluster"
import NoticiaConImagenes from "../components/NoticiaConImagenes"
import { ResponsableClusterEnergiaRenovable } from "../data/TelefonosData"
import { ServiciosRenovablesData } from "../data/ServiciosData"
import { NumerosRenovablesData } from "../data/NumerosHomeData"
import { datos_renovables } from "../data/datosClusters"
import { renovablesSistBESS, renovableCutralco } from "../data/NovedadesData"
import NovedadConImagenes from "../components/NovedadConImagenes"

const renovable = ({ data }) => {
  const imgNoticiasBess = data.sliderBess.edges
  const imgCutralco = data.cutralco.edges
  return (
    <Layout>
      <Seo title="Energías Renovables" />
      <TemplateHeroSlider
        imagenesSlider={data.allFile.edges}
        datos_energia={datos_renovables}
      />
      <NumerosXSector {...NumerosRenovablesData} />
      <TemplateResponsableCluster
        responsable={ResponsableClusterEnergiaRenovable}
        columnas="4"
      />
      <NovedadConImagenes
        novedad={renovableCutralco}
        imgNoticias={imgCutralco}
      />
      <NoticiaConImagenes
        noticia={renovablesSistBESS}
        imgNoticias={imgNoticiasBess}
      />
      <Servicios {...ServiciosRenovablesData} />
      <TemplateTreeCards
        cards={data.allSolucionRenovablesJson.edges}
        tituloCards="Soluciones Industriales"
        columnas="3"
      />
      <TemplateTreeCards
        cards={data.allSolucionRenovableHogarJson.edges}
        tituloCards="Soluciones para el hogar"
        columnas="4"
      />
      <TemplateBrands slidersbrands={data.slidersbrands.edges} />
    </Layout>
  )
}

export default renovable

export const queryRenovables = graphql`
  query {
    cutralco: allFile(
      filter: { relativeDirectory: { eq: "renovables/cutralco" } }
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    sliderBess: allFile(
      filter: { relativeDirectory: { eq: "renovables/sistemaBess" } }
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }

    allFile(filter: { relativeDirectory: { eq: "renovables" } }) {
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
      filter: { relativeDirectory: { eq: "brands/renovablesbrands" } }
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
    allSolucionRenovablesJson {
      edges {
        node {
          id
          subtitulo
          titulo
          tituloGris
          descripcion
          thumbnail {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
            }
          }
          alt
          ruta
        }
      }
    }
    allSolucionRenovableHogarJson {
      edges {
        node {
          id
          alt
          descripcion
          subtitulo
          ruta
          titulo
          tituloGris
          thumbnail {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
            }
          }
        }
      }
    }
  }
`
