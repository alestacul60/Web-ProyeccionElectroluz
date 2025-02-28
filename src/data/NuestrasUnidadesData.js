import * as React from "react"
import {
  LogoFabrica,
  LogoIndustria,
  LogoEnergia,
  LogoInfraestructura,
  LogoSaneamiento,
  LogoVentas,
  LogoRenovable,
  LogoAutomatismo,
} from "../components/Iconos"

export const NuestrasUnidadesData = [
  {
    icon: <LogoVentas />,
    title: "Venta en Locales ",
    desc: "Ecommerce y presencial en locales...",
    path: `/ventas/`,
    but: "Más Info",
  },
  {
    icon: <LogoFabrica />,
    title: "Desarrollo en Fábrica",
    desc: "Celdas de MT, Tableros BT, Iluminación...",
    path: `/fabrica/`,
    but: "Más Info",
  },
  {
    icon: <LogoRenovable />,
    title: "Energías Renovables",
    desc: "Parques solares, Parques eólicos, Biomasa...",
    path: `/renovable/`,
    but: "Más Info",
  },
  {
    icon: <LogoEnergia />,
    title: "Energía",
    desc: "Estaciones transformadoras, Lineas de Alta, media y baja tensión...",
    path: `/energia/`,
    but: "Más Info",
  },
  {
    icon: <LogoIndustria />,
    title: "Obras Industriales",
    desc: "Sector agroexportador, Curtiembres, Desmotadoras...",
    path: `/industria/`,
    but: "Más Info",
  },
  {
    icon: <LogoInfraestructura />,
    title: "Infraestructura",
    desc: "Centros Comerciales, Hospitales, Aeropuertos...",
    path: `/infraestructura/`,
    but: "Más Info",
  },
  {
    icon: <LogoAutomatismo />,
    title: "Automatismo",
    desc: "Sistemas de Control, Telegestión, Redes smart...",
    path: `/automatismo/`,
    but: "Más Info",
  },
  {
    icon: <LogoSaneamiento />,
    title: "Saneamiento",
    desc: "Plantas Potabilizadoras, Acueductos, Estaciones de Bombeo...",
    path: `/saneamiento/`,
    but: "Más Info",
  },
]
