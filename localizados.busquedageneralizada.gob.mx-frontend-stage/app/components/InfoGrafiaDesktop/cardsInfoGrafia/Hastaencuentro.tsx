import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

export default function Hastaencuentro() {
  return (
    <div className="absolute right-[19rem] top-[11rem]">
      <div className="relative h-[360px] w-[360px]">
        {/* <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            yoyo: true,
            duration: 2,
            delay: 1.5,
          }}
          className="borderPerencuentro absolute left-0 top-0 h-[360px] w-[360px] rounded-full"
        /> */}
        <motion.svg
          width="360"
          height="360"
          viewBox="0 0 360 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={'absolute left-0 top-0 h-[360px] w-[360px] rounded-full'}
        >
          <motion.circle
            cx="179.998"
            cy="180.002"
            r="179.498"
            stroke="black"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              yoyo: true,
              duration: 5,
              delay: 1.5,
            }}
            strokeDasharray="10 20"
          />
        </motion.svg>

        <div className="absolute left-[27px] top-[11.80px] h-[336.40px] w-[306px]">
          <div className="absolute left-[163px] top-[154.25px] inline-flex h-[171px] w-[143px] flex-col items-center justify-center blur-sm">
            <Image
              alt="wendy"
              width={143}
              height={171}
              src="/images/wendy.png"
            />
          </div>
          <div className="absolute left-[79px] top-0 inline-flex h-[165px] w-[146px] flex-col items-center justify-center blur-sm">
            <Image
              alt="alicia"
              width={146}
              height={165}
              src="/images/alicia.png"
            />
          </div>
          <div className="absolute left-0 top-[155.40px] inline-flex h-[181px] w-[158px] flex-col items-center justify-center blur-sm">
            <Image
              alt="miguel"
              width={158}
              height={181}
              src="/images/miguel.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
