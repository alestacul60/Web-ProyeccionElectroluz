import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import TemplatePaginaProducto from "../../components/TemplatePaginaProducto"
import { bandejasescaleradata } from "../../data/ProductosFabricaData"

const BandejaEscalera = ({ data }) => {
  const fotosproducto = data.producto
  return (
    <Layout>
      <Seo title="Bandejas Portacables tipo escalera" />
      <TemplatePaginaProducto
        fotosproducto={fotosproducto}
        bandejasescaleradata={bandejasescaleradata}
      />
    </Layout>
  )
}

export default BandejaEscalera

export const bpc = graphql`
  {
    producto: allFile(
      filter: { relativeDirectory: { eq: "fabrica/productos/bandejaescalera" } }
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
