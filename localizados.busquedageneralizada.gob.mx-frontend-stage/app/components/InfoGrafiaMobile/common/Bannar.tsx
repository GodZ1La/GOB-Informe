import Image from 'next/image';
import React from 'react';

export default function Bannar() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-16">
      <div>
        <Image
          alt=" "
          src={'/images/f9bbbb293df39d50337c219daca609d5.png'}
          width={143}
          height={205}
        />
      </div>

      <div className="w-[80%] text-center">
        <span className="font-Roboto_Serif text-[15px] font-normal text-neutral-800">
          De acuerdo con datos oficiales reportados antes de diciembre del 2023,
        </span>
        <span className="font-Roboto_Serif text-[15px] font-semibold text-neutral-800">
          en el país existen más de 100 mil personas desaparecidas y no
          localizadas,{' '}
        </span>
        <span className="font-Roboto_Serif text-[15px] font-normal text-neutral-800">
          aunque colectivos de familiares sostienen que la cifra es mucho mayor.
          <br />
        </span>
        <span className="font-Roboto_Serif text-lg font-normal leading-snug text-neutral-800">
          <br />
        </span>
        <span className="font-Roboto_Serif text-[15px] font-normal text-neutral-800">
          Frente a esta crisis,
        </span>
        <span className="font-Roboto_Serif text-[15px] font-semibold text-neutral-800">
          {' '}
          la labor del Estado ha sido insuficiente,
        </span>
        <span className="font-Roboto_Serif text-[15px] font-normal text-neutral-800">
          {' '}
          ha limitado la labor de identificación de las personas desaparecidas y
          la búsqueda de justicia y con la{' '}
        </span>
        <span className="font-Roboto_Serif text-[15px] font-semibold text-neutral-800">
          “Estrategia Nacional de Búsqueda Generalizada de Personas
          Desaparecidas”
        </span>
        <span className="font-Roboto_Serif text-[15px] font-normal text-neutral-800">
          {' '}
          anunciada a fines del 2023 se ha dejado fuera a las familias abonando
          a la falta de transparencia y confusión sobre este proceso y el
          registro oficial actual: Data Cívica lo pone accesible al público en
          esta plataforma.
          <br />
          <br />
        </span>
        <span className="font-mono text-xs font-bold text-neutral-800">
          El número de personas en la lista ahora es de 94,291, y el de
          localizados es de 12,344, menos de lo que se había anunciado.
        </span>
      </div>
      <div>
        <Image alt=" " src={'/images/DC.svg'} width={226} height={50} />
      </div>
    </div>
  );
}
