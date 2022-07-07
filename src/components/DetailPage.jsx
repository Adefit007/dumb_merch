import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/mouse1.webp";

const DetailPage = () => {
  return (
    <div className=" mt-1">
      <Container xs={6} md={10} className="px-3">
        <Row>
          <Col xs={12} md={5}>
            <div className="fluid align-items-center justify-content-center  pt-3">
              <div className="d-flex align-items-center ">
                <img
                  src={logo}
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
                    <b>Mouse</b>
                  </h2>
                  <div className="text-white">
                    <p>- Stok : 300 </p>
                    <p>
                      - Wireless Mouse <br />
                      - Konektivitas Wireles 2.4Ghz <br />
                      - Jarak Wireless hingga 10 m <br />
                      - Plug and Play <br />
                      - Baterai <br />- hingga 12 Bulan
                    </p>
                    <div className="descProduct">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sequi incidunt aliquam accusamus laudantium ratione
                        provident id eveniet accusantium, mollitia, eligendi
                        recusandae voluptatibus ducimus, obcaecati ipsam sit
                        eius excepturi odio quis omnis. Odit id aperiam quasi
                        molestias repellendus beatae iusto quos nostrum fugit!
                        Quasi autem laudantium aliquid. Tempore quod amet
                        delectus.
                      </p>
                    </div>
                  </div>
                  <div className="text-danger text-end my-3">
                    <b> RP. 600.000</b>
                  </div>
                  <button className="buttonLogin rounded" type="submit">
                    <b>Buy</b>
                  </button>
                </div>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailPage;
