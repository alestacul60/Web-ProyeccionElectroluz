import styled from "styled-components"

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: flex-start;
  max-width: 540px;
  @media screen and (max-width: 768px) {
    padding-bottom: 60px;
  }
`

export const Paragraph = styled.p`
  padding-top: 2rem;
  padding-bottom: 3rem;
  font-size: 16px;
  justify-content: left;
  line-height: 24px;
  color: var(--grisoscuro);
`
export const ImgWrapper = styled.div`
  display: flex;
  width: 90%;
  border-top: 10px solid var(--blueOscuro);
  border-right: 10px solid var(--blueOscuro);
  justify-content: ${({ start }) => (start ? `flex-start` : `flex-end`)};
  position: relative;
  overflow: hidden;
`
