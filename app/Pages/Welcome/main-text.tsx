"use client";

import { Button } from "@nextui-org/button";
import Link from "next/link";

export function Mainwelcometext() {

    return (
    <div className="relative flex flex-col items-center justify-center">
        <h1 className="text-[3vw] md:text-[12vw] font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-80">
            <span className="">D</span><span className="">ERN</span>
        </h1>
        <p className="white text-4xl font-semibold">Dump <span className="">Waste</span> & <span className="">Earn</span> Coins</p>
        <div className="flex items-center justify-center gap-4 mt-10">
            <Link href="/Dashboard"><Button color="primary" variant="shadow" radius="sm" className="font-semibold text-md">Dump Waste</Button></Link>
            <Button color="default" variant="light" radius="sm" className="font-medium text-md">How it works?</Button>
        </div>
    </div>
    )
}