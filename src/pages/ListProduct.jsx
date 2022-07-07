import React, { useState } from "react";
import { Container, Table, Button, Modal } from "react-bootstrap";
import NavbarAdmin from "../components/NavbarAdmin";
import { Link } from "react-router-dom";
import { dataCategory } from "../components/DataDummy";

function ListProduct() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="bgHome">
      <NavbarAdmin />
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
              {dataCategory.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.image}</td>
                  <td>{item.name}</td>
                  <td className="text-truncate">{item.desc}</td>
                  <td>{item.price}</td>
                  <td>{item.stock}</td>
                  <td>
                    <Button type="button" className="buttonList">
                      <Link
                        to={`/edit-product/${item.id}`}
                        className="text-decoration-none text-white"
                      >
                        Edit
                      </Link>
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
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
}

export default ListProduct;
