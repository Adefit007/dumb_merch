import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.png";
import Login from "../components/Login";
import Register from "../components/Register";

const LogregPage = () => {
  return (
    <div className="containerLogin">
      <div className=" mt-0">
        <Container xs={6} md={12} className="pt-5 ">
          <Row>
            <Col xs={12} md={7}>
              <div className="fluid align-items-center justify-content-center ms-4 pt-3">
                <div className="d-flex align-items-center ">
                  <img
                    src={logo}
                    style={{ height: "auto", width: "50%" }}
                    className="fluid"
                    alt="logo"
                  />
                </div>
                <h2 className="text-white mt-3">Easy, Fast and Reliable</h2>
                <p className="text-white-50 mb-0">
                  Go shopping for merchandise, just go to dumb merch shopping.
                </p>
                <p className="text-white-50 mt-0">
                  the biggest merchandise in Indonesia
                </p>
                <div className="mt-3">
                  <button
                    type="button"
                    className="buttonLeft me-3 text-white-50 "
                  >
                    Login
                  </button>
                  <button type="button" className="buttonLeft1 text-white-50">
                    Register
                  </button>
                </div>
              </div>
            </Col>
            <Col xs={12} md={5}>
              <div className=" align-items-center justify-content-center py-5">
                <Container className="py-5 px-3 justify-content-center">
                  <Login />
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LogregPage;
