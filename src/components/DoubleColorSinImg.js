import React, { useEffect } from "react"
import styled from "styled-components"

import AOS from "aos"
import "aos/dist/aos.css"

const DoubleColor = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      mirror: true,
      offset: 50,
      delay: 0,
    })
  }, [])
  return (
    <Container>
      <CardLeft data-aos="fade-right">
        <TextContent>
          <Title>Electroluz NEORED</Title>
          <Parragraph>
            - Alianza consolidada: Socio fundador y miembro activo grupo Neored.
            <br />
            - Grupo empresarial conformado por distribuidores mayoristas del
            rubro eléctrico. <br />- Ubicados en zonas estratégicas en
            diferentes provincias de Argentina.
          </Parragraph>
        </TextContent>
        <Background>
          <BgLeft></BgLeft>
        </Background>
      </CardLeft>
      <CardRight data-aos="fade-left">
        <TextContent>
          <Title>Mercado Global</Title>
          <Parragraph>
            - Empresa líder en electro-industrial en Argentina y la región.
            <br /> - Grupo Prisma, primer consorcio argentino de exportadores de
            tecnología para la producción de oleaginosas, vegetales y biodiesel.
            <br />- Soluciones en 12 países como: Uruguay, Paraguay, Chile,
            Brasil, México, Moldavia, Italia, Rusia, Grecia, Ucrania, China y
            Turquía.
          </Parragraph>
        </TextContent>
        <Background>
          <BgRight></BgRight>
        </Background>
      </CardRight>
    </Container>
  )
}

export default DoubleColor

const Container = styled.div`
  overflow-x: hidden;
  height: 390px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 768px) {
    height: 800px;
    grid-template-columns: 1fr;
  }
`
const Background = styled.div``

const BgLeft = styled.div`
  position: absolute;
  background: var(--blueOscuro);
  opacity: 0.95;
  height: 100%;
  width: 100%;
  z-index: 1;
`
const BgRight = styled.div`
  position: absolute;
  background: var(--grisoscuroBg);
  opacity: 0.95;
  height: 100%;
  width: 100%;
  z-index: 1;
`

const CardLeft = styled.div`
  position: relative;
`
const CardRight = styled.div`
  position: relative;
`
const TextContent = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h3`
  font-size: 1.5rem;
  color: var(--white);
  font-weight: 600;
  margin: 2rem 0;
  padding-bottom: 1rem;
  /* overflow: hidden; */
  position: relative;
  z-index: 2;
  ::before {
    position: absolute;
    content: "";
    bottom: 0;
    border-bottom: 2px solid var(--white);
    text-align: center;
    width: 20%;
    transition: all 0.5s ease;
  }
  ${CardLeft}:hover & {
    ::before {
      width: 100%;
    }
  }
  ${CardRight}:hover & {
    ::before {
      width: 100%;
    }
  }
`
const Parragraph = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 26px;
  letter-spacing: -0.2px;
  color: var(--white);
  margin: 1rem 0;
  width: 70%;
  padding-bottom: 2rem;
  /* overflow: hidden; */
  // text-align: justify;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    width: 90%;
  }
`
