import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import TemplatePaginaProducto from "../../components/TemplatePaginaProducto"
import { celda132kvdata } from "../../data/ProductosFabricaData"

const celda132 = ({ data }) => {
  const fotosproducto = data.producto
  return (
    <Layout>
      <Seo title="Celda MT 13.2KV - CB15V-LI/LR" />
      <TemplatePaginaProducto
        fotosproducto={fotosproducto}
        bandejasescaleradata={celda132kvdata}
      />
    </Layout>
  )
}

export default celda132

export const bpc = graphql`
  {
    producto: allFile(
      filter: { relativeDirectory: { eq: "fabrica/productos/celda13_2kv" } }
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
