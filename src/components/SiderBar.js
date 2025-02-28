import React, { useState } from "react"
import styled from "styled-components"
import { Offcanvas, CloseButton } from "react-bootstrap"
import { SidebarData, SidebarProductsData } from "../data/SideBarData"
import FooterSidebar from "./FooterSidebar"
import SubMenu from "./Submenu"
import { Link } from "gatsby"
import LogoEmpresa from "./LogoEmpresa"

const SiderBar = () => {
  const [show, setShow] = useState(false)
  const [showPR, setshowPR] = useState(false)

  const handleClose = () => {
    setShow(false)
  }
  const handleClosePR = () => {
    setshowPR(false)
  }

  const handleShow = () => setShow(true)
  const handleshowPR = () => setshowPR(true)

  return (
    <>
      <BarraMenu showPR={showPR}>
        <Link to="/">
          <LogoEmpresa />
        </Link>

        <MenuIconPr
          showPR={showPR}
          aria-label="Boton Menu Productos"
          onClick={handleshowPR}
        >
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </MenuIconPr>

        <MenuIcon aria-label="Boton Menu Productos" onClick={handleShow}>
          <div />
          <div />
          <div />
        </MenuIcon>

        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          className="SidebarHome"
        >
          <Offcanvas.Header className="text-light justify-content-center">
            <CloseButton
              variant="white"
              className="text-center me-2"
              onClick={handleClose}
            />
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ItemsMenu>
              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />
              })}
            </ItemsMenu>
          </Offcanvas.Body>
          <FooterSidebar />
        </Offcanvas>

        <Offcanvas
          show={showPR}
          onHide={handleClosePR}
          placement="end"
          className="SidebarProducts "
        >
          <Offcanvas.Header
            variant="white"
            className="text-light justify-content-center"
          >
            <CloseButton
              variant="white"
              className="text-center me-2"
              onClick={handleClosePR}
            />
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ItemsMenu>
              {SidebarProductsData.map((item, index) => {
                return <SubMenu item={item} key={index} />
              })}
            </ItemsMenu>
          </Offcanvas.Body>
          <FooterSidebar />
        </Offcanvas>
      </BarraMenu>
    </>
  )
}

export default SiderBar

const BarraMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: var(--heightMenu);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 2rem;
  padding-right: 2rem;
  align-items: center;
  z-index: 5;
  background: ${({ showPR }) =>
    showPR ? "var(--blueOscuro)" : "var(--black)"};
`
const MenuIcon = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;

  div {
    width: 1.5rem;
    height: 0.1rem;
    background: white;
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
    transition: opacity 300ms, transform 300ms;

    :first-child {
      transform: ${({ sidebar }) => (sidebar ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ sidebar }) => (sidebar ? "0" : "1")};
    }
    :nth-child(3) {
      transform: ${({ sidebar }) => (sidebar ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const MenuIconPr = styled.button`
  position: fixed;
  top: 2.1rem;
  right: 4rem;
  display: grid;

  flex-direction: column;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;

  div {
    width: 0.2rem;
    height: 0.2rem;
    background: white;
    transform-origin: 1px;
    position: relative;
    transition: opacity 300ms, transform 300ms;
  }
`

const ItemsMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-right: 2rem;
  height: 100%;
  width: 100%;
`
