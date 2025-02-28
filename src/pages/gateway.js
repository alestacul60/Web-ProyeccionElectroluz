import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TemplatePaginaProducto from "../components/TemplatePaginaProducto"
import { gatewayData } from "../data/ProductosFabricaData"

const gateway = ({ data }) => {
  const fotosproducto = data.producto
  return (
    <Layout>
      <Seo title="Gateway IOT WIFI " />
      <TemplatePaginaProducto
        fotosproducto={fotosproducto}
        bandejasescaleradata={gatewayData}
      />
    </Layout>
  )
}

export default gateway

export const bpc = graphql`
  {
    producto: allFile(
      filter: { relativeDirectory: { eq: "automatismosActividades/gateway" } }
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
   
  }
`
