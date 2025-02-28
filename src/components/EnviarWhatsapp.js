export default function EnviarWhatsapp(producto) {
  const { titulo, marca, modelo, sucursal, whatsapp } = producto.node
  const saltoDeLinea = "%0D%0A"
  const mensaje = `Hola Proyección Electroluz,Sucursal ${sucursal} quiero consultar sobre:${saltoDeLinea}${titulo}-${marca}-${modelo}
  ${saltoDeLinea}${saltoDeLinea}`
  const whatsappLink = `https://api.whatsapp.com/send/?phone=${whatsapp}&text=${mensaje}&app_absent=0`
  return window.open(whatsappLink, "_blank")
}
