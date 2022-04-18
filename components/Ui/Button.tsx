import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode } from "react";

type ButtonProps = HTMLMotionProps<"button"> & {
  children?: ReactNode;
  className?: string;
};

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <motion.button
      whileTap={{ y: 0 }}
      whileHover={{ y: -2 }}
      className={`inline-flex items-center justify-center overflow-hidden rounded-md text-2xl font-medium tracking-wide hover:shadow-wallet disabled:bg-slate-200 disabled:text-slate-400 ${className}`}
      {...props}
    >
      <span className="h-full w-full px-6 py-2">{children}</span>
    </motion.button>
  );
};

export default Button;
