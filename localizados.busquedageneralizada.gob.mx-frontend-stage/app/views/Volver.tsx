import React, { useState, useEffect } from "react";
import Image from "next/image";
import { robotoSerif } from "../utils/fonts";

export default function Volver() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <Image
          alt=""
          width={191}
          height={83}
          src={"/assets/images/Datos.png"}
        />
      </div>
      <div className={`text-center ${robotoSerif.className} w-2/5`}>
        <p>
          {" "}
          De acuerdo con datos oficiales reportados antes de diciembre del 2023,
          <span className=" font-bold italic">
            {" "}
            en el país existen más de 100 mil personas desaparecidas y no
            localizadas,
          </span>{" "}
          aunque colectivos de familiares sostienen que la cifra es mucho mayor.
        </p>
        <br></br>
        <p>
          Frente a esta crisis, la labor del Estado ha sido insuficiente, ha
          limitado la labor de identificación de las personas desaparecidas y la
          búsqueda de justicia y con la “Estrategia Nacional de Búsqueda
          Generalizada de Personas Desaparecidas” anunciada a fines del 2023 se
          ha dejado fueraa las familias abonando a la falta de transparencia y
          confusión sobre este proceso y el registro oficial actual.
        </p>
      </div>
    </div>
    // <div className="grid row justify-center ">
    //      <div className="inline-flex w-full">
    //         <Image alt="" width={191} height={83} src={"/assets/images/Datos.png"} className="inline-block" />
    //         </div>

    //     <div className={`text-center ${robotoserif.className} w-full`}>
    //         <p>
    //             jsldf
    //         </p>
    //     </div>
    /* <p> De acuerdo con datos oficiales reportados antes de diciembre del 2023,
                    <span className="bold"> en el país existen más de 100 mil personas desaparecidas
                        y no localizadas,</span> aunque colectivos de familiares sostienen que la cifra es mucho mayor.
                </p>
                <br></br>
                <p>
                    Frente a esta crisis, la labor del Estado ha sido insuficiente, ha limitado la labor de identificación
                    de las personas desaparecidas y la búsqueda de justicia y con la  “Estrategia Nacional de Búsqueda
                    Generalizada de Personas Desaparecidas” anunciada a fines del 2023 se ha dejado fueraa las familias
                    abonando a la falta de transparencia y confusión sobre este proceso y el registro oficial actual.
                </p>

            </div> */
  );
}
