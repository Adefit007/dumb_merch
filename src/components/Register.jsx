import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Form className="formLogin  p-3 rounded ">
      <h3 className="text-white mt-2 mb-0">Register</h3>

      <Form.Group className="mt-0" controlId="exampleForm.ControlInput1">
        <Form.Label></Form.Label>
        <Form.Control className="formInput" type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
        <Form.Label></Form.Label>
        <Form.Control className="formInput" type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
        <Form.Label></Form.Label>
        <Form.Control
          className="formInput"
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Link to="/category">
        <button className="buttonLogin " type="submit">
          Register
        </button>
      </Link>
    </Form>
  );
};

export default Register;
