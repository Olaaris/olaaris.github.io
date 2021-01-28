import './App.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';


function Barre() {
  return (
    <div className="Barre">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">Fils de pute</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
              <NavDropdown title="Individus dangereux" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/fdp/Arthur">Arthur</NavDropdown.Item>
                <NavDropdown.Item href="/fdp/Lourick">Lourick</NavDropdown.Item>
                <NavDropdown.Item href="/fdp/Matisse">Matisse</NavDropdown.Item>
                <NavDropdown.Item href="/fdp/Ben">Ben</NavDropdown.Item>
                <NavDropdown.Item href="/fdp/Vincent">Vincent</NavDropdown.Item>
                <NavDropdown.Item href="/fdp/Raph">Raph</NavDropdown.Item>
                <NavDropdown.Item href="/fdp/Alex">Alex</NavDropdown.Item>
                <NavDropdown.Item href="/fdp/Will">Will</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/faq">FAQ</Nav.Link>
              <Nav.Link href="/liste">Liste</Nav.Link>


          </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
    
  );
}


export default Barre;