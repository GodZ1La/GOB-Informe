// @ts-nocheck
import { robotoSerif, robotoMono } from "../utils/fonts";
import clsx from "clsx";
import { Tooltip } from "react-tooltip";

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center bg-vad-lightyellow p-5 lg:px-24 lg:pb-0 lg:pt-10">
      <div className="mb-20 mt-20 flex w-11/12 flex-col items-center justify-center md:w-10/12 lg:w-10/12">
        <p
          data-aos="zoom-in"
          className={clsx(
            "mb-10 mt-5 text-center text-base font-light !leading-normal tracking-normal text-vad-black lg:text-lg xl:text-xl",
            robotoSerif.className
          )}
        >
          El número de{" "}
          <span className="font-semibold italic">
            registros de personas desaparecidas y no localizadas
          </span>{" "}
          que reporta el gobierno{" "}
          {/* <span className="underline underline-2 underline-offset-4"> */}
          ha sufrido cambios en estos últimos meses
          {/* </span> */}:
        </p>
        <img
          data-aos="zoom-in"
          className="hidden lg:block"
          src="/assets/images/diagrama-desaparecides.png"
          alt="Frame_18"
        />
        <img
          data-aos="zoom-in"
          className="block lg:hidden"
          src="/assets/images/diagrama-desaparecides-mobile.png"
          alt="Frame_18"
        />
        <img
          data-aos="zoom-in"
          className="mt-5 w-4/12 md:w-4/12 lg:w-4/12 xl:w-3/12"
          src="/assets/images/dc-logo.png"
          alt="Frame_18"
        />
        <img
          data-aos="zoom-in"
          className="mt-10"
          src="/assets/images/down.svg"
          alt="Frame_18"
        />
      </div>

      <div>
        <p
          className={clsx(
            "mb-5 text-center text-base font-light !leading-normal tracking-normal text-vad-black lg:text-lg xl:text-xl",
            robotoSerif.className
          )}
        >
          En Data Cívica, revisamos cuáles de los nombres de la{" "}
          <span className="font-semibold italic">
            lista de agosto no aparecen en las listas de diciembre-enero
          </span>
          : esos nombres deberían corresponder a los de personas que fueron
          localizadas durante la{" "}
          <span className="font-semibold italic">
            Estrategia Nacional de Búsqueda Generalizada
          </span>
          ;
        </p>
        <p
          className={clsx(
            "my-10 flex flex-col text-center text-2xl font-bold !leading-tight tracking-wider text-vad-black md:my-12 lg:my-14 lg:text-3xl xl:my-16 xl:text-4xl",
            robotoSerif.className
          )}
        >
          De lo contrario, la persona desaparecida ha sido
          <span className="flex flex-col items-center">
            <span data-aos="zoom-in" className="blur-[2px]">
              nuevamente desaparecida.
            </span>
            <img
              data-aos="zoom-in"
              className="w-10/12 md:w-7/12 lg:w-7/12 xl:w-5/12"
              src="/assets/images/strikes.svg"
              alt="Frame_18"
            />
          </span>
        </p>
        <p
          className={clsx(
            "mb-5 text-center text-base font-light !leading-normal tracking-normal text-vad-black lg:text-lg xl:text-xl",
            robotoSerif.className
          )}
        >
          Descarga:
        </p>
        {/* <p
          className={clsx(
            "text-vad-black text-lg lg:text-lg xl:text-xl font-normal leading-6 text-center mb-5",
            robotoMono.className
          )}
        >
          <span className="font-semibold uppercase">VOLVER A DESAPARECER</span>{" "}
          es una iniciativa de Data Cívica para trazar el cambio entre los
          nombres listados en el Registro Nacional de Personas Desaparecidas
          (RNPDNO), hecho público en agosto de 2023 y la versión publicada en
          diciembre tras la Estrategia Nacional de Búsqueda Generalizada (
          <span className="font-semibold italic">el llamado “censo”</span>).
        </p>

        <p
          className={clsx(
            "text-vad-black text-lg lg:text-lg xl:text-xl font-semibold leading-6 text-center mb-5 uppercase tracking-wide",
            robotoMono.className
          )}
        >
          Por ahora se pone a disposición el listado de personas presuntamente
          “localizadas” durante dicha búsqueda, obtenido a partir de una
          identificación automatizada de los nombres que fueron borrados entre
          un registro y otro.
        </p>

        <p
          className={clsx(
            "text-vad-black text-lg lg:text-lg xl:text-xl font-normal leading-6 text-center mb-16",
            robotoMono.className
          )}
        >
          A partir del martes 19 de marzo se podrá consultar la totalidad de
          nombres, en qué estatus están y qué se puede hacer si se detecta que
          hay un error o que esa persona ha vuelto a desaparecer.
        </p>

        <p
          className={clsx(
            "text-vad-black text-base lg:text-lg xl:text-xl font-normal leading-6 text-center tracking-wide mb-5",
            robotoSerif.className
          )}
        >
          Presentación: 19 de marzo, 16.00 horas, en Casa Creatura (Popocatépetl
          18, col. Hipódromo, CDMX) o transmisión en directo por redes de Data
          Cívica.
        </p>

        <p
          className={clsx(
            "text-vad-black text-base lg:text-lg xl:text-xl font-normal leading-6 text-center tracking-wide mb-16",
            robotoSerif.className
          )}
        >
          Cupo limitado,{" "}
          <a
            className="underline"
            href="https://forms.gle/G4396HQvUrcDGCqs8"
            target="_blank"
          >
            favor de registrar su asistencia aquí
          </a>
          .
        </p>

        <p
          className={clsx(
            "text-vad-black text-3xl lg:text-4xl font-light leading-6 text-center mb-5 uppercase tracking-wider",
            robotoMono.className
          )}
        >
          Descarga:
        </p> */}
      </div>

      <div className="flex w-full flex-col items-center justify-center pb-10 pt-10">
        <a
          className={clsx(
            "mb-3 w-8/12 rounded-lg border border-vad-black bg-vad-black px-8 py-3 text-sm font-medium hover:bg-vad-gray md:w-6/12 lg:w-6/12 xl:w-4/12",
            robotoMono.className
          )}
          href="/assets/data/Volver_a_Desaparecer.zip"
          target="_blank"
        >
          <p className="text-center text-base uppercase text-white">
            bASE DE DATOS + Diccionario
          </p>
        </a>

        <a
          className={clsx(
            "w-8/12 rounded-lg border border-vad-black bg-white px-8 py-3 text-sm font-medium hover:bg-vad-lightergray md:w-6/12 lg:w-6/12 xl:w-4/12",
            robotoMono.className
          )}
          href="/assets/pdf/Metodologia_Personas_desaparecidas_borradas.pdf"
          target="_blank"
        >
          <p className="text-center text-base text-black"> METODOLOGÍA </p>
        </a>
      </div>

      <div className="mb-24 mt-16 flex flex-col items-center">
        <img data-aos="zoom-in" src="assets/haz_tuparte_1.png" alt="Frame 18" />
        <p
          className={clsx(
            "mb-5 mt-14 text-center text-base font-light !leading-normal tracking-normal text-vad-black lg:text-lg xl:text-xl",
            robotoSerif.className
          )}
        >
          En este nuevo buscador se puede consultar cómo ha pasado el registro
          de las personas desaparecidas de una base de datos a otra para
          asegurarnos de que{" "}
          <a className="my-anchor-element underline-2 cursor-default underline underline-offset-4">
            no desaparezcan dos veces*
          </a>
          .
          <Tooltip
            className="z-50"
            anchorSelect=".my-anchor-element"
            place="bottom"
          >
            <p
              className={clsx(
                "w-[400px] text-center text-xs font-light !leading-normal tracking-normal text-white lg:text-sm xl:text-base",
                robotoMono.className
              )}
            >
              *La cantidad de nombres es{" "}
              <span className="font-semibold italic text-vad-red">
                menor a las 16 mil
              </span>{" "}
              localizaciones que reportó el gobierno, porque desde el registro
              publicado en agosto hay miles de nombres{" "}
              <span className="font-semibold italic">
                no visibles o confidencializados
              </span>{" "}
              por alguna razón legal o petición de las familias de esas
              personas.
            </p>
          </Tooltip>
        </p>
      </div>
    </div>
  );
}
