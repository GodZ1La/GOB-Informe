import { robotoSerif, robotoMono } from "../utils/fonts";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full bg-cs-black p-5 md:p-10 lg:p-20 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center text-center font-robotomono p-4 w-full">
        <p
          className={clsx(
            "text-cs-light-yellow text-xs lg:text-base xl:text-lg font-normal leading-6 text-center tracking-wide mb-5",
            robotoMono.className
          )}
        >
          La información fue utilizada al ser pública para los fines aquí
          planteados (divulgación, memoria y rendición de cuentas).
        </p>

        <p
          className={clsx(
            "text-cs-light-yellow text-xs lg:text-base xl:text-lg font-normal leading-6 text-center tracking-wide mb-5",
            robotoMono.className
          )}
        >
          Todas las bases de datos aquí presentadas han sido publicadas por el
          Estado en algún momento. Hacemos accesible esta información al
          considerar que es de relevancia pública. Sin embargo, en caso de que
          no estés de acuerdo con que tu nombre aparezca aquí escríbenos a{" "}
          <a
            className="underline"
            href="mailto:info@datacivica.org"
            target="_blank"
          >
            info@datacivica.org
          </a>{" "}
          para que lo retiremos de este espacio digital.
        </p>
      </div>

      <hr className="w-10/12 border-vad-lightyellow"></hr>

      {/* <div className="relative mx-auto max-w-6xl p-1 md:p-10 md:pl-16 min-h-[130px] lg:min-h-[100px] flex flex-col md:flex-row md:justify-between items-center border-b-[1px] border-cs-light-yellow">
        <div className="flex flex-col items-center text-center text-cs-light-yellow font-robotomono w-full">
          <p className="font-bold italic">CRÉDITOS:</p>
          <p className="italic font-robotoserif">Lorem ipsum </p>
          <p className="italic font-robotoserif">Lorem ipsum </p>
          <p className="italic font-robotoserif">Lorem ipsum </p>
          <p className="italic font-robotoserif">Lorem ipsum </p>
          <p className="italic font-robotoserif">Lorem ipsum </p>
        </div>
      </div> */}

      <a className="mt-10 mb-12" href="https://datacivica.org" target="_blank">
        <img src={"/assets/images/Group-70-white.png"} alt="" />
      </a>
    </div>
  );
}
