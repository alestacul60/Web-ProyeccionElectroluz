import styled from "styled-components"
import { Link } from "gatsby"

export const ButtonProduct = styled(Link)`
  border-radius: 0;
  outline: 0;
  box-shadow: none;
  background-image: none;
  border: 1px solid #c6c0c0;
  color: #c6c0c0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  width: 180px;
  display: inline-block;
  text-align: center;
  padding: 10px;
  transition: all 0.6s cubic-bezier(0.39, 0.575, 0.565, 1);
  cursor: pointer;
  height: auto;
  background-color: transparent;

  &:hover {
    background: var(--blueOscuro);
    color: var(--white);
  }
`
