import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Contactos from "../components/Contactos"
import Telefonos from "../components/Telefonos"
import SliderProductosFabrica from "../components/SliderProductosFabrica"
import TemplateGoogleDirecciones from "../components/TemplateGoogleDirecciones"

const contacto = ({ data }) => {
  return (
    <Layout>
      <Seo title="Contacto" />
      <Contactos />
      <Telefonos />
      <TemplateGoogleDirecciones />
      <SliderProductosFabrica productos={data.allProductosPortadaJson.edges} />
    </Layout>
  )
}

export default contacto

export const queryFabrica = graphql`
  {
    allProductosPortadaJson {
      edges {
        node {
          id
          alt
          subtitulo
          titulo
          ruta
          img {
            childImageSharp {
              gatsbyImageData(
                width: 170
                layout: FIXED
                height: 170
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  }
`
