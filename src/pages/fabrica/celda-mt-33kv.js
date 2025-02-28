import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import TemplatePaginaProducto from "../../components/TemplatePaginaProducto"
import { celda33kvdata } from "../../data/ProductosFabricaData"

const celda33kv = ({ data }) => {
  const fotosproducto = data.producto
  return (
    <Layout>
      <Seo title="Celda MT 33KV - CB33V-LI/LR" />
      <TemplatePaginaProducto
        fotosproducto={fotosproducto}
        bandejasescaleradata={celda33kvdata}
      />
    </Layout>
  )
}

export default celda33kv

export const bpc = graphql`
  {
    producto: allFile(
      filter: { relativeDirectory: { eq: "fabrica/productos/celda33kv" } }
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
