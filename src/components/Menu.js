import { Col, Container, Row } from "react-bootstrap"

const Menu = () => {
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                    <h4>Buy a Home</h4>
                    </Col>
                    <Col>
                    <h4>Rent a Home</h4>
                    </Col>
                    <Col>
                    <h4>See Neighborhood</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Menu