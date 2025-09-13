"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  ArrowUpRight,
} from "lucide-react";
import {
  BuildingIcon,
  ClipboardCheckIcon,
  HardHatIcon,
  RulerIcon,
  PenToolIcon,
  HomeIcon,
} from "lucide-react";
import { MenuIcon, XIcon } from "lucide-react";
import { ServicesSection } from "@/components/ServicesSection";
import { CoreValuesSection } from "@/components/CoreValuesSection";
import { MissionVisionSection } from "@/components/MissionVisionSection";
import { AboutSection } from "@/components/AboutSection";
import { HeroSection } from "@/components/HeroSection";
import { FUNCTIONS_CONFIG_MANIFEST } from "next/dist/shared/lib/constants";
import { FounderSection } from "@/components/FounderSection";
import { TeamSection } from "@/components/ExpertsSection";
import { ProjectsSection } from "@/components/ProjectsSection";

import { ProjectsPage } from "@/components/ProjectsPage";

// import CategorySection from "@/components/CategorySection";

/* ========= THEME (dark / blue / gold) ========= */
const brand = {
  primary: "#0B2545", // deep navy
  accent: "#1D4ED8", // blue-600
  gold: "#F5C451", // warm gold
};

// /* ========= CONTENT (unchanged from your first version) ========= */
// const TAGLINE = "Structural Excellence, Delivered with";

// const WHO_WE_ARE = `PROEYE Consultants (Pvt.) Ltd. is an emerging force in structural engineering consultancy, led by experienced Chartered Structural Engineers redefining how structures are envisioned, designed, and delivered. With deep technical knowledge and a forward-thinking approach, we serve a diverse portfolio of projects—balancing innovation with practicality, quality with efficiency, and design ambition with structural integrity.`;

// const SERVICES = [
//   {
//     title: "Structural Design & Detailing",
//     desc: "Buildings and infrastructure with practical, code-compliant solutions.",
//     icon: <HardHatIcon size={40} className="text-blue-400" />,
//   },
//   {
//     title: "Stability Assessments & Reviews",
//     desc: "Independent assessments and structural reviews of existing buildings.",
//     icon: <ClipboardCheckIcon size={40} className="text-blue-400" />,
//   },
//   {
//     title: "Construction Management",
//     desc: "End-to-end project execution with quality, safety, and schedule focus.",
//     icon: <BuildingIcon size={40} className="text-blue-400" />,
//   },
//   {
//     title: "Consortium Consultancy",
//     desc: "Integrated multidisciplinary expertise for complex projects.",
//     icon: <PenToolIcon size={40} className="text-blue-400" />,
//   },
// ];

// const VALUES = [
//   {
//     title: "Integrity",
//     desc: "Honesty, transparency, and accountability in every decision.",
//   },
//   {
//     title: "Innovation",
//     desc: "Forward-looking thinking and modern tools for future-ready solutions.",
//   },
//   {
//     title: "Excellence",
//     desc: "High standards for consistent quality and reliable performance.",
//   },
//   {
//     title: "Precision",
//     desc: "Detail and accuracy—no shortcuts, no guesswork.",
//   },
//   {
//     title: "Professionalism",
//     desc: "Respect, discipline, and responsiveness that builds trust.",
//   },
//   {
//     title: "Sustainability",
//     desc: "Long-term structural, environmental, and economic resilience.",
//   },
// ];

// const VISION = `To redefine structural excellence by blending innovation, precision, and professionalism—elevating expectations in every structure we deliver.`;
// const MISSION = `To provide high-quality structural solutions tailored to each client’s needs. Through expert engineering, practical design, and unwavering professionalism, every project is completed with precision, integrity, and on time—without compromise.`;

// const FOUNDER = {
//   name: "Anuruddha Herath",
//   title: "Director / Chief Structural Engineer",
//   creds:
//     "B.Sc.Eng.(Hons), C.Eng, M.Phill.(RDN.), MIE(SL), AMSSE(SL), GREEN(SL)(AP)",
//   blurb:
//     "Chartered Civil & Structural Engineer and founder of PROEYE Consultants. With 350+ projects delivered, known for innovative, dependable solutions across Sri Lanka.",
// };

// const EXPERTS = [
//   {
//     name: "Madhuransi Weerasekara",
//     role: "Consultant Structural Engineer",
//     creds:
//       "B.Sc.Eng.(Hons), C.Eng, M.Sc. Eng. (Geotechnical - RDN.), MIE(SL), AMSSE(SL)",
//   },
//   {
//     name: "Asanaka Piyasena",
//     role: "Construction Management Expert",
//     creds:
//       "B.Sc.Eng.(Hons), C.Eng, P.G Dip (Building Services), MIE(SL), AMSSE(SL)",
//   },
//   {
//     name: "Aye Aye Khaing",
//     role: "Civil / Structural Engineer",
//     creds:
//       "B.Eng. (Hons) – Myanmar, M. Eng. – Myanmar, Master (Special) – France",
//   },
// ];

