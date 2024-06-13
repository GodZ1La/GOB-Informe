"use client";
import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import ResizeObserver from "resize-observer-polyfill";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import InfoGrafica from "../InfoGrafiaDesktop/cardsInfoGrafia/InfoGrafica";
import Image from "next/image";
import DrawingSVG from "../InfoGrafiaDesktop/common/DrawingSVG";
import PersonHistoria from "../InfoGrafiaDesktop/cardsInfoGrafia/PersonHistoria";
import Dialog from "../InfoGrafiaDesktop/common/Dialog";
import CardPersonOne from "../InfoGrafiaDesktop/cardsInfoGrafia/CardPersonOne";
import WrapperFedin from "./Anim/WrapperFedin";
import HistoriasElRegistro from "../InfoGrafiaDesktop/cardsInfoGrafia/HistoriasElRegistro";
import Hastaencuentro from "../InfoGrafiaDesktop/cardsInfoGrafia/Hastaencuentro";
import FinalInfo from "../InfoGrafiaDesktop/common/FinalInfo";
import WrapperOutDown from "./Anim/WrapperOutDown";
import WrapperOutUp from "./Anim/WrapperOutUp";
import CardRegisterOne from "../InfoGrafiaDesktop/cardsInfoGrafia/CardRegisterOne";
import CardRegisterTwo from "../InfoGrafiaDesktop/cardsInfoGrafia/CardRegisterTwo";
import TimeLine from "../InfoGrafiaDesktop/common/TimeLine";
import InfoGrafiaMobile from "../InfoGrafiaMobile/InfoGrafiaMobile2";
import useScreenSize from "@/app/hooks/useWindowsSize";

