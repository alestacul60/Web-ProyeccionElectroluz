import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../components/styles/estilosBootstrap.css"
import { createGlobalStyle } from "styled-components"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const GlobalStyle = createGlobalStyle`

:root{
--white: #FFFFFF;
--black: #000000;
--blueOscuro: #023B59;  
--blueNeored: #00A8E2;
--grisdesactivado: #BDBDBD;
--grisoscuro: #5D5D5D;
--grisclaro: #F6F6F6;
--grislinea:#DCDCDC;
--rojo:#56f258;
--grisoscuroBg:#1b1b1b;
--heightMenu: 80px;
--heightClusterHero:50vh;
--iconotelefonos: 16px;
--coloriconotelefonos: #00A8E2;
--colorfacebook:#3B5998;
--colorinstagram:#EA0C5F;
--colorlinkedin:#0E76A8;

}

*{
  
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
   a{
    text-decoration: none;
  } 
}
html{
  scroll-behavior: smooth;
  font-size: 15px
}

#adns{
  /* offset: 300px 0; */
}

.modelito{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1055;
  width: 250px;
  height: 250px;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  background-color: red
}

.SidebarHome{
  background-color: var(--black);
}
.SidebarProducts{
  background-color: var(--blueOscuro);
}

.slick-prev {
    left: -1px;
}
.slick-next {
    right: -1px;
}

 .slick-next, .slick-prev {
    border: none;
    cursor: pointer;
    display: block;
    font-size: 0;
    height: 20px;
    line-height: 0;
    padding: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;


}
.slick-prev:before, .slick-next:before {
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;
    opacity: .75;
    color: var(--black);
    -webkit-font-smoothing: antialiased;
}
.FondoProductos {
  background-color: var(--grisclaro);
}

.eliminopaddingcontainer{
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.textosbuenaspracticas{
  font-size: 14px;
  text-align: justify;
}

.accordion-button {
  font-weight: 700;
}

.accordion-button:not(.collapsed) {
  color: var(--blueOscuro);
  background-color: var(--white);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.125);
}
.margendebarra,
.margentop {
  margin-top: 80px;
}
.btn-primary {
  background-color: var(--blueOscuro);
  font-size: 16px;
  border-color: var(--blueOscuro);
}

.btn-primary:hover {
  color: #fff;
  font-weight: bold;
  background-color: var(--blueOscuro);
  border-color: var(--blueOscuro);
}
.portal{
  width: 500px;
  height: 500px;
  z-index:100;
  background-color: red;
}

`

export const SectionContainer = styled.div`
  background: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* color: var(--white); */
  padding: 2rem 1rem;
  margin: auto;
`

export const SectionContainerGris = styled.div`
  background: var(--grisclaro);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white);
  padding: 2rem 1rem;

  margin: auto;
`

export const AnimatedTitle = styled.span`
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
  padding-top: 2rem;
  align-self: flex-start;
  font-weight: 700;
  color: var(--blueOscuro);
  margin-bottom: 2rem;
  position: relative;

  ::before {
    position: absolute;
    content: "";
    bottom: 0;
    border-bottom: 2px solid var(--blueNeored);
    width: 25%;
    transition: all 0.8s ease;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.75rem;
    padding-bottom: 1rem;
  }

  ${SectionContainer}:hover & {
    ::before {
      width: 100%;
    }
  }
`
export const AnimatedTitleGris = styled.h1`
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
  padding-top: 2rem;
  align-self: flex-start;
  margin-left: 1rem;
  font-weight: 700;
  color: var(--blueOscuro);
  margin-bottom: 2rem;
  position: relative;

  ::before {
    position: absolute;
    content: "";
    bottom: 0;
    border-bottom: 2px solid var(--blueNeored);
    width: 25%;
    transition: all 0.8s ease;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.75rem;
    padding-bottom: 1rem;
  }

  ${SectionContainerGris}:hover & {
    ::before {
      width: 100%;
    }
  }
`

export const Asesor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  border-radius: 3px;
  background-color: var(--blueOscuro);
  text-align: center;
  padding: 0.5rem;
`

export const Asesorate = styled.p`
  color: var(--white);
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 0.25rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid var(--blueNeored);
`
export const Telefono = styled.p`
  color: var(--white);
`
export const LinkComunica = styled.a`
  font-size: 14px;
  display: block;
  color: white;
  padding-bottom: 3px;
  text-decoration: none;
  &:hover {
    color: var(--blueNeored);
  }
`
export const CargoCluster = styled.p`
  font-size: 14px;
  display: block;
  color: white;
  margin: 0;
  text-decoration: none;
  &:hover {
    color: white;
  }
`
