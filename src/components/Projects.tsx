// components/Projects.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowRight, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

interface ProjectsProps {
  className?: string;
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    title: "Starblack Media Academy",
    description: "A modern, responsive portfolio built with Next.js, TypeScript, and Tailwind CSS featuring dark mode and animations.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Paystack"],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "/images/starblackmedia.JPG",
    featured: true
  },
  {
    title: "Gbeduloaded",
    description: "Full-stack e-commerce solution with product listings, cart functionality, and secure checkout.",
    tags: ["React", "Node.js", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "/images/gbedu.JPG",
    featured: true
  },
  {
    title: "Starblack Media",
    description: "Productivity application with drag-and-drop interface, task categorization, and progress tracking.",
    tags: ["Flutter", "Firebase", "Dart"],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "/images/starblack-2.JPG",
    featured: true
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather forecasting application with location detection and interactive maps.",
    tags: ["React", "OpenWeather API", "Leaflet"],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "/images/weather-app.jpg"
  },
  {
    title: "Recipe Finder",
    description: "Recipe search engine with filtering by dietary restrictions and ingredient availability.",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "/images/recipe-app.jpg"
  },
  {
    title: "Fitness Tracker",
    description: "Personal fitness tracking application with workout plans, progress visualization, and social features.",
    tags: ["React Native", "GraphQL", "TypeScript"],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "/images/fitness-app.jpg"
  }
];

export default function Projects({ className, projects = defaultProjects }: ProjectsProps) {
  const [filter, setFilter] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  const filteredProjects = projects.filter(project => 
    (!filter || project.tags.includes(filter)) && 
    (showAll || project.featured)
  );

  const backgroundPatterns = [
    "bg-blue-500/10 dark:bg-blue-600/10",
    "bg-purple-500/10 dark:bg-purple-600/10",
    "bg-pink-500/10 dark:bg-pink-600/10",
    "bg-indigo-500/10 dark:bg-indigo-600/10"
  ];

  return (
    <section id="projects" className={`${className} py-20 relative overflow-hidden`}>
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.5 }}
            animate={{ 
              opacity: [0.4, 0.6, 0.4],
              scale: [1, 1.05, 1],
              x: [0, i % 2 ? 10 : -10, 0],
              y: [0, i % 3 ? -10 : 10, 0]
            }}
            transition={{ 
              duration: 8 + i * 2, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className={`absolute w-96 h-96 rounded-full filter blur-3xl ${backgroundPatterns[i % backgroundPatterns.length]}`}
            style={{ 
              top: `${20 + (i * 20)}%`,
              left: `${15 + ((i * 25) % 70)}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <Badge 
            variant="outline" 
            className="mb-4 py-1.5 px-4 text-sm font-medium"
          >
            My Work
          </Badge>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve specific problems and showcase different skills.
          </p>
        </motion.div>
        
        {/* Filter Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button 
            variant={filter === null ? "default" : "outline"} 
            size="sm"
            onClick={() => setFilter(null)}
            className="rounded-full"
          >
            All
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="rounded-full">
                <Filter className="h-4 w-4 mr-2" />
                Filter by Tech
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              {allTags.map(tag => (
                <DropdownMenuItem 
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={filter === tag ? "bg-blue-50 dark:bg-blue-900/20" : ""}
                >
                  {tag}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col overflow-hidden border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 shadow-sm hover:shadow-xl p-0">
                  {project.imageUrl && (
                    <div className="relative w-full h-48 overflow-hidden group">
                      <Image
                        src={project.imageUrl}
                        alt={`Screenshot of ${project.title} project`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                        <div className="flex gap-2">
                          {project.githubUrl && (
                            <Button 
                              variant="secondary" 
                              size="icon"
                              className="h-8 w-8 rounded-full bg-white/90 hover:bg-white"
                              asChild
                            >
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`GitHub repository for ${project.title}`}>
                                <Github className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                          {project.liveUrl && (
                            <Button 
                              variant="secondary" 
                              size="icon"
                              className="h-8 w-8 rounded-full bg-white/90 hover:bg-white"
                              asChild
                            >
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Live demo for ${project.title}`}>
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  <CardHeader className="pt-4">
                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="mb-4 text-gray-600 dark:text-gray-300 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="secondary"
                          className={`hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors cursor-pointer ${
                            filter === tag ? "bg-blue-200 dark:bg-blue-800" : ""
                          }`}
                          onClick={() => setFilter(tag === filter ? null : tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-3 pb-4 border-t border-gray-100 dark:border-gray-800 mt-auto">
                    {project.githubUrl && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild
                        className="hover:shadow-md transition-shadow"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button 
                        size="sm" 
                        asChild
                        className="hover:shadow-md transition-shadow bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Toggle Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => setShowAll(!showAll)}
            className="group relative overflow-hidden border-2 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
          >
            <span className="relative z-10 flex items-center">
              {showAll ? "Show Featured Projects" : "View All Projects"}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}