import React, { useState } from "react"
import styled from "styled-components"
import { SidebarData, SidebarProductsData } from "../data/SideBarData"
import { Container, Row, Col, Accordion } from "react-bootstrap"
import FooterSidebar from "./FooterSidebar"
import SubMenu from "./Submenu"
import { Link } from "gatsby"
import LogoEmpresa from "./LogoEmpresa"
import { FaTimes } from "@react-icons/all-files/fa/FaTimes"

// let useClickOutside = handler => {
//   let domNode = useRef()

//   useEffect(() => {
//     let maybeHandler = event => {
//       if (!domNode.current.contains(event.target)) {
//         handler()
//       }
//     }
//     document.addEventListener("mousedown", maybeHandler)
//     document.addEventListener("touchstart", maybeHandler)

//     return () => {
//       document.removeEventListener("mousedown", maybeHandler)
//       document.addEventListener("touchstart", maybeHandler)
//     }
//   })
//   return domNode
// }

const SiderBar = () => {
  const [sidebar, setSidebar] = useState(false)
  const [sidebarProd, setSidebarProd] = useState(false)

  // let domNode = useClickOutside(() => {
  //   setSidebar(false)
  //   setSidebarProd(false)
  // })

  return (
    <>
      <BarraMenu sidebarProd={sidebarProd}>
        <Link to="/">
          <LogoEmpresa />
        </Link>

        <MenuIconPr
          aria-label="Boton Menu Productos"
          sidebarProd={sidebarProd}
          onClick={() => {
            setSidebarProd(!sidebarProd)
          }}
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

        <MenuLinksPr sidebarProd={sidebarProd}>
          <Wrapper>
            <ButtonClose
              href="#"
              onClick={() => {
                setSidebarProd(!sidebarProd)
              }}
            >
              Cerrar <GrCloseeditado />
            </ButtonClose>
          </Wrapper>
          <ItemsMenu>
            {SidebarProductsData.map((item, index) => {
              return <SubMenu item={item} key={index} />
            })}
          </ItemsMenu>

          <FooterSidebar />
        </MenuLinksPr>

        <MenuIcon
          aria-label="Boton Menu Principal"
          sidebar={sidebar}
          onClick={() => setSidebar(!sidebar)}
        >
          <div />
          <div />
          <div />
        </MenuIcon>
        <MenuLinks sidebar={sidebar}>
          <Wrapper>
            <ButtonClose
              href="#"
              onClick={() => {
                setSidebar(!sidebar)
              }}
            >
              Cerrar <GrCloseeditado />
            </ButtonClose>
          </Wrapper>
          <ItemsMenu>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />
            })}
          </ItemsMenu>

          <FooterSidebar />
        </MenuLinks>
      </BarraMenu>
    </>
  )
}

export default SiderBar

const Wrapper = styled.div`
  width: 100%;
  height: 3rem;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 25px;
  padding-top: 5px;
  padding-bottom: 10px;
  padding-left: 2rem;
`
const GrCloseeditado = styled(FaTimes)`
  color: var(--white);
  height: 1.5rem;
  margin-left: 0.5rem;
`

const ButtonClose = styled.div`
  color: var(--white);
  font-weight: 100;
  cursor: pointer;
  text-decoration: none;
  :hover {
    color: var(--white);
  }
`

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
  background: ${({ sidebarProd }) =>
    sidebarProd ? "var(--blueOscuro)" : "var(--black)"};
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

    /* :first-child {
      width: ${({ sidebarProd }) => (sidebarProd ? "1.5rem" : "0.2rem")};
      transform: ${({ sidebarProd }) =>
      sidebarProd ? "rotate(45deg)" : "rotate(0)"};
    }
    :nth-child(2) {
      opacity: ${({ sidebarProd }) => (sidebarProd ? "0" : "1")};
    }
    :nth-child(3) {
      opacity: ${({ sidebarProd }) => (sidebarProd ? "0" : "1")};
    }
    :nth-child(4) {
      opacity: ${({ sidebarProd }) => (sidebarProd ? "0" : "1")};
    }
    :nth-child(5) {
      opacity: ${({ sidebarProd }) => (sidebarProd ? "0" : "1")};
    }
    :nth-child(6) {
      opacity: ${({ sidebarProd }) => (sidebarProd ? "0" : "1")};
    }
    :nth-child(7) {
      width: ${({ sidebarProd }) => (sidebarProd ? "1.5rem" : "0.2rem")};
      transform: ${({ sidebarProd }) =>
      sidebarProd ? "rotate(-45deg)" : "rotate(0)"};
    }
    :nth-child(8) {
      opacity: ${({ sidebarProd }) => (sidebarProd ? "0" : "1")};
    }
    :last-child {
      opacity: ${({ sidebarProd }) => (sidebarProd ? "0" : "1")};
    } */
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

const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 30%;
  padding-bottom: 1rem;
  background: var(--black);
  position: fixed;
  top: 0;
  right: 0;
  transform: ${({ sidebar }) =>
    sidebar ? "translateX(0)" : "translateX(100%)"};
  transition: transform 350ms;
  z-index: 10;
  @media screen and (max-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`
const MenuLinksPr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 30%;
  padding-bottom: 1rem;
  background: var(--blueOscuro);
  position: fixed;
  top: 0;
  right: 0;
  transform: ${({ sidebarProd }) =>
    sidebarProd ? "translateX(0)" : "translateX(100%)"};
  transition: transform 350ms;
  z-index: 6;

  @media screen and (max-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`
