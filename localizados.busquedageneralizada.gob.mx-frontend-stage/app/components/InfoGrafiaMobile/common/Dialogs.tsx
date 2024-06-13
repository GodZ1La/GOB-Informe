import React from "react";
import Dialog from "../common/Dialog";
import Link from "next/link";

export default function Dialogs() {
  return (
    <>
      <Dialog
        className="borderPerCards absolute top-1/3 flex h-[114.47px]  w-[257.05px] flex-col items-end justify-center bg-[#94C0D4] px-2"
        id="alicia"
      >
        <div className="self-stretch font-mono text-xs font-normal text-neutral-800">
          Desapareció en los años 70 en el contexto de la llamada &quot;Guerra
          Sucia&quot; del gobierno mexicano contra grupos de izquierda.
        </div>
      </Dialog>
      <Dialog
        className="borderPerCards absolute top-1/3 flex h-[114.47px]  w-[257.05px] flex-col items-end justify-center bg-[#95DCA0] p-2.5"
        id="miguel"
      >
        <div className="self-stretch font-mono text-xs font-normal text-neutral-800">
          Sus perpetradores están en la cárcel por secuestro y desaparición
          forzada, pero no han confesado qué hicieron con él.
        </div>
      </Dialog>
      <Dialog
        className="borderPerCards absolute inline-flex  h-[648px] w-[300px] flex-col items-end justify-center rounded-[10px] bg-white p-2.5  shadow"
        id="2017"
      >
        <div>
          <span className="font-mono text-xs font-normal text-neutral-800">
            Desde 2017 la Ley General en Materia de Desaparición Forzada,
            Desaparición Cometida por Particulares y del Sistema Nacional de
            Búsqueda de Personas (LGMD) ordenaba crear un{" "}
          </span>
          <span className="font-mono text-xs font-light uppercase text-neutral-800">
            Registro Nacional de Personas Desaparecidas y No Localizadas
            (RNPDNO){" "}
          </span>
          <span className="font-mono text-xs font-normal text-neutral-800">
            a cargo de la Comisión Nacional de Búsqueda (CNB). Esta lo integró
            con lo que había previamente, un Registro Nacional de Datos de
            Personas Extraviadas o Desaparecidas (RNPED) que tenía el
            Secretariado Ejecutivo del Sistema Nacional de Seguridad Pública.
            <br />
            <br />
            Ese registro nunca se hizo público, pero sí un buscador por nombres:
            <br />
            <br />
            Data Cívica creó una búsqueda masiva automatizada de nombres para
            lograr obtener una lista de{" "}
          </span>
          <span className="font-mono text-xs font-normal text-neutral-800">
            33,125 casos
          </span>
          <span className="font-mono text-xs font-normal text-neutral-800">
            , consultables en:
            <br />
            <br />
          </span>
          <span className="font-mono text-xs font-normal text-neutral-800 underline">
            <Link
              href={"https://personasdesaparecidas.mx/"}
              target="_blank"
              rel=""
            >
              https://personasdesaparecidas.mx/
            </Link>

            <br />
          </span>
        </div>
      </Dialog>
      <Dialog
        id="2020"
        className="borderPerCards absolute top-1/3  inline-flex h-[250.47px] w-[257.05px] flex-col items-end justify-center rounded-[10px] bg-white p-2.5 shadow"
      >
        <div className="self-stretch">
          <span className="font-mono text-xs font-normal text-neutral-800">
            Esta versión pública, en realidad solo muestra gráficas y permite
            generar visualizaciones más específicas a partir de filtros.
            <br />
          </span>
          <span className="font-mono text-xs font-normal text-red-400">
            <br />
          </span>
          <span className="font-mono text-[15px] font-medium uppercase tracking-wide text-red-400">
            No deja ver nombres ni descargar la base de datos como tal.
          </span>
        </div>
      </Dialog>
      <Dialog
        id="2023"
        className="absolute inline-flex h-[800px] w-[95%] scale-[0.75] flex-col items-end justify-center rounded-[10px] bg-white p-2.5 shadow"
      >
        <div className="self-stretch">
          <span className="font-mono text-xs font-normal text-neutral-800">
            A la par que Karla Quintana anunció su renuncia como titular de la
            Comisión Nacional de Búsqueda, en la página de Versión Pública se
            cargó una “
          </span>
          <span className="font-mono text-xs font-medium text-neutral-800 underline">
            <Link
              href={"https://versionpublicarnpdno.segob.gob.mx/Dashboard/Index"}
              target="_blank"
              rel=""
            >
              versión pública de la base de datos del RNPDNO
            </Link>
          </span>
          <span className="font-mono text-xs font-normal text-neutral-800">
            ”.
            <br />
          </span>
          <span className="font-mono text-[15px] font-medium uppercase tracking-wide text-neutral-800">
            <br />
          </span>
          <span className="font-mono text-[15px] font-medium uppercase tracking-wide text-red-400">
            Esta lista puede bajarse en dos formatos:
            <br />
          </span>
          <span className="font-mono text-xs font-bold text-neutral-800">
            Uno es una hoja de cálculo con 9 campos:
          </span>
          <span className="font-mono text-base font-normal text-neutral-800">
            {" "}
          </span>
          <span className="font-mono text-xs font-light uppercase text-neutral-800">
            Números de registro, nombre, edad, sexo, nacionalidad, fecha y lugar
            de desaparición y autoridad que registró
          </span>
          <span className="font-mono text-base font-light uppercase text-neutral-800">
            {" "}
          </span>
          <span className="font-mono text-xs font-normal text-neutral-800">
            y contiene{" "}
          </span>
          <span className="font-mono text-[15px] font-medium uppercase tracking-wide text-neutral-800">
            110,946 filas.
            <br />
            <br />
          </span>
          <span className="font-mono text-xs font-medium text-neutral-800">
            El otro archivo es un .json, que no es tan fácil de consultar como
            el Excel,{" "}
          </span>
          <span className="font-mono text-xs font-normal text-neutral-800">
            pero que contiene muchos más campos para registrar datos, aunque en
            su mayoría están en blanco.
            <br />
            [Data Cívica trabaja en la limpieza de ese archivo]
            <br />
            También se creó la página{" "}
          </span>
          <span className="font-mono text-xs font-normal text-neutral-800 underline">
            <Link
              href={"https://consultapublicarnpdno.segob.gob.mx/"}
              target="_blank"
              rel=""
            >
              consultapublicarnpdno.segob.gob.mx/
            </Link>
          </span>
          <span className="font-mono text-xs font-normal text-neutral-800">
            , donde el usuario puede buscar las fichas de búsqueda de personas
            desaparecidas por nombre, apellidos, lugar de desaparición,
            nacionalidad, condición de discapacidad, rango de fechas de los
            hechos o rango de edades.
          </span>
        </div>
      </Dialog>
      <Dialog
        id="14Dec2023"
        className="absolute inline-flex h-[650.47px] w-[90%] flex-col items-end justify-center rounded-[10px] bg-white p-2.5 shadow"
      >
        <div className="relative h-[30.47px] w-[30.47px]" />
        <div className="self-stretch">
          <span className="font-mono text-xs font-normal text-neutral-800">
            Los registros de la nueva página incluyen:
            <br />
          </span>
          <span className="font-mono text-xs font-light uppercase text-neutral-800">
            Folio Único de Búsqueda (FUB){" "}
          </span>
          <span className="font-mono text-xs font-normal text-neutral-800">
            [este dato no lo habíamos tenido antes],{" "}
          </span>
          <span className="font-mono text-xs font-light uppercase text-neutral-800">
            nombre, edad, sexo, nacionalidad, fecha + lugar de hechos y
            autoridad que reportó.
          </span>
          <span className="font-mono text-xs font-normal text-neutral-800">
            <br />
            La Secretaría de Gobernación presentó ese día el resultado de la
            llamada{" "}
          </span>
          <span className="font-mono text-xs font-bold text-neutral-800">
            &quot;Estrategia Nacional de Búsqueda Generalizada&quot;
          </span>
          <span className="font-mono text-xs font-normal text-neutral-800">
            , que llevaba meses realizándose (a la que AMLO se había referido
            como un &quot;censo&quot;).
            <br />
            <br />
            Los nombres en esta nueva página, según explicó, provienen del
            Registro de Personas Desaparecidas y No Localizadas (RNPDNO) menos
            los de quienes lograron localizar durante dicha estrategia, que
            reportaron eran 16,681 personas.
            <br />
            En la conferencia del 14 de diciembre se usaron términos que no
            están en la Ley de desaparición (como &quot;bicados&quot;).
            <br />
            <br />
            Ante la ola de críticas, en enero, se actualiza la página{" "}
          </span>
          <span className="font-mono text-xs font-bold text-neutral-800 underline">
            <Link
              href={"https://busquedageneralizada.gob.mx"}
              target="_blank"
              rel=""
            >
              busquedageneralizada.gob.mx
            </Link>
          </span>
        </div>
      </Dialog>
      <Dialog
        id="27Dec2023"
        className="absolute inline-flex h-[306.47px] w-[90%] flex-col items-end justify-center rounded-[10px] bg-white p-2.5 shadow"
      >
        <div className="self-stretch">
          <span className="font-mono text-xs font-normal text-neutral-800">
            Al despliegue de registros de personas desaparecidas se agregó la
          </span>
          <span className="font-mono text-xs font-light uppercase text-neutral-800">
            {" "}
            &ldquo;CAtegoríA&rdquo;
          </span>
          <span className="font-mono text-xs font-normal text-neutral-800">
            , que precisa si de esa persona desaparecida{" "}
          </span>
          <span className="font-mono text-xs font-light uppercase text-neutral-800">
            “Se requieren datos de identidaD”
          </span>
          <span className="font-mono text-xs font-normal text-neutral-800">
            ,{" "}
          </span>
          <span className="font-mono text-xs font-light uppercase text-neutral-800">
            &quot;Con identidad sin datos adicionales/Se busca reportante&quot;,
            &quot;Personas ubicadas/Con indicios&quot;
          </span>
          <span className="font-mono text-xs font-normal text-neutral-800">
            , o hay{" "}
          </span>
          <span className="font-mono text-xs font-light uppercase text-neutral-800">
            &quot;Denuncia confirmada&quot;.
            <br />
          </span>
          <span className="font-mono text-xs font-normal text-neutral-800">
            El listado de &quot;localizados&quot; despliega solo el{" "}
          </span>
          <span className="font-mono text-xs font-light uppercase text-neutral-800">
            Folio Único de Búsqueda
          </span>
          <span className="font-mono text-xs font-normal text-neutral-800">
            {" "}
            y el{" "}
          </span>
          <span className="font-mono text-xs font-light uppercase text-neutral-800">
            estado de desaparición de la persona
          </span>
          <span className="font-mono text-xs font-normal text-neutral-800">
            .
          </span>
          <br />
          <Link
            className="font-mono text-[10px] font-semibold text-neutral-800 underline underline-offset-1"
            href={
              "/assets/data/estatus-de-personas-desaparecidas-explicacion.pdf"
            }
            target="_blank"
          >
            {" "}
            Consulta aquí las categorías y sus significados
          </Link>
        </div>
      </Dialog>
      <Dialog
        id="miguel2"
        className="borderPerCards absolute  flex h-[475px]  w-[280px] flex-col items-end justify-center bg-[#94C0D4] px-2"
      >
        <div className="self-stretc">
          <span className="font-mono text-xs font-bold text-neutral-800">
            Hay dos reportes ingresados por dos autoridades distintas:
          </span>
          <span className="font-mono text-xs font-normal text-neutral-800">
            En uno, la autoridad que reportó es la Fiscalía General de la
            República (ante la cual presentó una denuncia su hija en 2002),
            señala su nombre completo, edad de 70 años, sexo mujer, nacionalidad
            mexicana, fecha de desaparición el 5 de enero de 1978, en la Ciudad
            de México.
            <br />
            <br />
            En cambio el otro reporte, donde la autoridad responsable fue la
            Comisión Nacional de Búsqueda (CNB), sólo se reportó nombre
            completo, sexo, fecha y entidad de desaparición; no se reporta edad
            y en nacionalidad dice &quot;se desconoce&quot;.
          </span>
        </div>
      </Dialog>
      <Dialog
        id="alicia2"
        className=" borderPerCards absolute inline-flex h-[370px] w-[257.05px] flex-col items-end justify-center border border-black bg-slate-400 p-2.5 shadow"
      >
        <div className="self-stretch">
          <span className="font-mono text-xs font-normal text-neutral-800 underline">
            <Link
              href={
                "https://twitter.com/AliciadelosRos2/status/1749544326562996700"
              }
              target="_blank"
            >
              El 22 de enero, alrededor de 6 horas después de la denuncia de su
              hija
            </Link>
          </span>
          <span className="font-mono text-xs font-normal text-neutral-800">
            , el nombre de Alicia de los Ríos Merino fue incorporado a la página
            de Búsqueda Generalizada. El registro que aparece es el atribuido a
            la CNB como
          </span>
          <span className="font-mono text-xs font-light uppercase text-neutral-800">
            {" "}
            autoridad reportante,
          </span>
          <span className="font-mono text-xs font-normal text-neutral-800">
            {" "}
            con{" "}
          </span>
          <span className="font-mono text-xs font-light uppercase text-neutral-800">
            nombre, sexo, fecha y entidad de desaparición, sin edad y que en
            nacionalidad dice &quot;se desconoce&quot;.
          </span>
          <span className="font-mono text-xs font-normal text-neutral-800">
            {" "}
            Ahora en{" "}
          </span>
          <span className="font-mono text-xs font-light uppercase text-neutral-800">
            &quot;categoría&quot;{" "}
          </span>
          <span className="font-mono text-xs font-normal text-neutral-800">
            se muestra como{" "}
          </span>
          <span className="font-mono text-xs font-light uppercase text-neutral-800">
            &quot;Denuncia confirmada&quot;.
          </span>
        </div>
      </Dialog>
      <Dialog
        id="wendy2"
        className="borderPerCards absolute inline-flex h-[710px] w-[90%] flex-col items-end justify-center overflow-y-scroll border border-black bg-orange-200 p-2.5 shadow"
      >
        <div className="relative h-[30.47px] w-[30.47px]" />
        <div className="self-stretch">
          <span className="font-mono text-xs font-normal text-neutral-700">
            Eso a pesar de que su familia presentó una denuncia en su momento en
            la Fiscalía de Nayarit y de que su hermano Baruc ha sido desde el
            principio sumamente activo en la búsqueda de Wendy difundiendo su
            foto e información en redes sociales.
            <br />
          </span>
          <span className="font-mono text-xs font-light uppercase text-neutral-700">
            <br />
            &quot;Se busca reportante&quot;
          </span>
          <span className="font-mono text-xs font-normal text-neutral-700">
            {" "}
            es la leyenda que aparece en el listado, aunque en la definición de
            las categorías que da la propia página corresponde a &quot;Con
            identidad confirmada, sin datos adicionales&quot; y la explican como
            &quot;En esta categoría se encuentran personas no localizadas que
            cuentan con una identidad confirmada, aparecen en registros
            administrativos y/o que sí se cuenta con datos de la persona
            reportante o denunciante; sin embargo, los datos de contacto
            obtenidos no han resultado útiles para el proceso de localización. O
            bien, no han servido para tener comunicación con reportantes y con
            ello realizar un seguimiento adecuado del caso y nuevas acciones de
            búsqueda.&quot;
            <br />
          </span>
        </div>
      </Dialog>
    </>
  );
}
