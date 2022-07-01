import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LogregPage from "./pages/LogregPage";
import "../src/style/style.css";
import NavbarProduct from "./components/Navbar";
import { Navbar } from "react-bootstrap";
import ProductPage from "./components/ProductPage";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="bg-dark mw-100">
      {/* <LogregPage /> */}
      <Homepage />
    </div>
  );
}

export default App;