const InfoGrafiaDesktop = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);
  const mobile = useScreenSize();

  useLayoutEffect(() => {
    if (scrollRef.current !== null)
      scrollRef && setScrollRange(scrollRef.current.scrollWidth);
  }, [scrollRef]);

  const onResize = useCallback((entries: any) => {
    for (const entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries: any) => {
      return onResize(entries);
    });
    if (ghostRef.current !== null) resizeObserver.observe(ghostRef.current);
    return () => resizeObserver.disconnect();
  }, [onResize]);

  const { scrollYProgress } = useScroll();
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  );

  // const physics = { damping: 20, mass: 1.5, stiffness: 40 };
  // // const physics = { mass: 1.5 };
  // const spring = useSpring(transform);

  return (
    <>
      <div className={mobile.width <= 1023 ? "hidden" : ""}>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <div
          className={
            "fixed top-[0px] h-screen overflow-hidden will-change-transform"
          }
        >
          <motion.div
            ref={scrollRef}
            style={{ x: transform }}
            className=" relative flex h-screen w-max items-center"
          >
            <InfoGrafica />
            <DrawingSVG y={scrollYProgress} />
            <div className="relative flex flex-row items-center last:mr-11">
              <div className="relative flex h-screen lg:w-[9800px] xl:w-[9800px]">
                <PersonHistoria />
                <Dialog id="my_modal_2">
                  <div className="w-[671px] text-center">
                    <span className="font-mono text-base font-normal text-yellow-500">
                      Hay dos reportes ingresados por dos autoridades distintas:
                    </span>
                    <span className="font-mono text-base font-normal text-white"></span>
                    <span className="font-mono text-sm font-normal text-white">
                      En uno, la autoridad que reportó es la Fiscalía General de
                      la República (ante la cual presentó una denuncia su hija
                      en 2002), señala su nombre completo, edad de 70 años, sexo
                      mujer, nacionalidad mexicana, fecha de desaparición el 5
                      de enero de 1978, en la Ciudad de México.
                      <br />
                      <br />
                      En cambio el otro reporte, donde la autoridad responsable
                      fue la Comisión Nacional de Búsqueda (CNB), sólo se
                      reportó nombre completo, sexo, fecha y entidad de
                      desaparición; no se reporta edad y en nacionalidad dice
                    </span>
                    <span className="font-mono text-sm font-medium text-white">
                      {" "}
                      &ldquo;se desconoce&rdquo;.
                    </span>
                  </div>
                </Dialog>
                <div
                  className={`absolute left-[190rem] flex w-[1000px] items-center justify-start ${mobile.height >= 700 && "gap-2.5 lg:top-[8rem] lg:scale-[0.8] xl:top-[8rem] xl:scale-95"} ${mobile.height < 700 && "gap-1 lg:left-[185rem] lg:top-[3.5rem] lg:scale-[0.7] xl:top-[5.5rem] xl:scale-[0.7]"} ${mobile.height >= 950 && "left-[190rem] scale-95 gap-2.5 lg:top-[11rem] xl:top-[11rem]"}`}
                >
                  <CardPersonOne />
                </div>
                <div className="absolute left-[280rem] inline-flex h-[81px] w-[82px] items-center justify-center lg:top-36 xl:top-56">
                  <WrapperOutDown>
                    <Image
                      src={"/images/cartelito.png"}
                      alt="cartelito"
                      height={81}
                      width={82}
                    />
                  </WrapperOutDown>
                </div>
                <div className="absolute left-[312rem] inline-flex h-[143.69px] w-[217.68px] items-center justify-center lg:top-36 xl:top-56">
                  <WrapperOutUp once={false}>
                    <Image
                      className="rotate-12"
                      src={"/images/registro.png"}
                      alt=""
                      height={143.69}
                      width={217.68}
                    />
                  </WrapperOutUp>
                </div>
                <div className="absolute left-[400rem] inline-flex h-[157.83px] w-[156.90px] items-center justify-center lg:top-36 xl:top-56">
                  <WrapperOutDown>
                    <Image
                      src={"/images/postits.png"}
                      alt=""
                      height={157.83}
                      width={156.9}
                    />
                  </WrapperOutDown>
                </div>
                <div
                  className={`absolute left-[330rem] flex h-1/2 scale-90 flex-col justify-center gap-5 lg:top-[6rem]`}
                >
                  <CardRegisterOne />
                </div>
                <div
                  className={`absolute  flex w-[1800px] ${mobile.height >= 700 && "left-[450rem] scale-95 gap-2.5 lg:top-[8rem] xl:top-[8rem]"} ${mobile.height < 700 && "left-[442rem] scale-75 gap-2 lg:top-[6rem] xl:top-[6rem]"} ${mobile.height >= 950 && "left-[450rem] scale-95 gap-2.5 lg:top-[11rem] xl:top-[11rem]"}`}
                >
                  <CardRegisterTwo />
                </div>
                <div className="absolute left-[35rem] top-[5rem] inline-flex h-[33px] w-[98px] items-center justify-center gap-2.5 rounded-[10px] bg-neutral-800 px-2.5 py-[5px]">
                  <WrapperFedin>
                    <div className="font-Roboto_Serif text-[32px] font-bold tracking-widest text-stone-50">
                      2017
                    </div>
                  </WrapperFedin>
                </div>
                <div className="absolute left-[77rem] top-[5rem] inline-flex h-[33px] w-[98px] items-center justify-center gap-2.5 rounded-[10px] bg-neutral-800 px-2.5 py-[5px]">
                  <WrapperFedin>
                    <div className="font-Roboto_Serif text-[32px] font-bold tracking-widest text-stone-50">
                      2019
                    </div>
                  </WrapperFedin>
                </div>
                <div className="absolute left-[136rem] top-[5rem] inline-flex h-[33px] w-[98px] items-center justify-center gap-2.5 rounded-[10px] bg-neutral-800 px-2.5 py-[5px]">
                  <WrapperFedin>
                    <div className="font-Roboto_Serif text-[32px] font-bold tracking-widest text-stone-50">
                      2020
                    </div>
                  </WrapperFedin>
                </div>
                <div className="absolute left-[150rem] top-[5rem] inline-flex h-[33px] w-[98px] items-center justify-center gap-2.5 rounded-[10px] bg-neutral-800 px-2.5 py-[5px]">
                  <WrapperFedin>
                    <div className="font-Roboto_Serif text-[32px] font-bold tracking-widest text-stone-50">
                      2021
                    </div>
                  </WrapperFedin>
                </div>
                <div className="absolute left-[180rem] top-[5rem] inline-flex h-[33px] w-[98px] items-center justify-center gap-2.5 rounded-[10px] bg-neutral-800 px-2.5 py-[5px] xl:left-[190rem]">
                  <WrapperFedin>
                    <div className="font-Roboto_Serif text-[32px] font-bold tracking-widest text-stone-50">
                      2023
                    </div>
                  </WrapperFedin>
                </div>
                <div className="absolute left-[450rem] top-[5rem] inline-flex h-[33px] w-[98px] items-center justify-center gap-2.5 rounded-[10px] bg-neutral-800 px-2.5 py-[5px] xl:left-[450rem]">
                  <WrapperFedin>
                    <div className="font-Roboto_Serif text-[32px] font-bold tracking-widest text-stone-50">
                      2024
                    </div>
                  </WrapperFedin>
                </div>
                <div className="absolute left-[186.5rem] top-[5rem] h-[21px] w-[230px] font-Roboto_Serif text-lg text-neutral-800 xl:left-[198rem]">
                  24 de agosto
                </div>
                <div className=" absolute left-[330rem] top-[5rem] h-[21px] w-[230px] font-Roboto_Serif text-lg text-neutral-800">
                  14 de diciembre de 2023
                </div>
                <div className=" absolute left-[421rem] top-[5rem] h-[21px] w-[230px] font-Roboto_Serif text-lg text-neutral-800">
                  27 de diciembre de 2023
                </div>

                <Hastaencuentro />
              </div>
              {/* <div className="relative h-[750px] w-screen bg-slate-800" /> */}
            </div>

            <TimeLine />
            <HistoriasElRegistro />
            <FinalInfo />
          </motion.div>
        </div>
        <div ref={ghostRef} style={{ height: scrollRange }} />
      </div>
      {mobile.width <= 1023 && <InfoGrafiaMobile />}
    </>
  );
};

export default InfoGrafiaDesktop;
