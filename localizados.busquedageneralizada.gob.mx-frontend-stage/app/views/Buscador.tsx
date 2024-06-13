// @ts-nocheck
import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { robotoSerif, robotoMono, robotoCondensed } from "../utils/fonts";
import clsx from "clsx";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import axios from "axios";
import { Modal } from "react-daisyui";
import { IoMdSearch, IoMdClose } from "react-icons/io";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
// http://localhost:1337/api/indicators
// https://volveradesaparecer.datacivica.org/strapi/api/indicators

import {
  personsAtom,
  personAtom,
  countAtom,
  pageAtom,
  sizeAtom,
  nombrecompletoAtom,
  estadoAtom,
  rnpedAtom,
  rnpdno_jsonAtom,
  rnpdno_csvAtom,
  bg_1Atom,
  bg_2Atom,
  statesAtom,
} from "../utils/store";
import { useAtom } from "jotai";

type FormData = {
  nombrecompleto: string;
  estado: string;
  DC_id: string;
  entidad_desap: string;
  estatus_busqueda: string;
  fecha_desap: string;
  rnped: boolean;
  rnpdno_json: boolean;
  rnpdno_csv: boolean;
  bg_1: boolean;
  bg_2: boolean;
};

export default function Buscador() {
  const [persons, setPersons] = useAtom(personsAtom);
  const [person, setPerson] = useAtom(personAtom);
  const [count, setCount] = useAtom(countAtom);
  const [page, setPage] = useAtom(pageAtom);
  const [size, setSize] = useAtom(sizeAtom);
  const [nombrecompleto, setNombrecompleto] = useAtom(nombrecompletoAtom);
  const [estado, setEstado] = useAtom(estadoAtom);
  const [rnped, setRnped] = useAtom(rnpedAtom);
  const [rnpdno_json, setRnpdno_json] = useAtom(rnpdno_jsonAtom);
  const [rnpdno_csv, setRnpdno_csv] = useAtom(rnpdno_csvAtom);
  const [bg_1, setBg_1] = useAtom(bg_1Atom);
  const [bg_2, setBg_2] = useAtom(bg_2Atom);
  const [states] = useAtom(statesAtom);
  const [loading, setLoading] = useState(true);

  const ref = useRef<HTMLDialogElement>(null);
  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);

  const {
    register,
    watch,
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      nombrecompleto: "Jorge",
      estado: states[0],
      rnped: false,
      rnpdno_json: false,
      rnpdno_csv: false,
      bg_1: false,
      bg_2: false,
    },
  });

  const onSubmit = handleSubmit((data) => {
    // console.log(data);
    setNombrecompleto(data.nombrecompleto);
    setEstado(data.estado.label);
    setRnped(data.rnped);
    setRnpdno_json(data.rnpdno_json);
    setRnpdno_csv(data.rnpdno_csv);
    setBg_1(data.bg_1);
    setBg_2(data.bg_2);
    axios
      //.get("http://localhost:1338/api/indicators", {
      .get("https://volveradesaparecer.datacivica.org/strapi/api/indicators", {
        params: {
          nombrecompleto:
            data.nombrecompleto === "" ? null : data.nombrecompleto,
          entidad_desap: data.estado.label === "TODOS" ? "" : data.estado.label,
          rnped: data.rnped ? "1" : "0",
          rnpdno_json: data.rnpdno_json ? "1" : "0",
          rnpdno_csv: data.rnpdno_csv ? "1" : "0",
          bg_1: data.bg_1 ? "1" : "0",
          bg_2: data.bg_2 ? "1" : "0",
        },
      })
      .then(function (response) {
        // console.log(response);
        setPersons(response.data.data);
        setCount(response.data.metadata.count);
      })
      .catch(function (error) {
        // console.log(error);
      })
      .finally(function () {
        // always executed
      });
  });

  useEffect(() => {
    const subscription = watch(handleSubmit(onSubmit));
    return () => subscription.unsubscribe();
  }, [handleSubmit, watch]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      axios
        .get(
          "https://volveradesaparecer.datacivica.org/strapi/api/indicators",
          {
            params: {
              nombrecompleto: nombrecompleto === "" ? null : nombrecompleto,
              entidad_desap: estado === "TODOS" ? "" : estado,
              rnped: rnped ? "1" : "0",
              rnpdno_json: rnpdno_json ? "1" : "0",
              rnpdno_csv: rnpdno_csv ? "1" : "0",
              bg_1: bg_1 ? "1" : "0",
              bg_2: bg_2 ? "1" : "0",
              page: page,
              size: size,
            },
          }
        )
        .then(function (response) {
          // console.log(response);
          setPersons(response.data.data);
          setCount(response.data.metadata.count);
        })
        .catch(function (error) {
          // console.log(error);
        })
        .finally(function () {
          // always executed
        });
      setLoading(false);
    };

    fetchData();
  }, [page, size]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      axios
        .get(
          "https://volveradesaparecer.datacivica.org/strapi/api/indicators",
          {
            params: {
              nombrecompleto: nombrecompleto === "" ? null : nombrecompleto,
              entidad_desap: estado === "TODOS" ? "" : estado,
              rnped: rnped ? "1" : "0",
              rnpdno_json: rnpdno_json ? "1" : "0",
              rnpdno_csv: rnpdno_csv ? "1" : "0",
              bg_1: bg_1 ? "1" : "0",
              bg_2: bg_2 ? "1" : "0",
            },
          }
        )
        .then(function (response) {
          // console.log(response);
          setPersons(response.data.data);
          setCount(response.data.metadata.count);
        })
        .catch(function (error) {
          // console.log(error);
        })
        .finally(function () {
          // always executed
        });
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-vad-lightyellow p-5 lg:p-24 lg:pt-0">
      <form
        onSubmit={onSubmit}
        className="flex w-full flex-col items-center justify-center"
      >
        <div className="flex w-full flex-col items-center justify-center lg:flex-row">
          <div className="w-10/12 md:w-8/12 lg:mr-3 lg:w-4/12">
            <label
              htmlFor="nombrecompleto"
              className={clsx(
                "mb-2 block text-sm font-normal text-vad-lightgray",
                robotoMono.className
              )}
            >
              Nombre y Apellido
            </label>
            <div className="flex flex-row items-center">
              <input
                type="text"
                id="nombrecompleto"
                {...register("nombrecompleto")}
                className={clsx(
                  "block w-full rounded-lg border border-vad-gray bg-vad-darkyellow p-2.5 text-sm text-vad-gray placeholder:text-vad-lightgray focus:border-vad-yellow focus:ring-vad-yellow",
                  robotoMono.className
                )}
                placeholder="Escribe para buscar"
              />
              <IoMdSearch className="-ml-8 text-xl text-vad-gray" />
            </div>
          </div>
          <div className="mt-3 w-10/12 md:w-8/12 lg:ml-3 lg:mt-0 lg:w-4/12">
            <label
              htmlFor="estado"
              className={clsx(
                "mb-2 block text-sm font-normal text-vad-lightgray",
                robotoMono.className
              )}
            >
              Estado de la República Mexicana
            </label>
            <Controller
              id="estado"
              {...register("estado")}
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  unstyled
                  className={clsx(
                    "block w-full cursor-text rounded-lg border border-vad-gray bg-vad-darkyellow px-2.5 py-[1px] text-sm text-vad-gray placeholder:text-vad-lightgray focus:border-vad-yellow focus:ring-vad-yellow",
                    robotoMono.className
                  )}
                  classNames={{
                    // clearIndicator: ({ isFocused }) =>
                    //   clsx(
                    //     isFocused ? "text-neutral-600" : "text-neutral-200",
                    //     "p-2",
                    //     isFocused
                    //       ? "hover:text-neutral-800"
                    //       : "hover:text-neutral-400"
                    //   ),
                    // container: () => clsx(),
                    // control: ({ isDisabled, isFocused }) =>
                    //   clsx(
                    //     isDisabled ? "bg-neutral-50" : "bg-white",
                    //     isDisabled
                    //       ? "border-neutral-100"
                    //       : isFocused
                    //       ? "border-purple-800"
                    //       : "border-neutral-200",
                    //     "rounded",
                    //     "border-solid",
                    //     "border",
                    //     isFocused && "shadow-[0_0_0_1px] shadow-purple-800",
                    //     isFocused
                    //       ? "hover:border-purple-800"
                    //       : "hover:border-neutral-300"
                    //   ),
                    // dropdownIndicator: ({ isFocused }) =>
                    //   clsx(
                    //     isFocused ? "text-neutral-600" : "text-neutral-200",
                    //     "p-2",
                    //     isFocused
                    //       ? "hover:text-neutral-800"
                    //       : "hover:text-neutral-400"
                    //   ),
                    // group: () => clsx("py-2"),
                    // groupHeading: () =>
                    //   clsx(
                    //     "text-neutral-400",
                    //     "text-xs",
                    //     "font-medium",
                    //     "mb-1",
                    //     "px-3",
                    //     "uppercase"
                    //   ),
                    // indicatorsContainer: () => clsx(),
                    // indicatorSeparator: ({ isDisabled }) =>
                    //   clsx(
                    //     isDisabled ? "bg-neutral-100" : "bg-neutral-200",
                    //     "my-2"
                    //   ),
                    input: () =>
                      clsx(
                        // "m-0.5",
                        // "py-0.5",
                        // "text-neutral-800",
                        "cursor-text"
                      ),
                    // loadingIndicator: ({ isFocused }) =>
                    //   clsx(
                    //     isFocused ? "text-neutral-600" : "text-neutral-200",
                    //     "p-2"
                    //   ),
                    // loadingMessage: () =>
                    //   clsx("text-neutral-400", "py-2", "px-3"),
                    menu: () =>
                      clsx(
                        "bg-white",
                        "rounded",
                        "shadow-[0_0_0_1px_rgba(0,0,0,0.1)]",
                        "my-1"
                      ),
                    menuList: () => clsx("py-1"),
                    // menuPortal: () => clsx(),
                    // multiValue: () =>
                    //   clsx("bg-neutral-100", "rounded-sm", "m-0.5"),
                    // multiValueLabel: () =>
                    //   clsx(
                    //     "rounded-sm",
                    //     "text-neutral-800",
                    //     "text-sm",
                    //     "p-[3]",
                    //     "pl-[6]"
                    //   ),
                    // multiValueRemove: ({ isFocused }) =>
                    //   clsx(
                    //     "rounded-sm",
                    //     isFocused && "bg-red-500",
                    //     "px-1",
                    //     "hover:bg-red-500",
                    //     "hover:text-red-800"
                    //   ),
                    // noOptionsMessage: () =>
                    //   clsx("text-neutral-400", "py-2", "px-3"),
                    option: ({ isDisabled, isFocused, isSelected }) =>
                      clsx(
                        isSelected
                          ? "bg-vad-lightgray"
                          : isFocused
                            ? "bg-vad-lightergray"
                            : "bg-transparent",
                        isDisabled
                          ? "text-neutral-200"
                          : isSelected
                            ? "text-white"
                            : "text-inherit",
                        "py-2",
                        "px-3",
                        !isDisabled &&
                          (isSelected
                            ? "active:bg-vad-lightgray"
                            : "active:bg-vad-lightergray")
                      ),
                    // placeholder: () => clsx("text-neutral-500", "mx-0.5"),
                    // singleValue: ({ isDisabled }) =>
                    //   clsx(
                    //     isDisabled ? "text-neutral-400" : "text-neutral-800",
                    //     "mx-0.5"
                    //   ),
                    // valueContainer: () => clsx("py-0.5", "px-2"),
                  }}
                  placeholder="Selecciona para buscar"
                  options={states}
                />
              )}
            />
          </div>
        </div>
        <div className="mt-5 w-full">
          <div className="w-full">
            <p
              className={clsx(
                "mb-2 block text-sm font-normal text-vad-lightgray",
                robotoMono.className
              )}
            >
              Registros
            </p>
          </div>
          <div className="grid w-full grid-cols-3 gap-2 max-[450px]:grid-cols-2 md:grid-cols-5">
            <div className="flex flex-row items-center">
              <input
                id="rnped"
                type="checkbox"
                {...register("rnped")}
                defaultChecked
                className="h-4 w-4 cursor-pointer rounded bg-gray-100  accent-vad-darkyellow focus:ring-2 focus:ring-blue-500"
              />
              <img
                className="ml-1.5 w-[18px]"
                src="assets/images/blue.svg"
                alt=""
              />
              <span
                className={clsx(
                  "ml-0.5 block text-sm font-normal text-vad-black",
                  robotoMono.className
                )}
              >
                RNPED 2018
              </span>
            </div>
            <div className="flex flex-row items-center">
              <input
                id="rnpdno_json"
                type="checkbox"
                {...register("rnpdno_json")}
                className="h-4 w-4 cursor-pointer rounded bg-gray-100  accent-vad-darkyellow focus:ring-2 focus:ring-blue-500"
              />
              <img
                className="ml-1.5 w-[18px]"
                src="assets/images/yellow.svg"
                alt=""
              />
              <span
                className={clsx(
                  "ml-0.5 block text-sm font-normal text-vad-black",
                  robotoMono.className
                )}
              >
                5/Ago/2023
              </span>
            </div>
            <div className="flex flex-row items-center">
              <input
                id="rnpdno_csv"
                type="checkbox"
                {...register("rnpdno_csv")}
                className="h-4 w-4 cursor-pointer rounded bg-gray-100  accent-vad-darkyellow focus:ring-2 focus:ring-blue-500"
              />
              <img
                className="ml-1.5 w-[18px]"
                src="assets/images/red.svg"
                alt=""
              />
              <span
                className={clsx(
                  "ml-0.5 block text-sm font-normal text-vad-black",
                  robotoMono.className
                )}
              >
                22/Ago/2023
              </span>
            </div>
            <div className="flex flex-row items-center">
              <input
                id="bg_1"
                type="checkbox"
                {...register("bg_1")}
                className="h-4 w-4 cursor-pointer rounded bg-gray-100  accent-vad-darkyellow focus:ring-2 focus:ring-blue-500"
              />
              <img
                className="ml-1.5 w-[18px]"
                src="assets/images/green.svg"
                alt=""
              />
              <span
                className={clsx(
                  "ml-0.5 block text-sm font-normal text-vad-black",
                  robotoMono.className
                )}
              >
                14/Dic/2023
              </span>
            </div>
            <div className="flex flex-row items-center">
              <input
                id="bg_2"
                type="checkbox"
                {...register("bg_2")}
                className="h-4 w-4 cursor-pointer rounded bg-gray-100  accent-vad-darkyellow focus:ring-2 focus:ring-blue-500"
              />
              <img
                className="ml-1.5 w-[18px]"
                src="assets/images/purple.svg"
                alt=""
              />
              <span
                className={clsx(
                  "ml-0.5 block text-sm font-normal text-vad-black",
                  robotoMono.className
                )}
              >
                1/Mar/2024
              </span>
            </div>
          </div>
        </div>
        <hr className="mb-1 mt-10 w-full border-vad-gray"></hr>
      </form>
      <div className="w-full">
        <p
          className={clsx(
            "mb-7 mt-14 text-base font-light !leading-normal tracking-normal text-vad-black lg:text-lg xl:text-xl",
            robotoMono.className
          )}
        >
          {count} REGISTROS ENCONTRADOS
        </p>
        <div className="grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-2 lg:gap-x-6 xl:grid-cols-3">
          {persons.map((p, i) => (
            <div
              key={i}
              className="flex cursor-pointer flex-row rounded-xl bg-white px-5 py-3 shadow-md drop-shadow-md"
              onClick={() => {
                handleShow();
                setPerson(p);
              }}
            >
              <div className="flex w-3/12 items-center justify-center">
                <img
                  data-aos="zoom-in"
                  src="assets/images/vad-persona-ficha.png"
                  alt=""
                />
              </div>
              <div className="flex w-9/12 flex-col items-start justify-center pl-2">
                <p
                  className={clsx(
                    "text-sm font-normal !leading-tight tracking-normal text-vad-gray lg:text-sm xl:text-base",
                    robotoCondensed.className
                  )}
                >
                  Nombre: {p.nombrecompleto}
                </p>
                <p
                  className={clsx(
                    "text-sm font-normal !leading-tight tracking-normal text-vad-gray lg:text-sm xl:text-base",
                    robotoCondensed.className
                  )}
                >
                  Folio: {p.fub}
                </p>
                <p
                  className={clsx(
                    "text-sm font-normal !leading-tight tracking-normal text-vad-lightgray lg:text-sm xl:text-base",
                    robotoCondensed.className
                  )}
                >
                  Fecha de desaparición: {p.fecha_desap || "Sin registro"}
                </p>
                <p
                  className={clsx(
                    "flex flex-row text-sm font-normal !leading-tight tracking-normal text-vad-lightgray lg:text-sm xl:text-base",
                    robotoCondensed.className
                  )}
                >
                  Registro:{" "}
                  <span className="flex flex-row">
                    {p.rnped === "1" && (
                      <img
                        className="ml-2 w-[18px]"
                        src="assets/images/blue.svg"
                        alt=""
                      />
                    )}
                    {p.rnpdno_json === "1" && (
                      <img
                        className="ml-2 w-[18px]"
                        src="assets/images/yellow.svg"
                        alt=""
                      />
                    )}
                    {p.rnpdno_csv === "1" && (
                      <img
                        className="ml-2 w-[18px]"
                        src="assets/images/red.svg"
                        alt=""
                      />
                    )}
                    {p.bg_1 === "1" && (
                      <img
                        className="ml-2 w-[18px]"
                        src="assets/images/green.svg"
                        alt=""
                      />
                    )}
                    {p.bg_2 === "1" && (
                      <img
                        className="ml-2 w-[18px]"
                        src="assets/images/purple.svg"
                        alt=""
                      />
                    )}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <Modal
          ref={ref}
          className="w-8/12 rounded-none bg-vad-lightyellow md:w-6/12 lg:w-4/12"
        >
          <form method="dialog">
            <button
              size="sm"
              color="ghost"
              shape="circle"
              className="absolute right-2 top-2"
            >
              <IoMdClose className="text-2xl font-bold text-vad-gray" />
            </button>
          </form>

          <Modal.Body className="flex flex-col items-center justify-center">
            <div className="flex w-3/12 items-center justify-center">
              <img
                data-aos="zoom-in"
                src="assets/images/vad-persona-ficha.png"
                alt=""
              />
            </div>
            <p
              className={clsx(
                "mt-5 bg-vad-black px-3 py-2 text-center text-sm font-semibold !leading-normal tracking-normal text-white",
                robotoMono.className
              )}
            >
              {person.nombrecompleto}
            </p>
            <p
              className={clsx(
                "mt-2 text-center text-xs font-light !leading-normal tracking-normal text-vad-gray",
                robotoMono.className
              )}
            >
              Folios: [{person.DC_id}]
            </p>
            <p
              className={clsx(
                "mt-2 text-center text-xs font-semibold italic !leading-normal tracking-normal text-vad-gray",
                robotoMono.className
              )}
            >
              Fecha de desaparición: {person.fecha_desap || "Sin registro"}
            </p>
            <p
              className={clsx(
                "mt-5 bg-vad-black px-3 py-2 text-center text-sm font-semibold !leading-normal tracking-normal text-white ",
                robotoMono.className
              )}
            >
              LOS REGISTROS QUE SÍ CUENTAN A ESTA PERSONA
            </p>
            <p
              className={clsx(
                "mt-3 w-full border-b border-b-vad-gray text-center text-xs font-light !leading-normal tracking-normal text-vad-gray",
                robotoMono.className
              )}
            >
              SE ENCONTRÓ EN:
            </p>
            <div className="mt-2 flex w-full flex-col items-start justify-center">
              {person.rnped === "1" && (
                <div className="mt-1 flex flex-row">
                  <img
                    className="ml-2 w-[18px]"
                    src="assets/images/blue.svg"
                    alt=""
                  />
                  <span
                    className={clsx(
                      "ml-1 w-full text-left text-xs font-normal !leading-normal tracking-normal text-vad-gray",
                      robotoMono.className
                    )}
                  >
                    RNPED 2018
                  </span>
                </div>
              )}
              {person.rnpdno_json === "1" && (
                <div className="mt-1 flex flex-row">
                  <img
                    className="ml-2 w-[18px]"
                    src="assets/images/yellow.svg"
                    alt=""
                  />
                  <span
                    className={clsx(
                      "ml-1 w-full text-left text-xs font-normal !leading-normal tracking-normal text-vad-gray",
                      robotoMono.className
                    )}
                  >
                    5/agosto/2023
                  </span>
                </div>
              )}
              {person.rnpdno_csv === "1" && (
                <div className="mt-1 flex flex-row">
                  <img
                    className="ml-2 w-[18px]"
                    src="assets/images/red.svg"
                    alt=""
                  />
                  <span
                    className={clsx(
                      "ml-1 w-full text-left text-xs font-normal !leading-normal tracking-normal text-vad-gray",
                      robotoMono.className
                    )}
                  >
                    22/agosto/2023
                  </span>
                </div>
              )}
              {person.bg_1 === "1" && (
                <div className="mt-1 flex flex-row">
                  <img
                    className="ml-2 w-[18px]"
                    src="assets/images/green.svg"
                    alt=""
                  />
                  <span
                    className={clsx(
                      "ml-1 w-full text-left text-xs font-normal !leading-normal tracking-normal text-vad-gray",
                      robotoMono.className
                    )}
                  >
                    14/dic/2023
                  </span>
                </div>
              )}
              {person.bg_2 === "1" && (
                <div className="mt-1 flex flex-row">
                  <img
                    className="ml-2 w-[18px]"
                    src="assets/images/purple.svg"
                    alt=""
                  />
                  <span
                    className={clsx(
                      "ml-1 w-full text-left text-xs font-normal !leading-normal tracking-normal text-vad-gray",
                      robotoMono.className
                    )}
                  >
                    1/mar/2024
                  </span>
                </div>
              )}
            </div>
          </Modal.Body>
        </Modal>
        <div
          className={clsx(
            "mb-7 mt-14 flex flex-row items-center text-sm font-light !leading-normal tracking-normal text-vad-black lg:text-base xl:text-lg",
            robotoMono.className
          )}
        >
          <MdOutlineKeyboardDoubleArrowLeft
            className="mr-2 cursor-pointer text-xl"
            onClick={() => setPage(0)}
          />
          <MdOutlineKeyboardArrowLeft
            className="mr-2 cursor-pointer text-xl"
            onClick={() => setPage(page === 0 ? 0 : page - 1)}
          />
          {page * size + 1}-
          {page === Math.floor(count / size) ? count : page * size + 30} de{" "}
          {count}
          <MdOutlineKeyboardArrowRight
            className="ml-2 cursor-pointer text-xl"
            onClick={() =>
              setPage(
                page === Math.floor(count / size)
                  ? Math.floor(count / size)
                  : page + 1
              )
            }
          />
          <MdOutlineKeyboardDoubleArrowRight
            className="ml-2 cursor-pointer text-xl"
            onClick={() => setPage(Math.floor(count / size))}
          />
        </div>
        <div className="mb-16 mt-10 flex items-center justify-center lg:mb-0">
          <Link
            href="/que-podemos-hacer"
            className={clsx(
              "mb-5 mt-14 cursor-pointer text-center text-base font-semibold uppercase !leading-normal tracking-normal text-vad-yellow underline underline-offset-4 lg:text-lg xl:text-xl",
              robotoMono.className
            )}
          >
            ¿QUÉ HAGO SI EL REGISTRO QUE BUSCO APARECE BORRADO O ES INCORRECTO?
          </Link>
        </div>
      </div>
    </div>
  );
}
