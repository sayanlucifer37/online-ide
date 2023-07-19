import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar({projectName}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" variant='dark' data-bs-theme="dark">
      <Container style={{margin:0}}>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={require("file:///C:/Users/Aniket/Desktop/New%20folder%20(2)/React/2_components_state_props/my-app/src/img/logo.jpg")}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          {projectName}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;