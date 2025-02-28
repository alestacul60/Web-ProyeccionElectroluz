import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import Slider from "react-slick"
import {
  SectionContainer,
  AnimatedTitle,
} from "../components/styles/GlobalStyles"

function TemplateBrands(data) {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <SectionContainer>
      <AnimatedTitle>Confían en nosotros</AnimatedTitle>
      <Container className="text-center ">
        <Row className="pt-3 pb-3 align-content-center justify-content-center">
          <Slider {...settings}>
            {data.slidersbrands.map((image, key) => (
              <Col xs={6} md={2} key={key} className="">
                <GatsbyImageLogo
                  image={getImage(image.node.childImageSharp.gatsbyImageData)}
                  alt={image.node.base.split(`_`).join(` `).split(`.`)[0]}
                />
              </Col>
            ))}
          </Slider>
        </Row>
      </Container>
    </SectionContainer>
  )
}

export default TemplateBrands

const GatsbyImageLogo = styled(GatsbyImage)`
  width:120px;
  transition: all 0.3s ease-in-out;
   filter: grayscale(100%);
  transition: all 0.3s ease-in-out;

  &:hover  {
    filter: grayscale(0%);
`
