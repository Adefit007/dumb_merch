import React from "react";
import { Form, Button, Container } from "react-bootstrap";

function EditProduct() {
  return (
    <div>
      <Container className="container-fluid">
        <h3 className="text-white mt-4">Edit Product</h3>
        <Button variant="danger" className="my-3">
          Upload Image
        </Button>{" "}
        <span className="text-white ms-3">Mouse.jpg</span>
        <Form>
          <Form.Group className="mb-3 " controlId="formBasic">
            <Form.Control
              className="formInputDetail"
              type="text"
              placeholder="Mouse"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Control
              className="formInputDetail"
              as="textarea"
              placeholder="lorem ipsum"
              rows={3}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Control
              className="formInputDetail"
              type="text"
              placeholder="500"
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="">
            <Form.Control
              className="formInputDetail"
              type="text"
              placeholder="50"
            />
          </Form.Group>
          <Button className="buttonLoginDeatil mt-4" type="submit">
            Save
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default EditProduct;
