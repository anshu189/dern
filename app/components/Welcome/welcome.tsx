import React from "react";
import { Spotlight } from "../ui/Spotlight";
import { Button } from "@nextui-org/button";

export function WelcomeScreen() {
  return (
    <div className="h-screen w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="relative flex flex-col min-h-screen items-center justify-center">
        <h1 className="text-[3vw] md:text-[12vw] font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            <span className="green">D</span><span className="gold">ERN</span>
        </h1>
        <p className="white text-4xl font-semibold">Dump <span className="">Waste</span> & <span className="">Earn</span> Coins</p>
        <div className="flex items-center justify-center gap-4 mt-10">
            <Button color="success" variant="shadow" radius="sm" className="font-semibold white text-md">Dump Waste</Button>
            <Button color="warning" variant="light" radius="sm" className="font-medium text-md">How it works?</Button>
        </div>
      </div>
    </div>
  );
}
