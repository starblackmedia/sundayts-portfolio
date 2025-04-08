"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowRight, Code, Sparkles } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] px-4 md:px-12 py-16 overflow-hidden flex items-center">
      {/* Grid Background */}
      <div className={cn(
        "absolute inset-0",
        "[background-size:40px_40px]",
        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        "opacity-50 dark:opacity-30"
      )} />
      
      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      {/* Original Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Corner accent */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-emerald-400 to-cyan-500 rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-8 items-center">
          {/* Left content - Text and buttons */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6 text-center md:text-left"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-sm font-medium">
              <Sparkles className="h-3.5 w-3.5 mr-2" />
              <span>Available for new projects</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">SundayTS</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              Full-Stack Developer
            </h2>
            
            <div className="border-l-4 border-blue-500 pl-4 my-6">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                I build exceptional digital experiences with modern technologies and
                attention to detail. Transforming ideas into elegant, functional solutions.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {["Frontend", "Backend"].map(tech => (
                <div key={tech} className="flex items-center px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm">
                  <Code className="h-3.5 w-3.5 mr-1.5 text-gray-500 dark:text-gray-400" />
                  {tech}
                </div>
              ))}
            </div>
            
            <div className="pt-6 flex flex-wrap gap-4 justify-center md:justify-start">
              <Button size="lg" className="rounded-lg shadow-lg shadow-blue-500/20 bg-blue-600 hover:bg-blue-700 transition-all duration-300" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-lg border-2" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
            
            <div className="flex items-center justify-center md:justify-start gap-2 pt-8">
              <span className="text-sm text-gray-500 dark:text-gray-400">Check out my latest work</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="h-4 w-4 text-blue-500" />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right content - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -z-10 inset-0 blur-sm bg-gradient-to-tr from-blue-400/20 to-purple-500/20 rounded-full transform scale-110" />
              <div className="absolute -z-10 rounded-full w-72 h-72 md:w-80 md:h-80 border-8 border-dashed border-gray-200 dark:border-gray-700 animate-[spin_50s_linear_infinite] opacity-50 transform -translate-x-8 -translate-y-8" />
              
              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden w-64 h-64 md:w-72 md:h-72 border-8 border-white dark:border-gray-800 shadow-2xl">
                <Image
                  src="/images/SundayJoseph.JPG"
                  alt="SundayTS Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 shadow-lg rounded-full px-4 py-2 border-2 border-gray-100 dark:border-gray-700">
                <div className="text-center">
                  <span className="block text-2xl font-bold text-blue-600 dark:text-blue-400">5+</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Years Experience</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}