import Link from "next/link";
import React from "react";
import Dialog from "../common/Dialog";
import WrapperOutUp from "../Anim/WrapperOutUp";
import WrapperOutDown from "../Anim/WrapperOutDown";
import WrapperFidin from "../Anim/WrapperFedin";

export default function CardRegisterTwo() {
  return (
    <>
      <WrapperOutUp once={false}>
        <div className="flex h-[240px] w-[650px] items-start justify-start gap-2.5 border border-neutral-800 bg-[#94C0D4] px-5 py-2.5">
          <div className="w-[30%]">
            <span className="font-Roboto_Serif text-lg font-normal leading-snug text-neutral-800">
              La hija de
            </span>
            <span className="font-Roboto_Serif text-lg font-semibold text-neutral-800">
              {" "}
              Alicia de los Ríos,{" "}
            </span>
            <span className="font-Roboto_Serif text-lg font-normal leading-snug text-neutral-800">
              se da cuenta y lo
            </span>
            <span className="font-Roboto_Serif text-lg font-normal text-neutral-800 underline">
              {" "}
              <Link
                href={
                  "https://twitter.com/AliciadelosRos2/status/1749453161046347826"
                }
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                exhibe públicamente en
              </Link>{" "}
            </span>
            <span className="font-Roboto_Serif text-lg font-normal leading-snug text-neutral-800">
              X.
            </span>
          </div>
          <div className="w-[70%]">
            <span className="font-mono text-sm font-normal text-neutral-800 underline">
              <Link
                href={
                  "https://twitter.com/AliciadelosRos2/status/1749544326562996700"
                }
                rel="noopener noreferrer"
                target="_blank"
              >
                El 22 de enero, alrededor de 6 horas después de la denuncia de
                su hija
              </Link>
            </span>
            <span className="font-mono text-sm font-normal text-neutral-800">
              , el nombre de Alicia de los Ríos Merino fue incorporado a la
              página de Búsqueda Generalizada. El registro que aparece es el
              atribuido a la CNB como{" "}
            </span>
            <span className="font-mono text-sm font-bold text-neutral-800">
              autoridad reportante
            </span>
            <span className="font-mono text-sm font-normal text-neutral-800">
              , con{" "}
            </span>
            <span className="font-mono text-sm font-bold text-neutral-800">
              nombre, sexo, fecha y entidad de desaparición, sin edad y que en
              nacionalidad dice &quot;se desconoce&quot;
            </span>
            <span className="font-mono text-sm font-normal text-neutral-800">
              . Ahora en &quot;
            </span>
            <span className="font-mono text-sm font-bold text-neutral-800">
              categoría
            </span>
            <span className="font-mono text-sm font-normal text-neutral-800">
              &quot; se muestra como{" "}
            </span>
            <span className="font-mono text-sm font-bold text-neutral-800">
              &quot;Denuncia confirmada&quot;
            </span>
            <span className="font-mono text-sm font-normal text-neutral-800">
              .
            </span>
          </div>
        </div>
      </WrapperOutUp>

      <Dialog id="my_modal_4">
        <div className="w-[593px] text-center">
          <span className="font-mono text-base font-normal text-yellow-500">
            &quot;Se busca reportante&quot;
          </span>
          <span className="font-mono text-base font-normal text-stone-50">
            {" "}
            es la leyenda que aparece en el listado, aunque en la definición de
            las categorías que da la propia página corresponde a{" "}
          </span>
          <span className="font-mono text-base font-normal text-yellow-500">
            &quot;Con identidad confirmada, sin datos adicionales&quot;
          </span>
          <span className="font-mono text-base font-normal text-stone-50">
            {" "}
            y la explican como &quot;En esta categoría se encuentran personas no
            localizadas que cuentan con una identidad confirmada, aparecen en
            registros administrativos y/o que sí se cuenta con datos de la
            persona reportante o denunciante; sin embargo, los datos de contacto
            obtenidos no han resultado útiles para el proceso de localización. O
            bien, no han servido para tener comunicación con reportantes y con
            ello realizar un seguimiento adecuado del caso y nuevas acciones de
            búsqueda.&quot;
            <br />
          </span>
        </div>
      </Dialog>

      <WrapperFidin>
        <div className="flex h-[240px] w-[550px] flex-col items-start justify-start gap-2.5 border border-neutral-800 bg-[#F1D8B3] p-2.5 ">
          <div>
            <span className="font-Roboto_Serif text-lg font-semibold text-neutral-800">
              Wendy Sánchez Muñoz
            </span>
            <span className="font-Roboto_Serif text-lg font-semibold text-neutral-700">
              {" "}
            </span>
            <span className="font-Roboto_Serif text-lg font-normal leading-snug text-neutral-700">
              En la actualización de &quot;Búsqueda Generalizada&quot;, la{" "}
            </span>
            <span className="font-mono text-base font-light uppercase text-neutral-700">
              categoría
            </span>
            <span className="font-Roboto_Serif text-lg font-normal leading-snug text-neutral-700">
              {" "}
              del registro de Wendy es
            </span>
            <span className="font-mono text-base font-normal text-neutral-700">
              {" "}
              &quot;
            </span>
            <span className="font-mono text-base font-light uppercase text-neutral-700 underline">
              Se busca reportante
            </span>
            <span className="font-mono text-base font-normal text-neutral-700">
              &quot;
            </span>
            <span className="font-Roboto_Serif text-lg font-normal leading-snug text-neutral-700">
              . Eso a pesar de que su familia presentó una denuncia en su
              momento en la Fiscalía de Nayarit y de que su hermano Baruc ha
              sido desde el principio sumamente activo en la búsqueda de Wendy
              difundiendo su foto e información en redes sociales.
            </span>
          </div>
          <div
            className=" inline-flex h-[30px] w-[84px] cursor-pointer items-center justify-end gap-[3px]"
            onClick={() =>
              (
                document.getElementById("my_modal_4") as HTMLDialogElement
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
        </div>
      </WrapperFidin>

      <WrapperOutDown>
        <div className="flex h-[240px] w-[550px] flex-col items-start justify-start gap-2.5  border border-neutral-800 bg-[#95DCA0] p-2.5">
          <span className="font-Roboto_Serif text-lg font-semibold text-neutral-800">
            Miguel Ángel Hernández Guzmán
          </span>
          <span className="font-Roboto_Serif text-lg font-semibold text-neutral-700">
            {" "}
          </span>
          <span className="font-Roboto_Serif text-lg font-normal leading-snug text-neutral-700">
            Su madre, la buscadora Lorena Guzmán, que sigue recorriendo fosas
            clandestinas de Orizaba para encontrarlo y el medio Quinto Elemento
            Lab localizaron su ficha de búsqueda aún activa en el programa{" "}
          </span>
          <span className="font-mono text-base font-light uppercase text-neutral-700">
            &quot;¿Has visto a...?&quot;{" "}
          </span>
          <span className="font-Roboto_Serif text-lg font-normal leading-snug text-neutral-700">
            de la Fiscalía General de la República (FGR).
          </span>
        </div>
      </WrapperOutDown>
    </>
  );
}
