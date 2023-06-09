import { Link } from "react-router-dom";
import { BiPaperPlane } from "react-icons/bi";
export const Footer = () => {
  const infoLinks = [
    { name: "Blogs", path: "#" },
    { name: "Refund Policy", path: "#" },
    { name: "Shipping Policy", path: "#" },
    { name: "Terms Of Service", path: "#" },
  ];

  const quickLinks = [
    { name: "Weight Lifting Equipment", path: "#" },
    { name: "Vaccuum Bells", path: "#" },
    { name: "Stretching Equipment", path: "#" },
    { name: "Accessories", path: "#" },
  ];

  return (
    <footer>
      <div className="flex flex-col items-center max-w-[1200px] m-auto sm:flex-row">
        <div className="flex items-center">
          <BiPaperPlane className="text-6xl" />
          <label className="flex" htmlFor="email">
            Sign Up For NewsLetter
          </label>
        </div>

        <input
          id="email"
          className="border-4 border-solid border-gray-300 rounded-md p-2 m-2 w-4/5"
          type="text"
          placeholder="Enter your email"
        />
        <button className="btn m-2">Subscribe</button>
      </div>
      <section className="flex flex-col p-3 bg-primary text-white">
        <div className=" flex flex-col mb-8 items-center justify-center text-center">
          <h3 className="mb-2">CONTACT US</h3>
          <ul>
            <address>
              201 Broadway Avenue, New York City, NY
              <span> Zip: 01001</span>
            </address>
            <li>
              {" "}
              <a href="mailto:help@pectusplus.com">help@pectusplus.com</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-center w-full max-w-[1200px] m-auto">
          <div className="w-full flex flex-col items-center mb-8 text-center">
            <h3 className="mb-2">INFORMATION</h3>
            <ul>
              {infoLinks.map((links, index) => (
                <li key={index}>
                  <Link to={links.path}>{links.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full flex flex-col items-center mb-8 text-center">
            <h3 className="mb-2">QUICK LINKS</h3>
            <ul>
              {quickLinks.map((links, index) => (
                <li key={index}>
                  <Link to={links.path}>{links.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <span className="text-center">
          &copy; {new Date().getFullYear()} Powered by the team over at Pectus
          Plus
        </span>
      </section>
    </footer>
  );
};

export default Footer;
