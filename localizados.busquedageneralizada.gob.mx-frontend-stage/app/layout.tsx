import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { robotoMono, robotoSerif } from "./utils/fonts";

export const metadata: Metadata = {
  title: "Volver a desaparecer",
  description:
    "Volver a desaparecer es una iniciativa de Data Cívica para trazar el cambio entre los nombres listados en el Registro Nacional de Personas Desaparecidas (RNPDNO), hecho público en agosto de 2023 y la versión publicada en diciembre tras la Estrategia Nacional de Búsqueda Generalizada (el llamado “censo”)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): any {
  return (
    <html lang="en">
      <body
        className={`${robotoSerif.variable} ${robotoMono.variable} bg-[#FBFEF2]`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-ZCW89R53E8" />
    </html>
  );
}
