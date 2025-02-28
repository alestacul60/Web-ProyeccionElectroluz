import CatalogoBPCEscalera from "../assets/images/catalogos/BandejaEscalera.pdf"
import CatalogoBPCPerforada from "../assets/images/catalogos/BandejaPerforada.pdf"
import CatalogoCelda132kv from "../assets/images/catalogos/Celda-MT-CB15V.pdf"
import CatalogoCelda33kv from "../assets/images/catalogos/Celda-MT-CB33V.pdf"
import Electrocentros from "../assets/images/catalogos/Electrocentros.pdf"

export const celda33kvdata = {
  titulo: "Celda 33kv",
  tipo: "CB33V-LI/LR",
  desc_tipo: "A prueba de arco interno",
  catalogo: CatalogoCelda33kv,
  items: [
    {
      item: `- Distribución primaria`,
    },
    {
      item: `- Tensión nominal: 33 kV`,
    },
    {
      item: `- Tensión máxima de servicio: 36 kV`,
    },
    {
      item: `- Corriente nominal: 1250 A`,
    },
    {
      item: `- Corriente de corta duración: 20 kA/1seg`,
    },
    {
      item: `- Norma de construcción y ensayo: IEC 62271-200 / IRAM 2200 / NBR 6979`,
    },
    {
      item: `- Pérdida de continuidad de servicio: LSC 2B`,
    },
    {
      item: `- Clase de partición: PM`,
    },
    {
      item: `- Grado de protección de la envolvente: IAC AFLR`,
    },
    {
      item: `- Grado de protección mecánica interior/exterior: IP 2X/IP 4X`,
    },
    {
      item: `- Para corrección de factor de potencia en grandes estaciones transformadoras.`,
    },
  ],
}

export const celda132kvdata = {
  titulo: "Celda 13.2kv",
  tipo: "CB15V-LI/LR",
  desc_tipo: "A prueba de arco interno",
  catalogo: CatalogoCelda132kv,

  items: [
    {
      item: `- Distribución primaria`,
    },
    {
      item: `- Tensión nominal: 13,2 kV`,
    },

    {
      item: `- Corriente nominal: 1250 A / 2500 A`,
    },
    {
      item: `- Corriente de corta duración: 25/31,5 kA/1seg`,
    },
    {
      item: `- Norma de construcción y ensayo: IEC 62271-200 / IRAM 2200 / NBR 6979`,
    },
    {
      item: `- Pérdida de continuidad de servicio: LSC 2B`,
    },
    {
      item: `- Clase de partición: PM`,
    },
    {
      item: `- Grado de protección de la envolvente: IAC AFLR`,
    },
    {
      item: `- Grado de protección mecánica interior/exterior: IP 2X/IP 4X`,
    },
    {
      item: `- Para corrección de factor de potencia en grandes estaciones transformadoras.`,
    },
  ],
}

export const bandejasescaleradata = {
  titulo: "Bandejas Portacables",
  tipo: "Tipo Escalera",
  desc_tipo: "Para uso industrial",
  catalogo: CatalogoBPCEscalera,
  items: [
    {
      item: `- Anchos de 150, 300, 450 y 600mm`,
    },
    {
      item: `- Terminación galvanizado en caliente o acero inoxidable. Otros tipos de tratamiento a pedido`,
    },
    {
      item: `- Tramos rectos de 3mts, simplificando el montaje y repartiendo mejor las cargas`,
    },
    {
      item: `- Cuplas de unión con agujeros cuadrados`,
    },
    {
      item: `- Requiere una sola llave para ajustar las tuercas`,
    },
    {
      item: `- Soluciones de soporte ampliamente probadas en obra de montajes eléctricos industriales`,
    },
    {
      item: `- Excelente acabado superficial y máxima resistencia a la corrosión y ataques de agentes químicos`,
    },
    {
      item: `- También ofrecemos pintado con pintura termoconvertible, epoxi o poliéster.`,
    },
  ],
}

