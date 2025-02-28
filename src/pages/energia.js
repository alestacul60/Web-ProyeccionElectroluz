import * as React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import TemplateHeroSlider from "../components/TemplateHeroSlider"
import Servicios from "../components/Servicios"
import TemplateBrands from "../components/TemplateBrands"
import TemplateResponsableCluster from "../components/TemplateResponsableCluster"
import { datos_energia } from "../data/datosClusters"
import { ResponsableClusterObrasEnergia } from "../data/TelefonosData"
import { ServiciosEnergiaLineasData } from "../data/ServiciosData"
import NoticiaConImagenes from "../components/NoticiaConImagenes"
import {
  estacionGistEnergia,
  energiaCapitel,
  movimientoLineaAlbanesi,
} from "../data/NovedadesData"
import NovedadConImagenes from "../components/NovedadConImagenes"

const Energia = ({ data }) => {
  const imgNoticias = data.sliderGis.edges
  const imgcapitel = data.capitel.edges
  const imgAlbanesi = data.albanesi.edges
  return (
    <Layout>
      <Seo title="Obras de Energía Áereas y Subterráneas" />
      <TemplateHeroSlider
        imagenesSlider={data.allFile.edges}
        datos_energia={datos_energia}
      />
      <TemplateResponsableCluster
        responsable={ResponsableClusterObrasEnergia}
        columnas="4"
      />
      <NoticiaConImagenes
        noticia={movimientoLineaAlbanesi}
        imgNoticias={imgAlbanesi}
      />
      <NovedadConImagenes novedad={energiaCapitel} imgNoticias={imgcapitel} />
      <NoticiaConImagenes
        noticia={estacionGistEnergia}
        imgNoticias={imgNoticias}
      />
      <Servicios {...ServiciosEnergiaLineasData} />
      <TemplateBrands slidersbrands={data.slidersbrands.edges} />
    </Layout>
  )
}
export default Energia

export const queryEnergia = graphql`
  query {
    albanesi: allFile(
      filter: { relativeDirectory: { eq: "energia/corte-albanesi" } }
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
    capitel: allFile(filter: { relativeDirectory: { eq: "energia/capitel" } }) {
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
    sliderGis: allFile(
      filter: { relativeDirectory: { eq: "energia/estacionGis" } }
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

    allFile(filter: { relativeDirectory: { eq: "energia" } }) {
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
      filter: { relativeDirectory: { eq: "brands/energiabrands" } }
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
