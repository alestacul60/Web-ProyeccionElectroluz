import React from 'react'
import styled from "styled-components"

const WhatsappHome = () => {
  return (
    <StyledWhatsAppButton
      href="https://wa.me/5493482611082"
      target="_blank"
      rel="noopener noreferrer"
    >
      Whatsapp
    </StyledWhatsAppButton>

  )
}

export default WhatsappHome

const StyledWhatsAppButton = styled.a`
  font-size: 0.9rem;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000; 
  display: inline-block;
  padding: 10px 20px;
  background-color: #066f3c;
  color: var(--white);
  text-decoration: none;
  border-radius: 25px;
  &:hover {
  background: var(--white);
  color: #066f3c;
  font-weight: 500;
  border: 1px solid #066f3c;
}
`;


// font-size: 0.75rem;
// background-color: #066f3c;
// line-height: 1;
// font-weight: 500;
// border-radius: 0;
// outline: 0;
// border: 1px solid #066f3c;
// color: var(--white);
// text-decoration: none;
// text-transform: uppercase;
// letter-spacing: 0.05em;
// display: inline-block;
// text-align: center;
// padding: 10px;
// padding-left: 3.25rem;
// padding-right: 3.25rem;
// height: auto;
// transition: all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
// cursor: pointer;

