import { motion } from "motion/react";
import { Music, Disc3, Headphones, Radio } from "lucide-react";

export function FloatingElements() {
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatingVariants2 = {
    animate: {
      y: [0, 20, 0],
      x: [0, -15, 0],
      rotate: [0, -5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatingVariants3 = {
    animate: {
      y: [0, -15, 0],
      x: [0, 20, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {/* Top Left */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 opacity-20"
      >
        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl" />
      </motion.div>

      {/* Top Right */}
      <motion.div
        variants={floatingVariants2}
        animate="animate"
        className="absolute top-32 right-20 opacity-20"
      >
        <Music className="w-16 h-16 text-purple-400" />
      </motion.div>

      {/* Middle Left */}
      <motion.div
        variants={floatingVariants3}
        animate="animate"
        className="absolute top-1/2 left-20 opacity-10"
      >
        <Disc3 className="w-24 h-24 text-pink-400" />
      </motion.div>

      {/* Middle Right */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/3 right-32 opacity-15"
      >
        <div className="w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full blur-2xl" />
      </motion.div>

      {/* Bottom Left */}
      <motion.div
        variants={floatingVariants2}
        animate="animate"
        className="absolute bottom-40 left-32 opacity-10"
      >
        <Headphones className="w-20 h-20 text-purple-300" />
      </motion.div>

      {/* Bottom Right */}
      <motion.div
        variants={floatingVariants3}
        animate="animate"
        className="absolute bottom-32 right-20 opacity-15"
      >
        <Radio className="w-16 h-16 text-pink-300" />
      </motion.div>

      {/* Additional Floating Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full blur-3xl"
      />
    </>
  );
}
