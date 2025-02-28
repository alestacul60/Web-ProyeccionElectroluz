import * as React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import TemplateHeroSlider from "../components/TemplateHeroSlider"
import NumerosXSector from "../components/NumerosXSector"
import Servicios from "../components/Servicios"
import TemplateBrands from "../components/TemplateBrands"
import TemplateResponsableCluster from "../components/TemplateResponsableCluster"
import NovedadConImagenes from "../components/NovedadConImagenes"
import NovedadConImagenesInv from "../components/NovedadConImagenesInv"
import { NumerosIndustriaData } from "../data/NumerosHomeData"
import { ServiciosIndustriaData } from "../data/ServiciosData"
import { datos_industria } from "../data/datosClusters"
import { ResponsableClusterObrasIndustriales } from "../data/TelefonosData"
import {
  novedadesIndustriaCaiasa,
  novedadesIndustriaRenova3026,
  novedadesIndustriaVasa2421,
} from "../data/NovedadesData"
const Industria = ({ data }) => {
  const imgCaiasa2076 = data.sliderCaiasa2676.edges
  const imgVasa2421 = data.sliderVasa2421.edges
  const imgRenova3026 = data.sliderRenova3026.edges

  return (
    <Layout>
      <Seo title="Industria" />
      <TemplateHeroSlider
        imagenesSlider={data.allFile.edges}
        datos_energia={datos_industria}
      />
      <NumerosXSector {...NumerosIndustriaData} />
      <TemplateResponsableCluster
        responsable={ResponsableClusterObrasIndustriales}
        columnas="4"
      />
      <NovedadConImagenes
        novedad={novedadesIndustriaVasa2421}
        imgNoticias={imgVasa2421}
      />

      <NovedadConImagenesInv
        novedad={novedadesIndustriaRenova3026}
        imgNoticias={imgRenova3026}
      />

      <NovedadConImagenes
        novedad={novedadesIndustriaCaiasa}
        imgNoticias={imgCaiasa2076}
      />

      <Servicios {...ServiciosIndustriaData} />
      <TemplateBrands slidersbrands={data.slidersbrands.edges} />
    </Layout>
  )
}

export default Industria

export const queryIndustria = graphql`
  query {
    sliderRenova3026: allFile(
      filter: { relativeDirectory: { eq: "industria/renova3026" } }
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
    sliderVasa2421: allFile(
      filter: { relativeDirectory: { eq: "industria/vasa2421" } }
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
    sliderCaiasa2676: allFile(
      filter: { relativeDirectory: { eq: "industria/caiasa2676" } }
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

    allFile(filter: { relativeDirectory: { eq: "industria" } }) {
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
      filter: { relativeDirectory: { eq: "brands/industriabrands" } }
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
