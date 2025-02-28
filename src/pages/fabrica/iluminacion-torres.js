import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import TemplatePaginaProducto from "../../components/TemplatePaginaProducto"
import { torresiluminaciondata } from "../../data/ProductosFabricaData"

const torresiluminacion = ({ data }) => {
  const fotosproducto = data.producto
  return (
    <Layout>
      <Seo title="Torres de Iluminación" />
      <TemplatePaginaProducto
        fotosproducto={fotosproducto}
        bandejasescaleradata={torresiluminaciondata}
      />
    </Layout>
  )
}

export default torresiluminacion

export const bpc = graphql`
  {
    producto: allFile(
      filter: {
        relativeDirectory: { eq: "fabrica/productos/torreIluminacion" }
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
