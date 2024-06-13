import React from "react";
import WrapperFedin from "../Anim/WrapperFedin";
import Link from "next/link";
import Image from "next/image";
import useScreenSize from "@/app/hooks/useWindowsSize";
export default function TimeLine() {
  const screen = useScreenSize();
  return (
    <div className="flex">
      <div
        className={`timelineLeft absolute bottom-0 flex items-start gap-12 border-t-[1px] border-dashed border-neutral-700 bg-white pt-3 lg:left-[1240px] lg:h-52 lg:w-[8900px] xl:left-[1300px] xl:w-[9130px] ${screen.height >= 700 ? "xl:h-[35vh]" : "xl:h-[40vh]"}  2xl:left-[1520px] 2xl:h-[35vh]`}
      >
        <div className="relative lg:h-[190px] lg:w-[850px] xl:h-[231px] xl:w-[900.82px]">
          <WrapperFedin>
            <div className="absolute left-[272.42px]  lg:w-[550px] xl:w-[650px]">
              <span className="font-mono  text-base font-normal text-neutral-800">
                Desde 2017 la Ley General en Materia de Desaparición Forzada,
                Desaparición Cometida por Particulares y del Sistema Nacional de
                Búsqueda de Personas (LGMD) ordenaba crear un{" "}
              </span>
              <span className=" bg-black font-mono text-base font-light uppercase text-stone-50">
                Registro Nacional de Personas Desaparecidas y No Localizadas
                (RNPDNO)
              </span>
              <span className="font-mono text-base font-normal text-neutral-800">
                {" "}
                a cargo de la Comisión Nacional de Búsqueda (CNB). Esta lo
                integró con lo que había previamente, un Registro Nacional de
                Datos de Personas Extraviadas o Desaparecidas (RNPED) que tenía
                el Secretariado Ejecutivo del Sistema Nacional de Seguridad
                Pública.
              </span>
            </div>
          </WrapperFedin>
          <div className="absolute left-3 inline-flex h-[200px] items-center justify-center lg:w-[150px]  xl:w-[234px]">
            <Image alt="" width={234} height={200} src="/images/busqueda.png" />
          </div>
        </div>
        <WrapperFedin>
          <div className="relative lg:h-[190px] lg:w-[520px] xl:h-[241px] xl:w-[377.19px]">
            <div className="absolute left-[20px] top-0 z-10 lg:w-[500px] xl:w-[357.18px]">
              <span className="z-10 font-mono text-lg font-medium uppercase tracking-wide text-red-400">
                Ese registro nunca se hizo público, pero sí un buscador por
                nombres:
                <br />
              </span>
              {/* <div className=" top-[5rem] hidden h-[100px]" />
        <div className=" top-[12.2rem] " />
        <div className=" top-[20rem] hidden h-[112px]" /> */}

              <span className="font-mono text-base font-light uppercase text-neutral-800">
                Data Cívica
              </span>
              <span className="font-mono text-base font-normal text-neutral-800">
                {" "}
                creó una búsqueda masiva automatizada de nombres para lograr
                obtener una lista de{" "}
              </span>
              <span className="font-mono text-base font-normal text-neutral-800">
                33,125 casos
              </span>
              <span className="font-mono text-base font-normal text-neutral-800">
                , consultables en:
                <br />
              </span>
              <span className="block font-mono text-lg font-medium uppercase tracking-wide text-neutral-800 lg:h-1 xl:h-4" />

              <span className="relative font-mono text-sm font-medium text-neutral-800 underline">
                <Link
                  href={"https://personasdesaparecidas.mx/"}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  https://personasdesaparecidas.mx/
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="331"
                    height="64"
                    className=" absolute -left-5 -top-8 "
                    viewBox="0 0 331 64"
                    fill="none"
                  >
                    <path
                      d="M236.822 9C188.065 7.43678 140.413 8.59887 91.9334 15.3889C73.7782 17.9317 55.576 20.6523 37.8223 25.2222C27.3218 27.9251 16.6898 31.2863 7.54454 37.1111C4.01632 39.3583 -0.115903 44.4592 1.7112 48.2222C4.21534 53.3795 11.4034 54.6308 16.8779 56.3333C35.3973 62.0927 60.8022 62.3162 79.2668 62.6667C121.669 63.4714 164.227 61.5142 206.6 60.2222C242.28 59.1343 281.128 61.0426 316.267 53.1667C320.75 52.1618 325.91 51.3592 329.045 48C333.643 43.0713 322.725 35.1442 316.822 31.8889C291.02 17.6593 259.916 11.5512 231.322 6.33333C212.146 2.83407 194.833 2.43475 175.822 1"
                      stroke="#212221"
                      strokeLinecap="round"
                    />
                  </svg>
                </Link>
              </span>
            </div>
            <svg
              width="367"
              height="59"
              viewBox="0 0 367 59"
              fill="none"
              className="absolute z-0 mix-blend-darken lg:top-1 xl:top-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.7"
                d="M47.1265 58.1404C42.9119 55.7385 5.46587 56.2157 0.974013 54.1833C-0.107361 53.4597 0.807645 48.1785 2.24948 42.7126C5.9511 28.6398 7.18498 28.7168 10.138 29.9486C12.0789 30.7492 29.8661 32.3351 51.3272 31.5345C51.8402 32.1657 53.3652 30.0717 53.6425 30.8416C54.9179 33.4899 121.658 28.3935 123.045 28.3165C126.33 28.1317 123.779 29.4405 127.633 28.8092C135.841 27.485 153.85 27.793 160.047 26.4073C165.01 25.2987 166.078 25.2679 170.916 25.776C175.852 26.2995 201.929 24.3749 204.813 22.7582C205.534 22.3579 206.088 22.4502 206.102 22.9122C206.393 22.9275 224.513 22.6966 224.597 22.9891C224.763 23.4357 225.318 23.6358 225.83 23.2971C226.773 22.789 246.266 20.3409 246.64 21.6496C247.721 25.3757 245.683 41.4347 243.604 45.4533C241.413 49.672 228.492 45.5149 218.316 48.4249C163.291 50.8114 173.536 49.9184 160.338 52.4435C159.118 51.1348 154.765 54.6607 151.909 52.3973C150.73 51.4581 142.592 51.7045 140.818 52.7361C139.293 53.6137 97.5906 53.2134 93.3483 56.0464C86.4857 54.2603 60.6991 57.4013 47.1265 58.125V58.1404Z"
                fill="#FEEF38"
              />
              <path
                opacity="0.7"
                d="M166.627 37.5C162.412 35.0981 124.966 35.5754 120.474 33.543C119.393 32.8193 120.308 27.5382 121.75 22.0722C125.451 7.99944 126.685 8.07643 129.638 9.30819C131.579 10.1088 149.366 11.6947 170.827 10.8941C171.34 11.5253 172.865 9.43137 173.143 10.2012C174.418 12.8495 241.158 7.7531 242.545 7.67612C245.83 7.49135 243.279 8.80008 247.134 8.16881C255.341 6.84467 273.35 7.15261 279.547 5.76689C284.51 4.65831 285.578 4.62751 290.416 5.13561C295.352 5.6591 321.429 3.7345 324.313 2.11782C325.034 1.7175 325.589 1.80986 325.602 2.27177C325.894 2.28717 344.014 2.05622 344.097 2.34876C344.263 2.79527 344.818 2.99543 345.331 2.6567C346.273 2.1486 365.766 -0.299506 366.14 1.00923C367.221 4.7353 365.184 20.7943 363.104 24.8129C360.913 29.0317 347.992 24.8745 337.816 27.7845C282.791 30.1711 293.036 29.278 279.838 31.8031C278.618 30.4944 274.265 34.0203 271.409 31.7569C270.231 30.8177 262.093 31.0641 260.318 32.0957C258.793 32.9733 217.091 32.573 212.848 35.406C205.986 33.62 180.199 36.761 166.627 37.4846V37.5Z"
                fill="#FEEF38"
              />
            </svg>
          </div>
        </WrapperFedin>
        <WrapperFedin>
          <div className="inline-flex items-center justify-center lg:h-[140px] lg:w-[180px] xl:h-[200px] xl:w-[251.55px]">
            <Image
              width={251}
              height={200}
              alt=""
              src="/images/basededatos.png"
            />
          </div>
        </WrapperFedin>
        <WrapperFedin>
          <div className="relative flex h-full w-[530.85px] flex-col justify-start p-9">
            <div>
              <span className="font-mono text-base font-normal text-neutral-800">
                En 2019, el primer comisionado de la CNB hizo pública una base
                de datos sin nombres y presentó su renuncia:
                <br />
              </span>
              <svg
                width="218"
                height="38"
                viewBox="0 0 218 38"
                className=" absolute left-[234px] top-14 w-20 mix-blend-darken"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.7"
                  d="M41.1092 37.0643C37.3934 34.6624 4.37827 35.1397 0.417923 33.1073C-0.535493 32.3836 0.271242 27.1025 1.54246 21.6366C4.80608 7.56377 5.89396 7.64076 8.49752 8.87252C10.2088 9.67316 25.8912 11.259 44.8129 10.4584C45.2652 11.0897 46.6097 8.9957 46.8542 9.76555C47.9787 12.4138 106.822 7.31743 108.044 7.24045C110.941 7.05568 108.692 8.36441 112.09 7.73314C119.326 6.409 135.204 6.71694 140.668 5.33122C145.044 4.22264 145.985 4.19184 150.251 4.69994C154.602 5.22343 177.594 3.29883 180.137 1.68215C180.773 1.28183 181.261 1.37419 181.274 1.8361C181.53 1.8515 197.506 1.62055 197.58 1.91309C197.726 2.3596 198.215 2.55976 198.667 2.22103C199.499 1.71293 216.685 -0.735175 217.015 0.573566C217.968 4.29963 216.171 20.3586 214.338 24.3772C212.406 28.596 201.014 24.4388 192.042 27.3489C143.528 29.7354 152.561 28.8424 140.925 31.3675C139.849 30.0587 136.011 33.5846 133.493 31.3213C132.454 30.3821 125.279 30.6284 123.714 31.66C122.37 32.5376 85.602 32.1373 81.8617 34.9703C75.8111 33.1843 53.0758 36.3253 41.1092 37.0489V37.0643Z"
                  fill="#FEEF38"
                />
              </svg>
              <span className="font-mono text-lg font-medium uppercase tracking-wide text-red-400">
                esa base fue bajada.
              </span>
            </div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="97"
                height="8"
                viewBox="0 0 97 8"
                className="absolute left-[200px] top-[200px]"
                fill="none"
              >
                <path
                  d="M0.998047 3.7522C0.721904 3.7522 0.498047 3.97605 0.498047 4.2522C0.498047 4.52834 0.721904 4.7522 0.998047 4.7522V3.7522ZM96.5863 4.60575C96.7816 4.41049 96.7816 4.09391 96.5863 3.89864L93.4044 0.716663C93.2091 0.521401 92.8925 0.521401 92.6973 0.716663C92.502 0.911926 92.502 1.22851 92.6973 1.42377L95.5257 4.2522L92.6973 7.08062C92.502 7.27589 92.502 7.59247 92.6973 7.78773C92.8925 7.98299 93.2091 7.98299 93.4044 7.78773L96.5863 4.60575ZM0.998047 4.7522H96.2328V3.7522H0.998047V4.7522Z"
                  fill="#212221"
                />
              </svg>
            </div>
          </div>
        </WrapperFedin>
        <WrapperFedin>
          <div className="lg:w-[600px] xl:w-[450px]">
            <span className="font-mono text-base font-normal text-neutral-800">
              En 2020, la Comisión Nacional de Búsqueda hace una segunda
              publicación, al presentar la{" "}
            </span>
            <span className="font-mono text-base font-medium text-neutral-800 underline">
              <Link
                href={
                  "https://versionpublicarnpdno.segob.gob.mx/Dashboard/Index"
                }
                rel="noopener noreferrer"
                target="_blank"
              >
                &quot;Versión Pública del RNPDNO&quot;
              </Link>
            </span>
            <span className="font-mono text-base font-normal text-neutral-800">
              , que en realidad solo muestra gráficas y permite generar
              visualizaciones más específicas a partir de filtros.
              <br />
            </span>
            <span className="block h-2 font-mono text-base font-normal text-red-400" />

            <span className="font-mono text-lg font-medium uppercase tracking-wide text-red-400">
              No deja ver nombres ni descargar la base de datos como tal.
            </span>
          </div>
        </WrapperFedin>
        <div className="flex h-full w-[200px] items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="97"
            height="8"
            viewBox="0 0 97 8"
            fill="none"
          >
            <path
              d="M0.864746 3.7522C0.588604 3.7522 0.364746 3.97605 0.364746 4.2522C0.364746 4.52834 0.588604 4.7522 0.864746 4.7522V3.7522ZM96.453 4.60575C96.6483 4.41049 96.6483 4.09391 96.453 3.89864L93.2711 0.716663C93.0758 0.521401 92.7592 0.521401 92.5639 0.716663C92.3687 0.911926 92.3687 1.22851 92.5639 1.42377L95.3924 4.2522L92.5639 7.08062C92.3687 7.27589 92.3687 7.59247 92.5639 7.78773C92.7592 7.98299 93.0758 7.98299 93.2711 7.78773L96.453 4.60575ZM0.864746 4.7522H96.0995V3.7522H0.864746V4.7522Z"
              fill="#212221"
            />
          </svg>
        </div>
        <WrapperFedin>
          <div className="h-[153.71px] w-[950.23px] ">
            <span className=" relative font-mono text-lg font-medium uppercase tracking-wide text-neutral-800">
              Se publica un listado de 110,964 nombres y datos básicos de
              personas desaparecidas.
              <br />
              <svg
                width="479"
                height="38"
                viewBox="0 0 479 38"
                fill="none"
                className="absolute -top-1 mix-blend-darken"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.7"
                  d="M90.7247 37.0644C82.535 34.6625 9.77024 35.1398 1.0417 33.1074C-1.05961 32.3838 0.718417 27.1026 3.52017 21.6367C10.7131 7.56389 13.1108 7.64089 18.849 8.87264C22.6206 9.67328 57.1845 11.2592 98.8875 10.4585C99.8843 11.0898 102.848 8.99582 103.386 9.76567C105.865 12.4139 235.554 7.31755 238.248 7.24057C244.632 7.05581 239.676 8.36453 247.165 7.73326C263.113 6.40912 298.108 6.71706 310.15 5.33134C319.795 4.22276 321.869 4.19196 331.271 4.70006C340.862 5.22355 391.536 3.29895 397.139 1.68227C398.54 1.28195 399.618 1.37432 399.645 1.83623C400.211 1.85162 435.421 1.62067 435.583 1.91321C435.906 2.35973 436.983 2.55988 437.98 2.22115C439.812 1.71305 477.69 -0.735053 478.417 0.573688C480.518 4.29975 476.558 20.3588 472.517 24.3774C468.261 28.5961 443.153 24.439 423.379 27.349C316.454 29.7355 336.363 28.8425 310.716 31.3676C308.345 30.0588 299.886 33.5847 294.337 31.3214C292.047 30.3822 276.233 30.6285 272.785 31.6601C269.821 32.5378 188.786 32.1374 180.542 34.9705C167.207 33.1844 117.099 36.3254 90.7247 37.0491V37.0644Z"
                  fill="#FEEF38"
                />
              </svg>
            </span>
            <span className="font-mono text-base font-normal text-neutral-800">
              A la par que Karla Quintana anunció su renuncia como titular de la
              Comisión Nacional de Búsqueda,en la página de Versión Pública se
              cargó una{" "}
            </span>
            <span className="font-mono text-base font-medium text-neutral-800 underline">
              <Link
                href={
                  "https://versionpublicarnpdno.segob.gob.mx/Dashboard/Index"
                }
                rel="noopener noreferrer"
                target="_blank"
              >
                &quot;versión pública de la base de datos del RNPDNO&quot;
              </Link>
            </span>
            <span className="font-mono text-base font-normal text-neutral-800">
              .<br />
            </span>
            <span className="font-mono text-lg font-medium uppercase tracking-wide text-red-400">
              Esta lista puede bajarse en dos formatos:
              <br />
            </span>
            <span className="font-mono text-base font-normal text-neutral-800">
              Uno es una{" "}
            </span>
            <span className="font-mono text-base font-bold text-neutral-800">
              hoja de cálculo con 9 campos
            </span>
            <span className="font-mono text-base font-normal text-neutral-800">
              :{" "}
              <span className="bg-black text-white">
                Números de registro, nombre, edad, sexo, nacionalidad, fecha y
                lugar de desaparición y autoridad que registró y
              </span>{" "}
              contiene{" "}
            </span>
            <span className="font-mono text-lg font-medium uppercase tracking-wide text-neutral-800">
              110,946 filas.
            </span>
          </div>
        </WrapperFedin>
        <div className="flex h-full w-[200px] items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="97"
            height="8"
            viewBox="0 0 97 8"
            fill="none"
          >
            <path
              d="M0.864746 3.7522C0.588604 3.7522 0.364746 3.97605 0.364746 4.2522C0.364746 4.52834 0.588604 4.7522 0.864746 4.7522V3.7522ZM96.453 4.60575C96.6483 4.41049 96.6483 4.09391 96.453 3.89864L93.2711 0.716663C93.0758 0.521401 92.7592 0.521401 92.5639 0.716663C92.3687 0.911926 92.3687 1.22851 92.5639 1.42377L95.3924 4.2522L92.5639 7.08062C92.3687 7.27589 92.3687 7.59247 92.5639 7.78773C92.7592 7.98299 93.0758 7.98299 93.2711 7.78773L96.453 4.60575ZM0.864746 4.7522H96.0995V3.7522H0.864746V4.7522Z"
              fill="#212221"
            />
          </svg>
        </div>
        <WrapperFedin>
          <div className="w-[900px]">
            <span className="font-mono text-base font-normal text-neutral-800">
              El otro archivo es un{" "}
            </span>
            <span className="font-mono text-base font-bold text-neutral-800">
              .json, que no es tan fácil de consultar como el Excel
            </span>
            <span className="font-mono text-base font-normal text-neutral-800">
              ,<br />
            </span>
            <span className="relative font-mono text-lg font-medium uppercase tracking-wide text-red-400">
              pero que contiene muchos más campos para registrar datos, aunque
              en su mayoría están en blanco.
              <svg
                width="1124"
                height="66"
                viewBox="0 0 1124 66"
                className="absolute -top-2 z-0 w-[900px] mix-blend-darken"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.7"
                  d="M212.759 37.3582C193.538 34.9562 22.7673 35.4335 2.28232 33.4011C-2.64924 32.6775 1.52361 27.3963 8.09903 21.9304C24.9802 7.85759 30.6072 7.93459 44.0742 9.16634C52.9257 9.96698 134.044 11.5529 231.916 10.7522C234.256 11.3835 241.21 9.28952 242.475 10.0594C248.292 12.7076 552.658 7.61126 558.98 7.53427C573.965 7.34951 562.331 8.65824 579.908 8.02696C617.337 6.70282 699.467 7.01077 727.728 5.62504C750.363 4.51646 755.231 4.48566 777.297 4.99376C799.805 5.51726 918.731 3.59265 931.882 1.97597C935.17 1.57565 937.699 1.66802 937.762 2.12993C939.09 2.14532 1021.73 1.91437 1022.1 2.20692C1022.86 2.65343 1025.39 2.85358 1027.73 2.51485C1032.03 2.00675 1120.93 -0.441352 1122.63 0.867389C1127.56 4.59345 1118.27 20.6525 1108.79 24.6711C1098.8 28.8898 1039.87 24.7327 993.464 27.6427C742.523 30.0292 789.246 29.1362 729.056 31.6613C723.492 30.3525 703.639 33.8784 690.615 31.6151C685.241 30.6759 648.128 30.9222 640.035 31.9538C633.08 32.8315 442.899 32.4311 423.552 35.2642C392.255 33.4781 274.656 36.6191 212.759 37.3428V37.3582Z"
                  fill="#FEEF38"
                />
                <path
                  opacity="0.7"
                  d="M117.402 65.7937C106.801 63.3918 12.6115 63.8691 1.31291 61.8367C-1.40711 61.113 0.894436 55.8319 4.52113 50.3659C13.832 36.2931 16.9356 36.3701 24.3633 37.6019C29.2454 38.4025 73.9862 39.9884 127.968 39.1878C129.258 39.819 133.094 37.7251 133.792 38.4949C137 41.1432 304.874 36.0468 308.361 35.9698C316.626 35.7851 310.21 37.0938 319.904 36.4625C340.548 35.1384 385.847 35.4463 401.435 34.0606C413.919 32.952 416.604 32.9212 428.775 33.4293C441.189 33.9528 506.783 32.0282 514.037 30.4115C515.85 30.0112 517.245 30.1036 517.28 30.5655C518.012 30.5809 563.59 30.3499 563.799 30.6425C564.218 31.089 565.612 31.2891 566.903 30.9504C569.274 30.4423 618.304 27.9942 619.246 29.3029C621.966 33.029 616.84 49.088 611.609 53.1066C606.099 57.3254 573.598 53.1682 548.002 56.0782C409.595 58.4648 435.365 57.5717 402.167 60.0968C399.098 58.7881 388.149 62.314 380.965 60.0506C378.001 59.1114 357.531 59.3578 353.067 60.3894C349.231 61.267 244.336 60.8667 233.665 63.6997C216.404 61.9137 151.542 65.0547 117.402 65.7783V65.7937Z"
                  fill="#FEEF38"
                />
              </svg>
            </span>
            <span className="font-mono text-lg font-medium uppercase tracking-wide text-neutral-800">
              [Data Cívica lo pone accesible al público en esta plataforma]
              <br />
            </span>
            <span className="font-mono text-base font-normal text-neutral-800">
              También se creó la página{" "}
            </span>
            <span className="font-mono text-base font-normal text-neutral-800 underline">
              <Link
                href={
                  "https://consultapublicarnpdno.segob.gob.mx/Home/Terminos"
                }
                rel="noopener noreferrer"
                target="_blank"
              >
                consultapublicarnpdno.segob.gob.mx
              </Link>
            </span>
            <span className="font-mono text-base font-normal text-neutral-800">
              , donde el usuario puede buscar las fichas de búsqueda de personas
              desaparecidas por nombre, apellidos, lugar de desaparición,
              nacionalidad, condición de discapacidad, rango de fechas de los
              hechos o rango de edades.
            </span>
          </div>
        </WrapperFedin>
        <div className="flex justify-center lg:w-[100px] xl:w-[200px]">
          <Image
            src={"/images/limpiazaArchivos.png"}
            alt={""}
            width={155}
            height={200}
          />
        </div>
        <WrapperFedin>
          <div className="w-[689.61px]">
            <span className="relative font-mono text-base font-normal text-neutral-800">
              Se publica desde gobierno una nueva página de personas
              desaparecidas:
              <br />
            </span>
            <span className="relative font-mono text-lg font-medium uppercase tracking-wide text-neutral-800 underline">
              <Link
                href={"https://busquedageneralizada.gob.mx/"}
                rel="noopener noreferrer"
              >
                https://busquedageneralizada.gob.mx/
                <svg
                  width="703"
                  height="38"
                  viewBox="0 0 703 38"
                  fill="none"
                  className="absolute -left-1 -top-1 mix-blend-darken"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.7"
                    d="M132.965 37.0644C120.955 34.6625 14.2463 35.1398 1.44599 33.1074C-1.63556 32.3838 0.971898 27.1026 5.08063 21.6367C15.629 7.56389 19.1451 7.64089 27.5601 8.87264C33.0911 9.67328 83.7786 11.2592 144.935 10.4585C146.397 11.0898 150.743 8.99582 151.533 9.76567C155.168 12.4139 345.355 7.31755 349.305 7.24057C358.668 7.05581 351.399 8.36453 362.382 7.73326C385.77 6.40912 437.09 6.71706 454.749 5.33134C468.893 4.22276 471.935 4.19196 485.723 4.70006C499.787 5.22355 574.1 3.29895 582.318 1.68227C584.372 1.28195 585.952 1.37432 585.992 1.83623C586.821 1.85162 638.457 1.62067 638.694 1.91321C639.168 2.35973 640.748 2.55988 642.21 2.22115C644.897 1.71305 700.444 -0.735053 701.51 0.573688C704.592 4.29975 698.784 20.3588 692.858 24.3774C686.616 28.5961 649.796 24.439 620.797 27.349C463.994 29.7355 493.19 28.8425 455.579 31.3676C452.102 30.0588 439.697 33.5847 431.559 31.3214C428.201 30.3822 405.01 30.6285 399.953 31.6601C395.607 32.5378 276.77 32.1374 264.681 34.9705C245.125 33.1844 171.642 36.3254 132.965 37.0491V37.0644Z"
                    fill="#4AC2EF"
                  />
                </svg>
              </Link>
            </span>
            <span className="font-mono text-lg font-medium uppercase tracking-wide text-neutral-800">
              {" "}
              con 96,738 registros.
              <br />
            </span>
            <span className="bg-black font-mono text-base font-light uppercase text-stone-50">
              Incluyen Folio Único de Búsqueda (FUB)
            </span>

            <span className="font-mono text-base font-normal text-neutral-800">
              {" "}
              [este dato no lo habíamos tenido antes],
            </span>
            <span className="font-mono text-base font-light uppercase text-neutral-800">
              {" "}
            </span>
            <span className="bg-black font-mono text-base font-light uppercase text-stone-200">
              nombre, edad, sexo, nacionalidad, fecha + lugar de hechos y
              autoridad que reportó.
            </span>
            <span className="font-mono text-base font-normal text-neutral-800">
              <br />
              La Secretaría de Gobernación presentó ese día el resultado de la{" "}
              <br />
              llamada{" "}
            </span>
            <span className="relative font-mono text-base font-light uppercase text-neutral-800">
              &quot;Estrategia Nacional de Búsqueda Generalizada&quot;,
              <svg
                width="460"
                height="38"
                viewBox="0 0 460 38"
                fill="none"
                className="absolute -left-1 -top-2 mix-blend-darken"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.7"
                  d="M86.9392 37.0644C79.0894 34.6625 9.34525 35.1398 0.979051 33.1074C-1.03503 32.3838 0.669187 27.1026 3.35464 21.6367C10.249 7.56389 12.5471 7.64089 18.0471 8.87264C21.6622 9.67328 54.7913 11.2592 94.7631 10.4585C95.7185 11.0898 98.5589 8.99582 99.0753 9.76567C101.451 12.4139 225.756 7.31755 228.338 7.24057C234.458 7.05581 229.707 8.36453 236.885 7.73326C252.172 6.40912 285.714 6.71706 297.256 5.33134C306.5 4.22276 308.489 4.19196 317.5 4.70006C326.693 5.22355 375.263 3.29895 380.634 1.68227C381.977 1.28195 383.01 1.37432 383.036 1.83623C383.578 1.85162 417.327 1.62067 417.482 1.91321C417.792 2.35973 418.824 2.55988 419.78 2.22115C421.536 1.71305 457.841 -0.735053 458.538 0.573688C460.552 4.29975 456.756 20.3588 452.883 24.3774C448.803 28.5961 424.738 24.439 405.784 27.349C303.298 29.7355 322.381 28.8425 297.798 31.3676C295.526 30.0588 287.418 33.5847 282.099 31.3214C279.904 30.3822 264.747 30.6285 261.442 31.6601C258.601 32.5378 180.93 32.1374 173.028 34.9705C160.247 33.1844 112.219 36.3254 86.9392 37.0491V37.0644Z"
                  fill="#2BFF67"
                />
              </svg>
            </span>
            <span className="font-mono text-base font-normal text-neutral-800">
              {" "}
              que llevaba meses realizándose (a la que AMLO se había referido
              como un &quot;censo&quot;).
            </span>
          </div>
        </WrapperFedin>
        <WrapperFedin>
          <div className="w-[660px]">
            <span className="font-mono text-lg font-medium uppercase tracking-wide text-neutral-800">
              Los nombres en esta nueva página, según explicó, provienen del
              Registro de Personas Desaparecidas y No Localizadas (
            </span>
            <span className=" relative font-mono text-lg font-medium uppercase tracking-wide text-neutral-800">
              RNPDNO)
              <svg
                width="95"
                height="38"
                viewBox="0 0 95 38"
                fill="none"
                className="absolute -left-1 -top-2 mix-blend-darken"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.7"
                  d="M17.8815 37.0644C16.2739 34.6625 1.99082 35.1398 0.277483 33.1074C-0.134987 32.3838 0.214025 27.1026 0.763986 21.6367C2.17591 7.56389 2.64655 7.64089 3.77291 8.87264C4.51324 9.67328 11.2979 11.2592 19.4838 10.4585C19.6795 11.0898 20.2612 8.99582 20.3669 9.76567C20.8534 12.4139 46.3103 7.31755 46.8391 7.24057C48.0924 7.05581 47.1193 8.36453 48.5894 7.73326C51.72 6.40912 58.5892 6.71706 60.953 5.33134C62.8461 4.22276 63.2533 4.19196 65.0988 4.70006C66.9814 5.22355 76.9283 3.29895 78.0282 1.68227C78.3032 1.28195 78.5147 1.37432 78.52 1.83623C78.6311 1.85162 85.5426 1.62067 85.5743 1.91321C85.6378 2.35973 85.8493 2.55988 86.0449 2.22115C86.4045 1.71305 93.8396 -0.735053 93.9824 0.573688C94.3948 4.29975 93.6175 20.3588 92.8243 24.3774C91.9888 28.5961 87.0603 24.439 83.1788 27.349C62.1904 29.7355 66.0983 28.8425 61.064 31.3676C60.5987 30.0588 58.9382 33.5847 57.8489 31.3214C57.3994 30.3822 54.2953 30.6285 53.6184 31.6601C53.0367 32.5378 37.1301 32.1374 35.512 34.9705C32.8944 33.1844 23.0586 36.3254 17.8815 37.0491V37.0644Z"
                  fill="#FEEF38"
                />
              </svg>
            </span>
            <span className="font-mono text-lg font-medium uppercase tracking-wide text-neutral-800">
              {" "}
              menos los de quienes lograron{" "}
              <span className="relative">
                <svg
                  width="125"
                  height="30"
                  viewBox="0 0 125 30"
                  fill="none"
                  className="absolute -left-1 -top-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M92.8204 5.89897C75.6062 -0.360679 55.2323 0.570562 37.5295 1.72993C27.8179 2.36596 17.5398 3.67689 8.35848 8.22873C3.50863 10.6331 -3.77515 19.5932 4.61386 24.2918C16.8564 31.1487 34.3216 28.6099 47.1453 28.5835C69.5391 28.5374 94.6021 29.7975 116.444 22.146C122.218 20.1232 127.326 14.9527 121.575 7.9835C115.528 0.654687 105.291 2.19302 97.8132 1.4847"
                    stroke="#212221"
                    strokeLinecap="round"
                  />
                </svg>
                localizar
              </span>{" "}
              durante dicha estrategia, que reportaron eran{" "}
              <span className="relative">
                <svg
                  width="84"
                  height="29"
                  viewBox="0 0 84 29"
                  fill="none"
                  className="absolute -left-1 -top-2 mix-blend-darken"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.7"
                    d="M15.8949 29C14.4669 27.1108 1.77924 27.4862 0.257287 25.8877C-0.10911 25.3185 0.200918 21.1648 0.689447 16.8657C1.94365 5.7971 2.36172 5.85766 3.36227 6.82646C4.0199 7.45619 10.0467 8.70352 17.3182 8.0738C17.492 8.57031 18.0087 6.92335 18.1027 7.52885C18.5348 9.61178 41.1481 5.60335 41.6179 5.5428C42.7311 5.39748 41.8668 6.42683 43.1727 5.93031C45.9535 4.88885 52.0555 5.13105 54.1552 4.04114C55.8369 3.16922 56.1986 3.14499 57.838 3.54463C59.5102 3.95637 68.346 2.44262 69.3231 1.17106C69.5674 0.856202 69.7553 0.928851 69.76 1.29215C69.8586 1.30426 75.9981 1.12262 76.0263 1.35271C76.0826 1.7039 76.2705 1.86133 76.4443 1.59491C76.7638 1.19527 83.3683 -0.730219 83.4951 0.299137C83.8615 3.22977 83.171 15.8606 82.4664 19.0213C81.7242 22.3395 77.3462 19.0697 73.8984 21.3585C55.2544 23.2356 58.7258 22.5332 54.2538 24.5193C53.8405 23.4899 52.3655 26.2631 51.3978 24.4829C50.9985 23.7442 48.2412 23.938 47.6399 24.7494C47.1232 25.4396 32.9934 25.1248 31.556 27.353C29.2308 25.9483 20.4937 28.4187 15.8949 28.9879V29Z"
                    fill="#2BFF67"
                  />
                </svg>
                16,681
              </span>{" "}
              personas.
              <br />
            </span>
            <span className="font-mono text-base font-normal text-neutral-800">
              En la conferencia del{" "}
              <span className="relative">
                <svg
                  width="160"
                  height="25"
                  viewBox="0 0 160 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -left-1 -top-1 mix-blend-darken"
                >
                  <path
                    opacity="0.7"
                    d="M129.443 0.347046C132.455 2.21705 156.781 1.45705 158.933 2.23705C160.291 3.07705 156.754 16.107 155.302 17.967C154.777 18.637 154.24 18.707 153.056 18.307C151.496 17.707 136.462 17.417 126.189 17.567C125.866 17.147 124.844 18.497 124.669 17.987C123.916 16.297 82.6606 17.987 80.2401 18.077C78.1558 18.157 79.7694 17.3471 77.3086 17.6971C72.118 18.4471 60.6208 18.137 56.7211 19.057C53.6148 19.797 52.9425 19.777 49.8228 19.487C46.1517 19.147 30.1362 20.787 28.4553 21.897C28.025 22.177 27.6754 22.117 27.6216 21.827C27.6216 21.827 27.4333 21.827 27.1106 21.827C26.9089 21.827 15.9092 22.387 15.8554 22.247C15.7075 21.967 15.3309 21.8571 15.0485 22.0871C14.4838 22.3971 2.38138 24.687 1.99141 23.857C0.888749 21.497 0.418086 11.077 1.34594 8.42705C1.84348 7.02705 4.30431 6.85704 7.45093 6.77704C10.5976 6.69704 14.4165 6.74705 17.6169 5.64705C57.3262 2.40705 43.0992 4.60705 55.4571 2.17705C56.3042 3.01705 59.034 0.707047 60.9973 2.20705C61.8041 2.81705 67.1292 2.70704 68.2722 2.02704C68.7966 1.71704 82.4992 1.72705 83.185 1.72705C85.7803 1.71705 90.944 1.64704 93.5124 1.52704C96.4842 1.38704 98.703 1.12705 99.4022 0.707047C103.396 1.94705 117.892 0.937046 129.389 0.347046H129.443Z"
                    fill="#4AC2EF"
                  />
                </svg>
                14 de diciembre
              </span>{" "}
              se usaron términos que no están en la Ley de desaparición (como
              &quot;
            </span>
            <span className="font-mono text-base font-bold italic text-neutral-800">
              ubicados
            </span>
            <span className="font-mono text-base font-normal text-neutral-800">
              &quot;), ante la ola de críticas...
            </span>
          </div>
        </WrapperFedin>
        <div className="flex h-full w-10 items-center justify-center">
          <svg
            width="12"
            height="28"
            viewBox="0 0 12 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.0918 4.15782C3.97383 1.18282 14.9576 -0.815267 10.0216 5.76604C7.95201 8.52555 2.02534 14.5278 7.1861 17.1082"
              stroke="#212221"
              strokeLinecap="round"
            />
            <path
              d="M10.2333 26.2498C7.24252 26.2498 7.94221 27.8369 8.37118 27.4348C10.4736 25.4638 6.43953 25.939 5.6626 26.2498"
              stroke="#212221"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="flex h-1/2 w-[200px] items-center justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="97"
            height="8"
            viewBox="0 0 97 8"
            fill="none"
          >
            <path
              d="M0.864746 3.7522C0.588604 3.7522 0.364746 3.97605 0.364746 4.2522C0.364746 4.52834 0.588604 4.7522 0.864746 4.7522V3.7522ZM96.453 4.60575C96.6483 4.41049 96.6483 4.09391 96.453 3.89864L93.2711 0.716663C93.0758 0.521401 92.7592 0.521401 92.5639 0.716663C92.3687 0.911926 92.3687 1.22851 92.5639 1.42377L95.3924 4.2522L92.5639 7.08062C92.3687 7.27589 92.3687 7.59247 92.5639 7.78773C92.7592 7.98299 93.0758 7.98299 93.2711 7.78773L96.453 4.60575ZM0.864746 4.7522H96.0995V3.7522H0.864746V4.7522Z"
              fill="#212221"
            />
          </svg>
        </div>
        <WrapperFedin>
          <div className="w-[464px]">
            <span className="font-mono text-base font-normal text-neutral-800">
              A finales de diciembre, se actualiza la página
              <br />
            </span>
            <span className="relative font-mono text-base font-bold text-neutral-800 underline">
              <Link
                href={"https://busquedageneralizada.gob.mx/"}
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  width="363"
                  height="32"
                  viewBox="0 0 363 32"
                  fill="none"
                  className="absolute mix-blend-darken"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.7"
                    d="M68.4433 24.673C62.3598 22.556 7.44735 20.0029 0.942796 18.1397C-0.613864 17.5165 0.935979 13.6527 3.26541 9.69221C9.24736 -0.505609 11.0531 -0.352397 15.3334 0.794734C18.1471 1.54204 44.1594 4.10529 75.6517 5.17578C76.3788 5.68597 78.697 4.24425 79.0731 4.83938C80.8383 6.91163 178.877 8.29856 180.912 8.34889C185.736 8.46645 181.945 9.24341 187.62 9.07243C199.703 8.72337 226.091 10.3517 235.231 9.80058C242.55 9.36013 244.116 9.4201 251.189 10.1745C258.404 10.9479 296.708 11.5396 300.999 10.559C302.072 10.3167 302.881 10.4286 302.883 10.7739C303.309 10.808 329.881 12.0434 329.992 12.2678C330.218 12.6134 331.023 12.8056 331.788 12.5931C333.19 12.2877 361.862 11.9778 362.359 12.982C363.797 15.8422 360.175 27.6491 356.968 30.4818C353.59 33.4549 334.813 29.3539 319.781 30.7316C239.023 28.2356 254.077 28.366 234.63 29.2222C232.893 28.1524 226.372 30.4413 222.275 28.5331C220.584 27.7417 208.645 27.2932 206.003 27.9239C203.732 28.4594 142.615 24.9218 136.284 26.7031C126.295 24.8393 88.3692 25.1766 68.4439 24.6615L68.4433 24.673Z"
                    fill="#4AC2EF"
                  />
                </svg>
                https://busquedageneralizada.gob.mx/
              </Link>
            </span>
            <span className="font-mono text-base font-normal text-neutral-800">
              <br />
              Se agrega una columna de{" "}
            </span>
            <span className="bg-black font-mono text-base font-light uppercase text-stone-50">
              categoría{" "}
            </span>
            <span className="font-mono text-base font-normal text-neutral-800">
              y se agrega listado de{" "}
            </span>
            <span className="bg-black font-mono text-base font-bold text-stone-50">
              localizadas .
            </span>
          </div>
        </WrapperFedin>
        <div className="w-10">
          <svg
            width="75"
            height="169"
            viewBox="0 0 75 169"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44.1296 1.0711C39.4371 1.24817 24.7834 -0.166609 23.953 5.36938C21.7442 20.0949 19.9287 34.6098 19.1996 49.5152C18.9201 55.2289 19.657 62.4353 18.4411 68.1242C17.5199 72.434 12.3002 74.9372 9.03543 76.9736C8.66075 77.2073 1.96909 80.8982 1.04569 82.2833C-0.450126 84.527 6.36851 87.1972 7.21499 87.8457C11.9383 91.4644 13.3674 96.6194 15.1036 102.106C18.0328 111.362 20.5477 120.78 23.1945 130.121C25.5824 138.547 27.7304 146.95 29.3638 155.556C30.4359 161.206 30.4402 166.545 37.3535 167.642C49.1221 169.51 62.2846 166.416 74.167 165.822"
              stroke="black"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <WrapperFedin>
          <div className="w-[748.66px]">
            <span className="font-mono text-base font-normal text-neutral-800">
              Al despliegue de registros de personas desaparecidas se agregó la{" "}
            </span>
            <span className="bg-black font-mono text-base font-light uppercase text-stone-50">
              “CAtegoríA”
            </span>
            <span className="font-mono text-base font-normal text-neutral-800">
              , que precisa si de esa persona desaparecida{" "}
            </span>
            <span className="bg-black font-mono text-base font-light uppercase text-stone-50">
              “Se requieren datos de identidaD”
            </span>
            <span className="font-mono text-base font-light uppercase text-neutral-800">
              ,{" "}
            </span>
            <span className="bg-black font-mono text-base font-light uppercase text-stone-50">
              &quot;Con identidad sin datos adicionales/Se busca
              reportante&quot;
            </span>
            <span className="font-mono text-base font-light uppercase text-neutral-800">
              ,
            </span>
            <span className="bg-black font-mono text-base font-light uppercase text-stone-50">
              &quot;Personas ubicadas/Con indicios &quot;
            </span>
            <span className="font-mono text-base font-normal text-neutral-800">
              , o hay
            </span>
            <span className="bg-black font-mono text-base font-normal text-stone-50">
              {" "}
            </span>
            <span className="bg-black font-mono text-base font-light uppercase text-stone-50">
              &quot;Denuncia confirmada&quot;
            </span>
            <span className="font-mono text-base font-light uppercase text-neutral-800">
              .<br />
            </span>
            <span className="font-mono text-base font-normal text-neutral-800">
              El listado de &quot;
            </span>
            <span className="font-mono text-base font-bold text-neutral-800">
              localizados
            </span>
            <span className="font-mono text-base font-normal text-neutral-800">
              &quot; despliega solo el
            </span>
            <span className="bg-black font-mono text-base font-normal text-stone-50">
              {" "}
            </span>
            <span className="bg-black font-mono text-base font-light uppercase text-stone-50">
              Folio Único de Búsqueda
            </span>
            <span className="font-mono text-base font-normal text-neutral-800">
              {" "}
              y el{" "}
            </span>
            <span className="bg-black font-mono text-base font-light uppercase text-stone-50">
              estado de desaparición de la persona.
            </span>
            <br />
            <Link
              className="underline"
              href={
                "/assets/data/estatus-de-personas-desaparecidas-explicacion.pdf"
              }
              target="_blank"
            >
              {" "}
              Consulta aquí las categorías y sus significados
            </Link>
          </div>
        </WrapperFedin>
      </div>
    </div>
  );
}
