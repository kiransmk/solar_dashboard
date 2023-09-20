import { ReactNode } from "react";
import StickyNavbar from "../components/StickyNavbar";

type LayoutT = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutT) => {
  return (
    <div className="h-[100vh] w-screen min-w-[540px] overflow-scroll">
      <StickyNavbar />
      {children}
    </div>
  );
};

export default Layout;
