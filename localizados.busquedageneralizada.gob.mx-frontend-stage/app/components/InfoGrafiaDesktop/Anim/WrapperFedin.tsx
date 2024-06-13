import { motion } from "framer-motion";
import React from "react";

export default function WrapperFidin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      exit={{ opacity: 0, y: -100 }}
      viewport={{ once: false, amount: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
