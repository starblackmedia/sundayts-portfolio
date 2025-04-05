// src/app/page.tsx
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Hero />
      <Projects className="bg-white dark:bg-gray-800" />
      <Footer />
    </div>
  );
}