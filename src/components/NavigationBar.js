import {Navbar,Nav,Container,Button} from "react-bootstrap"

const NavigationBar = () => {
    return(
        <div>
        <Navbar variant="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">RealEstate</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About Us</Nav.Link>
                <Nav.Link href="#link">Features</Nav.Link>
                <Nav.Link href="#link">Contacts</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#link"><Button variant="outline-primary" size="sm">Sign In</Button></Nav.Link>
                <Nav.Link href="#link"><Button variant="primary" size="sm">Sign Up</Button></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
    )
}
export default NavigationBar