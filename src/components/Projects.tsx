"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowRight, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Timeline } from "@/components/ui/timeline";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean;
  year?: string;
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
    featured: true,
    year: "2023"
  },
  {
    title: "Gbeduloaded",
    description: "Full-stack e-commerce solution with product listings, cart functionality, and secure checkout.",
    tags: ["React", "Node.js", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "/images/gbedu.JPG",
    featured: true,
    year: "2023"
  },
  {
    title: "Starblack Media",
    description: "Productivity application with drag-and-drop interface, task categorization, and progress tracking.",
    tags: ["Flutter", "Firebase", "Dart"],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "/images/starblack-2.JPG",
    featured: true,
    year: "2022"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather forecasting application with location detection and interactive maps.",
    tags: ["React", "OpenWeather API", "Leaflet"],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "/images/weather-app.jpg",
    year: "2022"
  },
  {
    title: "Recipe Finder",
    description: "Recipe search engine with filtering by dietary restrictions and ingredient availability.",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "/images/recipe-app.jpg",
    year: "2021"
  },
  {
    title: "Fitness Tracker",
    description: "Personal fitness tracking application with workout plans, progress visualization, and social features.",
    tags: ["React Native", "GraphQL", "TypeScript"],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "/images/fitness-app.jpg",
    year: "2021"
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

  // Prepare timeline data
  const timelineData = filteredProjects.map(project => ({
    title: project.year || "Other",
    content: (
      <div className="p-6 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-sm">
        <div className="flex items-start gap-4">
          {project.imageUrl && (
            <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src={project.imageUrl}
                alt={`Screenshot of ${project.title} project`}
                fill
                className="object-cover"
                sizes="100px"
              />
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span 
                  key={tag} 
                  className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              {project.githubUrl && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild
                  className="text-sm"
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
                  className="text-sm"
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }));

  return (
    <section id="projects" className={`${className} py-20 relative overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/30 dark:to-blue-950/20 pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute left-0 top-0 h-full w-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" fillOpacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
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
            Project Timeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A chronological journey through my key projects, showcasing my growth and technical evolution.
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
                  onClick={() => setFilter(tag === filter ? null : tag)}
                  className={filter === tag ? "bg-blue-50 dark:bg-blue-900/20" : ""}
                >
                  {tag}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </motion.div>

        {/* Timeline Component */}
        <Timeline data={timelineData} />

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