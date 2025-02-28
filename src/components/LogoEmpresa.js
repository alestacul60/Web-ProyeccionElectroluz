import React from "react"

import { StaticImage } from "gatsby-plugin-image"

const LogoEmpresa = () => {
  return (
    <>
      <StaticImage
        src="../assets/images/logo/logo-retro.png"
        alt="Logo Proyección Electroluz SRL"
        height={44}
        placeholder="none"
        quality="40"
      />
    </>
  )
}

export default LogoEmpresa
