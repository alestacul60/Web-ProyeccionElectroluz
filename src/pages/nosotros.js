import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BannerCabecera from "../components/BannerCabecera"
import InfoSectionSinBtn from "../components/InfoSectionSinBtn"

import Servicios from "../components/Servicios"
import DoubleColorSinImg from "../components/DoubleColorSinImg"
import { AtravesHistoria } from "../components/ImagenesOptimizadas"
import { historia } from "../data/TextosGenerales"
import { ServiciosNosotrosData } from "../data/ServiciosData"

const nosotros = () => (
  <Layout>
    <Seo title="Nuestra Historia" />
    <BannerCabecera {...AtravesHistoria} />
    <InfoSectionSinBtn {...historia} />
    <Servicios {...ServiciosNosotrosData} />
    <DoubleColorSinImg />
  </Layout>
)

export default nosotros
