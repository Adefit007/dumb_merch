import { Container, Table, Button, Card, Row, Col } from "react-bootstrap";
import mouse from "../assets/mouse1.webp";
import keyboard from "../assets/keyboard.webp";

const ListCategory = () => {
  return (
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
            <tr>
              <td>1</td>
              <td>Mouse</td>
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
              <td>2</td>
              <td>Keyboard</td>
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
};

export default ListCategory;
