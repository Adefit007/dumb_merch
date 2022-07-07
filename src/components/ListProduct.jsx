import React, { useState } from "react";
import { Container, Table, Button, Modal } from "react-bootstrap";

function ListProduct() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container>
      <div className="containr-fluid mt-3 ">
        <h4 className="text-white mb-3">List Product</h4>
        <Table
          responsive
          striped
          bordered
          hover
          variant="dark"
          className="text-center"
        >
          <thead>
            <tr>
              <th>No</th>
              <th>Photo</th>
              <th>Product Name</th>
              <th>Product Desc</th>
              <th>Price</th>
              <th>Qty</th>
              <th colSpan={2} className="text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mouse.jpg</td>
              <td>Mouse</td>
              <td>lorem</td>
              <td>300.000</td>
              <td>50</td>
              <td>
                <Button type="button" className="buttonList">
                  Edit
                </Button>
              </td>
              <td>
                <>
                  <Button
                    type="button"
                    className="buttonList1"
                    onClick={handleShow}
                  >
                    Delete
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Delete Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Are you sure you want Delete this Data...?
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="success" onClick={handleClose}>
                        Yes
                      </Button>
                      <Button variant="danger" onClick={handleClose}>
                        No
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Keyboard</td>
              <td>Mouse</td>
              <td>lorem</td>
              <td>300.000</td>
              <td>50</td>
              <td>
                <Button type="button" className="buttonList">
                  Edit
                </Button>
              </td>
              <td>
                <Button type="button" className="buttonList1">
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Bag</td>
              <td>Mouse</td>
              <td>lorem</td>
              <td>300.000</td>
              <td>50</td>
              <td>
                <Button type="button" className="buttonList">
                  Edit
                </Button>
              </td>
              <td>
                <Button type="button" className="buttonList1">
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Stationary</td>
              <td>Mouse</td>
              <td>lorem</td>
              <td>300.000</td>
              <td>50</td>
              <td>
                <Button type="button" className="buttonList">
                  Edit
                </Button>
              </td>
              <td>
                <Button type="button" className="buttonList1">
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Doll</td>
              <td>Mouse</td>
              <td>lorem</td>
              <td>300.000</td>
              <td>50</td>
              <td>
                <Button type="button" className="buttonList">
                  Edit
                </Button>
              </td>
              <td>
                <Button type="button" className="buttonList1">
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Pillow</td>
              <td>Mouse</td>
              <td>lorem</td>
              <td>300.000</td>
              <td>50</td>
              <td>
                <Button type="button" className="buttonList">
                  Edit
                </Button>
              </td>
              <td>
                <Button type="button" className="buttonList1">
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default ListProduct;
