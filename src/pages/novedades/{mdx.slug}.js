import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Container, Row, Col } from "react-bootstrap"

const NoticiaTemplate = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout>
      <Seo title={data.mdx.frontmatter.title} />
      <Container>
        <Row className="pt-4 pb-2">
          <Col xs={12} sm={6}>
            <GatsbyImage
              image={image}
              alt={data.mdx.frontmatter.hero_image_alt}
            />
          </Col>
          <Col xs={12} sm={6}>
            <p>{data.mdx.frontmatter.date}</p>
            <article className="text-dark">
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={data.mdx.frontmatter.linknoticia}
              >
                {data.mdx.frontmatter.linknoticia
                  ? "Link a la nota completa"
                  : ""}
              </a>
            </article>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query noticias($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        hero_image_alt
        linknoticia
        hero_image {
          childImageSharp {
            gatsbyImageData(
              width: 500
              layout: CONSTRAINED
              placeholder: BLURRED
              height: 500
            )
          }
        }
      }
      body
    }
  }
`

export default NoticiaTemplate
