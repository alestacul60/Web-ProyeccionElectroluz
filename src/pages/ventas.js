import * as React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import TemplateHeroSlider from "../components/TemplateHeroSlider"
import TemplateGridProveedores from "../components/TemplateGridProveedores"
import TemplateCardProductos from "../components/TemplateCardProductos"
import { datos_ventas } from "../data/datosClusters"

const Ventas = ({ data }) => {


  return (
    <Layout>
      <Seo title="Venta en locales comerciales" />
      <TemplateHeroSlider
        imagenesSlider={data.banners.edges}
        datos_energia={datos_ventas}
      />
       
      <TemplateCardProductos
        productosPromo={data.allProductosLocalesComercialesJson.edges}
      />
     
      <TemplateGridProveedores imagenesProveedores={data.proveedores.edges} />
     
    </Layout>
  )
}

export default Ventas

export const queryVentas = graphql`
  query {
   
    allProductosLocalesComercialesJson {
      edges {
        node {
          id
          alt
          titulo
          marca
          modelo
          descuento
          preciooriginal
          preciocondescuento
          sucursal
          whatsapp
          img {
            childImageSharp {
              gatsbyImageData(
                width: 170
                layout: CONSTRAINED
                height: 170
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
    banners: allFile(filter: { relativeDirectory: { eq: "ventas" } }) {
      edges {
        node {
          base
          childImageSharp {
            gatsbyImageData(
              quality: 90
              transformOptions: { cropFocus: CENTER }
            )
          }
        }
      }
    }

    proveedores: allFile(
      filter: { relativeDirectory: { eq: "brands/ventasbrands" } }
    ) {
      edges {
        node {
          base
          childImageSharp {
            gatsbyImageData(
              quality: 90
              transformOptions: { cropFocus: CENTER }
            )
          }
        }
      }
    }
  }
`
