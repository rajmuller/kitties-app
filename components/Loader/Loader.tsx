import { motion, Transition } from "framer-motion";

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "50%",
  },
  end: {
    y: "150%",
  },
};

const loadingCircleTransition = {
  duration: 0.3,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut",
};

const Loader = () => {
  return (
    <motion.div
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
      className="mt-32 flex w-full items-center justify-center gap-2"
    >
      {[
        "text-blue-600",
        "text-purple-500",
        "text-green-500",
        "text-red-500",
        "text-yellow-500",
        "text-blue-300",
        "text-teal-500",
      ].map((color) => {
        return (
          <motion.div
            key={color}
            className={`inline-block h-8 w-8  rounded-full bg-current ${color}`}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition as Transition}
          />
        );
      })}
    </motion.div>
  );
};
export default Loader;
