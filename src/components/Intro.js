import { Col, Container, Row , Alert, Button} from "react-bootstrap"
import houseImage from "../assets/images/house.png"

const Intro = () => {
    return(
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col className="align-self-center">
                    <h1>Search for Home in your Neighborhood</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat risus vitae arcu iaculis, ut semper est iaculis. Nulla convallis imperdiet ipsum ut tincidunt. Nam id viverra enim.</p>
                    <Alert key="light" variant="light">
                    <Row>
                        <Col>
                        <h5>Address</h5>
                        <p>Lorem ipsum dolor</p>
                        </Col>
                        <Col>
                        <h5>City</h5>
                        <p>Lorem ipsum dolor</p>
                        </Col>
                        <Col className="align-items-center">
                        <Button variant="primary" size="lg">Search</Button>
                        </Col>
                    </Row>
                    </Alert>
                    </Col>
                    <Col className="align-self-center">
                    <img className="images" src={houseImage} alt="Minimalist House" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro