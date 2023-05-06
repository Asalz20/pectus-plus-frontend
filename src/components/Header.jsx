import { FaPhoneAlt } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import Nav from "./Nav";
export const Header = () => {
  return (
    <header>
      <div className="bg-primary h-20 sm:h-10">
        <ul className="flex flex-col items-center justify-evenly m-auto text-white h-full max-w-[490px] xs:flex-wrap xs:flex-row sm:max-w-[1600px] sm:flex-row sm:justify-around">
          <li className="flex items-center">
            <FaTruck className="text-white mr-2" />
            Free Shipping
          </li>
          <li className="flex items-center">
            <FaRegCreditCard className="text-white mr-2" />
            Payment Methods
          </li>
          <li className="flex items-center">
            <FaPhoneAlt className="text-white p-0.5 mr-2" />
            Call us: 555-555-5555
          </li>
        </ul>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
