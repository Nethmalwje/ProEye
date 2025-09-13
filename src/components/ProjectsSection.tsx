"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// type Project = {
//   id: number;
//   name: string;
//   location: string;
//   category: string;
//   image: string;
// };

export function ProjectsSection() {
  interface Project {
    id: number;
    title: string;
    location: string;
    category: string;
    image: string;
  }
  const projects: Project[] = [
    {
      id: 1,
      title: "Skyline Tower",
      location: "Colombo, Sri Lanka",
      category: "Apartments & Luxary Homes",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Riverside Bridge",
      location: "Kandy, Sri Lanka",
      category: "Apartments & Luxary Homes",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Serenity Residences",
      location: "Kandy, Sri Lanka",
      category: "Hotels, Resturants & Luxary Villas",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Lakeside Villas",
      location: "Kurunegala, Sri Lanka",
      category: "Commercial & Industrial",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Group projects by category
  const groupedProjects = projects.reduce<Record<string, Project[]>>(
    (acc, project) => {
      if (!acc[project.category]) acc[project.category] = [];
      acc[project.category].push(project);
      return acc;
    },
    {}
  );

  return (
    // <section id="projects" className="py-20 bg-gray-900">
    <section id="projects" className="relative max-w-7xl mx-auto py-20">
      <h2 className="text-3xl font-bold mb-4 text-center">
        OUR PROJECTS
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
      </h2>
      {/* Dark blue background */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] to-[#112240]"></div> */}
      {/* Subtle glow effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#cda45e]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-[#1a365d]/30 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-[#0d2b5a]/20 rounded-full blur-[90px]"></div>
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0yNCAzNGgtMnYtNGgydjR6bTAtNnYtNGgtMnY0aDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      {/* Gold accent line */}
      {/* <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#cda45e] to-[#f0c986]"></div> */}
      <div className="container mx-auto px-6 space-y-16">
        {Object.entries(groupedProjects).map(([category, items]) => (
          <div key={category}>
            {/* Category Header */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-sm sm:text-md md:text-xl lg:text-2xl font-bold text-blue-300">
                {category.toUpperCase()}
              </h2>
              {/* <a
                href={`/projects/${category.toLowerCase()}`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition-colors"
              >
                View More
              </a> */}

              {/* <Link
                href="/projects"
                className=" z-50 inline-block  text-white px-5 py-2  font-medium transition-colors hover:bg-amber-400 hover:text-black relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-2 shadow-2xl"
              >
                View More
              </Link> */}
              <Link
                href="/projects"
                className="z-0 inline-block text-white px-2 sm:px-5 py-2 font-medium text-xs md:text-lg relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-2xl
             transition-all duration-800 ease-in-out
             hover:bg-gradient-to-r hover:from-blue-600/80 hover:to-blue-900/80 hover:shadow-lg hover:shadow-blue-900/25 hover:border-white/20"
              >
                View More
              </Link>
            </div>

            {/* Show only 3 projects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.slice(0, 3).map((project, i) => (
                // <motion.div
                //   key={project.id}
                //   initial={{ opacity: 0, y: 30 }}
                //   whileInView={{ opacity: 1, y: 0 }}
                //   viewport={{ once: true }}
                //   transition={{ duration: 0.5, delay: i * 0.1 }}
                //   className="group relative overflow-hidden rounded-2xl bg-gray-800 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                // >
                //   {/* Image */}
                //   <img
                //     src={project.image}
                //     alt={project.name}
                //     className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                //   />

                //   {/* Overlay */}
                //   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90"></div>

                //   {/* Content */}
                //   <div className="absolute bottom-0 left-0 right-0 p-6">
                //     <h3 className="text-xl font-semibold text-white">
                //       {project.name}
                //     </h3>
                //     <p className="text-gray-300">{project.location}</p>
                //   </div>
                // </motion.div>
                <div
                  key={project.id}
                  className="group bg-slate-800/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-86 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* <div className="absolute top-4 left-4">
                      <span className="bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-md text-sm font-medium border border-blue-500/30">
                        {project.category}
                      </span>
                    </div> */}
                  </div>
                  <div className="p-6 bg-slate-800/60 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-lg">{project.location}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* <Link
              href="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition-colors"
            >
              View More
            </Link> */}
          </div>
        ))}
      </div>
    </section>
  );
}
