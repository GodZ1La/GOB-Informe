import { motion } from 'framer-motion';
import React from 'react';

export default function WrapperOutUp({
  children,
  once,
}: Readonly<{
  children: React.ReactNode;
  once: boolean;
}>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: once, amount: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
