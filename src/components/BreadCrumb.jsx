import { Link } from "react-router-dom";
const BreadCrumb = ({ title }) => {
  return (
    <div className="flex justify-center">
      <Link to="/" className="text-blue-400">
        Home &nbsp;
      </Link>
      / {title}
    </div>
  );
};
export default BreadCrumb;
