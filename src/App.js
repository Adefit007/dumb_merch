import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LogregPage from "./components/LogregPage";
import "../src/style/style.css";
import NavbarProduct from "./components/Navbar";
import { Navbar } from "react-bootstrap";
import ProductPage from "./components/ProductPage";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="bg-dark">
      {/* <LogregPage /> */}
      {/* <NavbarProduct />
      <ProductPage /> */}
      <Homepage />
    </div>
  );
}

export default App;
