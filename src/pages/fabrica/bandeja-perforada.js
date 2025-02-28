import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import TemplatePaginaProducto from "../../components/TemplatePaginaProducto"
import { bandejasperforadadata } from "../../data/ProductosFabricaData"

const bandejaperforada = ({ data }) => {
  const fotosproducto = data.producto
  return (
    <Layout>
      <Seo title="Bandejas Portacables tipo perforada" />
      <TemplatePaginaProducto
        fotosproducto={fotosproducto}
        bandejasescaleradata={bandejasperforadadata}
      />
    </Layout>
  )
}

export default bandejaperforada

export const bpc = graphql`
  {
    producto: allFile(
      filter: {
        relativeDirectory: { eq: "fabrica/productos/bandejaperforada" }
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
