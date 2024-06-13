"use client";
import React from "react";
import Image from "next/image";
import Dialogs from "./common/Dialogs";
import { motion, useScroll } from "framer-motion";
import Bannar from "./common/Bannar";
import Link from "next/link";
import WrapperFedinRight from "./Anim/WrapperFedinRight";
import WrapperFedinLeft from "./Anim/WrapperFedinLeft";
import WrapperFedIn from "./Anim/WrapperFedIn";
import DrawingSvg from "./common/DrawingSvg";

export default function InfoGrafiaMobile() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className=" overflow-hidden">
        <Bannar />
        <DrawingSvg />
        <Dialogs />
        <div className="relative z-20 overflow-x-hidden">
          <WrapperFedinRight>
            <div className="flex h-[400px] flex-row items-end justify-end ">
              <div
                className={
                  "borderPerCards  h-[152px] w-[141px] gap-2.5 bg-[#94C0D4]  px-2.5 py-[5px] sm:w-[50%]"
                }
              >
                <div className="self-stretch">
                  <span className="font-Roboto_Serif text-[15px] font-semibold italic text-neutral-800">
                    Alicia de los Ríos Merino{" "}
                  </span>
                  <span className="font-Roboto_Serif text-[15px] font-normal text-neutral-700">
                    Desapareció en los años 70.
                  </span>
                </div>
                <div className="flex items-center justify-end gap-2.5">
                  <div className="flex h-[60px] w-[53px] flex-col items-center justify-center">
                    <Image
                      alt="alicia"
                      width={50}
                      height={60}
                      src="/images/alicia.png"
                    />
                  </div>
                  <div
                    className="relative h-[30px] w-[30px] cursor-pointer"
                    onClick={() =>
                      (
                        document.getElementById("alicia") as HTMLDialogElement
                      ).showModal()
                    }
                  >
                    <motion.svg
                      initial={{ rotateZ: 0 }}
                      animate={{ rotateZ: 320 }}
                      //   exit={{ fill: '#ffffff', rotateZ: 360 }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        yoyo: true,
                      }}
                      onClick={() =>
                        (
                          document.getElementById("alicia") as HTMLDialogElement
                        ).showModal()
                      }
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_606_27142"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="30"
                        height="30"
                      >
                        <rect width="30" height="30" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_606_27142)">
                        <path d="M14.375 20.625H15.625V15.625H20.625V14.375H15.625V9.375H14.375V14.375H9.375V15.625H14.375V20.625ZM15.0042 26.25C13.4485 26.25 11.9859 25.9548 10.6164 25.3644C9.24685 24.774 8.05555 23.9727 7.04247 22.9606C6.02941 21.9485 5.2274 20.7583 4.63644 19.3901C4.04548 18.0218 3.75 16.5599 3.75 15.0042C3.75 13.4485 4.0452 11.9859 4.63559 10.6164C5.22601 9.24685 6.02728 8.05555 7.03941 7.04247C8.05153 6.02941 9.24171 5.2274 10.6099 4.63644C11.9782 4.04548 13.4401 3.75 14.9958 3.75C16.5515 3.75 18.0141 4.0452 19.3836 4.63559C20.7531 5.22601 21.9444 6.02728 22.9575 7.03941C23.9706 8.05153 24.7726 9.24171 25.3636 10.6099C25.9545 11.9782 26.25 13.4401 26.25 14.9958C26.25 16.5515 25.9548 18.0141 25.3644 19.3836C24.774 20.7531 23.9727 21.9444 22.9606 22.9575C21.9485 23.9706 20.7583 24.7726 19.3901 25.3636C18.0218 25.9545 16.5599 26.25 15.0042 26.25ZM15 25C17.7917 25 20.1562 24.0312 22.0938 22.0938C24.0312 20.1562 25 17.7917 25 15C25 12.2083 24.0312 9.84375 22.0938 7.90625C20.1562 5.96875 17.7917 5 15 5C12.2083 5 9.84375 5.96875 7.90625 7.90625C5.96875 9.84375 5 12.2083 5 15C5 17.7917 5.96875 20.1562 7.90625 22.0938C9.84375 24.0312 12.2083 25 15 25Z" />
                      </g>
                    </motion.svg>
                  </div>
                </div>
              </div>
            </div>
          </WrapperFedinRight>
          <div className="relative flex h-[300px] flex-row items-start justify-between">
            <WrapperFedinLeft>
              <div className="relative flex h-full w-1/3 flex-col items-start justify-end">
                <div className=" inline-flex h-[162px] w-[141px] flex-col items-start justify-center gap-2.5 bg-white px-2.5 py-[5px] sm:w-full">
                  <div className="self-stretch font-mono text-xs font-normal text-neutral-800">
                    Creación del Registro Nacional de Personas Desaparecidas y
                    No Localizadas (RNPDNO).
                  </div>
                  <div className=" h-[30px] w-[30px]">
                    <motion.svg
                      initial={{ rotateZ: 0 }}
                      animate={{ rotateZ: 320 }}
                      //   exit={{ fill: '#ffffff', rotateZ: 360 }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        yoyo: true,
                      }}
                      onClick={() =>
                        (
                          document.getElementById("2017") as HTMLDialogElement
                        ).showModal()
                      }
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_606_27142"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="30"
                        height="30"
                      >
                        <rect width="30" height="30" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_606_27142)">
                        <path d="M14.375 20.625H15.625V15.625H20.625V14.375H15.625V9.375H14.375V14.375H9.375V15.625H14.375V20.625ZM15.0042 26.25C13.4485 26.25 11.9859 25.9548 10.6164 25.3644C9.24685 24.774 8.05555 23.9727 7.04247 22.9606C6.02941 21.9485 5.2274 20.7583 4.63644 19.3901C4.04548 18.0218 3.75 16.5599 3.75 15.0042C3.75 13.4485 4.0452 11.9859 4.63559 10.6164C5.22601 9.24685 6.02728 8.05555 7.03941 7.04247C8.05153 6.02941 9.24171 5.2274 10.6099 4.63644C11.9782 4.04548 13.4401 3.75 14.9958 3.75C16.5515 3.75 18.0141 4.0452 19.3836 4.63559C20.7531 5.22601 21.9444 6.02728 22.9575 7.03941C23.9706 8.05153 24.7726 9.24171 25.3636 10.6099C25.9545 11.9782 26.25 13.4401 26.25 14.9958C26.25 16.5515 25.9548 18.0141 25.3644 19.3836C24.774 20.7531 23.9727 21.9444 22.9606 22.9575C21.9485 23.9706 20.7583 24.7726 19.3901 25.3636C18.0218 25.9545 16.5599 26.25 15.0042 26.25ZM15 25C17.7917 25 20.1562 24.0312 22.0938 22.0938C24.0312 20.1562 25 17.7917 25 15C25 12.2083 24.0312 9.84375 22.0938 7.90625C20.1562 5.96875 17.7917 5 15 5C12.2083 5 9.84375 5.96875 7.90625 7.90625C5.96875 9.84375 5 12.2083 5 15C5 17.7917 5.96875 20.1562 7.90625 22.0938C9.84375 24.0312 12.2083 25 15 25Z" />
                      </g>
                    </motion.svg>
                  </div>
                </div>
              </div>
            </WrapperFedinLeft>
            <WrapperFedIn>
              <div className="mt-12 inline-flex h-[23px] w-[67px] items-center justify-center gap-2.5 rounded-[10px] bg-neutral-800 px-2.5 py-[5px]">
                <div className="font-Roboto_Serif text-lg font-bold tracking-widest text-stone-50">
                  2017
                </div>
              </div>

              <div className="absolute left-[30%] top-[10%] h-[118px] w-[138px] translate-x-[50%] translate-y-full items-center justify-center sm:left-[50%]">
                <Image
                  alt=""
                  width={138}
                  height={118}
                  src="/images/busqueda.png"
                />
              </div>
            </WrapperFedIn>
          </div>
          <WrapperFedIn>
            <div className="flex h-[200px] w-full items-end justify-center">
              <Image
                alt=""
                width={119}
                height={94}
                src="/images/basededatos.png"
              />
            </div>
          </WrapperFedIn>
          <div className="flex h-[400px] flex-col items-end justify-evenly">
            <WrapperFedIn>
              <div className="inline-flex h-[23px] w-[67px] items-center justify-center gap-2.5 rounded-[10px] bg-neutral-800 px-2.5 py-[5px]">
                <div className="font-Roboto_Serif text-lg font-bold tracking-widest text-stone-50">
                  2019
                </div>
              </div>
            </WrapperFedIn>
            <WrapperFedinRight>
              <div className="borderPerCards flex h-[270px] w-[141px] flex-col items-end justify-center gap-2.5 bg-[#95DCA0] px-2.5 py-[5px] sm:w-[50%]">
                <div className="self-stretch">
                  <span className="font-Roboto_Serif text-[15px] font-semibold italic text-neutral-800">
                    Miguel Ángel Hernández Guzmán
                    <br />
                  </span>
                  <span className="font-Roboto_Serif text-[15px] font-normal text-neutral-800">
                    Desapareció el 19 de mayo de 2019 en Orizaba, Veracruz.{" "}
                  </span>
                </div>
                <div className="flex items-center justify-end gap-2.5">
                  <div className="flex h-[60px] w-[53px] flex-col items-center justify-center">
                    <Image
                      alt="miguel"
                      width={50}
                      height={60}
                      src="/images/miguel.png"
                    />
                  </div>
                  <div className="relative h-[30px] w-[30px]">
                    <motion.svg
                      initial={{ rotateZ: 0 }}
                      animate={{ rotateZ: 320 }}
                      //   exit={{ fill: '#ffffff', rotateZ: 360 }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        yoyo: true,
                      }}
                      onClick={() =>
                        (
                          document.getElementById("miguel") as HTMLDialogElement
                        ).showModal()
                      }
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_606_27142"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="30"
                        height="30"
                      >
                        <rect width="30" height="30" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_606_27142)">
                        <path d="M14.375 20.625H15.625V15.625H20.625V14.375H15.625V9.375H14.375V14.375H9.375V15.625H14.375V20.625ZM15.0042 26.25C13.4485 26.25 11.9859 25.9548 10.6164 25.3644C9.24685 24.774 8.05555 23.9727 7.04247 22.9606C6.02941 21.9485 5.2274 20.7583 4.63644 19.3901C4.04548 18.0218 3.75 16.5599 3.75 15.0042C3.75 13.4485 4.0452 11.9859 4.63559 10.6164C5.22601 9.24685 6.02728 8.05555 7.03941 7.04247C8.05153 6.02941 9.24171 5.2274 10.6099 4.63644C11.9782 4.04548 13.4401 3.75 14.9958 3.75C16.5515 3.75 18.0141 4.0452 19.3836 4.63559C20.7531 5.22601 21.9444 6.02728 22.9575 7.03941C23.9706 8.05153 24.7726 9.24171 25.3636 10.6099C25.9545 11.9782 26.25 13.4401 26.25 14.9958C26.25 16.5515 25.9548 18.0141 25.3644 19.3836C24.774 20.7531 23.9727 21.9444 22.9606 22.9575C21.9485 23.9706 20.7583 24.7726 19.3901 25.3636C18.0218 25.9545 16.5599 26.25 15.0042 26.25ZM15 25C17.7917 25 20.1562 24.0312 22.0938 22.0938C24.0312 20.1562 25 17.7917 25 15C25 12.2083 24.0312 9.84375 22.0938 7.90625C20.1562 5.96875 17.7917 5 15 5C12.2083 5 9.84375 5.96875 7.90625 7.90625C5.96875 9.84375 5 12.2083 5 15C5 17.7917 5.96875 20.1562 7.90625 22.0938C9.84375 24.0312 12.2083 25 15 25Z" />
                      </g>
                    </motion.svg>
                  </div>
                </div>
              </div>
            </WrapperFedinRight>
          </div>
          <div className="flex h-[200px] items-start justify-start">
            <WrapperFedinLeft>
              <div className="inline-flex h-[195px] w-[50%] flex-col items-start justify-center gap-2.5 bg-white px-2.5 py-[5px]">
                <div className="self-stretch">
                  <span className="font-mono text-xs font-normal text-neutral-800">
                    En 2019 el primer comisionado de la CNB hizo pública una
                    base de datos sin nombres y presentó su renuncia:
                    <br />
                  </span>
                  <span className="font-mono text-[15px] font-medium uppercase tracking-wide text-[#FF666E]">
                    esa base fue bajada.
                  </span>
                </div>
              </div>
            </WrapperFedinLeft>
          </div>
          <div>
            <div className="flex h-[100px] items-center justify-end">
              <WrapperFedIn>
                <div className="inline-flex h-[23px] w-[67px] items-center justify-center gap-2.5 rounded-[10px] bg-neutral-800 px-2.5 py-[5px]">
                  <div className="font-Roboto_Serif text-lg font-bold tracking-widest text-stone-50">
                    2020
                  </div>
                </div>
              </WrapperFedIn>
            </div>
            <div className="flex h-[200px] items-start justify-start">
              <WrapperFedinLeft>
                <div className="inline-flex h-[194px] w-[50%] flex-col items-start justify-center gap-2.5 bg-white px-2.5 py-[5px]">
                  <div className="self-stretch">
                    <span className="font-mono text-xs font-normal text-neutral-800">
                      En 2020, la Comisión Nacional de Búsqueda hace una segunda
                      publicación, al presentar la{" "}
                    </span>
                    <span className="font-mono text-xs font-normal text-neutral-800 underline">
                      <Link
                        href={
                          "https://versionpublicarnpdno.segob.gob.mx/Dashboard/Index"
                        }
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                      >
                        &quot;Versión Pública del RNPDNO&quot;
                      </Link>
                    </span>
                    <span className="font-mono text-xs font-normal text-neutral-800">
                      ,{" "}
                    </span>
                  </div>
                  <div
                    className="relative h-[30px] w-[30px]"
                    onClick={() =>
                      (
                        document.getElementById("2020") as HTMLDialogElement
                      ).showModal()
                    }
                  >
                    <motion.svg
                      initial={{ rotateZ: 0 }}
                      animate={{ rotateZ: 320 }}
                      //   exit={{ fill: '#ffffff', rotateZ: 360 }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        yoyo: true,
                      }}
                      onClick={() =>
                        (
                          document.getElementById("2020") as HTMLDialogElement
                        ).showModal()
                      }
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_606_27142"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="30"
                        height="30"
                      >
                        <rect width="30" height="30" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_606_27142)">
                        <path d="M14.375 20.625H15.625V15.625H20.625V14.375H15.625V9.375H14.375V14.375H9.375V15.625H14.375V20.625ZM15.0042 26.25C13.4485 26.25 11.9859 25.9548 10.6164 25.3644C9.24685 24.774 8.05555 23.9727 7.04247 22.9606C6.02941 21.9485 5.2274 20.7583 4.63644 19.3901C4.04548 18.0218 3.75 16.5599 3.75 15.0042C3.75 13.4485 4.0452 11.9859 4.63559 10.6164C5.22601 9.24685 6.02728 8.05555 7.03941 7.04247C8.05153 6.02941 9.24171 5.2274 10.6099 4.63644C11.9782 4.04548 13.4401 3.75 14.9958 3.75C16.5515 3.75 18.0141 4.0452 19.3836 4.63559C20.7531 5.22601 21.9444 6.02728 22.9575 7.03941C23.9706 8.05153 24.7726 9.24171 25.3636 10.6099C25.9545 11.9782 26.25 13.4401 26.25 14.9958C26.25 16.5515 25.9548 18.0141 25.3644 19.3836C24.774 20.7531 23.9727 21.9444 22.9606 22.9575C21.9485 23.9706 20.7583 24.7726 19.3901 25.3636C18.0218 25.9545 16.5599 26.25 15.0042 26.25ZM15 25C17.7917 25 20.1562 24.0312 22.0938 22.0938C24.0312 20.1562 25 17.7917 25 15C25 12.2083 24.0312 9.84375 22.0938 7.90625C20.1562 5.96875 17.7917 5 15 5C12.2083 5 9.84375 5.96875 7.90625 7.90625C5.96875 9.84375 5 12.2083 5 15C5 17.7917 5.96875 20.1562 7.90625 22.0938C9.84375 24.0312 12.2083 25 15 25Z" />
                      </g>
                    </motion.svg>
                  </div>
                </div>
              </WrapperFedinLeft>
            </div>
          </div>
          <div className="flex h-[400px] flex-col items-end justify-evenly">
            <WrapperFedIn>
              <div className="inline-flex h-[23px] w-[67px] items-center justify-center gap-2.5 rounded-[10px] bg-neutral-800 px-2.5 py-[5px]">
                <div className="font-Roboto_Serif text-lg font-bold tracking-widest text-stone-50">
                  2021
                </div>
              </div>
            </WrapperFedIn>
            <WrapperFedinRight>
              <div className="borderPerCards flex h-60 w-[141px]  flex-col items-end justify-center gap-2.5 bg-[#F1D8B3] px-2.5 py-[5px] sm:w-[50%]">
                <div className="self-stretch">
                  <span className="font-Roboto_Serif text-[15px] font-semibold italic text-neutral-800">
                    Wendy Sánchez Muñoz
                    <br />
                  </span>
                  <span className="font-Roboto_Serif text-[15px] font-normal text-neutral-800">
                    Desapareció el 9 de enero de 2021 en Nayarit.
                  </span>
                </div>
                <div className="flex items-center justify-end gap-2.5">
                  <div className="flex h-[60px] w-[53px] flex-col items-center justify-end">
                    <Image
                      alt="wendy"
                      width={50}
                      height={60}
                      src="/images/wendy.png"
                    />
                  </div>
                </div>
              </div>
            </WrapperFedinRight>
          </div>
          <div>
            <div className="flex h-[100px] items-end justify-end">
              <WrapperFedIn>
                <div className="inline-flex h-[23px] w-[67px] items-center justify-center gap-2.5 rounded-[10px] bg-neutral-800 px-2.5 py-[5px]">
                  <div className="font-Roboto_Serif text-lg font-bold tracking-widest text-stone-50">
                    2023
                  </div>
                </div>
              </WrapperFedIn>
            </div>
            <div className="relative flex items-start justify-start">
              <WrapperFedinLeft>
                <div className="inline-flex h-[200px] w-[165.84px] flex-col items-start justify-center gap-2.5 bg-white px-2.5 py-[5px] sm:w-[50%]">
                  <div className="self-stretch">
                    <span className="font-mono text-xs font-light uppercase text-neutral-800">
                      24 de agosto DE 2023
                      <br />
                    </span>
                    <span className="font-mono text-[15px] font-medium uppercase tracking-wide text-[#FF666E]">
                      Se publica un listado de 110,964 nombres y datos básicos
                      de personas desaparecidas.
                    </span>
                  </div>
                  <div
                    className="relative h-[30px] w-[30px]"
                    onClick={() =>
                      (
                        document.getElementById("2023") as HTMLDialogElement
                      ).showModal()
                    }
                  >
                    <motion.svg
                      initial={{ rotateZ: 0 }}
                      animate={{ rotateZ: 320 }}
                      //   exit={{ fill: '#ffffff', rotateZ: 360 }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        yoyo: true,
                      }}
                      onClick={() =>
                        (
                          document.getElementById("2023") as HTMLDialogElement
                        ).showModal()
                      }
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_606_27142"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="30"
                        height="30"
                      >
                        <rect width="30" height="30" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_606_27142)">
                        <path
                          d="M14.375 20.625H15.625V15.625H20.625V14.375H15.625V9.375H14.375V14.375H9.375V15.625H14.375V20.625ZM15.0042 26.25C13.4485 26.25 11.9859 25.9548 10.6164 25.3644C9.24685 24.774 8.05555 23.9727 7.04247 22.9606C6.02941 21.9485 5.2274 20.7583 4.63644 19.3901C4.04548 18.0218 3.75 16.5599 3.75 15.0042C3.75 13.4485 4.0452 11.9859 4.63559 10.6164C5.22601 9.24685 6.02728 8.05555 7.03941 7.04247C8.05153 6.02941 9.24171 5.2274 10.6099 4.63644C11.9782 4.04548 13.4401 3.75 14.9958 3.75C16.5515 3.75 18.0141 4.0452 19.3836 4.63559C20.7531 5.22601 21.9444 6.02728 22.9575 7.03941C23.9706 8.05153 24.7726 9.24171 25.3636 10.6099C25.9545 11.9782 26.25 13.4401 26.25 14.9958C26.25 16.5515 25.9548 18.0141 25.3644 19.3836C24.774 20.7531 23.9727 21.9444 22.9606 22.9575C21.9485 23.9706 20.7583 24.7726 19.3901 25.3636C18.0218 25.9545 16.5599 26.25 15.0042 26.25ZM15 25C17.7917 25 20.1562 24.0312 22.0938 22.0938C24.0312 20.1562 25 17.7917 25 15C25 12.2083 24.0312 9.84375 22.0938 7.90625C20.1562 5.96875 17.7917 5 15 5C12.2083 5 9.84375 5.96875 7.90625 7.90625C5.96875 9.84375 5 12.2083 5 15C5 17.7917 5.96875 20.1562 7.90625 22.0938C9.84375 24.0312 12.2083 25 15 25Z"
                          fill="#FF666E"
                        />
                      </g>
                    </motion.svg>
                  </div>
                </div>
              </WrapperFedinLeft>
              <WrapperFedIn>
                <div className="absolute -bottom-[25%] left-[30%] inline-flex h-[88px] w-[133px] origin-top-left rotate-[20.08deg] items-center justify-center">
                  <Image
                    alt=""
                    width={133}
                    height={88}
                    src="/images/registro.png"
                  />
                </div>
              </WrapperFedIn>
            </div>
          </div>
          <WrapperFedinRight>
            <div className="flex h-[1000px] flex-col items-end justify-end gap-4">
              <div className="borderPerCards  flex h-64 w-[90%] flex-col items-end justify-center gap-2.5 bg-[#F1D8B3] px-2.5 py-[5px]">
                <div className="self-stretch">
                  <span className="font-Roboto_Serif text-[15px] font-normal text-neutral-800">
                    En esta lista{" "}
                  </span>
                  <span className="font-mono text-xs font-light uppercase text-neutral-800">
                    (DEL 24 de agosto)
                  </span>
                  <span className="font-Roboto_Serif text-[15px] font-normal text-neutral-800">
                    , Wendy Sánchez aparece con todos los datos posibles: nombre
                    y apellidos, edad, sexo, nacionalidad, fecha de
                    desaparición, entidad y autoridad que reportó, que en este
                    caso fue la Fiscalía de Nayarit.
                  </span>
                </div>
                <div className="flex items-center justify-end gap-2.5">
                  <div className="flex h-[60px] w-[53px] flex-col items-center justify-center">
                    <Image
                      alt="playara"
                      width={53}
                      height={60}
                      src="/images/playara.png"
                    />
                  </div>
                </div>
              </div>

              <div className="borderPerCards  flex h-[235px] w-[90%] flex-col items-end justify-center gap-2.5 bg-[#94C0D4] px-2.5 py-[5px]">
                <div className="self-stretch">
                  <span className="font-Roboto_Serif text-[15px] font-normal text-neutral-800">
                    En esta lista{" "}
                  </span>
                  <span className="font-mono text-xs font-light uppercase text-neutral-800">
                    (DEL 24 de agosto)
                  </span>
                  <span className="font-Roboto_Serif text-[15px] font-normal text-neutral-800">
                    , Alicia de los Ríos aparece dos veces: aunque está
                    especificado que solo tiene un folio como persona,{" "}
                  </span>
                  <span className="font-Roboto_Serif text-[15px] font-semibold italic text-neutral-800">
                    hay dos reportes ingresados por dos autoridades distintas.
                  </span>
                </div>
                <div className="flex items-center justify-end gap-2.5">
                  <div className="flex h-[60px] w-[53px] flex-col items-center justify-center">
                    <Image
                      alt="pantalon"
                      width={53}
                      height={60}
                      src="/images/pantalon.png"
                    />
                  </div>
                  <div
                    className="relative h-[30px] w-[30px] cursor-pointer"
                    onClick={() =>
                      (
                        document.getElementById("miguel2") as HTMLDialogElement
                      ).showModal()
                    }
                  >
                    <motion.svg
                      initial={{ rotateZ: 0 }}
                      animate={{ rotateZ: 320 }}
                      //   exit={{ fill: '#ffffff', rotateZ: 360 }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        yoyo: true,
                      }}
                      onClick={() =>
                        (
                          document.getElementById(
                            "miguel2"
                          ) as HTMLDialogElement
                        ).showModal()
                      }
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_606_27142"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="30"
                        height="30"
                      >
                        <rect width="30" height="30" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_606_27142)">
                        <path d="M14.375 20.625H15.625V15.625H20.625V14.375H15.625V9.375H14.375V14.375H9.375V15.625H14.375V20.625ZM15.0042 26.25C13.4485 26.25 11.9859 25.9548 10.6164 25.3644C9.24685 24.774 8.05555 23.9727 7.04247 22.9606C6.02941 21.9485 5.2274 20.7583 4.63644 19.3901C4.04548 18.0218 3.75 16.5599 3.75 15.0042C3.75 13.4485 4.0452 11.9859 4.63559 10.6164C5.22601 9.24685 6.02728 8.05555 7.03941 7.04247C8.05153 6.02941 9.24171 5.2274 10.6099 4.63644C11.9782 4.04548 13.4401 3.75 14.9958 3.75C16.5515 3.75 18.0141 4.0452 19.3836 4.63559C20.7531 5.22601 21.9444 6.02728 22.9575 7.03941C23.9706 8.05153 24.7726 9.24171 25.3636 10.6099C25.9545 11.9782 26.25 13.4401 26.25 14.9958C26.25 16.5515 25.9548 18.0141 25.3644 19.3836C24.774 20.7531 23.9727 21.9444 22.9606 22.9575C21.9485 23.9706 20.7583 24.7726 19.3901 25.3636C18.0218 25.9545 16.5599 26.25 15.0042 26.25ZM15 25C17.7917 25 20.1562 24.0312 22.0938 22.0938C24.0312 20.1562 25 17.7917 25 15C25 12.2083 24.0312 9.84375 22.0938 7.90625C20.1562 5.96875 17.7917 5 15 5C12.2083 5 9.84375 5.96875 7.90625 7.90625C5.96875 9.84375 5 12.2083 5 15C5 17.7917 5.96875 20.1562 7.90625 22.0938C9.84375 24.0312 12.2083 25 15 25Z" />
                      </g>
                    </motion.svg>
                  </div>
                </div>
              </div>

              <div className="borderPerCards  flex h-[285px] w-[90%] flex-col items-end justify-center gap-2.5 border border-neutral-800 bg-[#95DCA0] px-2.5 py-[5px]">
                <div className="self-stretch">
                  <span className="font-Roboto_Serif text-[15px] font-normal text-neutral-800">
                    En esta lista{" "}
                  </span>
                  <span className="font-mono text-xs font-light uppercase text-neutral-800">
                    (DEL 24 de agosto)
                  </span>
                  <span className="font-Roboto_Serif text-[15px] font-normal text-neutral-800">
                    , aparecen todos los datos de Miguel Ángel menos la edad, es
                    decir, nombres y apellidos, nacionalidad, fecha, entidad de
                    desaparición y que la autoridad que reportó fue la Comisión
                    Nacional de Búsqueda de Personas.
                  </span>
                </div>
                <div className="flex items-center justify-end gap-2.5">
                  <div className="flex h-[60px] w-[53px] flex-col items-center justify-center">
                    <Image
                      alt="calcetines"
                      width={53}
                      height={60}
                      src="/images/calcetines.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </WrapperFedinRight>
          <div className="flex h-[550px] flex-col items-start justify-end gap-0">
            <div className=" flex h-[138px] w-full flex-col items-center justify-end">
              <WrapperFedIn>
                <Image
                  className="ml-8"
                  alt=""
                  width={108}
                  height={138}
                  src="/images/limpiazaArchivos.png"
                />
              </WrapperFedIn>
            </div>
            <WrapperFedinLeft>
              <div className=" inline-flex h-[360px] w-[65%] flex-col items-start justify-center gap-2.5 bg-white px-2.5 py-[5px]">
                <div className="self-stretch">
                  <span className="font-mono text-xs font-light uppercase text-neutral-800">
                    14 de DICIEMBRE DE 2023
                    <br />
                  </span>
                  <span className="font-mono text-[15px] font-medium uppercase tracking-wide text-[#FF666E]">
                    <br />
                  </span>
                  <span className="font-mono text-xs font-normal text-neutral-800">
                    La SEGOB presenta el resultado de la llamada
                    &quot;Estrategia Nacional de Búsqueda Generalizada&quot; y
                    se publica desde gobierno
                    <br />
                  </span>
                  <span className="font-mono text-[15px] font-medium uppercase tracking-wide text-[#FF666E]">
                    una nueva página de personas desaparecidas:
                    <br />
                  </span>
                  <span className="font-mono text-xs font-light uppercase text-neutral-800 underline">
                    <Link
                      href={"https://busquedageneralizada.gob.mx/"}
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      busquedageneralizada.gob.mx
                    </Link>
                    <br />
                  </span>
                  <span className="font-mono text-[15px] font-medium uppercase tracking-wide text-[#FF666E]">
                    con 96,738 registros.
                  </span>
                </div>
                <div className="relative h-[30px] w-[30px]">
                  <motion.svg
                    initial={{ rotateZ: 0 }}
                    animate={{ rotateZ: 320 }}
                    //   exit={{ fill: '#ffffff', rotateZ: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, yoyo: true }}
                    onClick={() =>
                      (
                        document.getElementById(
                          "14Dec2023"
                        ) as HTMLDialogElement
                      ).showModal()
                    }
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_606_27142"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="30"
                      height="30"
                    >
                      <rect width="30" height="30" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_606_27142)">
                      <path d="M14.375 20.625H15.625V15.625H20.625V14.375H15.625V9.375H14.375V14.375H9.375V15.625H14.375V20.625ZM15.0042 26.25C13.4485 26.25 11.9859 25.9548 10.6164 25.3644C9.24685 24.774 8.05555 23.9727 7.04247 22.9606C6.02941 21.9485 5.2274 20.7583 4.63644 19.3901C4.04548 18.0218 3.75 16.5599 3.75 15.0042C3.75 13.4485 4.0452 11.9859 4.63559 10.6164C5.22601 9.24685 6.02728 8.05555 7.03941 7.04247C8.05153 6.02941 9.24171 5.2274 10.6099 4.63644C11.9782 4.04548 13.4401 3.75 14.9958 3.75C16.5515 3.75 18.0141 4.0452 19.3836 4.63559C20.7531 5.22601 21.9444 6.02728 22.9575 7.03941C23.9706 8.05153 24.7726 9.24171 25.3636 10.6099C25.9545 11.9782 26.25 13.4401 26.25 14.9958C26.25 16.5515 25.9548 18.0141 25.3644 19.3836C24.774 20.7531 23.9727 21.9444 22.9606 22.9575C21.9485 23.9706 20.7583 24.7726 19.3901 25.3636C18.0218 25.9545 16.5599 26.25 15.0042 26.25ZM15 25C17.7917 25 20.1562 24.0312 22.0938 22.0938C24.0312 20.1562 25 17.7917 25 15C25 12.2083 24.0312 9.84375 22.0938 7.90625C20.1562 5.96875 17.7917 5 15 5C12.2083 5 9.84375 5.96875 7.90625 7.90625C5.96875 9.84375 5 12.2083 5 15C5 17.7917 5.96875 20.1562 7.90625 22.0938C9.84375 24.0312 12.2083 25 15 25Z" />
                    </g>
                  </motion.svg>
                </div>
              </div>
            </WrapperFedinLeft>
          </div>
          <WrapperFedinRight>
            <div className="flex h-[550px] flex-col items-end justify-end gap-3">
              <div className="borderPerCards flex h-[200px] w-[90%] flex-col items-end justify-center gap-2.5 bg-[#94C0D4] px-2.5 py-[5px]">
                <div className="self-stretch">
                  <span className="font-mono text-[15px] font-medium uppercase tracking-wide text-neutral-800 underline">
                    <Link
                      href={"https://busquedageneralizada.gob.mx/"}
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      En BÚSQUEDA GENERALIZADA{" "}
                    </Link>
                  </span>
                  <span className="font-Roboto_Serif text-[15px] font-normal text-neutral-800">
                    , ya no se encuentra ningún registro a nombre de Alicia de
                    los Ríos, ni siquiera como registro
                    &quot;confidencializado&quot; o con datos eliminados de la
                    versión pública.
                  </span>
                </div>
              </div>

              <div className="borderPerCards flex h-[240px] w-[90%] flex-col items-end justify-center gap-2.5 bg-[#95DCA0] px-2.5 py-[5px]">
                <div className="self-stretch">
                  <span className="font-mono text-[15px] font-medium uppercase tracking-wide text-neutral-800 underline">
                    <Link
                      href={"https://busquedageneralizada.gob.mx/"}
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      En BÚSQUEDA GENERALIZADA{" "}
                    </Link>
                  </span>
                  <span className="font-Roboto_Serif text-[15px] font-normal text-neutral-800">
                    , no aparece su nombre dentro del listado de las más de 90
                    mil personas que permanecen desaparecidas. Pero en la lista
                    de &quot;localizados&quot;, donde sólo es posible consultar
                    por Folio Único de Búsqueda (FUB), está el que corresponde a
                    Miguel Ángel.
                  </span>
                </div>
              </div>
            </div>
          </WrapperFedinRight>
          <div className=" flex h-[450px] items-center justify-start">
            <WrapperFedinLeft>
              <div className="inline-flex h-[340px]  w-[65%] flex-col items-start justify-center gap-2.5 bg-white px-2.5 py-[5px]">
                <div className="self-stretch">
                  <span className="font-mono text-xs font-light uppercase text-neutral-800">
                    27 de diciembre
                    <br />
                  </span>
                  <span className="font-mono text-xs font-normal text-neutral-800">
                    <br />
                    Ante la ola de críticas surgidas a partir de los hechos del
                    14 de diciembre, se actualiza la página{" "}
                  </span>
                  <span className="font-mono text-xs font-normal text-neutral-800 underline">
                    <Link
                      href={"https://busquedageneralizada.gob.mx/"}
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      busquedageneralizada.gob.mx/
                    </Link>

                    <br />
                  </span>
                  <span className="font-mono text-xs font-normal text-neutral-800">
                    <br />
                    Se agrega una columna de categoría y se agrega listado de
                    localizadas.
                  </span>
                </div>
                <div className="relative h-[30px] w-[30px]">
                  <motion.svg
                    initial={{ rotateZ: 0 }}
                    animate={{ rotateZ: 320 }}
                    //   exit={{ fill: '#ffffff', rotateZ: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, yoyo: true }}
                    onClick={() =>
                      (
                        document.getElementById(
                          "27Dec2023"
                        ) as HTMLDialogElement
                      ).showModal()
                    }
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_606_27142"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="30"
                      height="30"
                    >
                      <rect width="30" height="30" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_606_27142)">
                      <path d="M14.375 20.625H15.625V15.625H20.625V14.375H15.625V9.375H14.375V14.375H9.375V15.625H14.375V20.625ZM15.0042 26.25C13.4485 26.25 11.9859 25.9548 10.6164 25.3644C9.24685 24.774 8.05555 23.9727 7.04247 22.9606C6.02941 21.9485 5.2274 20.7583 4.63644 19.3901C4.04548 18.0218 3.75 16.5599 3.75 15.0042C3.75 13.4485 4.0452 11.9859 4.63559 10.6164C5.22601 9.24685 6.02728 8.05555 7.03941 7.04247C8.05153 6.02941 9.24171 5.2274 10.6099 4.63644C11.9782 4.04548 13.4401 3.75 14.9958 3.75C16.5515 3.75 18.0141 4.0452 19.3836 4.63559C20.7531 5.22601 21.9444 6.02728 22.9575 7.03941C23.9706 8.05153 24.7726 9.24171 25.3636 10.6099C25.9545 11.9782 26.25 13.4401 26.25 14.9958C26.25 16.5515 25.9548 18.0141 25.3644 19.3836C24.774 20.7531 23.9727 21.9444 22.9606 22.9575C21.9485 23.9706 20.7583 24.7726 19.3901 25.3636C18.0218 25.9545 16.5599 26.25 15.0042 26.25ZM15 25C17.7917 25 20.1562 24.0312 22.0938 22.0938C24.0312 20.1562 25 17.7917 25 15C25 12.2083 24.0312 9.84375 22.0938 7.90625C20.1562 5.96875 17.7917 5 15 5C12.2083 5 9.84375 5.96875 7.90625 7.90625C5.96875 9.84375 5 12.2083 5 15C5 17.7917 5.96875 20.1562 7.90625 22.0938C9.84375 24.0312 12.2083 25 15 25Z" />
                    </g>
                  </motion.svg>
                </div>
              </div>
            </WrapperFedinLeft>
          </div>
          <WrapperFedinRight>
            <div className="flex flex-col items-end justify-end gap-5">
              <WrapperFedIn>
                <div className="inline-flex h-[23px] w-[67px] items-center justify-center gap-2.5 rounded-[10px] bg-neutral-800 px-2.5 py-[5px]">
                  <div className="font-Roboto_Serif text-lg font-bold tracking-widest text-stone-50">
                    2024
                  </div>
                </div>
              </WrapperFedIn>
              <div className="borderPerCards flex h-[160px] w-[90%] flex-col items-end justify-center gap-2.5 bg-[#F1D8B3] px-2.5 py-[5px]">
                <div className="self-stretch">
                  <span className="font-Roboto_Serif text-[15px] font-semibold italic text-neutral-800">
                    Wendy Sánchez Muñoz
                  </span>
                  <span className="font-Roboto_Serif text-lg font-semibold text-neutral-700">
                    {" "}
                  </span>
                  <span className="font-Roboto_Serif text-[15px] font-normal text-neutral-700">
                    En la actualización de &quot;Búsqueda Generalizada&quot;, la
                    categoría del registro de Wendy es{" "}
                  </span>
                  <span className="font-mono text-xs font-light uppercase text-neutral-700">
                    &quot;Se busca reportante&quot;
                  </span>
                  <span className="font-Roboto_Serif text-[15px] font-normal text-neutral-700">
                    .{" "}
                  </span>
                </div>
                <div className="flex items-center justify-end gap-2.5">
                  <div
                    className="relative h-[30px] w-[30px] cursor-pointer"
                    onClick={() =>
                      (
                        document.getElementById("wendy2") as HTMLDialogElement
                      ).showModal()
                    }
                  >
                    <motion.svg
                      initial={{ rotateZ: 0 }}
                      animate={{ rotateZ: 320 }}
                      //   exit={{ fill: '#ffffff', rotateZ: 360 }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        yoyo: true,
                      }}
                      onClick={() =>
                        (
                          document.getElementById("wendy2") as HTMLDialogElement
                        ).showModal()
                      }
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_606_27142"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="30"
                        height="30"
                      >
                        <rect width="30" height="30" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_606_27142)">
                        <path d="M14.375 20.625H15.625V15.625H20.625V14.375H15.625V9.375H14.375V14.375H9.375V15.625H14.375V20.625ZM15.0042 26.25C13.4485 26.25 11.9859 25.9548 10.6164 25.3644C9.24685 24.774 8.05555 23.9727 7.04247 22.9606C6.02941 21.9485 5.2274 20.7583 4.63644 19.3901C4.04548 18.0218 3.75 16.5599 3.75 15.0042C3.75 13.4485 4.0452 11.9859 4.63559 10.6164C5.22601 9.24685 6.02728 8.05555 7.03941 7.04247C8.05153 6.02941 9.24171 5.2274 10.6099 4.63644C11.9782 4.04548 13.4401 3.75 14.9958 3.75C16.5515 3.75 18.0141 4.0452 19.3836 4.63559C20.7531 5.22601 21.9444 6.02728 22.9575 7.03941C23.9706 8.05153 24.7726 9.24171 25.3636 10.6099C25.9545 11.9782 26.25 13.4401 26.25 14.9958C26.25 16.5515 25.9548 18.0141 25.3644 19.3836C24.774 20.7531 23.9727 21.9444 22.9606 22.9575C21.9485 23.9706 20.7583 24.7726 19.3901 25.3636C18.0218 25.9545 16.5599 26.25 15.0042 26.25ZM15 25C17.7917 25 20.1562 24.0312 22.0938 22.0938C24.0312 20.1562 25 17.7917 25 15C25 12.2083 24.0312 9.84375 22.0938 7.90625C20.1562 5.96875 17.7917 5 15 5C12.2083 5 9.84375 5.96875 7.90625 7.90625C5.96875 9.84375 5 12.2083 5 15C5 17.7917 5.96875 20.1562 7.90625 22.0938C9.84375 24.0312 12.2083 25 15 25Z" />
                      </g>
                    </motion.svg>
                  </div>
                </div>
              </div>
              <div className="borderPerCards flex h-[115px] w-[90%] flex-col items-end justify-center gap-2.5 bg-[#94C0D4] px-2.5 py-[5px]">
                <div className="self-stretch">
                  <span className="font-Roboto_Serif text-[15px] font-normal text-neutral-800">
                    La hija de{" "}
                  </span>
                  <span className="font-Roboto_Serif text-[15px] font-semibold italic text-neutral-800">
                    Alicia de los Ríos
                  </span>
                  <span className="font-Roboto_Serif text-[15px] font-normal text-neutral-800">
                    , se da cuenta y lo
                  </span>
                  <span className="font-Roboto_Serif text-[15px] font-normal text-neutral-800 underline">
                    {" "}
                    <Link
                      href={
                        "https://twitter.com/AliciadelosRos2/status/1749453161046347826"
                      }
                      target="_blank"
                    >
                      exhibe públicamente en{" "}
                    </Link>
                  </span>
                  <span className="font-Roboto_Serif text-[15px] font-normal text-neutral-800">
                    X.
                  </span>
                </div>
                <div className="flex items-center justify-end gap-2.5">
                  <div
                    className="relative h-[30px] w-[30px] cursor-pointer"
                    onClick={() =>
                      (
                        document.getElementById("alicia2") as HTMLDialogElement
                      ).showModal()
                    }
                  >
                    <motion.svg
                      initial={{ rotateZ: 0 }}
                      animate={{ rotateZ: 320 }}
                      //   exit={{ fill: '#ffffff', rotateZ: 360 }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        yoyo: true,
                      }}
                      onClick={() =>
                        (
                          document.getElementById(
                            "alicia2"
                          ) as HTMLDialogElement
                        ).showModal()
                      }
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_606_27142"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="30"
                        height="30"
                      >
                        <rect width="30" height="30" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_606_27142)">
                        <path d="M14.375 20.625H15.625V15.625H20.625V14.375H15.625V9.375H14.375V14.375H9.375V15.625H14.375V20.625ZM15.0042 26.25C13.4485 26.25 11.9859 25.9548 10.6164 25.3644C9.24685 24.774 8.05555 23.9727 7.04247 22.9606C6.02941 21.9485 5.2274 20.7583 4.63644 19.3901C4.04548 18.0218 3.75 16.5599 3.75 15.0042C3.75 13.4485 4.0452 11.9859 4.63559 10.6164C5.22601 9.24685 6.02728 8.05555 7.03941 7.04247C8.05153 6.02941 9.24171 5.2274 10.6099 4.63644C11.9782 4.04548 13.4401 3.75 14.9958 3.75C16.5515 3.75 18.0141 4.0452 19.3836 4.63559C20.7531 5.22601 21.9444 6.02728 22.9575 7.03941C23.9706 8.05153 24.7726 9.24171 25.3636 10.6099C25.9545 11.9782 26.25 13.4401 26.25 14.9958C26.25 16.5515 25.9548 18.0141 25.3644 19.3836C24.774 20.7531 23.9727 21.9444 22.9606 22.9575C21.9485 23.9706 20.7583 24.7726 19.3901 25.3636C18.0218 25.9545 16.5599 26.25 15.0042 26.25ZM15 25C17.7917 25 20.1562 24.0312 22.0938 22.0938C24.0312 20.1562 25 17.7917 25 15C25 12.2083 24.0312 9.84375 22.0938 7.90625C20.1562 5.96875 17.7917 5 15 5C12.2083 5 9.84375 5.96875 7.90625 7.90625C5.96875 9.84375 5 12.2083 5 15C5 17.7917 5.96875 20.1562 7.90625 22.0938C9.84375 24.0312 12.2083 25 15 25Z" />
                      </g>
                    </motion.svg>
                  </div>
                </div>
              </div>
              <div className="borderPerCards flex h-[256px] w-[90%] flex-col items-end justify-center gap-2.5 bg-[#95DCA0] px-2.5 py-[5px]">
                <div className="self-stretch">
                  <span className="font-Roboto_Serif text-[15px] font-normal text-neutral-700">
                    Lorena Guzmán, madre buscadora de{" "}
                  </span>
                  <span className="font-Roboto_Serif text-[15px] font-semibold italic text-neutral-800">
                    Miguel Ángel Hernández Guzmán
                  </span>
                  <span className="font-Roboto_Serif text-[15px] font-semibold text-neutral-700">
                    {" "}
                  </span>
                  <span className="font-Roboto_Serif text-[15px] font-normal text-neutral-700">
                    que sigue recorriendo fosas clandestinas de Orizaba para
                    encontrarlo y el medio Quinto Elemento Lab, localizaron su
                    ficha de búsqueda aún activa en el programa{" "}
                  </span>
                  <span className="font-mono text-xs font-light uppercase text-neutral-700">
                    &quot;¿Has visto a...?&quot;{" "}
                  </span>
                  <span className="font-Roboto_Serif text-[15px] font-normal text-neutral-700">
                    de la Fiscalía General de la República (FGR).
                  </span>
                </div>
              </div>
            </div>
          </WrapperFedinRight>
          <div className="flex h-[500px] w-full items-end justify-center">
            <div className="relative flex h-[320px] w-[320px] items-center justify-center">
              <div className=" absolute left-[16%] top-[18%]">
                <motion.svg
                  width="260"
                  height="260"
                  viewBox="0 0 260 260"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.circle
                    cx="130"
                    cy="129.911"
                    r="128.676"
                    stroke="black"
                    strokeDasharray="10 20"
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      yoyo: true,
                      duration: 5,
                      delay: 1.5,
                    }}
                  />
                </motion.svg>
              </div>
              <div className="absolute left-[66%] top-[56%] inline-flex h-[122.72px] w-[102.62px] flex-col items-center justify-center blur-sm">
                <Image
                  alt="alicia"
                  width={122.72}
                  height={102.62}
                  src="/images/alicia.png"
                />
              </div>
              <div className="absolute left-[42%] top-[20%] inline-flex h-[118.41px] w-[104.78px] flex-col items-center justify-center blur-sm">
                <Image
                  alt="wendy"
                  width={104.78}
                  height={118.41}
                  src="/images/wendy.png"
                />
              </div>
              <div className="absolute left-[23%] top-[56%] inline-flex h-[129.90px] w-[113.39px] flex-col items-center justify-center blur-sm">
                <Image
                  alt="miguel"
                  width={113.39}
                  height={111.52}
                  src="/images/miguel.png"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-[400px] items-center justify-center ">
          <div className="w-72 font-mono text-lg font-medium uppercase tracking-wide text-neutral-800 sm:w-96">
            La cifra de personas desaparecidas bajó a 94,291 y la de localizados
            está en 12,344 registros[estas cifras no cuadran con lo que había
            reportado Segob en conferencia el 14 de diciembre]:
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className=" h-[480px] w-[100%]">
            <div className="flex h-[400px] flex-col items-center justify-center">
              <div className="flex flex-col items-start justify-start">
                <div className="relative h-[120px] w-[290px] border border-neutral-800 bg-neutral-800">
                  <div className="absolute left-[31.15px] top-[40.52px] h-[60.19px] w-[227.70px]">
                    <div className="absolute left-0 top-[14.96px] h-[41.08px] w-[227.70px] text-center">
                      <span className="font-Roboto_Serif text-lg font-bold tracking-widest text-neutral-800">
                        <span className="absolute top-0 z-10 translate-x-[-50%]">
                          110,964
                        </span>
                        <svg
                          width="145"
                          height="61"
                          viewBox="0 0 145 61"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className=" absolute -top-4 left-[20%]"
                        >
                          <path
                            opacity="0.7"
                            d="M27.1836 38.3927C24.1641 35.6872 2.29362 38.3783 0.681604 37.558C-0.629662 36.4643 1.2831 17.4827 2.46203 14.6908C2.88308 13.6978 3.36428 13.5395 4.4951 14.0144C6.28757 14.9067 29.361 13.4964 29.361 13.4964C29.6738 14.0864 30.564 12.1148 30.7445 12.8344C31.2858 14.5181 68.675 12.7193 71.8629 12.6617C73.7997 12.6329 72.2719 13.7554 74.5456 13.3237C79.3937 12.4746 89.968 13.482 93.6372 12.489C96.5725 11.6543 97.2101 11.6543 100.037 12.3739C102.924 13.0359 118.262 12.3307 120.007 11.0355C120.428 10.6757 120.765 10.8053 120.765 11.237C120.765 11.3233 131.58 11.7695 131.64 12.1004C131.724 12.5178 132.061 12.7336 132.362 12.4458C132.915 12.0141 144.428 10.5606 144.62 11.7982C145.222 15.324 143.766 30.2618 142.467 33.8883C141.131 37.7595 133.577 33.2983 127.562 35.5721L99.4356 35.4425L93.4206 36.8241C92.7229 35.5433 90.0883 38.6949 88.4643 36.4211C87.7786 35.5145 82.9906 35.313 81.944 36.2484C81.0297 36.968 56.5127 34.8093 54.0225 37.3134C49.5353 35.1259 31.3941 37.9322 27.1836 38.3927Z"
                            fill="#FEEF38"
                          />
                          <path
                            opacity="0.7"
                            d="M113.961 5.9845C117.043 7.94167 137.421 0.0410494 139.006 0.458387C140.336 1.22111 140.214 20.4618 139.338 23.5126C139.032 24.592 138.585 24.8654 137.482 24.6639C135.714 24.2178 114.101 31.1255 114.101 31.1255C113.751 30.6074 113.086 32.7804 112.858 32.104C112.193 30.5786 77.117 41.2999 74.1145 42.1201C72.2937 42.6238 73.633 41.1416 71.5234 42.1201C67.0327 44.1205 56.9747 45.6603 53.6046 47.5167C50.9084 49.0422 50.3132 49.2005 47.582 49.1573C44.7984 49.2005 30.4073 53.5753 28.8842 55.2735C28.5165 55.734 28.1926 55.6764 28.1489 55.2735C28.1401 55.1871 17.9071 57.3313 17.8283 57.0147C17.7057 56.6118 17.3818 56.4967 17.1192 56.8564C16.629 57.4177 5.92326 61.6055 5.62563 60.4254C4.75027 57.0867 4.80279 41.9474 5.71318 38.0475C6.62356 33.9029 14.143 36.5077 19.614 32.8092L46.1289 26.2038L51.6788 23.3975C52.4491 24.4912 54.655 20.7496 56.3795 22.606C57.106 23.34 61.6317 22.3902 62.5421 21.2101C63.3387 20.2747 86.6322 16.5474 88.7594 13.4678C93.1887 14.5615 110.031 7.43797 113.952 5.9701L113.961 5.9845Z"
                            fill="#FEEF38"
                          />
                        </svg>
                        <br />
                      </span>
                      <span className="font-mono text-xs font-normal text-white">
                        registros en el{" "}
                      </span>
                      <span className="font-mono text-xs font-normal text-white underline">
                        RNPDNO
                      </span>
                    </div>
                  </div>
                  <div className="font-Roboto_Serif absolute left-[10.75px] top-[11.07px] h-5 w-[192.20px] text-[15px] text-stone-50">
                    Agosto 2023
                  </div>
                </div>
                <div className="relative h-[120px] w-[290px] border border-black">
                  <div className="absolute left-[6.83px] top-[37.01px] h-[73.44px] w-[265.82px]">
                    <div className="absolute left-0 top-0 h-[58.85px] w-[133.87px]">
                      <div className="absolute left-[8.55px] top-[5.19px] h-[44.57px] w-[125.32px] text-center">
                        <span className="font-Roboto_Serif text-lg font-bold tracking-widest text-neutral-800">
                          <svg
                            width="134"
                            height="60"
                            viewBox="0 0 134 60"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className=" absolute left-0 top-0 mix-blend-darken"
                          >
                            <path
                              opacity="0.7"
                              d="M41.9005 17.8128C40.1527 16.1561 27.4928 17.804 26.5597 17.3017C25.8006 16.6319 26.9078 5.00844 27.5903 3.29885C27.834 2.6908 28.1125 2.59386 28.7671 2.88467C29.8047 3.43103 43.161 2.56742 43.161 2.56742C43.342 2.92873 43.8573 1.72143 43.9618 2.16205C44.2751 3.19309 65.9181 2.09155 67.7635 2.0563C68.8846 2.03868 68.0002 2.72603 69.3164 2.46166C72.1227 1.94174 78.2437 2.55861 80.3676 1.95056C82.0668 1.43944 82.4358 1.43944 84.0723 1.88006C85.7436 2.28543 94.6222 1.85362 95.6319 1.06051C95.8756 0.840197 96.0706 0.919507 96.0706 1.18388C96.0706 1.23675 102.331 1.50994 102.366 1.71262C102.414 1.96818 102.609 2.10036 102.784 1.92411C103.104 1.65974 109.768 0.769697 109.88 1.52756C110.228 3.68658 109.385 12.8338 108.633 15.0545C107.86 17.425 103.487 14.6932 100.005 16.0855L83.7241 16.0062L80.2423 16.8522C79.8384 16.0679 78.3134 17.9978 77.3733 16.6055C76.9764 16.0503 74.2048 15.9269 73.599 16.4997C73.0698 16.9403 58.8779 15.6185 57.4364 17.1518C54.839 15.8124 44.3378 17.5308 41.9005 17.8128Z"
                              fill="#4AC2EF"
                            />
                            <path
                              opacity="0.7"
                              d="M87.0113 5.89862C89.4625 7.0971 105.674 2.25912 106.934 2.51468C107.993 2.98174 107.895 14.7638 107.199 16.632C106.955 17.293 106.6 17.4604 105.723 17.337C104.316 17.0638 87.1227 21.2938 87.1227 21.2938C86.8441 20.9765 86.3149 22.3072 86.1338 21.893C85.6046 20.9589 57.7013 27.5241 55.3128 28.0264C53.8644 28.3348 54.9298 27.4272 53.2516 28.0264C49.6792 29.2513 41.678 30.1942 38.997 31.331C36.8522 32.2651 36.3787 32.3621 34.206 32.3356C31.9916 32.3621 20.5434 35.041 19.3317 36.0809C19.0392 36.3629 18.7816 36.3276 18.7468 36.0809C18.7398 36.028 10.5993 37.341 10.5366 37.1472C10.4392 36.9004 10.1815 36.8299 9.9726 37.0502C9.58263 37.3939 1.06611 39.9583 0.829344 39.2357C0.132981 37.1912 0.174767 27.9207 0.898985 25.5325C1.6232 22.9946 7.60496 24.5896 11.9572 22.3248L33.0501 18.28L37.465 16.5615C38.0778 17.2313 39.8326 14.9401 41.2045 16.0769C41.7825 16.5263 45.3827 15.9447 46.1069 15.2221C46.7406 14.6493 65.2708 12.3669 66.963 10.481C70.4866 11.1508 83.8846 6.78866 87.0043 5.8898L87.0113 5.89862Z"
                              fill="#4AC2EF"
                            />
                            <path
                              opacity="0.7"
                              d="M26.9137 39.5793C24.0934 37.8169 5.1593 39.8085 3.98941 39.4207C2.84737 38.7862 4.37241 27.1187 5.39607 25.3738C5.75818 24.757 6.18992 24.6248 7.17875 24.9156C8.07706 25.18 17.7704 24.7658 18.6827 24.7306C23.9472 24.5191 29.0097 24.3604 29.0097 24.3604C29.2744 24.7306 30.0821 23.5233 30.2284 23.9639C30.3468 24.2283 32.4846 24.3604 35.6739 24.4486C35.6739 24.4486 54.5593 24.6777 66.3348 25.2064C68.0339 25.2857 66.6621 25.8938 68.6676 25.7792C72.9433 25.5325 82.1771 26.9601 85.4221 26.6693C88.0265 26.4401 88.5836 26.4666 91.0279 27.1628C93.0194 27.7268 106.94 29.0133 108.562 28.4494C108.952 28.2819 109.231 28.4053 109.217 28.6609C109.217 28.6609 114.899 29.6831 117.169 30.159C118.054 30.344 118.646 30.4938 118.653 30.5467C118.701 30.8111 118.973 30.9785 119.258 30.8463C119.774 30.6084 129.885 31.3839 129.975 32.1594C130.226 34.3801 127.921 43.21 126.57 45.2457C125.15 47.3783 119.091 43.6595 113.653 44.2675C109.05 43.6066 105.408 43.0955 101.557 42.602C87.6853 40.8219 89.5446 41.1479 84.1896 41.4828C83.6394 40.6456 81.2579 42.32 79.9348 40.8395C79.3847 40.2226 75.2483 39.7556 74.3082 40.2491C73.9391 40.4165 63.1524 39.3855 62.7555 39.359C61.1539 39.2445 51.5719 38.4778 50.1374 39.4383C45.994 37.8698 31.1545 39.2445 26.9137 39.5882V39.5793Z"
                              fill="#4AC2EF"
                            />
                            <path
                              opacity="0.7"
                              d="M105.834 28.8107C107.868 30.582 125.472 32.0272 127.192 33.1023C128.139 33.9748 124.929 45.0871 123.786 46.5852C123.376 47.1228 122.979 47.1492 122.15 46.6645C120.89 45.9155 110.061 44.2676 102.77 43.7653C102.554 43.3775 101.761 44.4967 101.656 44.0473C101.573 43.7917 99.6784 43.3863 96.8372 43.0867C90.1939 42.3817 88.1327 42.3817 83.4671 42.3024C81.5033 42.2672 77.0675 42.2848 75.4728 42.3377C72.3601 42.4434 70.0551 42.5315 69.4353 42.5492C67.9173 42.602 69.1081 41.9059 67.3254 42.2143C63.5372 42.8664 55.2086 42.7078 52.3675 43.6419C50.0973 44.3909 49.6099 44.3645 47.3606 44.2147C45.947 44.1178 41.0098 44.8844 39.2271 45.2634C37.8205 45.563 32.8832 46.5676 31.8805 47.3607C31.5741 47.6427 31.3095 47.6075 31.2816 47.3607C30.9961 47.3783 22.7999 48.5592 22.7999 48.5592C22.6955 48.3213 22.4239 48.2507 22.215 48.4799C21.7971 48.753 13.0926 51.8814 12.821 51.1853C12.0341 49.176 11.7277 39.9495 12.4241 37.4909C12.7862 36.1955 14.5689 35.8165 16.846 35.4729C25.467 34.1598 18.6565 34.6797 31.4 32.3004C43.2869 30.0885 42.5905 31.287 51.8104 28.7667C52.4162 29.4893 54.4566 27.3831 55.8563 28.6785C56.4273 29.2073 60.3269 29.0399 61.1765 28.423C61.4898 28.1939 67.7989 28.1674 68.168 28.1586C69.4075 28.141 70.7375 28.1939 72.0746 28.1939C77.2485 28.1939 82.7916 28.3966 83.9545 27.6299C86.7887 28.8724 99.2675 28.5287 105.848 28.8372L105.834 28.8107Z"
                              fill="#4AC2EF"
                            />
                            <path
                              opacity="0.7"
                              d="M43.3912 56.9312C42.4372 56.3056 38.8858 56.9841 35.4666 57.8918C33.7605 58.3412 32.0823 58.8435 30.7731 59.2224C29.464 59.6014 28.5239 59.8305 28.2732 59.7688C27.4236 59.2929 26.7342 47.6342 27.166 45.7836C27.3192 45.1227 27.5908 44.9641 28.2941 45.0875C28.9347 45.2461 35.3413 43.5365 35.9819 43.369C39.4777 42.4614 42.855 41.6242 42.855 41.6242C43.0779 41.9503 43.4678 40.6548 43.621 41.0778C43.8648 41.6154 51.2741 40.1878 55.2224 39.5092C58.8923 38.8747 63.9897 38.0111 67.9659 37.4824C69.1149 37.3326 68.2514 38.1169 69.5884 37.738C72.4365 36.9184 78.7595 37.0947 80.9113 36.3809C82.6452 35.7992 83.0213 35.7552 84.7204 36.1165C86.1062 36.4161 95.5558 35.8257 96.6143 35.0502C96.865 34.8299 97.0669 34.918 97.0669 35.1736C97.248 35.2 103.508 35.5613 103.536 35.7816C103.585 36.0372 103.773 36.1694 103.961 36.0019C104.288 35.7023 111.168 35.1119 111.266 35.8786C111.537 38.0552 110.388 47.1495 109.588 49.3438C109.163 50.507 107.895 50.3572 106.28 50.084C104.664 49.8109 102.707 49.4496 100.967 50.1017C83.2302 49.8814 84.3792 50.3484 81.2943 51.2649C80.8625 50.507 79.435 52.4898 78.4322 51.1856C78.0214 50.648 75.2429 50.7362 74.6649 51.3442C74.5396 51.4588 73.5577 51.5557 72.1371 51.6438C70.6817 51.732 59.7836 52.2166 58.6625 53.7324C55.7795 52.7277 46.2881 55.9883 43.3982 56.9224L43.3912 56.9312Z"
                              fill="#4AC2EF"
                            />
                            <path
                              opacity="0.7"
                              d="M118.28 12.0938C119.839 13.7417 132.437 13.0719 133.551 13.7593C134.254 14.4995 132.423 25.982 131.671 27.6211C131.399 28.2115 131.121 28.2732 130.508 27.9207C129.7 27.392 121.915 27.1364 116.594 27.2686C116.427 26.8985 115.898 28.0881 115.807 27.6387C115.418 26.1494 94.0531 27.6387 92.7996 27.718C91.7203 27.7885 92.5559 27.0747 91.2816 27.3832C88.5936 28.0441 82.6397 27.7709 80.6202 28.5816C79.0116 29.2337 78.6635 29.2161 77.0479 28.9606C75.1468 28.6609 66.8531 30.1062 65.9827 31.0843C65.7599 31.3311 65.5788 31.2782 65.5509 31.0227C65.5509 31.0227 65.4535 31.0227 65.2863 31.0227C65.1819 31.0227 59.4856 31.5161 59.4578 31.3928C59.3812 31.146 59.1862 31.0491 59.0399 31.2518C58.7475 31.525 52.4802 33.543 52.2783 32.8116C51.7072 30.7318 51.4635 21.5494 51.944 19.2141C52.2017 17.9804 53.476 17.8306 55.1055 17.7601C56.735 17.6896 58.7127 17.7336 60.37 16.7643C80.9336 13.9091 73.5661 15.8478 79.9657 13.7064C80.4044 14.4466 81.818 12.411 82.8347 13.7328C83.2525 14.2704 86.0101 14.1735 86.602 13.5742C86.8736 13.301 93.9695 13.3099 94.3247 13.3099C95.6687 13.301 98.3427 13.2393 99.6727 13.1336C101.212 13.0102 102.361 12.7811 102.723 12.411C104.791 13.5037 112.298 12.6137 118.252 12.0938H118.28Z"
                              fill="#4AC2EF"
                            />
                          </svg>
                          96,738
                          <br />
                        </span>
                        <span className="font-mono text-xs font-normal text-neutral-800">
                          Registros de la
                        </span>
                        <span className="font-mono text-xs font-bold text-neutral-800">
                          {" "}
                        </span>
                        <span className="font-mono text-xs font-bold text-neutral-800 underline">
                          Estrategia
                        </span>
                      </div>
                    </div>
                    <div className="absolute left-[133.59px] top-0 h-[73.44px] w-[132.23px]">
                      <div className="absolute left-0 top-[5.19px] h-[68.26px] w-[132.23px] text-center">
                        <span className="font-Roboto_Serif text-lg font-bold tracking-widest text-neutral-800">
                          <svg
                            width="108"
                            height="60"
                            viewBox="0 0 108 60"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute left-0 top-0 mix-blend-darken"
                          >
                            <path
                              opacity="0.7"
                              d="M34.052 17.8128C32.6547 16.1561 22.5343 17.804 21.7883 17.3017C21.1816 16.6319 22.0667 5.00844 22.6122 3.29885C22.8071 2.6908 23.0297 2.59386 23.553 2.88467C24.3825 3.43103 35.0595 2.56742 35.0595 2.56742C35.2043 2.92873 35.6162 1.72143 35.6997 2.16205C35.9502 3.19309 53.2518 2.09155 54.727 2.0563C55.6232 2.03868 54.9163 2.72603 55.9684 2.46166C58.2118 1.94174 63.105 2.55861 64.8029 1.95056C66.1612 1.43944 66.4562 1.43944 67.7644 1.88006C69.1004 2.28543 76.1981 1.85362 77.0052 1.06051C77.2001 0.840197 77.3559 0.919507 77.3559 1.18388C77.3559 1.23675 82.3605 1.50994 82.3883 1.71262C82.4273 1.96818 82.5832 2.10036 82.7223 1.92411C82.9784 1.65974 88.3058 0.769697 88.3949 1.52756C88.6732 3.68658 87.9996 12.8338 87.3984 15.0545C86.7805 17.425 83.2846 14.6932 80.5012 16.0855L67.4861 16.0062L64.7027 16.8522C64.3798 16.0679 63.1607 17.9978 62.4092 16.6055C62.0918 16.0503 59.8763 15.9269 59.3919 16.4997C58.9689 16.9403 47.6238 15.6185 46.4714 17.1518C44.395 15.8124 36.0003 17.5308 34.052 17.8128Z"
                              fill="#2BFF67"
                            />
                            <path
                              opacity="0.7"
                              d="M70.1125 5.89862C72.072 7.0971 85.0315 2.25912 86.0391 2.51468C86.8852 2.98174 86.8073 14.7638 86.2506 16.632C86.0558 17.293 85.7719 17.4604 85.0705 17.337C83.946 17.0638 70.2016 21.2938 70.2016 21.2938C69.9789 20.9765 69.5558 22.3072 69.4111 21.893C68.988 20.9589 46.6819 27.5241 44.7725 28.0264C43.6146 28.3348 44.4664 27.4272 43.1248 28.0264C40.269 29.2513 33.8728 30.1942 31.7295 31.331C30.015 32.2651 29.6364 32.3621 27.8996 32.3356C26.1294 32.3621 16.9776 35.041 16.009 36.0809C15.7751 36.3629 15.5692 36.3276 15.5413 36.0809C15.5358 36.028 9.02821 37.341 8.97811 37.1472C8.90018 36.9004 8.69421 36.8299 8.5272 37.0502C8.21546 37.3939 1.40728 39.9583 1.21801 39.2357C0.661336 37.1912 0.69474 27.9207 1.27369 25.5325C1.85263 22.9946 6.63449 24.5896 10.1137 22.3248L26.9755 18.28L30.5049 16.5615C30.9947 17.2313 32.3976 14.9401 33.4942 16.0769C33.9563 16.5263 36.8343 15.9447 37.4132 15.2221C37.9198 14.6493 52.733 12.3669 54.0858 10.481C56.9025 11.1508 67.613 6.78866 70.1069 5.8898L70.1125 5.89862Z"
                              fill="#2BFF67"
                            />
                            <path
                              opacity="0.7"
                              d="M22.0724 39.5793C19.8179 37.8169 4.68182 39.8085 3.7466 39.4207C2.83365 38.7862 4.05277 27.1187 4.87109 25.3738C5.16056 24.757 5.5057 24.6248 6.29618 24.9156C7.0143 25.18 14.7633 24.7658 15.4925 24.7306C19.701 24.5191 23.7481 24.3604 23.7481 24.3604C23.9596 24.7306 24.6053 23.5233 24.7222 23.9639C24.8169 24.2283 26.5259 24.3604 29.0755 24.4486C29.0755 24.4486 44.1726 24.6777 53.586 25.2064C54.9443 25.2857 53.8476 25.8938 55.4509 25.7792C58.8689 25.5325 66.2504 26.9601 68.8446 26.6693C70.9265 26.4401 71.3719 26.4666 73.3258 27.1628C74.9179 27.7268 86.0459 29.0133 87.343 28.4494C87.6547 28.2819 87.8774 28.4053 87.8662 28.6609C87.8662 28.6609 92.4087 29.6831 94.2235 30.159C94.9305 30.344 95.4037 30.4938 95.4092 30.5467C95.4482 30.8111 95.6653 30.9785 95.8936 30.8463C96.3055 30.6084 104.388 31.3839 104.461 32.1594C104.661 34.3801 102.819 43.21 101.739 45.2457C100.603 47.3783 95.7599 43.6595 91.4123 44.2675C87.7326 43.6066 84.8212 43.0955 81.7428 42.602C70.6538 40.8219 72.1401 41.1479 67.8592 41.4828C67.4195 40.6456 65.5156 42.32 64.4579 40.8395C64.0182 40.2226 60.7115 39.7556 59.96 40.2491C59.6649 40.4165 51.042 39.3855 50.7247 39.359C49.4443 39.2445 41.7844 38.4778 40.6377 39.4383C37.3254 37.8698 25.4626 39.2445 22.0724 39.5882V39.5793Z"
                              fill="#2BFF67"
                            />
                            <path
                              opacity="0.7"
                              d="M85.1596 28.8107C86.7851 30.582 100.858 32.0272 102.233 33.1023C102.99 33.9748 100.424 45.0871 99.5108 46.5852C99.1823 47.1228 98.865 47.1492 98.2026 46.6645C97.195 45.9155 88.5386 44.2676 82.7102 43.7653C82.5376 43.3775 81.903 44.4967 81.8195 44.0473C81.7527 43.7917 80.2386 43.3863 77.9673 43.0867C72.6566 42.3817 71.0088 42.3817 67.2791 42.3024C65.7093 42.2672 62.1632 42.2848 60.8884 42.3377C58.4001 42.4434 56.5575 42.5315 56.062 42.5492C54.8485 42.602 55.8004 41.9059 54.3753 42.2143C51.347 42.8664 44.6891 42.7078 42.4178 43.6419C40.6031 44.3909 40.2134 44.3645 38.4153 44.2147C37.2853 44.1178 33.3384 44.8844 31.9133 45.2634C30.7888 45.563 26.842 46.5676 26.0404 47.3607C25.7954 47.6427 25.5839 47.6075 25.5616 47.3607C25.3334 47.3783 18.7813 48.5592 18.7813 48.5592C18.6978 48.3213 18.4807 48.2507 18.3137 48.4799C17.9797 48.753 11.0212 51.8814 10.8041 51.1853C10.175 49.176 9.93011 39.9495 10.4868 37.4909C10.7763 36.1955 12.2014 35.8165 14.0217 35.4729C20.9134 34.1598 15.4691 34.6797 25.6563 32.3004C35.1588 30.0885 34.6021 31.287 41.9725 28.7667C42.4568 29.4893 44.0879 27.3831 45.2068 28.6785C45.6633 29.2073 48.7807 29.0399 49.4598 28.423C49.7103 28.1939 54.7538 28.1674 55.0489 28.1586C56.0398 28.141 57.103 28.1939 58.1718 28.1939C62.308 28.1939 66.7391 28.3966 67.6688 27.6299C69.9344 28.8724 79.9101 28.5287 85.1707 28.8372L85.1596 28.8107Z"
                              fill="#2BFF67"
                            />
                            <path
                              opacity="0.7"
                              d="M35.2436 56.9312C34.481 56.3056 31.6419 56.9841 28.9086 57.8918C27.5448 58.3412 26.2032 58.8435 25.1566 59.2224C24.1101 59.6014 23.3586 59.8305 23.1582 59.7688C22.479 59.2929 21.9279 47.6342 22.273 45.7836C22.3955 45.1227 22.6126 44.9641 23.1749 45.0875C23.687 45.2461 28.8084 43.5365 29.3206 43.369C32.1151 42.4614 34.815 41.6242 34.815 41.6242C34.9931 41.9503 35.3049 40.6548 35.4273 41.0778C35.6222 41.6154 41.5452 40.1878 44.7016 39.5092C47.6353 38.8747 51.7102 38.0111 54.8888 37.4824C55.8073 37.3326 55.1171 38.1169 56.1859 37.738C58.4627 36.9184 63.5173 37.0947 65.2375 36.3809C66.6236 35.7992 66.9242 35.7552 68.2825 36.1165C69.3903 36.4161 76.9444 35.8257 77.7906 35.0502C77.991 34.8299 78.1524 34.918 78.1524 35.1736C78.2971 35.2 83.3017 35.5613 83.3239 35.7816C83.3629 36.0372 83.5132 36.1694 83.6635 36.0019C83.9252 35.7023 89.4251 35.1119 89.5031 35.8786C89.7202 38.0552 88.8017 47.1495 88.1615 49.3438C87.8219 50.507 86.8087 50.3572 85.5173 50.084C84.2258 49.8109 82.6615 49.4496 81.2698 50.1017C67.0912 49.8814 68.0097 50.3484 65.5436 51.2649C65.1985 50.507 64.0573 52.4898 63.2557 51.1856C62.9273 50.648 60.7061 50.7362 60.2441 51.3442C60.1439 51.4588 59.3589 51.5557 58.2233 51.6438C57.0599 51.732 48.3479 52.2166 47.4516 53.7324C45.147 52.7277 37.5594 55.9883 35.2492 56.9224L35.2436 56.9312Z"
                              fill="#2BFF67"
                            />
                            <path
                              opacity="0.7"
                              d="M95.1086 12.0938C96.3555 13.7417 106.426 13.0719 107.317 13.7593C107.879 14.4995 106.415 25.982 105.814 27.6211C105.596 28.2115 105.374 28.2732 104.884 27.9207C104.238 27.392 98.0144 27.1364 93.7614 27.2686C93.6278 26.8985 93.2047 28.0881 93.1324 27.6387C92.8206 26.1494 75.7418 27.6387 74.7397 27.718C73.8769 27.7885 74.5449 27.0747 73.5262 27.3832C71.3774 28.0441 66.6178 27.7709 65.0034 28.5816C63.7175 29.2337 63.4392 29.2161 62.1477 28.9606C60.6279 28.6609 53.9979 30.1062 53.3021 31.0843C53.1239 31.3311 52.9792 31.2782 52.9569 31.0227C52.9569 31.0227 52.879 31.0227 52.7454 31.0227C52.6619 31.0227 48.1082 31.5161 48.086 31.3928C48.0247 31.146 47.8689 31.0491 47.752 31.2518C47.5182 31.525 42.5081 33.543 42.3466 32.8116C41.8902 30.7318 41.6953 21.5494 42.0794 19.2141C42.2854 17.9804 43.3041 17.8306 44.6067 17.7601C45.9094 17.6896 47.4903 17.7336 48.8152 16.7643C65.2539 13.9091 59.3643 15.8478 64.4801 13.7064C64.8308 14.4466 65.9609 12.411 66.7737 13.7328C67.1077 14.2704 69.3121 14.1735 69.7853 13.5742C70.0024 13.301 75.675 13.3099 75.9589 13.3099C77.0332 13.301 79.1709 13.2393 80.2341 13.1336C81.4644 13.0102 82.3829 12.7811 82.6724 12.411C84.3257 13.5037 90.3267 12.6137 95.0863 12.0938H95.1086Z"
                              fill="#2BFF67"
                            />
                          </svg>
                          16,681
                          <br />
                        </span>
                        <span className="font-mono text-xs font-normal text-neutral-800">
                          Registros eliminados
                          <br />
                        </span>
                        <span className="font-mono text-xs font-bold text-neutral-800">
                          ¿”Ubicados”?
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="font-Roboto_Serif absolute left-[6.59px] top-[10.29px] h-[18.86px] w-[189.09px] text-[15px] font-extralight text-black">
                    14 de diciembre 2023
                  </div>
                </div>
                <div className="relative h-[120px] w-[290px] border border-neutral-800">
                  <div className="absolute left-[19.57px] top-[31.57px] h-[72.67px] w-[237.27px]">
                    <div className="absolute left-0 top-[10.66px] h-[62.01px] w-[115.22px]">
                      <div className="absolute left-0 top-[5.47px] h-[48.29px] w-[115.22px] text-center">
                        <span className="font-Roboto_Serif text-lg font-bold tracking-widest text-neutral-800">
                          <svg
                            width="102"
                            height="63"
                            viewBox="0 0 102 63"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute left-0 top-0 mix-blend-darken"
                          >
                            <path
                              opacity="0.7"
                              d="M32.1361 17.9407C30.8177 16.195 21.2684 17.9314 20.5645 17.4021C19.992 16.6964 20.8271 4.44857 21.3419 2.64715C21.5258 2.00643 21.7359 1.90429 22.2296 2.21072C23.0123 2.78643 33.0868 1.87643 33.0868 1.87643C33.2234 2.25714 33.6121 0.984995 33.6909 1.44928C33.9273 2.53571 50.2525 1.375 51.6445 1.33786C52.4901 1.31929 51.823 2.04356 52.8158 1.76499C54.9326 1.21713 59.5497 1.86715 61.1518 1.22643C62.4334 0.687861 62.7118 0.68786 63.9462 1.15215C65.2068 1.57929 71.9039 1.12428 72.6656 0.288567C72.8494 0.0564237 72.9965 0.139995 72.9965 0.418566C72.9965 0.47428 77.7186 0.762143 77.7449 0.975714C77.7816 1.245 77.9287 1.38428 78.06 1.19856C78.3017 0.919991 83.3284 -0.0178632 83.4125 0.780708C83.6751 3.05571 83.0396 12.6943 82.4723 15.0343C81.8892 17.5321 78.5906 14.6536 75.9642 16.1207L63.6835 16.0371L61.0572 16.9286C60.7526 16.1021 59.6022 18.1357 58.8931 16.6686C58.5937 16.0836 56.5032 15.9536 56.0462 16.5571C55.647 17.0214 44.9421 15.6286 43.8548 17.2443C41.8955 15.8329 33.9745 17.6436 32.1361 17.9407Z"
                              fill="#4AC2EF"
                            />
                            <path
                              opacity="0.7"
                              d="M66.1629 5.38658C68.0118 6.64944 80.24 1.55159 81.1907 1.82087C81.9891 2.31302 81.9156 14.728 81.3903 16.6966C81.2065 17.393 80.9386 17.5694 80.2768 17.4394C79.2157 17.1516 66.2469 21.6087 66.2469 21.6087C66.0368 21.2744 65.6376 22.6766 65.5011 22.2402C65.1019 21.2559 44.0545 28.1737 42.2528 28.703C41.1603 29.028 41.9639 28.0716 40.698 28.703C38.0034 29.9937 31.9681 30.9873 29.9459 32.1852C28.328 33.1694 27.9709 33.2716 26.332 33.2437C24.6617 33.2716 16.0263 36.0944 15.1124 37.1902C14.8918 37.4873 14.6974 37.4502 14.6712 37.1902C14.6659 37.1344 8.52556 38.518 8.47828 38.3137C8.40475 38.0537 8.2104 37.9794 8.05282 38.2116C7.75867 38.5737 1.33468 41.2759 1.15609 40.5144C0.630823 38.3602 0.662342 28.5916 1.20862 26.0752C1.75489 23.4009 6.26692 25.0816 9.54982 22.6952L25.4601 18.433L28.7903 16.6223C29.2525 17.328 30.5762 14.9137 31.611 16.1116C32.0469 16.5852 34.7626 15.9723 35.3088 15.2109C35.7868 14.6073 49.7641 12.2023 51.0405 10.2152C53.6984 10.9209 63.8045 6.32443 66.1576 5.37729L66.1629 5.38658Z"
                              fill="#4AC2EF"
                            />
                            <path
                              opacity="0.7"
                              d="M20.8321 40.8766C18.7048 39.0194 4.4228 41.118 3.54036 40.7094C2.67892 40.0408 3.82925 27.7466 4.60139 25.908C4.87453 25.258 5.2002 25.1187 5.94607 25.4251C6.62366 25.7037 13.9354 25.2673 14.6235 25.2301C18.5945 25.0073 22.4131 24.8401 22.4131 24.8401C22.6127 25.2301 23.222 23.958 23.3323 24.4223C23.4216 24.7009 25.0342 24.8401 27.4399 24.933C27.4399 24.933 41.6851 25.1744 50.5673 25.7316C51.849 25.8151 50.8142 26.4558 52.327 26.3351C55.5521 26.0751 62.5171 27.5794 64.9649 27.273C66.9294 27.0316 67.3496 27.0594 69.1932 27.793C70.6955 28.3873 81.1955 29.743 82.4194 29.1487C82.7136 28.9723 82.9237 29.1023 82.9132 29.3716C82.9132 29.3716 87.1993 30.4487 88.9117 30.9501C89.5788 31.1451 90.0253 31.303 90.0305 31.3587C90.0673 31.6373 90.2721 31.8137 90.4875 31.6744C90.8762 31.4237 98.503 32.2409 98.5713 33.058C98.7604 35.398 97.0218 44.7023 96.0028 46.8473C94.9312 49.0944 90.3614 45.1758 86.2591 45.8166C82.7871 45.1201 80.04 44.5816 77.1352 44.0616C66.672 42.1858 68.0744 42.5294 64.0351 42.8823C63.6202 42.0001 61.8238 43.7644 60.8258 42.2044C60.4108 41.5544 57.2907 41.0623 56.5816 41.5823C56.3032 41.7587 48.1669 40.6723 47.8675 40.6444C46.6594 40.5237 39.4317 39.7158 38.3497 40.728C35.2243 39.0751 24.0309 40.5237 20.8321 40.8858V40.8766Z"
                              fill="#4AC2EF"
                            />
                            <path
                              opacity="0.7"
                              d="M80.3608 29.5294C81.8946 31.3959 95.1732 32.9187 96.4706 34.0516C97.185 34.9709 94.7635 46.6802 93.9021 48.2587C93.5922 48.8252 93.2928 48.853 92.6677 48.3423C91.717 47.553 83.5491 45.8166 78.0496 45.2873C77.8868 44.8787 77.288 46.058 77.2092 45.5844C77.1462 45.3151 75.7174 44.888 73.5744 44.5723C68.5633 43.8294 67.0085 43.8294 63.4893 43.7459C62.008 43.7087 58.6621 43.7273 57.4592 43.783C55.1113 43.8944 53.3727 43.9873 52.9052 44.0059C51.7601 44.0616 52.6583 43.328 51.3136 43.653C48.4562 44.3401 42.174 44.173 40.0309 45.1573C38.3186 45.9466 37.9509 45.9187 36.2543 45.7609C35.188 45.6587 31.4638 46.4666 30.1192 46.8659C29.0581 47.1816 25.334 48.2402 24.5776 49.0759C24.3465 49.373 24.1469 49.3359 24.1259 49.0759C23.9105 49.0944 17.7282 50.3387 17.7282 50.3387C17.6494 50.088 17.4445 50.0137 17.2869 50.2551C16.9718 50.543 10.406 53.8394 10.2011 53.1059C9.60756 50.9887 9.37644 41.2666 9.90171 38.6759C10.1748 37.3109 11.5195 36.9116 13.2371 36.5494C19.7399 35.1659 14.6028 35.7137 24.2152 33.2066C33.1815 30.8759 32.6562 32.1387 39.6107 29.483C40.0677 30.2444 41.6067 28.0251 42.6625 29.3901C43.0932 29.9473 46.0347 29.7709 46.6755 29.1209C46.9119 28.8794 51.6708 28.8516 51.9492 28.8423C52.8842 28.8237 53.8874 28.8794 54.8959 28.8794C58.7986 28.8794 62.9798 29.093 63.8569 28.2852C65.9948 29.5944 75.4075 29.2323 80.3713 29.5573L80.3608 29.5294Z"
                              fill="#4AC2EF"
                            />
                            <path
                              opacity="0.7"
                              d="M33.2603 59.1597C32.5406 58.5005 29.8618 59.2155 27.2827 60.1719C25.9958 60.6455 24.7299 61.1748 23.7425 61.574C22.755 61.9733 22.0458 62.2148 21.8568 62.1497C21.2159 61.6483 20.6959 49.3633 21.0216 47.4133C21.1371 46.7169 21.342 46.5497 21.8725 46.6797C22.3558 46.8469 27.1882 45.0455 27.6714 44.869C30.3083 43.9126 32.8558 43.0305 32.8558 43.0305C33.0239 43.374 33.318 42.009 33.4336 42.4547C33.6174 43.0212 39.2063 41.5169 42.1845 40.8019C44.9527 40.1333 48.7976 39.2233 51.7969 38.6662C52.6635 38.5083 52.0122 39.3348 53.0207 38.9355C55.1691 38.0719 59.9385 38.2576 61.5615 37.5055C62.8694 36.8926 63.1531 36.8462 64.4347 37.2269C65.48 37.5426 72.6079 36.9205 73.4063 36.1033C73.5954 35.8712 73.7477 35.964 73.7477 36.2333C73.8843 36.2612 78.6064 36.6419 78.6274 36.874C78.6642 37.1433 78.806 37.2826 78.9478 37.1062C79.1947 36.7905 84.3843 36.1683 84.4578 36.9762C84.6627 39.2697 83.796 48.8526 83.192 51.1647C82.8715 52.3905 81.9156 52.2326 80.6969 51.9447C79.4783 51.6569 78.0023 51.2762 76.6892 51.9633C63.3107 51.7312 64.1774 52.2233 61.8504 53.189C61.5248 52.3905 60.448 54.4797 59.6916 53.1055C59.3817 52.539 57.2859 52.6319 56.8499 53.2726C56.7554 53.3933 56.0147 53.4955 54.9432 53.5883C53.8454 53.6812 45.625 54.1919 44.7793 55.789C42.6047 54.7305 35.4454 58.1662 33.2655 59.1505L33.2603 59.1597Z"
                              fill="#4AC2EF"
                            />
                            <path
                              opacity="0.7"
                              d="M89.7481 11.9141C90.9247 13.6505 100.427 12.9448 101.267 13.6691C101.798 14.4491 100.416 26.5483 99.8489 28.2755C99.644 28.8976 99.4339 28.9626 98.9717 28.5912C98.3624 28.0341 92.4899 27.7648 88.4769 27.9041C88.3508 27.5141 87.9516 28.7676 87.8834 28.2941C87.5892 26.7248 71.4741 28.2941 70.5286 28.3776C69.7144 28.4519 70.3448 27.6998 69.3835 28.0248C67.356 28.7212 62.865 28.4333 61.3417 29.2876C60.1283 29.9748 59.8657 29.9562 58.6471 29.6869C57.2131 29.3712 50.9572 30.8941 50.3006 31.9248C50.1326 32.1848 49.996 32.1291 49.975 31.8598C49.975 31.8598 49.9014 31.8598 49.7754 31.8598C49.6966 31.8598 45.3999 32.3798 45.3789 32.2498C45.3211 31.9898 45.1741 31.8876 45.0638 32.1012C44.8431 32.3891 40.1158 34.5155 39.9634 33.7448C39.5327 31.5533 39.3489 21.8776 39.7113 19.4169C39.9056 18.1169 40.8669 17.9591 42.096 17.8848C43.3251 17.8105 44.8169 17.8569 46.067 16.8355C61.5781 13.8269 56.0208 15.8698 60.848 13.6133C61.1789 14.3933 62.2452 12.2483 63.0121 13.6412C63.3272 14.2076 65.4073 14.1055 65.8538 13.4741C66.0586 13.1862 71.4111 13.1955 71.6789 13.1955C72.6927 13.1862 74.7097 13.1212 75.713 13.0098C76.8738 12.8798 77.7405 12.6383 78.0136 12.2483C79.5737 13.3998 85.236 12.4619 89.727 11.9141H89.7481Z"
                              fill="#4AC2EF"
                            />
                          </svg>
                          94,291
                          <br />
                        </span>
                        <span className="font-mono text-xs font-normal text-neutral-800">
                          Registros de la
                        </span>
                        <span className="font-mono text-xs font-bold text-neutral-800">
                          {" "}
                        </span>
                        <span className="font-mono text-xs font-bold text-neutral-800 underline">
                          Estrategia
                        </span>
                      </div>
                    </div>
                    <div className="absolute left-[136.67px] top-0 h-[62.01px] w-[100.60px]">
                      <div className="absolute left-0 top-0 h-[62.01px] w-[100.60px]"></div>
                      <div className="absolute left-[0.85px] top-[12.90px] h-[33.43px] w-[94.97px] text-center">
                        <span className="font-Roboto_Serif text-lg font-bold tracking-widest text-neutral-800">
                          <svg
                            width="102"
                            height="63"
                            viewBox="0 0 102 63"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute left-0 top-0 mix-blend-darken"
                          >
                            <path
                              opacity="0.7"
                              d="M32.0924 18.2786C30.774 16.5329 21.2247 18.2693 20.5208 17.74C19.9483 17.0343 20.7834 4.78646 21.2982 2.98504C21.4821 2.34432 21.6922 2.24218 22.1859 2.54861C22.9686 3.12432 33.0431 2.21432 33.0431 2.21432C33.1797 2.59503 33.5684 1.32289 33.6472 1.78717C33.8836 2.8736 50.2088 1.71289 51.6008 1.67575C52.4464 1.65718 51.7793 2.38145 52.7721 2.10288C54.8889 1.55503 59.506 2.20504 61.1081 1.56432C62.3897 1.02575 62.6681 1.02575 63.9025 1.49004C65.1631 1.91718 71.8602 1.46217 72.6219 0.626457C72.8057 0.394314 72.9528 0.477885 72.9528 0.756457C72.9528 0.812171 77.6749 1.10003 77.7012 1.31361C77.7379 1.58289 77.885 1.72217 78.0163 1.53645C78.258 1.25788 83.2847 0.320027 83.3688 1.1186C83.6314 3.3936 82.9958 13.0322 82.4286 15.3722C81.8455 17.87 78.5469 14.9915 75.9205 16.4586L63.6398 16.375L61.0135 17.2665C60.7089 16.44 59.5585 18.4736 58.8494 17.0065C58.55 16.4215 56.4595 16.2915 56.0025 16.895C55.6033 17.3593 44.8984 15.9665 43.8111 17.5822C41.8518 16.1708 33.9308 17.9815 32.0924 18.2786Z"
                              fill="#2BFF67"
                            />
                            <path
                              opacity="0.7"
                              d="M66.1204 5.72447C67.9693 6.98733 80.1975 1.88948 81.1482 2.15876C81.9466 2.65091 81.8731 15.0659 81.3478 17.0345C81.1639 17.7309 80.8961 17.9073 80.2342 17.7773C79.1732 17.4895 66.2044 21.9466 66.2044 21.9466C65.9943 21.6123 65.5951 23.0145 65.4585 22.578C65.0593 21.5938 44.0119 28.5116 42.2103 29.0409C41.1177 29.3659 41.9214 28.4095 40.6555 29.0409C37.9609 30.3316 31.9256 31.3252 29.9033 32.523C28.2855 33.5073 27.9283 33.6095 26.2895 33.5816C24.6192 33.6095 15.9838 36.4323 15.0698 37.528C14.8492 37.8252 14.6549 37.788 14.6286 37.528C14.6234 37.4723 8.48302 38.8559 8.43574 38.6516C8.36221 38.3916 8.16786 38.3173 8.01028 38.5495C7.71613 38.9116 1.29214 41.6138 1.11355 40.8523C0.588281 38.698 0.6198 28.9295 1.16608 26.413C1.71235 23.7388 6.22437 25.4195 9.50728 23.033L25.4176 18.7709L28.7477 16.9602C29.21 17.6659 30.5336 15.2516 31.5684 16.4495C32.0044 16.923 34.72 16.3102 35.2663 15.5488C35.7443 14.9452 49.7216 12.5402 50.998 10.553C53.6558 11.2588 63.7619 6.66232 66.1151 5.71518L66.1204 5.72447Z"
                              fill="#2BFF67"
                            />
                            <path
                              opacity="0.7"
                              d="M20.7895 41.2145C18.6622 39.3573 4.38026 41.4559 3.49781 41.0473C2.63638 40.3787 3.78671 28.0844 4.55885 26.2459C4.83199 25.5959 5.15765 25.4566 5.90353 25.763C6.58112 26.0416 13.8928 25.6052 14.5809 25.568C18.5519 25.3452 22.3706 25.178 22.3706 25.178C22.5702 25.568 23.1795 24.2959 23.2898 24.7602C23.3791 25.0387 24.9917 25.178 27.3974 25.2709C27.3974 25.2709 41.6426 25.5123 50.5248 26.0695C51.8064 26.153 50.7717 26.7937 52.2844 26.673C55.5096 26.413 62.4746 27.9173 64.9223 27.6109C66.8868 27.3694 67.307 27.3973 69.1507 28.1309C70.653 28.7252 81.153 30.0809 82.3769 29.4866C82.671 29.3102 82.8811 29.4402 82.8706 29.7095C82.8706 29.7095 87.1568 30.7866 88.8692 31.288C89.5362 31.483 89.9827 31.6409 89.988 31.6966C90.0247 31.9752 90.2296 32.1516 90.445 32.0123C90.8336 31.7616 98.4605 32.5787 98.5288 33.3959C98.7179 35.7359 96.9792 45.0402 95.9602 47.1852C94.8887 49.4323 90.3189 45.5137 86.2166 46.1545C82.7446 45.458 79.9974 44.9195 77.0927 44.3995C66.6294 42.5237 68.0319 42.8673 63.9926 43.2202C63.5776 42.338 61.7812 44.1023 60.7832 42.5423C60.3683 41.8923 57.2482 41.4002 56.5391 41.9202C56.2607 42.0966 48.1243 41.0102 47.8249 40.9823C46.6168 40.8616 39.3892 40.0537 38.3071 41.0659C35.1818 39.413 23.9884 40.8616 20.7895 41.2237V41.2145Z"
                              fill="#2BFF67"
                            />
                            <path
                              opacity="0.7"
                              d="M80.3182 29.8668C81.852 31.7333 95.1306 33.2561 96.428 34.389C97.1424 35.3083 94.7209 47.0176 93.8595 48.5961C93.5496 49.1626 93.2502 49.1904 92.6251 48.6797C91.6744 47.8904 83.5065 46.154 78.007 45.6247C77.8442 45.2161 77.2454 46.3954 77.1666 45.9218C77.1036 45.6525 75.6748 45.2254 73.5317 44.9097C68.5207 44.1668 66.9659 44.1668 63.4467 44.0833C61.9654 44.0461 58.6195 44.0647 57.4166 44.1204C55.0687 44.2318 53.3301 44.3247 52.8626 44.3433C51.7175 44.399 52.6157 43.6654 51.271 43.9904C48.4136 44.6775 42.1314 44.5104 39.9883 45.4947C38.2759 46.284 37.9083 46.2561 36.2117 46.0983C35.1454 45.9961 31.4212 46.804 30.0766 47.2033C29.0155 47.519 25.2914 48.5776 24.535 49.4133C24.3039 49.7104 24.1043 49.6733 24.0833 49.4133C23.8679 49.4318 17.6856 50.6761 17.6856 50.6761C17.6068 50.4254 17.4019 50.3511 17.2443 50.5925C16.9292 50.8804 10.3634 54.1768 10.1585 53.4433C9.56496 51.3261 9.33384 41.604 9.8591 39.0133C10.1322 37.6483 11.4769 37.249 13.1945 36.8868C19.6973 35.5033 14.5602 36.0511 24.1726 33.544C33.1389 31.2133 32.6136 32.4761 39.5681 29.8204C40.0251 30.5818 41.5641 28.3625 42.6199 29.7275C43.0506 30.2847 45.9921 30.1083 46.6329 29.4583C46.8693 29.2168 51.6282 29.189 51.9066 29.1797C52.8416 29.1611 53.8448 29.2168 54.8533 29.2168C58.756 29.2168 62.9371 29.4304 63.8143 28.6226C65.9522 29.9318 75.3649 29.5697 80.3287 29.8947L80.3182 29.8668Z"
                              fill="#2BFF67"
                            />
                            <path
                              opacity="0.7"
                              d="M33.2169 59.4976C32.4973 58.8384 29.8185 59.5534 27.2394 60.5098C25.9525 60.9834 24.6866 61.5126 23.6991 61.9119C22.7116 62.3112 22.0025 62.5526 21.8134 62.4876C21.1726 61.9862 20.6526 49.7012 20.9782 47.7512C21.0938 47.0548 21.2987 46.8876 21.8292 47.0176C22.3124 47.1848 27.1449 45.3834 27.6281 45.2069C30.2649 44.2505 32.8125 43.3683 32.8125 43.3683C32.9806 43.7119 33.2747 42.3469 33.3903 42.7926C33.5741 43.3591 39.1629 41.8548 42.1412 41.1398C44.9093 40.4712 48.7543 39.5612 51.7535 39.0041C52.6202 38.8462 51.9689 39.6726 52.9774 39.2734C55.1257 38.4098 59.8951 38.5955 61.5182 37.8433C62.8261 37.2305 63.1098 37.1841 64.3914 37.5648C65.4367 37.8805 72.5645 37.2584 73.3629 36.4412C73.552 36.2091 73.7044 36.3019 73.7044 36.5712C73.8409 36.5991 78.5631 36.9798 78.5841 37.2119C78.6208 37.4812 78.7627 37.6205 78.9045 37.4441C79.1514 37.1284 84.341 36.5062 84.4145 37.3141C84.6194 39.6076 83.7527 49.1905 83.1486 51.5026C82.8282 52.7284 81.8722 52.5705 80.6536 52.2826C79.435 51.9948 77.959 51.6141 76.6458 52.3012C63.2673 52.0691 64.134 52.5612 61.8071 53.5269C61.4814 52.7283 60.4046 54.8176 59.6483 53.4433C59.3384 52.8769 57.2425 52.9698 56.8066 53.6105C56.712 53.7312 55.9714 53.8334 54.8999 53.9262C53.8021 54.0191 45.5817 54.5298 44.736 56.1269C42.5614 55.0683 35.402 58.5041 33.2222 59.4883L33.2169 59.4976Z"
                              fill="#2BFF67"
                            />
                            <path
                              opacity="0.7"
                              d="M89.7034 12.2515C90.88 13.9879 100.382 13.2822 101.222 14.0065C101.753 14.7865 100.372 26.8857 99.8043 28.6129C99.5994 29.235 99.3893 29.3 98.9271 28.9286C98.3178 28.3715 92.4453 28.1022 88.4323 28.2415C88.3062 27.8515 87.907 29.105 87.8387 28.6315C87.5446 27.0622 71.4295 28.6315 70.484 28.715C69.6698 28.7893 70.3001 28.0372 69.3389 28.3622C67.3114 29.0586 62.8204 28.7707 61.2971 29.625C60.0837 30.3122 59.8211 30.2936 58.6025 30.0243C57.1685 29.7086 50.9126 31.2315 50.256 32.2622C50.0879 32.5222 49.9514 32.4665 49.9304 32.1972C49.9304 32.1972 49.8568 32.1972 49.7308 32.1972C49.652 32.1972 45.3553 32.7172 45.3343 32.5872C45.2765 32.3272 45.1294 32.225 45.0191 32.4386C44.7985 32.7265 40.0711 34.8529 39.9188 34.0822C39.4881 31.8907 39.3042 22.215 39.6667 19.7543C39.861 18.4543 40.8223 18.2965 42.0514 18.2222C43.2805 18.1479 44.7723 18.1943 46.0224 17.1729C61.5335 14.1643 55.9762 16.2072 60.8033 13.9508C61.1343 14.7308 62.2006 12.5858 62.9674 13.9786C63.2826 14.545 65.3627 14.4429 65.8091 13.8115C66.014 13.5236 71.3664 13.5329 71.6343 13.5329C72.6481 13.5236 74.6651 13.4586 75.6684 13.3472C76.8292 13.2172 77.6959 12.9758 77.969 12.5858C79.5291 13.7372 85.1914 12.7993 89.6824 12.2515H89.7034Z"
                              fill="#2BFF67"
                            />
                          </svg>
                          12,344
                          <br />
                        </span>
                        <span className="font-mono text-xs font-bold text-neutral-800">
                          Localizados
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="font-Roboto_Serif absolute left-[6.59px] top-[11.14px] h-[16.71px] w-[181.85px] text-[15px] font-extralight text-black">
                    27 de diciembre 2023
                  </div>
                </div>
                <div className="relative h-[120px] w-[291px] border border-neutral-800">
                  <div className="absolute left-[1px] top-[14.40px] inline-flex h-[105.60px] w-[290px] flex-col items-center justify-start">
                    <div className="relative h-[76.41px] w-[255.31px]">
                      <div className="absolute left-[76.60px] top-0 h-[41.41px] w-[99.26px]"></div>
                      <div className="absolute left-0 top-[8.41px] w-[255.31px] text-center">
                        <span className="font-Roboto_Serif text-lg font-bold tracking-widest text-neutral-800">
                          <svg
                            width="100"
                            height="42"
                            viewBox="0 0 100 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute left-[30%] top-0 mix-blend-darken"
                          >
                            <path
                              opacity="0.7"
                              d="M32.2712 15.8581C30.9332 14.3328 21.2419 15.8499 20.5276 15.3875C19.9465 14.7709 20.7941 4.06978 21.3165 2.49585C21.5031 1.93605 21.7163 1.8468 22.2174 2.11453C23.0117 2.61754 33.2361 1.82246 33.2361 1.82246C33.3747 2.1551 33.7691 1.0436 33.8491 1.44925C34.089 2.39848 50.6569 1.38435 52.0695 1.3519C52.9278 1.33568 52.2508 1.96849 53.2583 1.7251C55.4066 1.24643 60.0923 1.81435 61.7181 1.25455C63.0188 0.783992 63.3014 0.783991 64.5541 1.18964C65.8335 1.56284 72.6301 1.1653 73.4031 0.435123C73.5897 0.232296 73.7389 0.305313 73.7389 0.548705C73.7389 0.597383 78.5313 0.848893 78.5579 1.03549C78.5952 1.27077 78.7445 1.39246 78.8778 1.2302C79.123 0.986807 84.2245 0.167391 84.3098 0.865114C84.5763 2.85281 83.9313 11.2742 83.3556 13.3187C82.7639 15.5011 79.4162 12.986 76.7508 14.2679L64.2876 14.1949L61.6222 14.9737C61.313 14.2517 60.1456 16.0284 59.4259 14.7466C59.1221 14.2354 57.0005 14.1219 56.5367 14.6492C56.1315 15.0549 45.2675 13.8379 44.164 15.2496C42.1757 14.0164 34.1369 15.5984 32.2712 15.8581Z"
                              fill="#2BFF67"
                            />
                            <path
                              opacity="0.7"
                              d="M66.805 4.88957C68.6814 5.99295 81.0913 1.53888 82.0562 1.77416C82.8664 2.20415 82.7918 13.0513 82.2587 14.7713C82.0722 15.3797 81.8003 15.5339 81.1286 15.4203C80.0518 15.1688 66.8903 19.0631 66.8903 19.0631C66.677 18.771 66.2719 19.9961 66.1333 19.6148C65.7281 18.7548 44.3679 24.799 42.5395 25.2615C41.4307 25.5454 42.2463 24.7098 40.9616 25.2615C38.2269 26.3892 32.1019 27.2573 30.0496 28.3039C28.4077 29.1638 28.0452 29.2531 26.382 29.2287C24.6869 29.2531 15.9231 31.7194 14.9956 32.6768C14.7717 32.9364 14.5745 32.904 14.5478 32.6768C14.5425 32.6281 8.31086 33.8369 8.26289 33.6585C8.18825 33.4313 7.99102 33.3664 7.8311 33.5692C7.53258 33.8856 1.01309 36.2465 0.831846 35.5813C0.298773 33.699 0.33076 25.1641 0.885156 22.9655C1.43955 20.6289 6.01864 22.0974 9.35035 20.0123L25.4971 16.2884L28.8768 14.7064C29.3459 15.323 30.6893 13.2136 31.7394 14.2602C32.1819 14.6739 34.9379 14.1385 35.4923 13.4732C35.9774 12.9458 50.1624 10.8446 51.4578 9.10836C54.1551 9.72495 64.4115 5.70898 66.7996 4.88145L66.805 4.88957Z"
                              fill="#2BFF67"
                            />
                            <path
                              opacity="0.7"
                              d="M20.8003 35.8974C18.6413 34.2748 4.14707 36.1083 3.25151 35.7513C2.37727 35.1672 3.5447 24.4255 4.32832 22.8191C4.60552 22.2512 4.93602 22.1295 5.69299 22.3972C6.38065 22.6406 13.801 22.2593 14.4994 22.2269C18.5294 22.0322 22.4048 21.8861 22.4048 21.8861C22.6074 22.2269 23.2258 21.1154 23.3377 21.521C23.4283 21.7644 25.0649 21.8861 27.5063 21.9673C27.5063 21.9673 41.9633 22.1782 50.9775 22.665C52.2782 22.738 51.2281 23.2978 52.7633 23.1923C56.0364 22.9652 63.105 24.2795 65.5891 24.0117C67.5828 23.8008 68.0092 23.8251 69.8803 24.4661C71.4049 24.9853 82.061 26.1698 83.3031 25.6506C83.6016 25.4964 83.8148 25.61 83.8042 25.8453C83.8042 25.8453 88.154 26.7864 89.8919 27.2245C90.5689 27.3949 91.022 27.5328 91.0273 27.5815C91.0646 27.8249 91.2725 27.979 91.4911 27.8573C91.8856 27.6383 99.6258 28.3522 99.6951 29.0662C99.887 31.1107 98.1225 39.2399 97.0883 41.1141C96.0009 43.0774 91.3631 39.6537 87.1998 40.2135C83.6762 39.605 80.8883 39.1345 77.9404 38.6801C67.3215 37.0413 68.7449 37.3415 64.6455 37.6498C64.2244 36.8791 62.4013 38.4205 61.3885 37.0575C60.9673 36.4896 57.8009 36.0596 57.0812 36.514C56.7987 36.6681 48.5414 35.7189 48.2375 35.6945C47.0115 35.5891 39.6764 34.8832 38.5783 35.7676C35.4065 34.3234 24.0467 35.5891 20.8003 35.9055V35.8974Z"
                              fill="#2BFF67"
                            />
                          </svg>
                          10,953
                          <br />
                        </span>
                        <span className="font-mono text-xs font-bold text-neutral-800">
                          Nombres identificados por Data Cívica{" "}
                        </span>
                        <span className="font-mono text-xs font-normal text-neutral-800">
                          correspondientes a esas personas presuntas localizadas
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="font-Roboto_Serif absolute left-[7.59px] top-[10.29px] h-[15.43px] w-[251.56px] text-[15px] font-extralight text-black">
                    Enero 2024
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex h-[500px] w-[100%] items-center justify-center">
            <div className="w-[300px] text-center sm:w-96">
              <span className="font-Roboto_Serif text-lg font-bold tracking-widest text-neutral-800">
                ¿Qué hicimos en Data Cívica?
                <br />
              </span>
              <span className="font-Roboto_Serif text-[15px] font-normal text-black">
                <br />
                Revisamos cuáles de los nombres de la lista de agosto no
                aparecen en las listas de diciembre-enero: esos nombres deberían
                corresponder a los de personas que fueron localizadas durante la
                Estrategia Nacional de Búsqueda Generalizada;
                <br />
                <br />
              </span>
              <span className="font-Roboto_Serif relative text-lg font-bold tracking-widest text-black">
                De lo contrario, la persona desaparecida ha sido nuevamente{" "}
                <br />
                <span className="blur-[1.5px]">desaparecida.</span>
              </span>
            </div>
          </div>
        </div>
        <div className="relative flex h-screen w-screen flex-col items-center justify-center gap-4 bg-[#212221]">
          <div className=" inline-flex h-[195.88px] w-[107.98px] flex-col items-center justify-center mix-blend-luminosity blur-[1px]">
            <Image
              alt="personadis"
              height={195.88}
              width={107.98}
              src="/images/personadis.png"
            />
          </div>
          <Link
            href={"/"}
            className="inline-flex h-[36.83px] w-[248.47px] items-center justify-start gap-2.5 rounded-[10px] border border-neutral-800 bg-[#FBFEF2] p-2.5"
          >
            <div className="text-center font-mono text-[15px] font-medium uppercase tracking-wide text-black">
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
    </>
  );
}
