import * as React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import TemplateBrands from "../components/TemplateBrands"

const prueba = ({ data }) => (
  <Layout>
    <Seo title="pruebas" />
    <TemplateBrands slidersbrands={data.slidersbrands.edges} />
  </Layout>
)

export default prueba

export const queryRenovables = graphql`
  query {
    slidersbrands: allFile(
      filter: { relativeDirectory: { eq: "brands/industriabrands" } }
    ) {
      edges {
        node {
          base
          childImageSharp {
            gatsbyImageData(quality: 90)
          }
        }
      }
    }
  }
`
