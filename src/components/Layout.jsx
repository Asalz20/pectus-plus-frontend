import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
const Layout = () => {
  return (
    <div className="min-w-container min-h-screen flex flex-col justify-between">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
