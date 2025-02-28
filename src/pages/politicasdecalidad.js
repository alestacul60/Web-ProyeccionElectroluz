import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PoliticaDeCalidad from "../components/PoliticaDeCalidad"
import BannerCabecera from "../components/BannerCabecera"
import { portadaPoliticasdecalidaddata } from "../data/TextosGenerales"

const politicasdecalidad = () => (
  <Layout>
    <Seo title="Politicas de calidad" />
    <BannerCabecera {...portadaPoliticasdecalidaddata} />
    <PoliticaDeCalidad />
  </Layout>
)

export default politicasdecalidad
