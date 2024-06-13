import { motion } from 'framer-motion';
import React from 'react';

export default function WrapperOutDown({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: false, amount: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
