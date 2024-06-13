import { robotoSerif, robotoMono, robotoCondensed } from "../utils/fonts";
import Link from "next/link";
import clsx from "clsx";
import { GoArrowRight } from "react-icons/go";
import { MdOutlineCalendarToday } from "react-icons/md";
import { GoFileCode } from "react-icons/go";
import { LuCalendar, LuBook, LuBookMarked, LuDownload } from "react-icons/lu";
import { MdOutlineFolderZip } from "react-icons/md";

import { openDataAtom } from "../utils/store";
import { useAtom } from "jotai";
import WrapperFedLeft from "../components/Anim/WeapperFedLeft";
import { Fragment } from "react";

export default function OpenData() {
  const [openData] = useAtom(openDataAtom);

  return (
    <WrapperFedLeft>
      <div className="flex flex-col items-center justify-center bg-vad-lightyellow p-5 lg:px-24 lg:pb-0 lg:pt-10">
        <div className="mb-20 mt-20 flex w-11/12 flex-col items-center justify-center md:w-10/12 lg:w-10/12">
          <p
            className={clsx(
              "w-12/12 mb-5 mt-14 text-center text-2xl font-bold !leading-tight tracking-wider text-vad-yellow md:w-11/12 lg:w-10/12 lg:text-3xl xl:w-8/12 xl:text-4xl",
              robotoSerif.className
            )}
          >
            Descarga las bases de datos abiertos
          </p>
          <div className="mt-10 flex w-6/12 items-center justify-center md:w-5/12 lg:w-4/12 xl:w-3/12">
            <img
              src={"/assets/images/d87cb777ea88218924527ea3674b319d.png"}
              alt=""
            />
          </div>
          <p
            className={clsx(
              "my-5 text-center text-base font-light !leading-normal tracking-normal text-vad-gray lg:text-lg xl:text-xl",
              robotoSerif.className
            )}
          >
            Consulta el repositorio de las distintas bases de datos abiertos
            para fortalecer los análisis, intercambio y acceso a los registros
            de personas desaparecidas.
          </p>
          <div className="mt-10 w-full lg:mt-12 xl:mt-14">
            <div className="grid w-full grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
              <p
                className={clsx(
                  "my-5 flex flex-row items-center justify-start text-left text-sm font-light !leading-normal tracking-normal text-vad-gray lg:text-base xl:text-lg",
                  robotoMono.className
                )}
              >
                <LuCalendar className="text-2xl text-vad-lightgray" />
                <span className="ml-3 font-semibold">PUBLICACIÓN OFICIAL</span>
              </p>
              <p
                className={clsx(
                  "my-5 flex flex-row items-center justify-start text-left text-sm font-light !leading-normal tracking-normal text-vad-gray lg:text-base xl:text-lg",
                  robotoMono.className
                )}
              >
                <LuBook className="text-lg text-vad-lightgray" />
                <span className="ml-3 font-semibold">NOMBRE</span>
              </p>
              <p
                className={clsx(
                  "my-5 flex flex-row items-center justify-start text-left text-sm font-light !leading-normal tracking-normal text-vad-gray lg:text-base xl:text-lg",
                  robotoMono.className
                )}
              >
                <LuBookMarked className="text-lg text-vad-lightgray" />
                <span className="ml-3 font-semibold">DESCRIPCIÓN</span>
              </p>
              <p
                className={clsx(
                  "my-5 flex flex-row items-center justify-start text-left text-sm font-light !leading-normal tracking-normal text-vad-gray lg:text-base xl:text-lg",
                  robotoMono.className
                )}
              >
                <LuDownload className="text-lg text-vad-lightgray" />
                <span className="ml-3 font-semibold">DESCARGA</span>
              </p>
            </div>
            <hr className="w-12/12 mt-4 border-vad-gray"></hr>

            {openData.map((d, i) => (
              <Fragment key={i}>
                <div className="grid w-full grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
                  <p
                    className={clsx(
                      "my-5 flex flex-row items-center justify-start text-left text-sm font-light !leading-normal tracking-normal text-vad-gray lg:text-base xl:text-lg",
                      robotoMono.className
                    )}
                  >
                    {d.fecha_pub}
                  </p>
                  <p
                    className={clsx(
                      "my-5 flex flex-row items-start justify-start text-left text-sm font-light !leading-normal tracking-normal text-vad-gray lg:text-base xl:text-lg",
                      robotoMono.className
                    )}
                  >
                    {d.nombre}
                  </p>
                  <p
                    className={clsx(
                      "my-5 flex flex-row items-start justify-start text-left text-sm font-light !leading-normal tracking-normal text-vad-gray lg:text-base xl:text-lg",
                      robotoMono.className
                    )}
                  >
                    {d["descripción"]}
                  </p>
                  <p
                    className={clsx(
                      "my-5 flex flex-row items-center justify-start text-center text-sm font-light !leading-normal tracking-normal text-vad-gray lg:text-base xl:text-lg",
                      robotoMono.className
                    )}
                  >
                    {/* <a
                    href=""
                    target="_blank"
                    className="flex flex-row justify-center items-center"
                  >
                    <MdOutlineFolderZip className="text-vad-lightgray text-base" />
                    <span className="ml-1 underline">.ZIP</span>
                  </a> */}
                    <a
                      href={d.base}
                      target="_blank"
                      className="ml-3 flex flex-row items-center justify-center"
                    >
                      <GoFileCode className="text-base text-vad-lightgray" />
                      <span className="ml-1 underline">.csv</span>
                    </a>
                  </p>
                </div>
                <hr className="w-12/12 mt-4 border-vad-gray"></hr>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </WrapperFedLeft>
  );
}
