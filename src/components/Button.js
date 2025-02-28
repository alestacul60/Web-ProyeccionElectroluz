import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  font-size: 12px;
  line-height: 1;
  border-radius: 0;
  outline: 0;
  border: 1px solid var(--white);
  color: var(--blueOscuro);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  width: 150px;
  display: inline-block;
  text-align: center;
  padding: 10px;
  transition: all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
  cursor: pointer;
  height: auto;
  background-color: var(--white);

  &:hover {
    background: var(--blueOscuro);
    color: var(--white);
  }
`
