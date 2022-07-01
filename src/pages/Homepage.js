import DetailPage from "../components/DetailPage";
import NavbarProduct from "../components/Navbar";
import ProductPage from "../components/ProductPage";

const Homepage = () => {
  return (
    <div className="bgHome">
      <NavbarProduct />
      {/* <ProductPage /> */}
      <DetailPage />
    </div>
  );
};

export default Homepage;
