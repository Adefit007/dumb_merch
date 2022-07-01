import DetailPage from "../components/DetailPage";
import ListCategory from "../components/ListCategory";
import NavbarProduct from "../components/Navbar";
import NavbarAdmin from "../components/NavbarAdmin";
import ProductPage from "../components/ProductPage";
import ProfilPage from "../components/ProfilPage";

const Homepage = () => {
  return (
    <div className="bgHome">
      {/* <NavbarProduct /> */}
      {/* <ProductPage /> */}
      {/* <DetailPage /> */}
      {/* <ProfilPage /> */}
      <NavbarAdmin />
      <ListCategory />
    </div>
  );
};

export default Homepage;
