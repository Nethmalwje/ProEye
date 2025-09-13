import React from "react";
import {
  BuildingIcon,
  ClipboardCheckIcon,
  HardHatIcon,
  RulerIcon,
  PenToolIcon,
  HomeIcon,
} from "lucide-react";
export function ServicesSection() {
  const services = [
    {
      title: "Structural Design & Detailing",
      desc: "Buildings and infrastructure with practical, code-compliant solutions.",
      icon: <HardHatIcon size={40} className="text-blue-400" />,
    },
    {
      title: "Stability Assessments & Reviews",
      desc: "Independent assessments and structural reviews of existing buildings.",
      icon: <ClipboardCheckIcon size={40} className="text-blue-400" />,
    },
    {
      title: "Construction Management",
      desc: "End-to-end project execution with quality, safety, and schedule focus.",
      icon: <BuildingIcon size={40} className="text-blue-400" />,
    },
    {
      title: "Consortium Consultancy",
      desc: "Integrated multidisciplinary expertise for complex projects.",
      icon: <PenToolIcon size={40} className="text-blue-400" />,
    },
    // {
    //   icon: <RulerIcon size={40} className="text-blue-400" />,
    //   title: "STRUCTURAL ENGINEERING ANALYSIS & DESIGN",
    //   description:
    //     "Comprehensive structural analysis and innovative design solutions",
    // },
    // {
    //   icon: <BuildingIcon size={40} className="text-blue-400" />,
    //   title: "CONSTRUCTION MANAGEMENT & SUPERVISION",
    //   description:
    //     "Expert oversight ensuring projects are completed on time and within budget",
    // },
    // {
    //   icon: <ClipboardCheckIcon size={40} className="text-blue-400" />,
    //   title: "QUALITY CONTROL & INSPECTION SERVICES",
    //   description: "Rigorous quality assurance at every stage of construction",
    // },
    // {
    //   icon: <HardHatIcon size={40} className="text-blue-400" />,
    //   title: "PROJECT PLANNING & FEASIBILITY STUDIES",
    //   description:
    //     "Strategic planning to maximize project success and viability",
    // },
    // {
    //   icon: <PenToolIcon size={40} className="text-blue-400" />,
    //   title: "ARCHITECTURAL DESIGN CONSULTING",
    //   description: "Creative design solutions that balance form and function",
    // },
    // {
    //   icon: <HomeIcon size={40} className="text-blue-400" />,
    //   title: "BUILDING INFORMATION MODELING (BIM)",
    //   description:
    //     "Advanced 3D modeling for enhanced project visualization and coordination",
    // },
  ];
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          WE OFFER SPECIALIZED <br />
          <span className="text-blue-300">SERVICES IN:</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8  ">
          {services.map((service, index) => (
            <div
              key={index}
              className="  rounded-lg  hover:shadow-xl transition-shadow  flex flex-col h-full  border border-white/10 bg-white/5 p-6 shadow-xl
                 "
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm flex-grow">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
