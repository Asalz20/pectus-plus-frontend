import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import RangeSlider from "../components/RangeSlider";
import ProductCard from "../components/ProductCard";
const Shop = () => {
  return (
    <>
      <Meta title={"Shop"} />
      <BreadCrumb title="Shop" />
      <section className="w-60 m-auto border-2 my-6">
        <h6>Price</h6>
        <RangeSlider />
      </section>
      <section className="w-60 m-auto border-2 my-6">
        <h6>Showing: 1-10 products of # products</h6>
        <select>
          <option value="Newest First">Newest First</option>
          <option value="Price Highest to Lowest">
            Price Highest to Lowest
          </option>
          <option value="Price Lowest to Highest">
            Price Lowest to Highest
          </option>
        </select>
      </section>
      <ProductCard />
    </>
  );
};
export default Shop;
