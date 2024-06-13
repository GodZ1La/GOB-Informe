import Image from "next/image";
import React from "react";
import WrapperOutDown from "../Anim/WrapperOutDown";
import WrapperOutUp from "../Anim/WrapperOutUp";

export default function CardPersonOne() {
  return (
    <>
      <div>
        <WrapperOutDown>
          <div className="flex h-[325px] w-[350px] flex-col border border-neutral-800 bg-[#94C0D4] px-5 py-[5px] lg:scale-90 xl:scale-100">
            <div className="">
              <span className="font-Roboto_Serif text-lg font-semibold italic text-neutral-800">
                Alicia de los Ríos Merino{" "}
              </span>
              <span className="font-Roboto_Serif text-lg font-normal leading-snug text-neutral-700">
                En esta lista
              </span>
              <div
                className="tooltip hover:before:bg-[#94C0D4]"
                data-tip="Registro Nacional de Personas Desaparecidas y No Localizadas"
              >
                <span className="font-mono text-base font-light uppercase  text-neutral-800">
                  {" "}
                  [del RNPDNO de agosto]{" "}
                </span>
              </div>
              <span className="font-Roboto_Serif text-lg font-normal leading-snug text-neutral-700">
                su nombre aparece dos veces: aunque está especificado que solo
                tiene un folio como persona,
              </span>
              <span className="font-Roboto_Serif text-lg font-semibold text-neutral-700 underline">
                hay dos reportes ingresados por dos autoridades distintas
              </span>
              <span className="font-Roboto_Serif text-lg font-normal leading-snug text-neutral-700">
                .
              </span>
            </div>
            <div
              className="absolute bottom-3 left-4 inline-flex h-[30px] w-[84px] cursor-pointer items-center justify-end gap-[3px]"
              onClick={() =>
                (
                  document.getElementById("my_modal_2") as HTMLDialogElement
                ).showModal()
              }
            >
              <div className="relative h-[30px] w-[30px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <mask
                    id="mask0_912_6927"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="30"
                    height="30"
                  >
                    <rect width="30" height="30" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_912_6927)">
                    <path
                      d="M14.375 20.625H15.625V15.625H20.625V14.375H15.625V9.375H14.375V14.375H9.375V15.625H14.375V20.625ZM15.0042 26.25C13.4485 26.25 11.9859 25.9548 10.6164 25.3644C9.24685 24.774 8.05555 23.9727 7.04247 22.9606C6.02941 21.9485 5.2274 20.7583 4.63644 19.3901C4.04548 18.0218 3.75 16.5599 3.75 15.0042C3.75 13.4485 4.0452 11.9859 4.63559 10.6164C5.22601 9.24685 6.02728 8.05555 7.03941 7.04247C8.05153 6.02941 9.24171 5.2274 10.6099 4.63644C11.9782 4.04548 13.4401 3.75 14.9958 3.75C16.5515 3.75 18.0141 4.0452 19.3836 4.63559C20.7531 5.22601 21.9444 6.02728 22.9575 7.03941C23.9706 8.05153 24.7726 9.24171 25.3636 10.6099C25.9545 11.9782 26.25 13.4401 26.25 14.9958C26.25 16.5515 25.9548 18.0141 25.3644 19.3836C24.774 20.7531 23.9727 21.9444 22.9606 22.9575C21.9485 23.9706 20.7583 24.7726 19.3901 25.3636C18.0218 25.9545 16.5599 26.25 15.0042 26.25ZM15 25C17.7917 25 20.1562 24.0312 22.0938 22.0938C24.0312 20.1562 25 17.7917 25 15C25 12.2083 24.0312 9.84375 22.0938 7.90625C20.1562 5.96875 17.7917 5 15 5C12.2083 5 9.84375 5.96875 7.90625 7.90625C5.96875 9.84375 5 12.2083 5 15C5 17.7917 5.96875 20.1562 7.90625 22.0938C9.84375 24.0312 12.2083 25 15 25Z"
                      fill="#212221"
                    />
                  </g>
                </svg>
              </div>
              <div className="font-mono text-xs font-normal text-black">
                Ver más
              </div>
            </div>
            <div className="absolute bottom-0 right-2 inline-flex h-24 w-[75px] flex-col items-center justify-center">
              <Image
                width={97.07}
                height={90}
                alt=""
                src={"/images/playara.png"}
              />
            </div>
          </div>
        </WrapperOutDown>
      </div>
      <div>
        <WrapperOutUp once={false}>
          <div className="flex h-[325px] w-[350px] flex-col border border-neutral-800 bg-[#fed7aa] px-5 py-[5px] lg:scale-90 xl:scale-100">
            <div className="">
              <span className="font-Roboto_Serif text-lg font-semibold italic text-neutral-800">
                Wendy Sánchez Muñoz
              </span>
              <span className="font-Roboto_Serif text-lg font-normal leading-snug text-neutral-700">
                {" "}
                En esta lista
              </span>
              <div
                className="tooltip hover:before:bg-[#fed7aa]"
                data-tip="Registro Nacional de Personas Desaparecidas y No Localizadas"
              >
                <span className="font-mono text-base font-light uppercase text-neutral-800">
                  {" "}
                  [del RNPDNO de agosto]{" "}
                </span>
              </div>
              <span className="font-Roboto_Serif text-lg font-normal leading-snug text-neutral-700">
                , aparece con todos los datos posibles: nombre y apellidos,
                edad, sexo, nacionalidad, fecha de desaparición, entidad y
                autoridad que reportó, que en este caso fue la Fiscalía de
                Nayarit.
              </span>
            </div>
            <div className="absolute bottom-0 right-2 flex h-24 w-[75px]  flex-col items-center justify-center">
              <Image
                width={92}
                height={112}
                alt=""
                src={"/images/pantalon.png"}
              />
            </div>
          </div>
        </WrapperOutUp>
      </div>
      <div>
        <WrapperOutDown>
          <div className="flex h-[325px] w-[350px] flex-col border border-neutral-800 bg-[#95DCA0] px-5 py-[5px] lg:scale-90 xl:scale-100">
            <div className="">
              <span className="font-Roboto_Serif text-lg font-semibold italic text-neutral-800">
                Miguel Ángel Hernández Guzmán
              </span>
              <span className="font-Roboto_Serif text-lg font-normal leading-snug text-neutral-700">
                {" "}
                En esta lista
              </span>
              <div
                className="tooltip hover:before:bg-[#95DCA0]"
                data-tip="Registro Nacional de Personas Desaparecidas y No Localizadas"
              >
                <span className="font-mono text-base font-light uppercase text-neutral-800">
                  {" "}
                  [del RNPDNO de agosto]{" "}
                </span>
              </div>
              <span className="font-Roboto_Serif text-lg font-normal leading-snug text-neutral-700">
                , aparecen todos sus datos menos la edad, es decir, nombres y
                apellidos, nacionalidad, fecha, entidad de desaparición y que la
                autoridad que reportó fue la Comisión Nacional de Búsqueda de
                Personas.
              </span>
            </div>
            <div className="absolute bottom-0 right-2 flex h-24 w-[75px]  flex-col items-center justify-center">
              <Image
                width={92}
                height={112}
                alt=""
                src={"/images/calcetines.png"}
              />
            </div>
          </div>
        </WrapperOutDown>
      </div>
    </>
  );
}
