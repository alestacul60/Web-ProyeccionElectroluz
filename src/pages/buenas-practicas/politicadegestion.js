import * as React from "react"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import BannerCabecera from "../../components/BannerCabecera"
import { BuenasPracticasdata } from "../../components/ImagenesOptimizadas"
import { politicasdegestion } from "../../data/TextosGenerales"
import InfoTexto from "../../components/InfoTexto"
const politicadegestion = () => (
  <Layout>
    <Seo title="Politicas de gestión" />
    <BannerCabecera {...BuenasPracticasdata} />
    <InfoTexto {...politicasdegestion} />
  </Layout>
)

export default politicadegestion
