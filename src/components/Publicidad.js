import React from 'react'
import { Container, Row, Col} from "react-bootstrap"
const Publicidad = ({publicidad}) => {
  return (
     <Container className=" mt-1 mb-1 ">
        <Row>
          <Col>
          <img src={publicidad} alt="publicidad" className="w-100" />
          </Col>
        </Row>
      </Container>
  )
}

export default Publicidad