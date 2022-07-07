import { Container, Row, Col } from "react-bootstrap";
import mouse from "../assets/mouse1.webp";
import logo from "../assets/logo.png";
import NavbarProduct from "../components/Navbar";
import { dataProfile } from "../components/DataDummy";

const ProfilPage = () => {
  return (
    <div className="bgHome">
      <NavbarProduct />
      <Container>
        <Row className="mt-4">
          <Col md={7} className="mb-3">
            <div className="container-fluid">
              <h4 className="text-danger mb-4">Profile</h4>
              {dataProfile.map((item) => (
                <Row>
                  <div className="col-md-5">
                    <img
                      src={item.image}
                      style={{ height: "auto", width: "100%" }}
                      className="img-fluid rounded-1 mb-3"
                      alt="profile"
                    />
                  </div>
                  <div className="col text-white">
                    <div>
                      <p className="text-danger m-0 p-0">
                        <b>Name</b>
                      </p>
                      <p>{item.name}</p>
                    </div>
                    <div>
                      <p className="text-danger m-0 p-0">
                        <b>Email</b>
                      </p>
                      <p>{item.email}</p>
                    </div>
                    <div>
                      <p className="text-danger m-0 p-0">
                        <b>Phone</b>
                      </p>
                      <p>{item.phone}</p>
                    </div>
                    <div>
                      <p className="text-danger m-0 p-0">
                        <b>Gender</b>
                      </p>
                      <p>{item.gender}</p>
                    </div>
                    <div>
                      <p className="text-danger m-0 p-0">
                        <b>Address</b>
                      </p>
                      <p>{item.address}</p>
                    </div>
                  </div>
                </Row>
              ))}
            </div>
          </Col>
          <Col className="m-2">
            <div className="container-fluid">
              <h4 className="text-danger mb-4">My Transaction</h4>
              <Row className="p-1 bgTransac rounded-1 ">
                <Col xs={2} className="p-1">
                  <img
                    src={mouse}
                    style={{ height: "100%", width: "100%" }}
                    className="img-fluid"
                    alt="transaction"
                  />
                </Col>
                <Col xs={8} className="detailTransaction text-white m-0">
                  <p className=" text-danger m-0">
                    <b>Mouse</b>
                  </p>
                  <p className="text-danger m-0">
                    <b>Saturday</b>, 21 Juni 2022
                  </p>
                  <p className="mt-0">Price: Rp 600.000</p>
                  <p className="m-0">
                    <b>Sub Total : 600.000</b>
                  </p>
                </Col>
                <Col xs={2} className="p-3">
                  <img
                    src={logo}
                    style={{ height: "100%", width: "100%" }}
                    className="img-fluid "
                    alt="transaction"
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfilPage;
