import Delete from "../components/Delete";
import DetailPage from "../components/DetailPage";
import EditProduct from "../components/EditProduct";
import ListCategory from "../components/ListCategory";
import ListProduct from "../components/ListProduct";
import NavbarProduct from "../components/Navbar";
import NavbarAdmin from "../components/NavbarAdmin";
import ProductPage from "../components/ProductPage";
import ProfilPage from "../components/ProfilPage";

const Homepage = () => {
  return (
    <div className="bgHome">
      <NavbarProduct />
      {/* <ProductPage /> */}
      {/* <DetailPage /> */}
      {/* <ProfilPage /> */}
      {/* <NavbarAdmin /> */}
      {/* <ListCategory /> */}
      {/* <EditProduct /> */}
      <ListProduct />
    </div>
  );
};

export default Homepage;
