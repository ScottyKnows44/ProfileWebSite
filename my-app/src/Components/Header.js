import {Navbar, Nav,NavDropdown} from "react-bootstrap";

function Header(){
    return(
      <div id="home">
        <div className="displayBlock">
          <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="#home">Scott Thompson - Web Developer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#resume">Resume</Nav.Link>
              <NavDropdown title="Socials" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://www.linkedin.com/in/scott-thompson-087508158/">Linkedin</NavDropdown.Item>
                <NavDropdown.Item href="https://github.com/ScottyKnows44">GitHub</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
      </div>
    );
}

export default Header;