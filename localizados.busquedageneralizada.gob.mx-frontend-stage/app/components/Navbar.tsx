"use client";
import Lottie from "lottie-react";
import robotAnimation from "@/public/volveradesaparecer_logo.json";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "../utils/utils";
import { ClassValue } from "clsx";

export default function NavBar({
  className,
}: Readonly<{
  className: ClassValue;
}>) {
  const [isOpen, setIsOPen] = useState(false);
  const pathname = usePathname();
  const handleNav = () => {
    setIsOPen(!isOpen);
  };
  return (
    <>
      <div className="relative">
        <div
          className={`fixed z-50 flex h-[50px] w-full items-center bg-[#FBFEF2]/90 p-3 lg:hidden `}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="22"
              viewBox="0 0 30 22"
              fill="none"
              className="w-[10%] md:pl-16"
              onClick={handleNav}
            >
              <path
                d="M0 21.2002V18.1761H30.0091V21.2002H0ZM0 12.5088V9.49126H30.0091V12.5088H0ZM0 3.82397V0.799805H30.0091V3.82397H0Z"
                fill="#FF666E"
              />
            </svg> // <AiOutlineClose size={20} style={{ color: `#ffffff` }} />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="22"
              viewBox="0 0 30 22"
              fill="none"
              className="w-[10%] md:pl-16"
              onClick={handleNav}
            >
              <path
                d="M0 21.2002V18.1761H30.0091V21.2002H0ZM0 12.5088V9.49126H30.0091V12.5088H0ZM0 3.82397V0.799805H30.0091V3.82397H0Z"
                fill="#FF666E"
              />
            </svg>
          )}
          <div className="flex w-[90%] items-center justify-center">
            <Link href={"/"} className="w-[290px]">
              <Lottie
                animationData={robotAnimation}
                autoPlay={false}
                interactivity={{
                  mode: "cursor",
                  actions: [
                    {
                      position: { x: [0, 1], y: [0, 1] },
                      type: "play",
                      frames: [7, 49],
                    },
                    {
                      position: { x: -1, y: -1 },
                      type: "stop",
                      frames: [5],
                    },
                  ],
                }}
              />
            </Link>
          </div>
        </div>
        <div
          className={`fixed right-0 top-0 z-10 hidden h-[50px] w-full flex-row items-center justify-center pt-5 lg:flex ${cn(className)}`}
        >
          <div className="relative w-[386.48px] flex-row justify-center text-center">
            <div className="w-[300px]">
              <Link href={"/"}>
                <Lottie
                  animationData={robotAnimation}
                  autoPlay={false}
                  interactivity={{
                    mode: "cursor",
                    actions: [
                      {
                        position: { x: [0, 1], y: [0, 1] },
                        type: "play",
                        frames: [7, 49],
                      },
                      {
                        position: { x: -1, y: -1 },
                        type: "stop",
                        frames: [5],
                      },
                    ],
                  }}
                />
              </Link>
            </div>
          </div>
          <div className="flex items-start justify-start gap-[17px]">
            <div className="flex items-center justify-center gap-2.5">
              <div
                className={`px-2.5 font-mono text-lg ${pathname === "/" ? "border border-[#212121] font-bold text-[#FFB600]" : "font-normal text-neutral-700"}  hover:border hover:border-[#212121] hover:font-bold hover:text-[#FFB600]`}
              >
                <Link href={"/"}>El buscador</Link>
              </div>
            </div>
            <div className="flex  items-center justify-center gap-2.5">
              <div
                className={`px-2.5 font-mono text-lg ${pathname === "/no-olvidamos" ? "border border-[#212121] font-bold text-[#FFB600]" : "font-normal text-neutral-700"}  hover:border hover:border-[#212121] hover:font-bold hover:text-[#FFB600]`}
              >
                <Link href={"/no-olvidamos"}>No olvidamos</Link>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2.5">
              <div
                className={`px-2.5 font-mono text-lg ${pathname === "/que-podemos-hacer" ? "border border-[#212121] font-bold text-[#FFB600]" : "font-normal text-neutral-700"}  hover:border hover:border-[#212121] hover:font-bold hover:text-[#FFB600]`}
              >
                <Link href="/que-podemos-hacer">¿Qué podemos hacer?</Link>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2.5">
              <div
                className={`px-2.5 font-mono text-lg ${pathname === "/datos-abiertos" ? "border border-[#212121] font-bold text-[#FFB600]" : "font-normal text-neutral-700"}  hover:border hover:border-[#212121] hover:font-bold hover:text-[#FFB600]`}
              >
                <Link href="/datos-abiertos">Datos Abiertos</Link>
              </div>
            </div>
            {/* <div className="flex items-center justify-center gap-2.5">
              <div className="px-2.5 font-mono text-lg font-normal text-neutral-700 hover:border hover:border-[#212121] hover:font-bold hover:text-[#FFB600]">
                Transparencia
              </div>
            </div> */}
          </div>
        </div>
        <div
          className={
            isOpen
              ? "fixed bottom-0 left-0 right-0 top-0 z-40 flex h-screen w-[50%] items-center justify-center bg-[#FBFEF2] text-center duration-300 ease-in lg:hidden"
              : "fixed bottom-0 left-[-100%] right-0 top-0 flex h-screen w-[50%] items-center justify-center bg-[#FBFEF2] text-center duration-300 ease-in lg:hidden"
          }
        >
          <ul className="text-neutral-700">
            <li
              onClick={handleNav}
              className={`p-2 font-mono  ${pathname === "/" ? "border border-[#212121] font-bold text-[#FFB600]" : "font-normal text-neutral-700"} text-lg hover:text-gray-500`}
            >
              <Link href={"/"}>El buscador</Link>
            </li>
            <li
              onClick={handleNav}
              className={`p-2 font-mono  ${pathname === "/no-olvidamos" ? "border border-[#212121] font-bold text-[#FFB600]" : "font-normal text-neutral-700"} text-lg hover:text-gray-500`}
            >
              <Link href="/no-olvidamos"> No olvidamos</Link>
            </li>

            <li
              onClick={handleNav}
              className={`p-2 font-mono  ${pathname === "/que-podemos-hacer" ? "border border-[#212121] font-bold text-[#FFB600]" : "font-normal text-neutral-700"} text-lg hover:text-gray-500`}
            >
              <Link href="/que-podemos-hacer">¿Qué podemos hacer?</Link>
            </li>
            <li
              onClick={handleNav}
              className={`p-2 font-mono  ${pathname === "/datos-abiertos" ? "border border-[#212121] font-bold text-[#FFB600]" : "font-normal text-neutral-700"} text-lg hover:text-gray-500`}
            >
              <Link href="/datos-abiertos">Datos Abiertos</Link>
            </li>
            {/* <li
              onClick={handleNav}
              className="p-4 font-mono  text-lg hover:text-gray-500"
            >
              <Link href="/Transparencia">Transparencia</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
}
