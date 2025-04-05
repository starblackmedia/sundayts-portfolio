// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl dark:bg-purple-600/20" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl dark:bg-blue-600/20" />
      </div>

      <div className="relative z-10 text-center space-y-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg mx-auto">
            <Image
              src="/images/SundayJoseph.JPG"
              alt="SundayTS Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
            Hi there, I&apos;m
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-100"
        >
          SundayTS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Full-Stack Developer & Flutter Enthusiast
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
        >
          I build exceptional digital experiences with modern technologies and
          attention to detail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 pt-6"
        >
          <Button size="lg" asChild>
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}