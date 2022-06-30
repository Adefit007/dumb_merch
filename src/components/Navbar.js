import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";

const NavbarProduct = () => {
  return (
    <div>
      <Navbar className="navbarBg">
        <Container>
          <Navbar.Brand>
            <img src={logo} style={{ maxWidth: "50px" }} alt="logobrand" />
          </Navbar.Brand>
          <Nav>
            <Nav.Link className="text-white ">Complain</Nav.Link>
            <Nav.Link className="text-white mx-1">Profile</Nav.Link>
            <Nav.Link className="text-white">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarProduct;
