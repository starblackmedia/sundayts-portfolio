// components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: <Twitter className="h-5 w-5" />,
    },
    {
      name: "Email",
      url: "mailto:your@email.com",
      icon: <Mail className="h-5 w-5" />,
    },
  ];

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SundayTS
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400">
              Building digital experiences that matter.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  {link.icon}
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Get in Touch</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">your@email.com</li>
              <li className="text-gray-600 dark:text-gray-400">+1 (123) 456-7890</li>
            </ul>
            <Button asChild variant="outline" className="mt-4">
              <Link href="/contact">Contact Form</Link>
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Newsletter</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Subscribe to my newsletter for updates.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-gray-500 dark:text-gray-400"
        >
          <p>© {currentYear} SundayTS. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}