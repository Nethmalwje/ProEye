"use client";
import { ProjectsPage } from "@/components/ProjectsPage";
import { motion } from "framer-motion";

import {
  ChevronRight,
  XIcon,
  MenuIcon,
  Section,
  MapPin,
  Phone,
  Facebook,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function ProjectNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    ["About", "about"],
    ["Services", "services"],
    ["Values", "values"],
    ["Founder", "founder"],
    ["Experts", "experts"],
    // ["Projects", "projects"],
    // ["Contact", "contact"],
  ];

  return (
    <div
      className="fixed top-0 inset-x-0 z-40 border-b border-white/10
                  backdrop-blur bg-black/40"
    >
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/#home" className="font-semibold tracking-tight text-white">
          <div className="flex">
            <img
              src="images/logo.png"
              alt="logo image"
              className="w-6 md:w-8 h-auto rounded-lg "
            />
            {/* <div>
              <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-amber-300 bg-clip-text text-transparent">
                PROEYE
              </span>
            </div> */}
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm text-white/80 absolute left-1/2 transform -translate-x-1/2">
          {links.map(([label, id]) => (
            <Link
              key={id}
              href={`/#${id}`}
              className="hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            key="6"
            href={`/projects`}
            className="hover:text-white transition-colors"
          >
            Projects
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm
                     text-white/90 hover:bg-white/10"
        >
          Get in touch <ChevronRight className="size-4" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur">
          <div className="flex flex-col px-4 py-3 space-y-2 text-white/80 text-sm">
            {links.map(([label, id]) => (
              <a
                key={id}
                href={`/#${id}`}
                className="py-2 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)} // close on click
              >
                {label}
              </a>
            ))}
            <Link
              key="6"
              href={`/projects`}
              className="hover:text-white transition-colors"
            >
              Projects
            </Link>
            {/* CTA for mobile */}
            <a
              href="#contact"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Get in touch <ChevronRight className="size-4" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const CONTACT = {
    address: "No 116/25, Lake Round Road, Kurunegala",
    phones: ["+94 71 40 70 403", "+94 77 78 13 170"],
    emails: ["info@proeye.lk", "anurudddhahmk@gmail.com"],
    facebook: "https://www.facebook.com/proeye.structuralengineer",
    website: "https://www.proeye.lk",
  };
  return (
    <div>
      <div className="min-h-screen text-white bg-gradient-to-br from-black via-[#061c3f] to-black ">
        <ProjectNav />

        <ProjectsPage />

        {/* ===== FOOTER ===== */}
        <footer className="mt-10 border-t border-white/10 bg-black/30">
          <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-white/70 flex flex-col md:flex-row items-center justify-between gap-4">
            <span>
              © {new Date().getFullYear()} PROEYE Consultants (Pvt) Ltd
            </span>
            <a
              className="hover:underline"
              href={CONTACT.website}
              target="_blank"
              rel="noreferrer"
            >
              www.proeye.lk
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
