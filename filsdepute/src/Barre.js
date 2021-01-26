import './App.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';


function Barre() {
  return (
    <div className="Barre">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Fils de pute</Navbar.Brand>
          <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Individus dangereux" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/fdp/Arthur">Arthur</NavDropdown.Item>
                <NavDropdown.Item href="/fdp/Lourick">Lourick</NavDropdown.Item>
                <NavDropdown.Item href="/fdp/Matisse">Matisse</NavDropdown.Item>
                <NavDropdown.Item href="/fdp/Ben">Ben</NavDropdown.Item>
                <NavDropdown.Item href="/fdp/Vincent">Vincent</NavDropdown.Item>
                <NavDropdown.Item href="/fdp/Raph">Raph</NavDropdown.Item>
                <NavDropdown.Item href="/fdp/Alex">Alex</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/liste">Liste</Nav.Link>
              <Nav.Link href="/faq">FAQ</Nav.Link>
              <Nav.Link href="/ajouterfdp">FDP</Nav.Link>
          </Nav>
      </Navbar>
    </div>
    
  );
}


export default Barre;