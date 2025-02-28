import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import TemplatePaginaProducto from "../../components/TemplatePaginaProducto"
import { tgbtdata } from "../../data/ProductosFabricaData"

const tablerotgbt = ({ data }) => {
  const fotosproducto = data.producto
  return (
    <Layout>
      <Seo title="TGBT | Tableros de Baja Tensión" />
      <TemplatePaginaProducto
        fotosproducto={fotosproducto}
        bandejasescaleradata={tgbtdata}
      />
    </Layout>
  )
}

export default tablerotgbt

export const bpc = graphql`
  {
    producto: allFile(
      filter: { relativeDirectory: { eq: "fabrica/productos/tgbt" } }
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
