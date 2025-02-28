import styled from "styled-components"

export const ButtonW = styled.a`
  font-size: 0.75rem;
  line-height: 1;
  font-weight: 500;
  border-radius: 0;
  outline: 0;
  border: 1px solid var(--blueOscuro);
  color: var(--white);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-block;
  text-align: center;
  padding: 10px;
  padding-left: 2.55rem;
  padding-right: 2.55rem;
  background-color: var(--blueOscuro);
  transition: all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
  cursor: pointer;

  &:hover {
    background: var(--white);
    color: var(--blueOscuro);
    font-weight: 500;
  }
`
