"use client";
import { motion } from "framer-motion";
import { HeroHighlight } from "../../components/ui/hero-highlight";
import { Mainwelcometext } from "./main-text";

export function MainWelcome() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="min-h-screen flex flex-col items-center justify-center px-4 text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        <Mainwelcometext/>
      </motion.h1>
    </HeroHighlight>
  );
}
