import { AnimationProps, motion, MotionProps } from "framer-motion";
import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  className?: string;
  style?: MotionProps["style"];
  initial?: MotionProps["initial"];
  animate?: AnimationProps["animate"];
  exit?: AnimationProps["exit"];
};

const Button = ({
  children,
  onClick,
  className,
  style,
  animate,
  initial,
  exit,
}: ButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ y: 0 }}
      exit={exit}
      whileHover={{ y: -2 }}
      initial={initial}
      animate={animate}
      style={style}
      className={`inline-flex items-center justify-center overflow-hidden rounded-md text-2xl font-medium tracking-wide hover:shadow-wallet ${className}`}
    >
      <span className="h-full w-full px-6 py-2">{children}</span>
    </motion.button>
  );
};

export default Button;
