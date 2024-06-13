import Image from 'next/image';
import React from 'react';

export default function InfoGrafica() {
  return (
    <>
      <div className="font-Roboto_Serif relative h-[85vh] min-h-[800px] w-screen bg-[#FBFEF2] lg:py-24 xl:py-24">
        <div className="flex h-full scale-[0.8] flex-col items-center justify-center">
          <div className="flex scale-90 flex-col items-center justify-center">
            <Image
              src={'/images/f9bbbb293df39d50337c219daca609d5.png'}
              width={227}
              height={325}
              alt=""
            />
          </div>
          <div className="w-[950px] text-center lg:text-[16px] xl:text-lg">
            <span className="font-Roboto_Serif text-lg font-normal leading-snug text-neutral-800">
              De acuerdo con datos oficiales reportados antes de diciembre del
              2023,
            </span>
            <span className="font-Roboto_Serif text-lg font-semibold text-neutral-800">
              en el país existen más de 100 mil personas desaparecidas y no
              localizadas,
            </span>
            <span className="font-Roboto_Serif text-lg font-normal leading-snug text-neutral-800">
              {' '}
              aunque colectivos de familiares sostienen que la cifra es mucho
              mayor.
              <br />
              Frente a esta crisis,{' '}
            </span>
            <span className="font-Roboto_Serif text-lg font-semibold text-neutral-800">
              la labor del Estado ha sido insuficiente,{' '}
            </span>
            <span className="font-Roboto_Serif text-lg font-normal leading-snug text-neutral-800">
              ha limitado la labor de identificación de las personas
              desaparecidas y la búsqueda de justicia y con la{' '}
            </span>
            <span className="font-Roboto_Serif text-lg font-semibold text-neutral-800">
              “Estrategia Nacional de Búsqueda Generalizada de Personas
              Desaparecidas”{' '}
            </span>
            <span className="font-Roboto_Serif text-lg font-normal leading-snug text-neutral-800">
              anunciada a fines del 2023 se ha dejado fuera a las familias
              abonando a la falta de transparencia y confusión sobre este
              proceso y el registro oficial actual: Data Cívica lo pone
              accesible al público en esta plataforma.
              <br />
              <br />
            </span>
            <span className="font-mono text-base font-bold text-neutral-800">
              El número de personas en la lista ahora es de 94,291, y el de
              localizados es de 12,344, menos de lo que se había anunciado.
            </span>
          </div>
          <div className="flex items-center justify-center">
            <Image src={'/images/DC.svg'} alt="" width={224} height={50} />
          </div>
        </div>
      </div>
    </>
  );
}