export const bandejasperforadadata = {
  titulo: "Bandejas Portacables",
  tipo: "Tipo Perforada",
  desc_tipo: "Para uso industrial",
  catalogo: CatalogoBPCPerforada,
  items: [
    {
      item: `- Anchos de 150, 300, 450 y 600mm`,
    },
    {
      item: `- Terminación galvanizado en caliente o acero inoxidable. Otros tipos de tratamiento a pedido`,
    },
    {
      item: `- Tramos rectos de 3mts, simplificando el montaje y repartiendo mejor las cargas`,
    },
    {
      item: `- Cuplas de unión con agujeros cuadrados`,
    },
    {
      item: `- Requiere una sola llave para ajustar las tuercas`,
    },
    {
      item: `- Soluciones de soporte ampliamente probadas en obra de montajes eléctricos industriales`,
    },
    {
      item: `- Excelente acabado superficial y máxima resistencia a la corrosión y ataques de agentes químicos`,
    },
    {
      item: `- También ofrecemos pintado con pintura termoconvertible, epoxi o poliéster.`,
    },
  ],
}

export const torresiluminaciondata = {
  titulo: "Torres de Iluminación",
  tipo: "Con canasto y escalera",
  desc_tipo:
    "Apta para grandes espacios, parques, playas de estacionamiento, rotondas, estadios.",
  items: [
    {
      item: `- Para iluminación de grandes espacios, parques, playas de estacionamiento, rotondas, estadios`,
    },
    {
      item: `- Desde 14 a 24 mts. de altura, autoportantes, con plataforma y escalera marinera`,
    },
    {
      item: `- Excelente acabado superficial y máxima resistencia a la corrosión y ataques de agentes químicos`,
    },
    {
      item: `- Elaboradas según normas IRAM 2619/2620, a partir de tramos de tubos de acero cuyas características se establecen en las normas IRAM 2591 y 2592. Las uniones entre los mismos se realizan mediante soldaduras, previendo en cada caso cruces importantes de caños`,
    },
    {
      item: `- La resistencia de los modelos standard se han verificado para velocidad de vientos de hasta 130 km/h`,
    },
    {
      item: `Tratamiento superficial:`,
    },
    {
      item: `- Esmerilado de uniones soldadas`,
    },
    {
      item: `- Aplicación de dos manos de antióxido al bicromato de zinc.`,
    },
  ],
}

export const columnasiluminaciondata = {
  titulo: "Columnas de iluminación",
  tipo: "Para alumbrado público",
  desc_tipo:
    "Apta para grandes espacios, parques, playas de estacionamiento, rotondas, estadios.",
  items: [
    {
      item: `- Para iluminación de grandes espacios, parques, playas de estacionamiento, rotondas, estadios`,
    },
    {
      item: `- Desde 14 a 24 mts. de altura, autoportantes, con plataforma y escalera marinera`,
    },
    {
      item: `- Excelente acabado superficial y máxima resistencia a la corrosión y ataques de agentes químicos`,
    },
    {
      item: `- Elaboradas según normas IRAM 2619/2620, a partir de tramos de tubos de acero cuyas características se establecen en las normas IRAM 2591 y 2592. Las uniones entre los mismos se realizan mediante soldaduras, previendo en cada caso cruces importantes de caños`,
    },
    {
      item: `- La resistencia de los modelos standard se han verificado para velocidad de vientos de hasta 130 km/h`,
    },
    {
      item: `Tratamiento superficial:`,
    },
    {
      item: `- Esmerilado de uniones soldadas`,
    },
    {
      item: `- Aplicación de dos manos de antióxido al bicromato de zinc`,
    },
  ],
}

export const tgbtdata = {
  titulo: "T.G.B.T. 1kV (Tablero de distribución de baja tensión)",
  tipo: "PE-INTARC-TGBT-4b",
  desc_tipo: "A prueba de arco interno",
  items: [
    {
      item: `- Tensión de aplicación: 690 Vca`,
    },
    {
      item: `- Corriente de cortocircuito: 70kA`,
    },
    {
      item: `- Tiempo de aplicación: 0,3seg`,
    },
    {
      item: `- Capacidad de barras principales: 5000 A`,
    },
    {
      item: `- Capacidad de barras secundarias: 1250 A / 2500 A`,
    },
    {
      item: `- Grado de protección exterior IP:4X`,
    },
    {
      item: `- Grado de protección interior IP:2X`,
    },
    {
      item: `- Modulación según necesidad.`,
    },
    {
      item: `- Barras de cobre pintadas, desnudas o aisladas con identificación de fases según normas IRAM 2053 - IEC 446, R (marrón), S (negro), T (rojo), N (celeste), tierra (verde/amarillo).`,
    },
    {
      item: `Tratamiento superficial para las partes pintadas: desengrasado, desoxidado, fosfatizado. Pintura en polvo poliéster termoconvertible. Temperatura horno: 180ºC.`,
    },
  ],
}

