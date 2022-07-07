import { Container, Table, Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import { dataCategory } from "../components/DataDummy";

const ListCategory = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="bgHome">
      <NavbarAdmin />
      <Container>
        <div className="containr-fluid mt-3 ">
          <h4 className="text-white mb-3">List Category</h4>
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
                <th>Category Name</th>
                <th colSpan={2} className="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {dataCategory.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <Button type="button" className="buttonList">
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      type="button"
                      className="buttonList1"
                      onClick={handleShow}
                    >
                      Delete
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Delete Category</Modal.Title>
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
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default ListCategory;
