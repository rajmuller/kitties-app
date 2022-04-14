import { motion } from "framer-motion";
import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  className?: string;
};

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ y: 0 }}
      whileHover={{ y: -2 }}
      className={`inline-flex items-center justify-center overflow-hidden rounded-md text-2xl font-medium tracking-wide hover:shadow-wallet ${className}`}
    >
      <span className="h-full w-full px-6 py-2">{children}</span>
    </motion.button>
  );
};

export default Button;
