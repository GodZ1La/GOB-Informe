// @ts-nocheck
"use client";

import { useEffect } from "react";

import "animate.css";

import AOS from "aos";
import "aos/dist/aos.css";

import "react-tooltip/dist/react-tooltip.css";

import Navbar from "./components/Navbar";
import Header from "./views/Header";
import Buscador from "./views/Buscador";
import Credits from "./views/Credits";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="bg-cs-light-yellow">
      <Navbar className={"bg-[#FBFEF2]"} />
      <Header />
      <Buscador />
      <Credits />
      <Footer />
    </main>
  );
}
