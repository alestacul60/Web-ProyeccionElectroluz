import React, { useEffect } from "react"
import styled from "styled-components"
import AOS from "aos"
import "aos/dist/aos.css"
const Email = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      mirror: true,
      anchorPlacement: "top-bottom",
      offset: 50,
      delay: 100,
    })
  }, [])
  return (
    <EmailContainer>
      <EmailTitle data-aos="fade-right">
        ¿Te interesa trabajar con nosotros?
      </EmailTitle>
      <EmailContent>
        <LinkA
          data-aos="fade-left"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeFzOJ_sPjBN2exBGYztIdqeY5oxahTokyaXswyZ1hesVibgA/viewform"
          target="_blank"
          reel="noreferrer"
        >
          Postularme
        </LinkA>
      </EmailContent>
    </EmailContainer>
  )
}

export default Email

const EmailContainer = styled.div`
  margin: auto;
  background: var(--blueOscuro);
  height: 200px;
  color: var(--white);
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`
const EmailTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;
  margin: auto;
  padding: 1rem 1rem;

  @media screen and (max-width: 460px) {
    font-size: 1.56rem;
    font-weight: 700;
  }
`
const EmailContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LinkA = styled.a`
  font-size: 0.8rem;
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
