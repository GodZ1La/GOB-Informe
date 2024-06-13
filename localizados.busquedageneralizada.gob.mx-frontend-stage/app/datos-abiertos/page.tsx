// @ts-nocheck
"use client";

import { useEffect } from "react";

import "animate.css";

import AOS from "aos";
import "aos/dist/aos.css";

import "react-tooltip/dist/react-tooltip.css";

import Navbar from "../components/Navbar";
import OpenData from "../views/OpenData";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="bg-cs-light-yellow">
      <Navbar className="bg-cs-light-yellow" />
      <OpenData />
      <Footer />
    </main>
  );
}