// const PROJECT_CATEGORIES = [
//   {
//     name: "Hotels, Restaurants & Luxury Villas",
//     items: [
//       "Lavendish Hills – Kandy (Additions/Alterations)",
//       "Shades 24–32 Villa Investment – Idalgashinna",
//       "Holiday Resort – Bentota",
//       "Nisson House Luxury Villa – Dikwella",
//       "5-Storied Backpackers Hostel – Weligama",
//       "The Plantations Luxury Villas – Ahangama",
//       "Kikili Villa Luxury Guest House – Galle",
//       "Four-Storey Boutique Hotel – Ella",
//       "Extension to Diyaagala Restaurant – Habarana",
//       "Tavetti Beach 4-Storied Guest House – Galle",
//       "Sundown Lodge – Luxury Guest House – Galle",
//       "Luxury Villa Project – Theldeniya (Additions/Alterations)",
//       "Shima Guni Beach Club – Matara",
//       "Banquet Hall – Randiya Hotels – Panadura",
//       "Luxury Holiday Resort – Kadawatha",
//     ],
//   },
//   {
//     name: "Commercial & Industrial",
//     items: [
//       "Office Building – Kandana",
//       "Façade Modification & Extension – Panadura Sports Club",
//       "Utility Building – ACE Health Care – Horana",
//       "Essential Warehouse – KALA Holdings – Kotahena",
//       "OSDP Plant Extension – Navesta Pharmaceuticals – Horana",
//       "Warehouse & Multipurpose Building – Tropcey Holdings – Kurunegala",
//     ],
//   },
//   {
//     name: "Apartments & Luxury Homes",
//     items: [
//       "4-Storied Apartment – Dehiwala",
//       "Luxury Residence – Mr. Azlam – Galle",
//       "Luxury Residence – Mr. Kusal Mendis – Kotte",
//       "Luxury Residence – Mrs. Pali Wijenayaka – Hokandara",
//       "Luxury Residence – Mr. Thejan – Wattala",
//       "Luxury Residence – Dr. Thilakarathna – Gampaha",
//       "Design & Build – Mr. Kushan – Boralesgamuwa",
//       "Design & Build – Mr. Kushan – Maharagama",
//       "Luxury Residence – Mr. Chaminda Pathirana – Hokandara",
//       "Renovation & Extension – Negombo",
//       "Luxury Residence – Mr. Chamara – Kurunegala",
//       "Luxury Residence – Mr. Sanjeewa Dharmasiri – Kurunegala",
//       "Luxury Residence – Mr. Heshan & Mrs. Geemali – Kadawatha",
//       "Luxury Residence – Mr. Lansakara – Pannala",
//       "Renovation & Extension – Mr. Nalin – Gampola",
//       "Bodhi Chathuparisa Tambapannideepa Building – Mihinthale",
//     ],
//   },
// ];

const CONTACT = {
  address: "No 116/25, Lake Round Road, Kurunegala",
  phones: ["+94 71 40 70 403", "+94 77 78 13 170"],
  emails: ["info@proeye.lk", "anurudddhahmk@gmail.com"],
  facebook: "https://www.facebook.com/proeye.structuralengineer",
  website: "https://www.proeye.lk",
};

/* ========= UI PRIMITIVES (typed, no any) ========= */
type SectionProps = {
  id: string;
  className?: string;
  children: React.ReactNode;
};

function Section({ id, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      {children}
    </section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium
                     border-white/15 text-white/90 bg-white/10"
    >
      {children}
    </span>
  );
}

type CardProps = { title: string; desc?: string; href?: string };

function Card({ title, desc, href }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl
                 hover:bg-white/10 transition-colors"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white/70">
          <ArrowUpRight className="size-5" />
        </span>
      </div>
      {desc && (
        <p className="mt-2 text-white/70 text-sm leading-relaxed">{desc}</p>
      )}
      {href && (
        <a
          href={href}
          className="mt-4 inline-flex items-center gap-2 text-sm text-blue-300 hover:underline"
        >
          Learn more <ChevronRight className="size-4" />
        </a>
      )}
    </motion.div>
  );
}

