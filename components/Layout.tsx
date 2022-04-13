import { ReactNode } from "react";
import Header from "./Header";

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="text bg-offWhite text-2xl tracking-wide text-vampire-black">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
