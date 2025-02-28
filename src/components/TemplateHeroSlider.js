import React, { useEffect } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ButtonW } from "./ButtonW"
import { Carousel } from "react-bootstrap"
import { Typewriter } from "react-simple-typewriter"
import AOS from "aos"
import "aos/dist/aos.css"

const TemplateHeroSlider = data => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <ClusterHeroContainer>
      <ClusterHeroContent>
        <ClusterHeroTitle
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          {data.datos_energia.titulo}
        </ClusterHeroTitle>
        {data.datos_energia.desafio === "no" ? (
          <div></div>
        ) : (
          <ClusterDescription
            data-aos="fade-down"
            data-aos-delay="150"
            data-aos-duration="1000"
          >
            <SpanDescription>
              <Typewriter
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={3500}
                words={data.datos_energia.desafios}
              />
            </SpanDescription>
          </ClusterDescription>
        )}
        {data.datos_energia.contacto === "no" ? (
          <div></div>
        ) : (
          <ButtonW to="/">{data.datos_energia.contacto}</ButtonW>
        )}
      </ClusterHeroContent>
      <SliderContainer>
        <CarouselBg controls={false} indicators={false}>
          {data.imagenesSlider.map((image, key) => (
            <Carousel.Item key={key} interval={5000}>
              <GatsbyImageSlider
                image={getImage(image.node.childImageSharp.gatsbyImageData)}
                alt={image.node.base.split(`_`).join(` `).split(`.`)[0]}
              />
            </Carousel.Item>
          ))}
        </CarouselBg>
      </SliderContainer>
    </ClusterHeroContainer>
  )
}

export default TemplateHeroSlider

export const ClusterHeroContainer = styled.div`
  height: var(--heightClusterHero);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  margin-top: var(--heightMenu);
  position: relative;
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
export const SliderContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
export const CarouselBg = styled(Carousel)`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`
export const GatsbyImageSlider = styled(GatsbyImage)`
  height: var(--heightClusterHero);
  width: 100vw;
  object-position: center;
  object-fit: fill;
`

export const ClusterHeroContent = styled.div`
  width: 100%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 10rem;
  @media screen and (max-width: 768px) {
    padding-left: 2rem;
  }
  @media screen and (max-width: 460px) {
    padding-left: 0.5rem;
  }
  @media screen and (min-width: 1440px) {
  }
`

export const ClusterHeroTitle = styled.h1`
  font-size: 45px;
  font-weight: 700;
  line-height: 60px;
  width: 50%;
  @media screen and (min-width: 1440px) {
    width: 40%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 460px) {
    font-size: 35px;
    line-height: 50px;
  }
`

export const ClusterDescription = styled.h3`
  font-size: 20px;
  margin-bottom: 2rem;
`
export const SpanDescription = styled.span`
  color: var(--blueNeored);
  font-weight: 700;
  @media screen and (max-width: 460px) {
    display: block;
  }
`
