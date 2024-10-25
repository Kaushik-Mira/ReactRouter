import Contact from "../pages/Contact/Contact";
import { Outlet } from "react-router-dom";
const ContactLayout = () => {
  return (
    <div>
      <Contact />
      <Outlet />
    </div>
  );
};

export default ContactLayout;
