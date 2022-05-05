import { Col, Container, Row } from "react-bootstrap"
import houseImage from "../assets/images/house.webp"

const Intro = () => {
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                    <h1>Search for Home in your Neighborhood</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat risus vitae arcu iaculis, ut semper est iaculis. Nulla convallis imperdiet ipsum ut tincidunt. Nam id viverra enim.</p>
                    <Row>
                        <Col>Adress</Col>
                        <Col>Adress</Col>
                        <Col>Adress</Col>
                    </Row>
                    </Col>
                    <Col>
                    <img className="images" src={houseImage} alt="Minimalist House" width="100%" height="auto" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro