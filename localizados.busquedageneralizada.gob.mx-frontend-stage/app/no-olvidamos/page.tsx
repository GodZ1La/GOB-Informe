"use client";

import InfoGrafiaView from "../views/InfoGrafiaView";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar className="bg-transparent" />
      <InfoGrafiaView />
    </>
  );
}
