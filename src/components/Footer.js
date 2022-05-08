import {Container,Row,Col} from "react-bootstrap"

const Footer = () => {
    return (
        <div>
            <Container>
                <Row className="footer-text align-content-center">
                    <Col className="text-light">
                    <h1>Talk to Real Estate Agent</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat risus vitae </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer