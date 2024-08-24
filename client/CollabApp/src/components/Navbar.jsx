import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import "../../public/Navbar.css";

function NavigationBar() {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="navbar-container">
          <Navbar.Brand href="#home">CollabApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">All Projects</Nav.Link>
              <Nav.Link href="#link">My Projects</Nav.Link>
            </Nav>
            <Nav className="ms-auto"> {/* Aligns the new option to the right */}
              <Button variant="outline-light" href="#create-project">
                Create New Project
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavigationBar;
