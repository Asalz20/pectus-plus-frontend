import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import RangeSlider from "../components/RangeSlider";
import ProductCard from "../components/ProductCard";
const Shop = () => {
  return (
    <>
      <Meta title={"Shop"} />
      <BreadCrumb title="Shop" />
      <section className="flex flex-col md:flex-row">
        <div className="min-w-[260px] w-11/12 m-auto border-2 my-6 md:w-1/3 md:h-24">
          <h6>Price</h6>
          <RangeSlider />
        </div>
        <section className="flex flex-col w-11/12 m-auto">
          <div className="min-w-[260px] w-11/12 m-auto border-2 my-6">
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
          </div>
          <div className="sm:flex sm:flex-row sm:flex-wrap md:justify-center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
      </section>
    </>
  );
};
export default Shop;
