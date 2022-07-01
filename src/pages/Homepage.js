import DetailPage from "../components/DetailPage";
import NavbarProduct from "../components/Navbar";
import ProductPage from "../components/ProductPage";
import ProfilPage from "../components/ProfilPage";

const Homepage = () => {
  return (
    <div className="bgHome">
      <NavbarProduct />
      {/* <ProductPage /> */}
      {/* <DetailPage /> */}
      <ProfilPage />
    </div>
  );
};

export default Homepage;
