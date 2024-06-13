"use client";

import Lottie from "lottie-react";
import dynamic from "next/dynamic";
import robotAnimation from "@/public/volveradesaparecer_logo.json";
import WrapperFedLeft from "../components/Anim/WeapperFedLeft";
const InfoGrafiaDesktop = dynamic(
  async () => await import("../components/InfoGrafiaDesktop/InfoGrafiaDesktop"),
  {
    loading: () => {
      return (
        <>
          {" "}
          <div className="flex h-screen w-screen items-center justify-center ">
            <div className="h-[320px] w-[320px]">
              <Lottie animationData={robotAnimation} autoPlay={true} />
            </div>
          </div>
        </>
      );
    },
    ssr: false,
  }
);
export default function InfoGrafiaView() {
  return (
    <WrapperFedLeft>
      <InfoGrafiaDesktop />
    </WrapperFedLeft>
  );
}
