import NavbarProduct from "../components/Navbar";
import ProductPage from "./ProductPage";

const Homepage = () => {
  return (
    <div className="bgHome">
      <NavbarProduct />
      <ProductPage />
    </div>
  );
};

export default Homepage;
