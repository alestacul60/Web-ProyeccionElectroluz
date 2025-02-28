import React from "react"
import * as RiIcons from "react-icons/ri"

export const SidebarData = [
  {
    title: "Inicio",
    path: "/",
  },
  {
    title: "Nosotros",
    path: "/nosotros/",
  },

  {
    title: `Unidades de Negocio`,
    path: `#`,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: `Venta en Locales`,
        path: `/ventas/`,
      },
      {
        title: `Desarrollo en Fábrica`,
        path: `/fabrica/`,
      },
      {
        title: `Energías Renovables`,
        path: `/renovable/`,
      },
      {
        title: `Energías M.T. y A.T.`,
        path: `/energia/`,
      },
      {
        title: `Obras Industriales`,
        path: `/industria/`,
      },
      {
        title: `Obras de Infraestructura`,
        path: `/infraestructura/`,
      },
      {
        title: `Sistemas de Automatismo`,
        path: `/automatismo/`,
      },
      {
        title: `Obras de Saneamiento`,
        path: `/saneamiento/`,
      },
    ],
  },
  {
    title: "Novedades",
    path: "/novedades/",
  },
  {
    title: "Contacto",
    path: "/contacto/",
  },
]

export const SidebarProductsData = [
  {
    title: "Celda M.T. 33kV",
    path: "/fabrica/celda-mt-33kv/",
  },
  {
    title: "Celda M.T. 13.2kV",
    path: "/fabrica/celda-mt-13-2kv/",
  },
  {
    title: "Tablero T.G.B.T",
    path: "/fabrica/tablero-bt-tgbt/",
  },
  {
    title: "Tablero C.C.M",
    path: "/fabrica/tablero-bt-ccm/",
  },
  {
    title: "Electrocentros",
    path: "/fabrica/electrocentros/",
  },
  {
    title: "Bandeja Tipo Escalera",
    path: "/fabrica/bandeja-escalera/",
  },
  {
    title: "Bandeja Tipo Perforada",
    path: "/fabrica/bandeja-perforada/",
  },
  {
    title: "Columnas de Iluminación",
    path: "/fabrica/iluminacion-columnas/",
  },
  {
    title: "Torres de Iluminación",
    path: "/fabrica/iluminacion-torres/",
  },
]
