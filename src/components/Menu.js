import { Col, Container, Row, Card} from "react-bootstrap"
import houseImage from "../assets/images/house-menu.png"

const Menu = () => {
    return(
        <div>
            
            <Container>
                <Row className="mb-4">
                    <Col><center><h1>Can we help you find?</h1></center></Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="menu-card" style={{ width: '18rem' }} bg="light">
                        <center><img className="menu-image" src={houseImage} alt="House Image"/></center>
                        <Card.Body>
                            <center>
                            <Card.Title>Buy a Home</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            </center>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="menu-card" style={{ width: '18rem' }} bg="light">
                        <center><img className="menu-image" src={houseImage} alt="House Image"/></center>
                        <Card.Body>
                            <center>
                            <Card.Title>Rent a Home</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            </center>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="menu-card" style={{ width: '18rem' }} bg="light">
                        <center><img className="menu-image" src={houseImage} alt="House Image"/></center>
                        <Card.Body>
                            <center>
                            <Card.Title>See Neighborhood</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            </center>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Menu