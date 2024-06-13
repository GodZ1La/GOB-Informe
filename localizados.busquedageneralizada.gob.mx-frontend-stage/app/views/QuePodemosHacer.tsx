import { robotoSerif, robotoMono, robotoCondensed } from "../utils/fonts";
import Link from "next/link";
import clsx from "clsx";
import { GoArrowRight } from "react-icons/go";
import WrapperFedLeft from "../components/Anim/WeapperFedLeft";

export default function QuePodemosHacer() {
  return (
    <WrapperFedLeft>
      {" "}
      <div className="flex flex-col items-center justify-center bg-vad-lightyellow p-5 lg:px-24 lg:pb-0 lg:pt-10">
        <div className="mb-20 mt-20 flex w-11/12 flex-col items-center justify-center md:w-10/12 lg:w-10/12">
          <p
            className={clsx(
              "w-12/12 mb-5 mt-14 text-center text-2xl font-bold !leading-tight tracking-wider text-vad-yellow md:w-11/12 lg:w-10/12 lg:text-3xl xl:w-8/12 xl:text-4xl",
              robotoSerif.className
            )}
          >
            ¿QUÉ HAGO SI EL REGISTRO QUE BUSCO APARECE BORRADO O ES INCORRECTO?
          </p>

          <div className="mt-10 flex w-6/12 items-center justify-center mix-blend-luminosity md:w-5/12 lg:w-4/12 xl:w-3/12">
            <img src={"/assets/images/persona-no-localizada.png"} alt="" />
          </div>

          <div className="flex w-full flex-col items-center justify-center pb-10 pt-10">
            <p
              className={clsx(
                "my-5 text-center text-base font-light !leading-normal tracking-normal text-vad-gray lg:text-lg xl:text-xl",
                robotoSerif.className
              )}
            >
              Si la persona que buscas aparece “borrada” en las publicaciones de
              diciembre, es importante que hagas una segunda revisión. Para ello
              puedes utilizar el Folio Único de Búsqueda (FUB) de su caso y
              consultar si aparece entre los{" "}
              <a
                href="https://busquedageneralizada.gob.mx/consulta"
                target="_blank"
                className="underline decoration-vad-gray decoration-2 underline-offset-2"
              >
                folios de personas desaparecidas
              </a>{" "}
              o entre los{" "}
              <a
                href="https://busquedageneralizada.gob.mx/localizados"
                target="_blank"
                className="underline decoration-vad-gray decoration-2 underline-offset-2"
              >
                folios de personas localizadas
              </a>
              . Además te recomendamos pedir a la Comisión Nacional de Búsqueda
              que incluya a tu familiar en el registro.
            </p>

            <p
              className={clsx(
                "my-5 text-center text-base font-light !leading-normal tracking-normal text-vad-gray lg:text-lg xl:text-xl",
                robotoSerif.className
              )}
            >
              Si la persona que buscas aparece con datos incorrectos o faltantes
              o bien bajo la categoría{" "}
              <span className={clsx("uppercase", robotoMono.className)}>
                “se requiere información de identidad”
              </span>{" "}
              o{" "}
              <span className={clsx("uppercase", robotoMono.className)}>
                “con identidad sin datos adicionales”
              </span>{" "}
              te recomendamos pedir a la Comisión Nacional de Búsqueda que
              corrija o complete la información que sea necesaria.
            </p>
            <p
              className={clsx(
                "my-5 text-center text-base font-light !leading-normal tracking-normal text-vad-gray lg:text-lg xl:text-xl",
                robotoSerif.className
              )}
            >
              Si la persona que buscas aparece como{" "}
              <span className={clsx("uppercase", robotoMono.className)}>
                “ubicado”
              </span>{" "}
              o{" "}
              <span className={clsx("uppercase", robotoMono.className)}>
                “localizado”
              </span>
              , es necesario pedir a la Comisión Nacional de Búsqueda la
              información sobre el caso.
            </p>
            <p
              className={clsx(
                "my-5 mt-14 text-center text-base font-light !leading-normal tracking-normal text-vad-gray lg:text-lg xl:text-xl",
                robotoSerif.className
              )}
            >
              Para apoyarte con dicha solicitud, el{" "}
              <span className="font-semibold italic">Centro Prodh</span> pone a
              tu disposición formatos para la corrección de datos a la CNB así
              como orientación para exigir tus derechos{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfSEG1a_2d2SIe_MkZuluyd6xZmXoQjfExobQpZGpwsXdrYsQ/viewform"
                target="_blank"
                className="underline decoration-vad-gray decoration-2 underline-offset-2"
              >
                dando click aquí
              </a>
              .
            </p>
            <hr className="mt-14 w-10/12 border-vad-gray"></hr>
            <p
              className={clsx(
                "my-5 mt-10 text-center text-base font-light !leading-normal tracking-normal text-vad-gray lg:text-lg xl:text-xl",
                robotoSerif.className
              )}
            >
              Compártenos tu caso frente a las inconsistencias del registro de
              la persona que estás buscando para visibilizarlo y difundirlo
              llenando este formulario:
            </p>
            <a
              className={clsx(
                "mb-3 mt-3 flex w-8/12 flex-row items-center justify-between rounded-lg border border-vad-black bg-vad-black px-4 py-2 text-sm font-medium tracking-wider hover:bg-vad-gray md:w-6/12 lg:w-6/12 xl:w-4/12",
                robotoMono.className
              )}
              href="https://forms.gle/qaHpCJHQuEvviMJd9"
              target="_blank"
            >
              <p className="mb-0 text-center text-base uppercase text-vad-lightyellow">
                LLENA EL FORMULARIO
              </p>
              <GoArrowRight className="text-2xl text-vad-lightyellow" />
            </a>
          </div>
        </div>
      </div>
    </WrapperFedLeft>
  );
}
