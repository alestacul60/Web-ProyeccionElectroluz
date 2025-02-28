import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Image = () => {
  return (
    <>
      <StaticImage
        src="../assets/images/logo/logo.png"
        alt="Logo Proyección Electroluz SRL"
        // placeholder="blurred"
        // layout="fixed"
        height={440}
      />
    </>
  )
}

export default Image
