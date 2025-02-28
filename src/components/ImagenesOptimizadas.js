import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const ImgBuenasPracticas = () => {
  return (
    <>
      <StaticImage
        src="../assets/images/varias/fondooficinas.jpg"
        alt="Lideres en el rubro Agro-Industrial"
        quality={40}
        layout="fixed"
        fit="cover"
      />
    </>
  )
}

export const ImgOfiExterior = () => {
  return (
    <>
      <StaticImage
        src="../assets/images/varias/exterioroficinasnuevas.jpg"
        alt="Oficinas Nuevas"
        quality={40}
        layout="fixed"
        fit="cover"
      />
    </>
  )
}

export const ImgPortada = () => {
  return (
    <>
      <StaticImage
        src="../assets/images/varias/portada_nueva_oficina.jpg"
        alt="Imagen de portada"
        quality={40}
        width={600}
        height={400}
        layout="fixed"
        fit="cover"
      />
    </>
  )
}

export const ImgHistoria = () => {
  return (
    <>
      <StaticImage
        src="../assets/images/varias/historia.jpg"
        alt="Imagen de Historia"
        quality={40}
        width={600}
        layout="fixed"
        fit="cover"
      />
    </>
  )
}

export const ImgNovedades = () => {
  return (
    <>
      <StaticImage
        src="../assets/images/varias/fabricareconquista.jpg"
        alt="Noticias sobre nosotros"
        quality={40}
        layout="fixed"
        fit="cover"
      />
    </>
  )
}

export const BuenasPracticasdata = {
  imagen: <ImgOfiExterior />,
  titulo: "Buenas prácticas",
}

export const AtravesHistoria = {
  imagen: <ImgOfiExterior />,
  titulo: "Proyección Electroluz a través de los años",
}
