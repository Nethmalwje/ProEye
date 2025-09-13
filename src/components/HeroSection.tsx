import React from "react";
import { ChevronDown } from "lucide-react";
const brand = {
  primary: "#0B2545", // deep navy
  accent: "#1D4ED8", // blue-600
  gold: "#F5C451", // warm gold
};
function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="md:inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium
                     border-white/15 text-white/90 bg-white/10"
    >
      {children}
    </span>
  );
}
export function HeroSection() {
  return (
    <section id="home" className="relative w-full h-screen flex items-center">
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div> */}
        {/* <div className="absolute left-1/4 top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" /> */}
        {/* <div className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-amber-400/20 blur-3xl" /> */}
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#061c3f] z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="Modern building"
          className="w-full h-full object-cover "
        />
      </div>
      <div className="container mx-auto  px-6 md:px-24   max-w-8xl relative z-20">
        <div className="max-w-3xl">
          <Chip>Chartered Civil / Structural Engineers</Chip>
          {/* <h1 className="text-4xl md:text-5xl lg:text-6xl mt-4 font-bold mb-4">
            PROEYE CONSULTANTS (PVT) LTD
          </h1> */}
          <h1
            className="mt-2 text-2xl sm:text-3xl md:text-5xl font-extrabold leading-snug
                       text-white drop-shadow-md "
          >
            PROEYE CONSULTANTS <br /> (PVT) LTD
          </h1>

          <h1
            className="hidden md:block mt-4 text-lg md:text-4xl  md:font-extrabold tracking-tight
                           bg-gradient-to-r from-blue-300 via-cyan-200 to-amber-300 bg-clip-text text-transparent"
          >
            Structural Excellence,<br className="hidden md:block"></br>Delivered
            with
          </h1>
          <h1
            className="hidden md:block text-lg md:text-4xl md:font-extrabold tracking-tight
                           bg-gradient-to-r from-amber-100 via-amber-300 to-amber-300 bg-clip-text text-transparent "
          >
            Integrity.
          </h1>
          <h1
            className="block md:hidden sm:font-extrabold mt-4 text-lg md:text-4xl md:font-extrabold tracking-tight
                           bg-gradient-to-r from-blue-300 via-cyan-200 to-amber-300 bg-clip-text text-transparent"
          >
            Structural Excellence,
          </h1>
          <h1
            className="block md:hidden sm:font-extrabold text-lg md:text-4xl md:font-extrabold tracking-tight
                           bg-gradient-to-r from-amber-100 via-amber-300 to-amber-300 bg-clip-text text-transparent "
          >
            Delivered with Integrity.
          </h1>

          {/* <p className="text-xl md:text-2xl font-light mb-8 text-blue-300">
            Structural Excellence Delivered with Integrity
          </p> */}
          <div className="mt-4 md:flex gap-3 block ">
            {/* <a href="#projects">
              <button className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#cda45e] to-[#f0c986] rounded-lg blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <button className="relative bg-[#0a192f] text-white px-8 py-4 rounded-lg">
                  View Projects
                </button>
              </button>
            </a>
            <a href="#contact">
              <button className="px-8 py-4 border border-[#1e3a6d] hover:border-[#cda45e] text-white rounded-lg bg-[#112240] hover:bg-[#1a365d] transition-all duration-300">
                Get in Touch
              </button>
            </a> */}

            <a
              href="#projects"
              className="w-full md:w-auto inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium
                             text-white"
              style={{ background: brand.accent }}
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="w-full md:w-auto mt-4 md:mt-0 inline-flex items-center justify-center rounded-xl px-5 py-3 border border-white/15 font-medium
                             text-white/90 hover:bg-white/10"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      {/* Scroll Down Animation (Mobile Only) */}
      <div className="absolute bottom-6 inset-x-0 flex justify-center 5xl:hidden z-30">
        <a href="#about" className="flex flex-col items-center text-white/70">
          <span className="text-xs mb-1">Scroll</span>
          <ChevronDown
            className="animate-bounce size-6 text-white/80"
            strokeWidth={2}
          />
        </a>
      </div>
    </section>
  );
}
