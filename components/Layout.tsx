import { ReactNode, useState } from "react";
import { Toaster } from "react-hot-toast";
import Header from "./Header";
import { WalletModal, WalletModalContext } from "./Wallet";

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <WalletModalContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="text text-2xl tracking-wide text-vampire-black">
        <Header />
        {children}
      </div>
      <Toaster
        toastOptions={{
          className: "text-2xl",
          duration: 3000,
        }}
        position="bottom-center"
      />
      <WalletModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </WalletModalContext.Provider>
  );
};

export default Layout;
