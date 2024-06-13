import { motion } from 'framer-motion';
import React from 'react';

export default function WrapperFedinLeft({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const ref = useRef(null);
  // const isIvView = useInView(ref, { once: false });
  // const animate = useAnimation();
  // useEffect(() => {
  //   if (isIvView) {
  //     animate.start('visible');
  //   }
  // });
  return (
    <motion.div
      initial={{ opacity: 0, x: -75 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: false, amount: 'some' }}
    >
      {children}
    </motion.div>
  );
}
