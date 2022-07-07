import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/style/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigninPage from "./pages/SigninPage";
import Homepage from "./pages/Homepage";
import ProfilPage from "./pages/ProfilPage";
import ListProduct from "./pages/ListProduct";
import ListCategory from "./pages/ListCategory";
import EditProduct from "./pages/EditProduct";
import DetailPage from "./pages/DetailPage";
import User from "./pages/CustomerComplain";
import AdminComplain from "./pages/AdminComplain";

function App() {
  return (
    <div className="bg-dark mw-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/profile" element={<ProfilPage />} />
          <Route path="/product" element={<ListProduct />} />
          <Route path="/category" element={<ListCategory />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/detail-product/:id" element={<DetailPage />} />
          <Route path="/complain-user" element={<User />} />
          <Route path="/complain-admin" element={<AdminComplain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
