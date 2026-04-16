import { motion } from "motion/react";

export function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {/* Vertical lines */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scaleY: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"
          style={{ left: `${(i / 20) * 100}%` }}
        />
      ))}
      
      {/* Horizontal lines */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scaleX: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2 + 1,
            ease: "easeInOut",
          }}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
          style={{ top: `${(i / 20) * 100}%` }}
        />
      ))}
    </div>
  );
}
