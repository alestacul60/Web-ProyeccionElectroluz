import * as React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import TemplateHeroSlider from "../../components/TemplateHeroSlider"
import TemplateFabricaGrid from "../../components/TemplateFabricaGrid"
import TemplateBrands from "../../components/TemplateBrands"
import { datos_fabrica } from "../../data/datosClusters"

const Fabrica = ({ data }) => {
  const productosdestacados = data.allProductosPortadaJson.edges

  return (
    <Layout>
      <Seo title="Fabricación de productos" />
      <TemplateHeroSlider
        imagenesSlider={data.allFile.edges}
        datos_energia={datos_fabrica}
      />
      <TemplateFabricaGrid productosdestacados={productosdestacados} />
      <TemplateBrands slidersbrands={data.slidersbrands.edges} />
    </Layout>
  )
}

export default Fabrica

export const queryFabrica = graphql`
  {
    allProductosPortadaJson {
      edges {
        node {
          id
          alt
          subtitulo
          titulo
          ruta
          img {
            childImageSharp {
              gatsbyImageData(
                width: 150
                layout: CONSTRAINED
                height: 150
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: "fabrica" } }) {
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
      filter: { relativeDirectory: { eq: "brands/fabricabrands" } }
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
