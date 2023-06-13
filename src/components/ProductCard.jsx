import { AiFillHeart } from "react-icons/ai";
const ProductCard = () => {
  return (
    <div className="w-3/4 m-auto border-2 relative">
      <AiFillHeart className="cursor-pointer text-gray-300 hover:text-red-500 absolute right-1" />
      <img src="" alt="" />
      <div className="flex flex-col">
        <h6>Product</h6>
        <span>
          By <span>Brand</span>
        </span>
        <span>Price</span>
      </div>
    </div>
  );
};
export default ProductCard;