export const ccmdata = {
  titulo: "C.C.M 1kV (Centro de control de motores)",
  tipo: "Protocolizados",
  desc_tipo: "Para alojar arranques de equipos",
  items: [
    {
      item: `- Tensión de aplicación: 690 Vca`,
    },
    {
      item: `- Corriente de cortocircuito: 70 kA`,
    },
    {
      item: `- Tiempo de aplicación: 0,3seg`,
    },
    {
      item: `- Capacidad de barras principales: 2500 A`,
    },
    {
      item: `- Capacidad de barras secundarias: 850 A`,
    },
    {
      item: `- Grado de protección exterior IP4X`,
    },

    {
      item: `- Modulación según necesidad.`,
    },
    {
      item: `- Barras de cobre pintadas, desnudas o aisladas con identificación de fases según normas IRAM 2053 - IEC 446, R (marrón), S (negro), T (rojo), N (celeste), tierra (verde/amarillo).`,
    },
    {
      item: `- Tratamiento superficial para las partes pintadas: desengrasado, desoxidado, fosfatizado. Pintura en polvo poliéster termoconvertible. Temperatura horno: 180ºC.`,
    },
  ],
}

export const electrocentrosdata = {
  titulo: "Electrocentros (Shelter)",
  tipo: "Centro de transformación y distribución móvil",
  catalogo: Electrocentros,
  desc_tipo:
    "Transportable completamente armado, para inmediato funcionamiento en destino.",
  items: [
    {
      item: `- Celda secundaria de entrada y medición de 13,2kV`,
    },
    {
      item: `- Transformador seco con ventilación forzada y cabina interna hasta 3000 kVA`,
    },
    {
      item: `- Tablero general de distribución en baja tensión con corrientes de hasta 5000A`,
    },
    {
      item: `- Control de acceso con programación y gestión de permisos`,
    },
    {
      item: `- Circuito cerrado de televisión`,
    },
    {
      item: `- Central, alarma y sistema para controlar mediante gas, accidentes relacionados con el fuego`,
    },

    {
      item: `- Sistema de presurización y refrigeración autónomo`,
    },
    {
      item: `- Concentración de mediciones eléctricas y reportes de conjunto para su posterior utilización de un centro de control`,
    },
    {
      item: `- Alumbrado, circuitos auxiliares y energía ininterrumpida autónomos`,
    },
    {
      item: `- Montaje y ensayos en fábrica que aseguren el correcto funcionamiento.`,
    },
  ],
}

export const gatewayData = {
  titulo: "Gateway IOT WIFI",
  tipo: "Gestión online de humedad y temperatura de tableros y celdas desde tu celular.",
  desc_tipo:
    "Gateway se conecta a la nube a través de protocolo MQTT, mediante una plataforma de visualización remota de datos. El sistema también cuenta con una web server embebida para realizar las distintas configuraciones. El equipo puede comunicarse con otros dispositivos a través de Modbus TCP (cliente). El sistema completo puede visualizarse en la app “SIOM PE”. Los datos históricos son guardados en un servidor propio de Proyección Electroluz.",
  items: [
    {
      item: `- Medición de temperatura en tiempo real en barras en Tableros de Baja Tensión. `,
    },
    {
      item: `- Medición de temperatura en tiempo real en barras en Celdas de Media Tensión.`,
    },
    {
      item: `- Medición de puntos calientes.`,
    },
    {
      item: `- Medición de humedad en cúbicos.`,
    },
    {
      item: `- Vinculación con PLC, para monitoreo de estados de los equipos del tablero (alarmas, horas de marcha, velocidad, etc.).`,
    },
    {
      item: `- Disponibilidad de entradas y salidas tanto digitales como analógicas.`,
    },

    {
      item: `- Posibilidad de programar alarmas.`,
    },
    {
      item: `- Visualización mediante la app "SIOM PE".`,
    },
    {
      item: `- Datos históricos almacenados en un servidor perteneciente a Proyección Electroluz. `,
    },
  ],
}
