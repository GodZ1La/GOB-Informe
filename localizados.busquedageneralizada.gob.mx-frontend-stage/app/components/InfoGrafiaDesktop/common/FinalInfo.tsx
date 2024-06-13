import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FinalInfo() {
  return (
    <div>
      <div className="bg-final relative flex h-screen w-screen flex-col items-center justify-center">
        <div className="flex h-[234px] w-[129px] flex-col items-center justify-center">
          <Image
            alt=""
            width={129}
            height={234}
            className="scale-105 mix-blend-luminosity blur-[2px]"
            src="/images/personadis.png"
          />
        </div>
        <Link
          href={"/"}
          className="flex h-11 w-[296.82px] items-center justify-center gap-2.5 rounded-[10px] border border-neutral-800 bg-[#fbfef2] p-2.5 text-black hover:text-[#FF666E]"
        >
          <div className="w-[242.82px] text-center font-mono text-lg font-medium uppercase tracking-wide ">
            UTILIZA EL BUSCADOR
          </div>
          <div className="relative h-6 w-6">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_1092_233"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="25"
                height="25"
              >
                <rect
                  x="0.606445"
                  y="0.432251"
                  width="24"
                  height="24"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_1092_233)">
                <path
                  d="M17.2334 13.1822H5.10645V11.6823H17.2334L11.5372 5.98608L12.6064 4.93225L20.1064 12.4322L12.6064 19.9322L11.5372 18.8784L17.2334 13.1822Z"
                  fill="#1C1B1F"
                />
              </g>
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}
