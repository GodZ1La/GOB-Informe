import { motion } from 'framer-motion';
import React from 'react';

export default function WrapperFedIn({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: false, amount: 'some' }}
    >
      {children}
    </motion.div>
  );
}
