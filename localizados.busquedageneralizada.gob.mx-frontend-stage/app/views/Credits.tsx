// @ts-nocheck
import { robotoSerif, robotoMono } from "../utils/fonts";
import clsx from "clsx";
import { Tooltip } from "react-tooltip";

export default function Credits() {
  return (
    <div className="flex flex-col items-center justify-center bg-vad-black p-5 lg:px-24 lg:pb-0 lg:pt-10">
      <p
        className={clsx(
          "my-2 text-center text-sm font-normal !leading-normal tracking-normal text-vad-lightyellow lg:text-base xl:text-lg",
          robotoMono.className
        )}
      >
        CRÉDITOS:
      </p>
      <p
        className={clsx(
          "my-2 text-center text-sm font-extralight !leading-normal tracking-normal text-vad-lightyellow lg:text-base xl:text-lg",
          robotoMono.className
        )}
      >
        ESTE SITIO FUE DESARROLLADO POR DATA CÍVICA.
      </p>
      <p
        className={clsx(
          "my-2 text-center text-sm font-extralight !leading-normal tracking-normal text-vad-lightyellow lg:text-base xl:text-lg",
          robotoMono.className
        )}
      >
        COORDINACIÓN DEL PROYECTO:{" "}
        <span className={clsx("italic", robotoSerif.className)}>
          Mónica Meltis · Alicia Franco · Jorge Andrade · Diana Cruz · Verónica
          Patraca · Itxaro Arteta
        </span>
      </p>
      <p
        className={clsx(
          "my-2 text-center text-sm font-extralight !leading-normal tracking-normal text-vad-lightyellow lg:text-base xl:text-lg",
          robotoMono.className
        )}
      >
        ANÁLISIS DE DATOS Y METODOLOGÍA:{" "}
        <span className={clsx("italic", robotoSerif.className)}>
          Alicia Franco
        </span>
      </p>
      <p
        className={clsx(
          "my-2 text-center text-sm font-extralight !leading-normal tracking-normal text-vad-lightyellow lg:text-base xl:text-lg",
          robotoMono.className
        )}
      >
        DISEÑO DEL SITIO:{" "}
        <span className={clsx("italic", robotoSerif.className)}>
          Diana Cruz
        </span>
      </p>
      <p
        className={clsx(
          "my-2 text-center text-sm font-extralight !leading-normal tracking-normal text-vad-lightyellow lg:text-base xl:text-lg",
          robotoMono.className
        )}
      >
        DESARROLLO DEL SITIO:{" "}
        <span className={clsx("italic", robotoSerif.className)}>
          Basem Hamza · Jorge Andrade · Mildory Chong · Helena Ortiz · Estefanía
          Jiménez
        </span>
      </p>
      <p
        className={clsx(
          "my-2 text-center text-sm font-extralight !leading-normal tracking-normal text-vad-lightyellow lg:text-base xl:text-lg",
          robotoMono.className
        )}
      >
        ESTRATEGIA DE COMUNICACIÓN Y DIFUSIÓN:{" "}
        <span className={clsx("italic", robotoSerif.className)}>
          Nora Hinojo · Itxaro Arteta
        </span>
      </p>
      <p
        className={clsx(
          "my-2 text-center text-sm font-extralight !leading-normal tracking-normal text-vad-lightyellow lg:text-base xl:text-lg",
          robotoMono.className
        )}
      >
        COORDINACIÓN DE LA ESTRATEGIA DE INCIDENCIA:{" "}
        <span className={clsx("italic", robotoSerif.className)}>
          Verónica Patraca
        </span>
      </p>
      <p
        className={clsx(
          "my-2 text-center text-sm font-extralight !leading-normal tracking-normal text-vad-lightyellow lg:text-base xl:text-lg",
          robotoMono.className
        )}
      >
        ILUSTRACIONES Y DISEÑO DE MATERIAL VISUAL PARA LA DIFUSIÓN:{" "}
        <span className={clsx("italic", robotoSerif.className)}>
          Brenda Muñoz
        </span>
      </p>
      <hr className="mt-14 w-10/12 border-vad-lightyellow"></hr>
    </div>
  );
}
