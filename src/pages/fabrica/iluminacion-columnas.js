import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import TemplatePaginaProducto from "../../components/TemplatePaginaProducto"
import { columnasiluminaciondata } from "../../data/ProductosFabricaData"

const columnasiluminacion = ({ data }) => {
  const fotosproducto = data.producto
  return (
    <Layout>
      <Seo title="Columnas de Iluminación" />
      <TemplatePaginaProducto
        fotosproducto={fotosproducto}
        bandejasescaleradata={columnasiluminaciondata}
      />
    </Layout>
  )
}

export default columnasiluminacion

export const bpc = graphql`
  {
    producto: allFile(
      filter: {
        relativeDirectory: { eq: "fabrica/productos/columnaIluminacion" }
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
