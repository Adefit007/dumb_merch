import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";

const NavbarAdmin = () => {
  return (
    <div>
      <Navbar className="navbarBg">
        <Container>
          <Navbar.Brand>
            <img src={logo} style={{ maxWidth: "50px" }} alt="logobrand" />
          </Navbar.Brand>
          <Nav>
            <Nav.Link className="text-white ">Complain</Nav.Link>
            <Nav.Link className="text-danger">
              <b>Category</b>
            </Nav.Link>
            <Nav.Link className="text-white ">Product</Nav.Link>
            <Nav.Link className="text-white">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarAdmin;
