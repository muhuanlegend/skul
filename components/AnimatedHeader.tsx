'use client'
import confetti from "canvas-confetti";
import { motion } from "motion/react";
import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";

export default function AnimatedHeader() {
     useEffect(() => {
    confetti();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Miles King <FaSearch />
    </motion.div>
  );
}