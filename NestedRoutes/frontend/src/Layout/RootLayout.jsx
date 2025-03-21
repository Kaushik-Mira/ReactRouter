import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
