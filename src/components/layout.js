import * as React from "react"
import SiderBar from "./SiderBar"
import Footer from "./Footer"

import { GlobalStyle } from "./styles/GlobalStyles"
import "../components/layout.css"
import WhatsappHome from "./WhatsappHome"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <SiderBar />
      <div className="margendebarra">
        <main>{children}</main>
      </div>
      <WhatsappHome/>
      <Footer />
    </>
  )
}

export default Layout
