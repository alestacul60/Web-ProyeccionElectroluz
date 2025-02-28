import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import TemplatePaginaProducto from "../../components/TemplatePaginaProducto"
import { ccmdata } from "../../data/ProductosFabricaData"

const tableroccm = ({ data }) => {
  const fotosproducto = data.producto
  return (
    <Layout>
      <Seo title="CCM | Tableros de Baja Tensión" />
      <TemplatePaginaProducto
        fotosproducto={fotosproducto}
        bandejasescaleradata={ccmdata}
      />
    </Layout>
  )
}

export default tableroccm

export const bpc = graphql`
  {
    producto: allFile(
      filter: { relativeDirectory: { eq: "fabrica/productos/ccm" } }
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