export function Nav() {
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
        <a href="#home" className="font-semibold tracking-tight text-white">
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
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm text-white/80 absolute left-1/2 transform -translate-x-1/2">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            key="6"
            href={`/projects`}
            className="hover:text-white transition-colors"
          >
            Projects
          </a>
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm
                     text-white/90 hover:bg-white/10"
        >
          Get in touch <ChevronRight className="size-4" />
        </a>

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
                href={`#${id}`}
                className="py-2 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)} // close on click
              >
                {label}
              </a>
            ))}
            <a
              key="6"
              href={`/projects`}
              className="hover:text-white transition-colors"
            >
              projects
            </a>

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
/* ========= PAGE ========= */
export default function ProeyeDarkModern() {
  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-black via-[#061c3f] to-black ">
      <Nav />
      <div className="overflow-x-hidden">
        {/* ===== HERO (dark gradients + glows) ===== */}
        <Section id="home" className="relative isolate overflow-hidden">
          {/* Glows */}
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute left-1/4 top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-amber-400/20 blur-3xl" />
          </div>
          <HeroSection />
        </Section>
        {/* ===== ABOUT ===== */}

        <Section id="about" className="py-20 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 relative z-10 ">
            <AboutSection />
          </div>
        </Section>
        {/* Separator Line */}
        <div className=" border-t border-white/20"></div>

        {/* ===== SERVICES ===== */}
        <Section id="services" className="">
          <div className="mx-auto max-w-7xl px-4">
            <ServicesSection />
          </div>
        </Section>

        {/* ===== VALUES (Vision, Mission, Core) ===== */}
        <Section id="values" className="relative overflow-hidden">
          {/* Background building image */}
          <div className="absolute inset-0 z-0 md:block hidden">
            <img
              src="./images/building.png" // Replace with actual building image path
              alt="Building Background"
              className="w-full max-w-2xl object-center h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>

          <div className="mx-auto max-w-7xl px-4 relative z-10">
            <MissionVisionSection />

            {/* Separator Line */}
            <div className="my-8 border-t border-white/20"></div>
            <CoreValuesSection />
          </div>
        </Section>

        {/* ===== FOUNDER ===== */}

        <div className=" border-t border-white/20"></div>
        <Section id="founder" className="py-20 relative overflow-hidden">
          <FounderSection />
        </Section>

        {/* ===== EXPERTS ===== */}
        <Section id="experts" className="">
          <TeamSection />
        </Section>

        {/* ===== PROJECTS ===== */}
        <Section id="projects" className="py-20">
          <div className=" border-t border-white/20"></div>
          <ProjectsSection />
        </Section>

        {/* ===== CONTACT ===== */}
        <Section id="contact" className="py-20">
          <div className="mx-auto max-w-3xl lg:max-w-7xl px-4">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl font-bold text-amber-300">
                  Let’s work together
                </h2>
                <p className="mt-3 text-white/80 max-w-prose">
                  At PROEYE Consultants, we specialize in structural design,
                  stability assessments, and design reviews with continuous
                  supervision to guarantee quality and reliability.
                </p>

                <div className="mt-6 space-y-3 text-white/85">
                  <div className="flex items-center gap-3">
                    <MapPin className="size-5" />
                    <span>{CONTACT.address}</span>
                  </div>
                  {CONTACT.phones.map((ph) => (
                    <div key={ph} className="flex items-center gap-3">
                      <Phone className="size-5" />
                      <a
                        href={`tel:${ph.replace(/\s+/g, "")}`}
                        className="hover:underline"
                      >
                        {ph}
                      </a>
                    </div>
                  ))}
                  {CONTACT.emails.map((em) => (
                    <div key={em} className="flex items-center gap-3">
                      <Mail className="size-5" />
                      <a href={`mailto:${em}`} className="hover:underline">
                        {em}
                      </a>
                    </div>
                  ))}
                  <div className="flex items-center gap-3">
                    <Facebook className="size-5" />
                    <a
                      href={CONTACT.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>

              <motion.form
                onSubmit={(e) => e.preventDefault()}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl"
              >
                <div className="grid grid-cols-2 gap-4">
                  <label className="text-sm text-white/90">
                    Name
                    <input
                      className="mt-1 w-full rounded-xl border border-white/15 bg-black/20 px-3 py-2
                               text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="text-sm text-white/90">
                    Email
                    <input
                      type="email"
                      className="mt-1 w-full rounded-xl border border-white/15 bg-black/20 px-3 py-2
                               text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>
                <label className="text-sm text-white/90 block mt-4">
                  Message
                  <textarea
                    rows={5}
                    className="mt-1 w-full rounded-xl border border-white/15 bg-black/20 px-3 py-2
                             text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us a bit about your project…"
                  />
                </label>
                <button
                  className="mt-4 inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium text-white"
                  style={{ background: brand.accent }}
                >
                  Send message
                </button>
                <p className="text-xs text-white/60 mt-3">
                  This is a demo form (static export). Link to your form
                  provider or email service in production.
                </p>
              </motion.form>
            </div>
          </div>
        </Section>

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
