import * as React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import TemplateHeroSlider from "../components/TemplateHeroSlider"
import TemplateBrands from "../components/TemplateBrands"
import TemplateAutomatismo from "../components/TemplateAutomatismo"
import TemplateResponsableCluster from "../components/TemplateResponsableCluster"
import { datos_automatismos } from "../data/datosClusters"
import {
  automatismos_programacion,
  automatismos_corrientes_debiles,
  automatismos_telegestion,
  automatismos_vinculacionIT,
  automatismos_industria40,
  automatismos_building,
} from "../data/datosClusters"
import { ResponsableClusterObrasAutomatismos } from "../data/TelefonosData"

const Automatismo = ({ data }) => {
  const fotosprogramacion = data.programacion.edges
  const fotosindustria40 = data.industria40.edges
  const fotostelegestion = data.telegestion.edges
  const fotosbuilding = data.building.edges
  const fotoscorrientesDebiles = data.corrientesDebiles.edges
  const fotosvinculacionIt = data.vinculacionIt.edges
  return (
    <Layout>
      <Seo title="Obras de Automatismos" />

      <TemplateHeroSlider
        imagenesSlider={data.allFile.edges}
        datos_energia={datos_automatismos}
      />
      <TemplateResponsableCluster
        responsable={ResponsableClusterObrasAutomatismos}
        columnas="4"
      />
      <TemplateAutomatismo
        textos={automatismos_programacion}
        fotosproducto={fotosprogramacion}
        ColorFondo={true}
      />
      <TemplateAutomatismo
        textos={automatismos_corrientes_debiles}
        fotosproducto={fotoscorrientesDebiles}
        ColorFondo={false}
      />
      <TemplateAutomatismo
        textos={automatismos_building}
        fotosproducto={fotosbuilding}
        ColorFondo={true}
      />
      <TemplateAutomatismo
        textos={automatismos_vinculacionIT}
        fotosproducto={fotosvinculacionIt}
        ColorFondo={false}
      />
      <TemplateAutomatismo
        textos={automatismos_telegestion}
        fotosproducto={fotostelegestion}
        ColorFondo={true}
      />
      <TemplateAutomatismo
        textos={automatismos_industria40}
        fotosproducto={fotosindustria40}
        ColorFondo={false}
      />
      <TemplateBrands slidersbrands={data.slidersbrands.edges} />
    </Layout>
  )
}

export default Automatismo

export const queryEnergia = graphql`
  query {
    programacion: allFile(
      filter: {
        relativeDirectory: { eq: "automatismosActividades/programacion" }
      }
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData(width: 350, height: 500)
          }
        }
      }
    }
    industria40: allFile(
      filter: {
        relativeDirectory: { eq: "automatismosActividades/industria40" }
      }
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData(width: 350, height: 500)
          }
        }
      }
    }
    building: allFile(
      filter: { relativeDirectory: { eq: "automatismosActividades/building" } }
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData(width: 350, height: 500)
          }
        }
      }
    }
    corrientesDebiles: allFile(
      filter: {
        relativeDirectory: { eq: "automatismosActividades/corrientesDebiles" }
      }
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData(width: 350, height: 500)
          }
        }
      }
    }
    vinculacionIt: allFile(
      filter: {
        relativeDirectory: { eq: "automatismosActividades/vinculacionIt" }
      }
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData(width: 350, height: 500)
          }
        }
      }
    }
    telegestion: allFile(
      filter: {
        relativeDirectory: { eq: "automatismosActividades/telegestion" }
      }
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData(width: 350, height: 500)
          }
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: "automatismo" } }) {
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
      filter: { relativeDirectory: { eq: "brands/automatismosbrands" } }
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
