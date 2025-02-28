import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import TemplatePaginaProducto from "../../components/TemplatePaginaProducto"
import { electrocentrosdata } from "../../data/ProductosFabricaData"

const electrocentros = ({ data }) => {
  const fotosproducto = data.producto
  return (
    <Layout>
      <Seo title="Electrocentros | Shelter" />
      <TemplatePaginaProducto
        fotosproducto={fotosproducto}
        bandejasescaleradata={electrocentrosdata}
      />
    </Layout>
  )
}

export default electrocentros

export const bpc = graphql`
  {
    producto: allFile(
      filter: { relativeDirectory: { eq: "fabrica/productos/electrocentros" } }
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
      totalCount
    }
    slider: allFile(
      filter: {
        relativeDirectory: { eq: "fabrica/productos/bandejaescalera/slider" }
      }
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
      totalCount
    }
  }
`
