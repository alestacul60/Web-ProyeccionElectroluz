import * as React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import NuestrasUnidades from "../components/NuestrasUnidades"
import InfoSection from "../components/InfoSection"
import InfoSectionVideo from "../components/InfoSectionVideo"
import NumerosXSector from "../components/NumerosXSector"
import DoubleColor from "../components/DoubleColor"
import SliderProductosFabrica from "../components/SliderProductosFabrica"
import Telefonos from "../components/Telefonos"
import Email from "../components/Email"
import { seccionportada } from "../data/TextosGenerales"
import { NumerosHomeData } from "../data/NumerosHomeData"
import HeroQuery from "../components/HeroQuery"

const IndexPage = ({ data }) => {
  const videoPortada = data.allFile.edges[0].node.publicURL
  const imgPortada = data.imgmobile.edges[0].node.publicURL

  return (
    <Layout>
      <Seo title="Home" />
      <HeroQuery videoPortada={videoPortada} imgPortada={imgPortada} />
      <NuestrasUnidades />
      <InfoSectionVideo />
      <InfoSection {...seccionportada} />
      <NumerosXSector {...NumerosHomeData} />
      <DoubleColor />
      <SliderProductosFabrica productos={data.allProductosPortadaJson.edges} />
      <Telefonos />
      <Email />
    </Layout>
  )
}

export default IndexPage

export const queryFabrica = graphql`
  {
    allFile(filter: { name: { eq: "portada01-22" } }) {
      edges {
        node {
          base
          publicURL
        }
      }
    }
    imgmobile: allFile(filter: { name: { eq: "Portada_Mobile" } }) {
      edges {
        node {
          base
          publicURL
        }
      }
    }
    allClusterRenovableJson {
      edges {
        node {
          id
          desafios
          desafio
          alt
          img 
          titulo
        }
      }
    }

    allProductosPortadaJson {
      edges {
        node {
          id
          alt
          subtitulo
          titulo
          ruta
          img 
        }
      }
    }
  }
`
