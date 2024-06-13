import React from "react";
import WrapperOutDown from "../Anim/WrapperOutDown";
import WrapperOutUp from "../Anim/WrapperOutUp";
import Link from "next/link";

export default function CardRegisterOne() {
  return (
    <>
      <div className=" inline-flex items-center justify-start gap-2.5">
        <WrapperOutUp once={false}>
          <div className=" h-[109px] w-[740px] border border-neutral-800 bg-[#94C0D4] p-5">
            <span className="font-Roboto_Serif text-lg font-normal leading-snug text-neutral-800">
              En{" "}
            </span>
            <span className="font-mono text-lg font-medium uppercase tracking-wide text-neutral-800 underline">
              <Link
                href={"https://busquedageneralizada.gob.mx/"}
                rel="noopener noreferrer"
              >
                Búsqueda Generalizada
              </Link>
            </span>
            <span className="font-Roboto_Serif text-lg font-normal leading-snug text-neutral-800">
              , ya no se encuentra ningún registro a nombre de Alicia de los
              Ríos, ni siquiera como registro &quot;
            </span>
            <span className="font-mono text-base font-normal text-neutral-800">
              confidencializado
            </span>
            <span className=" font-Roboto_Serif text-lg font-normal leading-snug text-neutral-800">
              &quot; o con datos eliminados de la versión pública.
            </span>
          </div>
        </WrapperOutUp>
      </div>

      <div className=" inline-flex items-center justify-start gap-2.5">
        <WrapperOutDown>
          <div className="h-[133px]  w-[740px] border border-neutral-800 bg-[#95DCA0] p-5">
            <span className="font-Roboto_Serif text-lg font-normal leading-snug text-neutral-800">
              En{" "}
            </span>
            <span className="font-mono text-lg font-medium uppercase tracking-wide text-neutral-800 underline">
              <Link
                href={"https://busquedageneralizada.gob.mx/"}
                rel="noopener noreferrer"
              >
                Búsqueda Generalizada
              </Link>
            </span>
            <span className="font-Roboto_Serif text-lg font-normal leading-snug text-neutral-800">
              , no aparece su nombre dentro del listado de las más de 90 mil
              personas que permanecen desaparecidas. Pero en la lista de{" "}
            </span>
            <span className="font-mono text-lg font-medium uppercase tracking-wide text-neutral-800">
              &quot;localizados&quot;
            </span>
            <span className="font-Roboto_Serif text-lg font-normal leading-snug text-neutral-800">
              , donde sólo es posible consultar por Folio Único de Búsqueda
              (FUB), está el que corresponde a Miguel Ángel.
            </span>
          </div>
        </WrapperOutDown>
      </div>
    </>
  );
}
