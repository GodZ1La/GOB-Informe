import useWindowsSize from '@/app/hooks/useWindowsSize';
import { MotionValue, motion } from 'framer-motion';
import React from 'react';
type scrollYProgress = {
  y: MotionValue<number>;
};
export default function DrawingSVG({ y }: scrollYProgress) {
  const screen = useWindowsSize();
  return (
    <motion.svg
      width="14000"
      height="411"
      viewBox="0 0 14000 411"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={
        screen.height <= 700
          ? 'absolute left-[1150px] w-[12000px] lg:top-[1rem]'
          : 'absolute left-[1150px] w-[12000px] lg:top-[7rem]'
      }
    >
      <motion.path
        d="M5 416C123.672 388.735 206.956 357.786 197.523 280.797C193.213 245.615 124.889 267.931 118.539 291.542C96.0466 375.177 581.981 295.33 626.175 287.96C648.897 284.171 1123.6 194.291 1005.46 146.49C933.85 117.515 783.125 168.874 805.534 216.778C818.912 245.375 870.196 250.458 916.605 255.727C1120.43 278.866 1352.72 268.406 1556.7 256.622C1842.15 240.132 2116.22 205.484 2386.86 154.101C2588.02 115.907 2780.76 69.3783 2989.93 44.4166C3312.45 5.92764 3697.91 -16.3731 4020.01 35.0151C4101.44 48.0063 4183.9 63.9006 4227.35 107.093C4263.79 143.322 4231.09 191.312 4164.82 209.167C4141.54 215.438 4109.2 211.842 4110.52 193.945C4113.49 153.506 4198.85 124.099 4255.32 108.884C4407.38 67.9136 4589.19 59.4178 4756.37 61.8765C4857.6 63.3652 4958.78 68.7105 5059.97 71.278C5199.42 74.8167 5402.67 96.1777 5525.64 47.9981C5605.16 16.8438 5493.54 -6.57074 5480.39 28.2997C5453.85 98.7107 5696.03 124.829 5775.76 127.239C5814.55 128.412 5850.31 128.594 5886.83 121.419C5894.33 119.946 5905.6 107.583 5902.46 111.57C5892.78 123.868 5956.84 132.388 5967.46 133.507C6177.26 155.602 6387.56 155.252 6601.8 158.13C7003.62 163.529 7415.7 142.777 7815.35 169.322C7901.99 175.077 7990.91 182.779 8072.05 201.556C8088.5 205.364 8103.74 210.884 8117.3 217.225C8121.95 219.4 8120.07 227.699 8125.53 226.179C8376.52 156.304 8753.15 186.264 9019.03 193.498C9451.38 205.261 9883 222.966 10315.7 231.551C10524.6 235.696 10757.1 247.35 10964.8 222.15C11056.2 211.067 11376.3 142.671 11233.9 61.4288C11162.5 20.6847 11012.2 49.823 11079.2 109.332C11162.4 183.237 11374.8 194.606 11515.3 201.108C11814.7 214.974 12133.8 205.177 12426.9 168.875C12706.9 134.183 12974.3 88.7299 13262.8 76.2026C13322.6 73.6045 13989.2 55.4635 13857.6 165.741C13842.6 178.318 13796.8 196.582 13763.8 189.021C13695 173.258 13837 109.11 13843.6 106.198C13912.3 75.8629 13992 60.187 14074 45.312"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        style={{ pathLength: y }}
      />
    </motion.svg>
  );
}