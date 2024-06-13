import { atom } from "jotai";

export const personsAtom = atom([]);

export const personAtom = atom({});

export const countAtom = atom(0);

export const pageAtom = atom(0);

export const sizeAtom = atom(30);

export const nombrecompletoAtom = atom("Jorge");

export const estadoAtom = atom("");

export const rnpedAtom = atom(true);

export const rnpdno_jsonAtom = atom(false);

export const rnpdno_csvAtom = atom(false);

export const bg_1Atom = atom(false);

export const bg_2Atom = atom(false);

export const openDataAtom = atom([
  // {
  //   fecha_pub: "12/01/2018",
  //   nombre:
  //     "Registro Nacional de Datos de Personas Extraviadas o Desaparecidas (RNPED)",
  //   descripción:
  //     "Reconstrucción de nombres por Data Cívica de registros recopilados por fiscalías estatales",
  //   metodologia: "",
  //   base: "https://drive.google.com/file/d/1ExbQQjWemnhyIy68QZqlHBJgvfToIXJZ/view?usp=drive_link",
  //   diccionario: "",
  // },
  {
    fecha_pub: "22/09/2023",
    nombre:
      "Versión Pública del Registro Nacional de Personas Desaparecidas y No Lozalizadas (RNPDNO) formato csv",
    descripción:
      "Versión pública de 11 variables del RNPDNO publicada por la Comisión Nacional de Búsqueda",
    metodologia: "",
    base: "https://drive.google.com/file/d/13GK5Vt9WjB_G4vkCpymmMH1QwkQobJGa/view?usp=drive_link",
    diccionario: "",
  },
  // {
  //   fecha_pub: "05/09/2023",
  //   nombre:
  //     "Versión Pública del Registro Nacional de Personas Desaparecidas y No Lozalizadas (RNPDNO) formato json",
  //   descripción:
  //     "Reconstrucción de variables seleccionadas por Data Cívica de registros publicados en formato json por  la Comisión Nacional de Búsqueda",
  //   metodologia: "",
  //   base: "",
  //   diccionario: "",
  // },
  // {
  //   fecha_pub: "14/12/2023",
  //   nombre:
  //     "Versión Pública Especial para Consulta de Búsqueda Generalizada, 1",
  //   descripción:
  //     "Reconstrucción de nombres en primera Versión Pública Especial de Búsqueda Generalizada, realizada por Quinto Elemento Lab",
  //   metodologia: "",
  //   base: "https://drive.google.com/file/d/1NOTGTSxyePTIqSdhA0tKwuIQLcYL7W4N/view?usp=drive_link",
  //   diccionario: "",
  // },
  // {
  //   fecha_pub: "01/03/2024",
  //   nombre:
  //     "Versión Pública Especial para Consulta de Búsqueda Generalizada, 2",
  //   descripción:
  //     "Reconstrucción de nombres en segunda Versión Pública Especial de Búsqueda Generalizada, realizada por Data Cívica",
  //   metodologia: "",
  //   base: "https://drive.google.com/file/d/12nRShr1pdlb-obZvrn2s04SMNAx0XcNo/view?usp=drive_link",
  //   diccionario: "",
  // },
  {
    fecha_pub: "19/03/2024",
    nombre: "Personas desaparecidas: registros de 2017 a 2024",
    descripción:
      "Reconstrucción por Data Cívica de todas las personas desaparecidas registradas por el gobierno de 2017 a 2024 en el RNPED, versiones públcias del RNPDNO y versiones especiales de Búsqueda Generalizada",
    metodologia:
      "https://docs.google.com/document/d/18qaxJqENrozZ252dw_AbiEvb-yvUEVRI_A9tO_45I7Q/edit?usp=sharing",
    base: "https://drive.google.com/file/d/165KwBF1hmnAfk8fqiQUmh6RAACROUmuO/view?usp=drive_link",
    diccionario: "",
  },
  {
    fecha_pub: "12/03/2024",
    nombre: "Nombres borrados entre agosto y diciembre 2023",
    descripción:
      "Reconstrucción por Data Cívica de nombres borrados entre las Versiones Públicas del RNPDNO y la Versión Pública Especial para Consulta de Búsqueda Generalizada 2",
    metodologia:
      "https://docs.google.com/document/d/1YuT7dWNw4v2W6Krvp2GIHysByaZmfjhr62HHdtXXt1s/edit?usp=drive_link",
    base: "https://drive.google.com/file/d/1wuo-bsRoVGhuQIIpC-u_KdcdICyDgwqw/view?usp=drive_link",
    diccionario: "DICCIONARIO DE DATOS: Personas desaparecidas  borradas",
  },
]);

export const statesAtom = atom([
  { value: "TODOS", label: "TODOS" },
  { value: "AGS", label: "AGUASCALIENTES" },
  { value: "BC", label: "BAJA CALIFORNIA" },
  { value: "BCS", label: "BAJA CALIFORNIA SUR" },
  { value: "CHI", label: "CHIHUAHUA" },
  { value: "CHS", label: "CHIAPAS" },
  { value: "CMP", label: "CAMPECHE" },
  { value: "CMX", label: "CIUDAD DE MEXICO" },
  { value: "COA", label: "COAHUILA" },
  { value: "COL", label: "COLIMA" },
  { value: "DGO", label: "DURANGO" },
  { value: "GRO", label: "GUERRERO" },
  { value: "GTO", label: "GUANAJUATO" },
  { value: "HGO", label: "HIDALGO" },
  { value: "JAL", label: "JALISCO" },
  { value: "MCH", label: "MICHOACAN" },
  { value: "MEX", label: "ESTADO DE MEXICO" },
  { value: "MOR", label: "MORELOS" },
  { value: "NAY", label: "NAYARIT" },
  { value: "NL", label: "NUEVO LEON" },
  { value: "OAX", label: "OAXACA" },
  { value: "PUE", label: "PUEBLA" },
  { value: "QR", label: "QUINTANA ROO" },
  { value: "QRO", label: "QUERETARO" },
  { value: "SIN", label: "SINALOA" },
  { value: "SLP", label: "SAN LUIS POTOSI" },
  { value: "SON", label: "SONORA" },
  { value: "TAB", label: "TABASCO" },
  { value: "TLX", label: "TLAXCALA" },
  { value: "TMS", label: "TAMAULIPAS" },
  { value: "VER", label: "VERACRUZ" },
  { value: "YUC", label: "YUCATAN" },
  { value: "ZAC", label: "ZACATECAS" },
]);
