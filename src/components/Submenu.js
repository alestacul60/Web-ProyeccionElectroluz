import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Submenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false)

  const showSubnav = () => setSubnav(!subnav)

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          )
        })}
    </>
  )
}
export default Submenu

const SidebarLink = styled(Link)`
  display: flex;
  text-decoration: none;
  justify-content: end;
  align-items: center;
  height: 2.5rem;
  color: var(--white);
  font-size: 17px;
  font-weight: 100;
  margin-left: 2rem;
  text-align: right;
  letter-spacing: -0.13px;

  &:hover {
    cursor: pointer;
    color: var(--white);
  }
`

const DropdownLink = styled(Link)`
  height: 2.5rem;
  border-bottom: 1px solid var(--white);
  text-align: end;
  padding: 4px;
  text-decoration: none;
  width: 85%;
  margin-bottom: 0.25rem;
  font-size: 16px;
  font-weight: 100;
  transition: all 0.3s ease;
`
const SidebarLabel = styled.span`
  color: var(--white);
  width: 100%;
  margin-right: 16px;
  font-weight: 100;
  transition: all 0.15s ease-in-out;
  &:hover {
    font-weight: 600;
    cursor: pointer;
  }
`
