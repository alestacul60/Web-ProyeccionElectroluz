import React, { useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { ButtonProduct } from "./NuestrasUnidades"
import { Container } from "react-bootstrap"
import Carousel from "react-elastic-carousel"
import { SectionContainerGris, AnimatedTitleGris } from "./styles/GlobalStyles"
import "../components/LogoSlider.css"
import AOS from "aos"
import "aos/dist/aos.css"

const SliderProductosFabrica = data => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      mirror: true,
      offset: 100,
      anchorPlacement: "top-bottom",
    })
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1, pagination: false },
    { width: 550, itemsToShow: 3, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 4, pagination: false },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2, pagination: false },
    { width: 1450, itemsToShow: 5, pagination: false },
    { width: 1750, itemsToShow: 6, pagination: false },
  ]

  return (
    <SectionContainerGris>
      <AnimatedTitleGris data-aos="fade-up" data-aos-offset="50">
        NUESTROS PRODUCTOS
      </AnimatedTitleGris>
      <Container data-aos="fade-up" data-aos-offset="50">
        <Carousel breakPoints={breakPoints}>
          {data.productos.map((item, index) => {
            return (
              <Card key={index}>
                <GatsbyImage
                  image={getImage(
                    item.node.img.childImageSharp.gatsbyImageData
                  )}
                  alt={item.node.alt}
                />
                <Titulo>{item.node.titulo}</Titulo>
                <SubTitulo>{item.node.subtitulo}</SubTitulo>
                <ButtonProduct to={item.node.ruta}>VER PRODUCTO</ButtonProduct>
              </Card>
            )
          })}
        </Carousel>
      </Container>
    </SectionContainerGris>
  )
}

export default SliderProductosFabrica

const Card = styled.div`
  background-color: var(--white);
  width: 200px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Titulo = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--grisoscuro);
  padding-top: 2rem;
`
const SubTitulo = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--grisoscuro);
  padding-bottom: 2rem;
`
