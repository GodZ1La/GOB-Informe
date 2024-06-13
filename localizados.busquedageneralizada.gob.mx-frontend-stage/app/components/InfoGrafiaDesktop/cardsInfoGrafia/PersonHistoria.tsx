import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PersonHistoria() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: false, amount: 0.8 }}
        className={
          'borderPerCards absolute  top-[25%] inline-flex h-[152px] w-80 items-center justify-start  gap-2.5 bg-slate-400 p-2.5 '
        }
      >
        <div className="w-[370px]">
          <span className="font-Roboto_Serif text-lg font-semibold text-neutral-800">
            Alicia de los Ríos Merino
            <br />
          </span>
          <span className="font-Roboto_Serif text-lg font-semibold text-neutral-700">
            {' '}
          </span>
          <span className="font-Roboto_Serif text-lg font-normal leading-snug text-neutral-700">
            Desapareció en los años 70 en el contexto de la llamada &quot;Guerra
            Sucia&quot; del gobierno mexicano contra grupos de izquierda.
          </span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        exit={{ opacity: 0, y: -100 }}
        viewport={{ once: false, amount: 0.8 }}
        className="absolute left-80 top-[35%] inline-flex h-[116px] w-[101px] flex-col items-center justify-center"
      >
        <Image src="/images/alicia.png" width={101} height={116} alt="" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        // animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        // exit={{ opacity: 1, y: -100 }}
        viewport={{ once: false, amount: 0.8 }}
        className="borderPerCards absolute left-[77rem] top-[20%] inline-flex h-[131px] w-[587.58px] items-center justify-start gap-2.5 border-dashed border-neutral-800 bg-green-300 p-2.5"
      >
        <div className="w-[587.577px]">
          <span className="font-Roboto_Serif text-lg font-semibold text-neutral-800">
            Miguel Ángel Hernández Guzmán
            <br />
          </span>
          <span className="font-Roboto_Serif text-lg font-semibold text-neutral-700">
            {' '}
          </span>
          <span className="font-Roboto_Serif text-lg font-normal leading-snug text-neutral-700">
            Desapareció el 19 de mayo de 2019 en Orizaba, Veracruz. Sus
            perpetradores están en la cárcel por secuestro y desaparición
            forzada, pero no han confesado qué hicieron con él.
          </span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        exit={{ opacity: 0, y: -100 }}
        viewport={{ once: false, amount: 0.8 }}
        className="absolute left-[108rem] top-[37%] inline-flex h-[138.15px] w-[120px] flex-col items-center justify-center"
      >
        <Image src="/images/miguel.png" width={120} height={138.5} alt="" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        // animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        // exit={{ opacity: 1, y: -100 }}
        viewport={{ once: false, amount: 0.8 }}
        className="borderPerCards absolute left-[150rem] top-[25%] inline-flex h-[107px] w-80 items-center justify-start gap-2.5 border-dashed border-neutral-800 bg-orange-200 p-2.5"
      >
        <div className="w-[300px]">
          <span className="font-Roboto_Serif text-lg font-semibold text-neutral-800">
            Wendy Sánchez Muñoz
            <br />
          </span>
          <span className="font-Roboto_Serif text-lg font-semibold text-neutral-700">
            {' '}
          </span>
          <span className="font-Roboto_Serif text-lg font-normal leading-snug text-neutral-700">
            Desapareció el 9 de enero de 2021 en Nayarit.
          </span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        exit={{ opacity: 0, y: -100 }}
        viewport={{ once: false, amount: 0.8 }}
        className="absolute left-[166rem] top-[35%] inline-flex h-[92px] w-[76px] flex-col items-center justify-center"
      >
        <Image src="/images/wendy.png" width={76} height={92} alt="" />
      </motion.div>
    </>
  );
}
