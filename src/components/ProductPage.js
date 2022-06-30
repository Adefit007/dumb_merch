import { Container, Card, Row, Col } from "react-bootstrap";
import logo from "../assets/mouse1.webp";
import keyboard from "../assets/keyboard.webp";

const ProductPage = () => {
  return (
    <Container className="bgProduct py-3">
      <div>
        <h4 className="text-danger">Product</h4>
      </div>
      <Row>
        <Col md={4} lg={3} className="mt-2">
          <Card style={{ width: "14rem" }} className="bg-dark">
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title className="text-danger">Mouse</Card.Title>
              <Card.Text className="text-light m-0">Rp. 600.000</Card.Text>
              <Card.Text className="text-light m-0">Stock 300</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} lg={3} className="mt-2">
          <Card style={{ width: "14rem" }} className="bg-dark">
            <Card.Img variant="top" src={keyboard} />
            <Card.Body>
              <Card.Title className="text-danger">Keyboard</Card.Title>
              <Card.Text className="text-light m-0">Rp. 700.000</Card.Text>
              <Card.Text className="text-light m-0">Stock 300</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
