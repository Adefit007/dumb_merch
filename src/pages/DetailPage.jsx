import { Container, Row, Col } from "react-bootstrap";
import NavbarProduct from "../components/Navbar";
import { detailProduct } from "../components/DataDummy";

const DetailPage = () => {
  return (
    <div className=" mt-1 bgHome">
      <NavbarProduct />
      <Container xs={6} md={10} className="px-3">
        {detailProduct.map((item) => (
          <Row>
            <Col xs={12} md={5}>
              <div className="fluid align-items-center justify-content-center  pt-3">
                <div className="d-flex align-items-center ">
                  <img
                    src={item.image}
                    style={{ height: "auto", width: "100%" }}
                    className="img-fluid"
                    alt="logo"
                  />
                </div>
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div className=" py-3 ">
                <Container className=" justify-content-center">
                  <div>
                    <h2 className="text-danger">
                      <b>{item.name}</b>
                    </h2>
                    <div className="text-white">
                      <p>- Stok : {item.stock} </p>
                      <p>
                        - Wireless Mouse <br />
                        - Konektivitas Wireles 2.4Ghz <br />
                        - Jarak Wireless hingga 10 m <br />
                        - Plug and Play <br />
                        - Baterai <br />- hingga 12 Bulan
                      </p>
                      <div className="descProduct">
                        <p>{item.desc}</p>
                      </div>
                    </div>
                    <div className="text-danger text-end my-3">
                      <b> RP. {item.price}</b>
                    </div>
                    <button className="buttonLogin rounded" type="submit">
                      <b>Buy</b>
                    </button>
                  </div>
                </Container>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default DetailPage;
