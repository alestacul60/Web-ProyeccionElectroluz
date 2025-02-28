import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Seo from "../components/seo"

import TemplateHeroSlider from "../components/TemplateHeroSlider"

import { buenas_practicas } from "../data/datosClusters"
import BuenasPracticas from "../components/BuenasPracticas"

const buenaspracticas = ({ data }) => (
  <Layout>
    <Seo title="Buenas practicas" />
    <TemplateHeroSlider
      imagenesSlider={data.allFile.edges}
      datos_energia={buenas_practicas}
    />
    <BuenasPracticas />
  </Layout>
)

export default buenaspracticas

export const buenaspracticasquery = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "buenas-practicas" } }) {
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
