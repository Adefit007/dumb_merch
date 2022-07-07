import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { dataProduct } from "../components/DataDummy";

const ProductPage = () => {
  return (
    <div>
      <Container className="bgProduct py-3">
        <div>
          <h4 className="text-danger">Product</h4>
        </div>
        <Row>
          {dataProduct.map((item, index) => (
            <Col md={4} lg={3} className="mt-2">
              <Card style={{ width: "14rem" }} className="bg-dark">
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>
                    <Link
                      to={`/detail-product/${index}`}
                      className="text-decoration-none text-danger"
                    >
                      {item.name}
                    </Link>
                  </Card.Title>
                  <Card.Text className="text-light m-0">
                    Rp. {item.price}
                  </Card.Text>
                  <Card.Text className="text-light m-0">
                    Stock {item.stock}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductPage;
