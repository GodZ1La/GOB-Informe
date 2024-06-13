"use client";

import React, { useState, useEffect } from "react";
import SearchComponent from "../components/search";
import jsonData from "@/public/data/data.json";

interface NamesData {
  name: string[];
  institutes: string[];
}

export default function SearchBar() {
  let dataEmpty = { name: [], institutes: [] };
  const [data, setData] = useState<NamesData>(dataEmpty);
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setData(jsonData);
      } catch (error) {}
    };
    fetchData();
  }, []);

  const institutes = data.institutes;
  const names = data.name;
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1929 },
    (_, index) => index + 1930
  );

  return (
    <div className="mt-16 flex w-full items-center justify-center">
      <div className="w-12/12 grid grid-cols-5 gap-10 lg:w-10/12 lg:gap-20 xl:w-8/12">
        <SearchComponent
          label="Nombre"
          placeholder="Escribe el nombre parcial o completo"
          id="Name"
          options={names}
        />

        <SearchComponent
          label="Institución"
          placeholder="Elige una institución"
          id="Institute"
          options={institutes}
        />

        <select>
          <option value="Todos">Todos</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <a
          className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
          href="/download"
        >
          Buscar
        </a>

        <a
          className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
          href="/download"
        >
          Limpiar
        </a>
      </div>
    </div>
  );
}
