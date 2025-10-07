import { motion } from "framer-motion";

const ScratchIcon = ({ className }) => {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.svg
      width="252"
      height="14"
      viewBox="0 0 252 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial="hidden"
      animate="visible"
    >
      <motion.path
        d="M1 10.9419C46 4.94194 159.5 0.441897 251 7.38386"
        stroke="#009C60"
        strokeWidth="6"
        variants={pathVariants}
      />
    </motion.svg>
  );
};

export default ScratchIcon;
