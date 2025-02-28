import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { Carousel } from "react-bootstrap"
import { Button } from "./Button"

const GaleryImage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "Industria" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                transformOptions: { fit: COVER, cropFocus: CENTER }
                quality: 100
                height: 420
                width: 1366
                aspectRatio: 2
              )
            }
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <ContainerData>
        <ContainerTitle>Ejecución de Obras Industriales</ContainerTitle>
        <ButtonContainer primary="true" big="true" to="#">
          Hablar con un especialista
        </ButtonContainer>
      </ContainerData>
      <ContainerImage
        interval={1000}
        indicators={false}
        fade={true}
        controls={false}
      >
        {data.allFile.edges.map((image, key) => (
          <Carousel.Item key={key}>
            <Images
              key={key}
              image={getImage(image.node.childImageSharp.gatsbyImageData)}
            />
          </Carousel.Item>
        ))}
      </ContainerImage>
    </Wrapper>
  )
}
export default GaleryImage

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  margin-top: 80px;
  height: 55vh;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    height: 30vh;
  }
  @media screen and (min-width: 991px) {
    height: 60vh;
  }
`

const ContainerImage = styled(Carousel)`
  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`
const Images = styled(GatsbyImage)`
  height: 55vh;
  width: 100vw;

  @media screen and (min-width: 768px) {
    height: 30vh;
  }
  @media screen and (min-width: 991px) {
    height: 60vh;
  }
`
const ContainerData = styled.div`
  position: absolute;
  top: var(--heightMenu);
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: center;
  z-index: 3;
  width: 100%;
  padding: 3rem 1rem;

  @media screen and (min-width: 578px) {
    width: 50%;
    padding-left: 10rem;
  }
  @media screen and (min-width: 768px) {
    padding-left: 5rem;
    padding-top: 0;
    width: 80%;
  }
  @media screen and (min-width: 991px) {
    padding-left: 5rem;
    padding-top: 1rem;
    width: 50%;
  }
`

const ContainerTitle = styled.h1`
  font-size: clamp(2rem, 3vw, 4rem);
  color: var(--white);
  font-weight: 700;
  line-height: 35px;

  @media screen and (min-width: 768px) {
    line-height: 35px;
  }
  @media screen and (min-width: 991px) {
    line-height: 50px;
  }
`
const ButtonContainer = styled(Button)`
  margin-top: 2rem;
  width: 80%;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 991px) {
    width: 50%;
  }
`
