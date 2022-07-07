import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const NavbarProduct = () => {
  return (
    <div>
      <Navbar className="navbarBg">
        <Container>
          <Navbar.Brand>
            <NavLink to="/">
              <img src={logo} style={{ maxWidth: "50px" }} alt="logobrand" />
            </NavLink>
          </Navbar.Brand>
          <Nav>
            <Nav.Link className="text-white ">
              <NavLink
                to="/complain-user"
                activeClassName="active"
                className="text-white text-decoration-none"
              >
                Complain
              </NavLink>{" "}
            </Nav.Link>
            <Nav.Link className=" mx-1 ">
              <NavLink
                to="/profile"
                activeClassName="active"
                className="text-white text-decoration-none"
              >
                Profile
              </NavLink>
            </Nav.Link>
            <Nav.Link className="text-white">
              <NavLink to="/signin" className="text-white text-decoration-none">
                Logout
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarProduct;
