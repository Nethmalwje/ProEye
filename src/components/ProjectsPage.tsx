import React, { useState } from "react";
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
    category: "Commercial & Industrial",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Lakeside Villas",
    location: "Kurunegala, Sri Lanka",
    category: "Hotels, Resturants & Luxary Villas",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];
// // const categories = ["All", "Commercial", "Residential", "Towers"];
// // export function ProjectsPage({ "data-id": dataId }: { "data-id"?: string }) {
// //   const [activeCategory, setActiveCategory] = useState("All");
// //   const filteredProjects =
// //     activeCategory === "All"
// //       ? projects
// //       : projects.filter((project) => project.category === activeCategory);
// //   return (
// //     <div data-id={dataId} className="min-h-screen  px-6 py-12">
// //       <div className="max-w-6xl mx-auto">
// //         {/* Header */}
// //         <div className="text-center mb-12">
// //           <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wide">
// //             OUR PROJECTS
// //           </h1>
// //           <div className="w-16 h-0.5 bg-blue-500 mx-auto"></div>
// //         </div>
// //         {/* Filter Tabs */}
// //         <div className="flex justify-center mb-12">
// //           <div className="flex gap-1 bg-slate-800 p-1 rounded-lg">
// //             {categories.map((category) => (
// //               <button
// //                 key={category}
// //                 onClick={() => setActiveCategory(category)}
// //                 className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
// //                   activeCategory === category
// //                     ? "bg-blue-600 text-white shadow-lg"
// //                     : "text-gray-400 hover:text-white hover:bg-slate-700"
// //                 }`}
// //               >
// //                 {category}
// //               </button>
// //             ))}
// //           </div>
// //         </div>
// const categories = ["All", "Commercial", "Residential", "Towers"];

// export function ProjectsPage({ "data-id": dataId }: { "data-id"?: string }) {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const filteredProjects =
//     activeCategory === "All"
//       ? projects
//       : projects.filter((project) => project.category === activeCategory);

//   return (
//     <div data-id={dataId} className="min-h-screen px-6 py-12">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wide">
//             OUR PROJECTS
//           </h1>
//           <div className="w-16 h-0.5 bg-blue-500 mx-auto"></div>
//         </div>

//         {/* Responsive Glassmorphism Filter Tabs */}
//         <div className="flex justify-center mb-12 px-2">
//           <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-2 shadow-2xl">
//             {/* Glowing background effect */}
//             <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur opacity-30"></div>

//             <div className="relative flex flex-wrap gap-2 sm:gap-1 justify-center max-w-full">
//               {categories.map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => setActiveCategory(category)}
//                   className={`relative px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 transform active:scale-95 hover:scale-105 whitespace-nowrap ${
//                     activeCategory === category
//                       ? "bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white shadow-lg backdrop-blur-sm border border-white/20 shadow-blue-500/25"
//                       : "text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-white/10 hover:shadow-lg"
//                   }`}
//                 >
//                   {/* Active tab glow effect */}
//                   {activeCategory === category && (
//                     <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-xl blur opacity-60 -z-10"></div>
//                   )}

//                   <span className="relative z-10">{category}</span>

//                   {/* Shimmer effect on active tab */}
//                   {activeCategory === category && (
//                     <div className="absolute inset-0 rounded-xl overflow-hidden">
//                       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] animate-pulse"></div>
//                     </div>
//                   )}
//                 </button>
//               ))}
//             </div>
//           </div>
//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {filteredProjects.map((project) => (
//             <div
//               key={project.id}
//               className="group bg-slate-800/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25"
//             >
//               <div className="relative overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-86 object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute top-4 left-4">
//                   <span className="bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-md text-sm font-medium border border-blue-500/30">
//                     {project.category}
//                   </span>
//                 </div>
//               </div>
//               <div className="p-6 bg-slate-800/60 backdrop-blur-sm">
//                 <h3 className="text-2xl font-bold text-white mb-2">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-400 text-lg">{project.location}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
const categories = [
  "All",
  "Apartments & Luxary Homes",
  "Commercial & Industrial",
  "Hotels, Resturants & Luxary Villas",
];

export function ProjectsPage({ "data-id": dataId }: { "data-id"?: string }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div data-id={dataId} className="min-h-screen px-6 py-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-3xl font-bold text-white mb-4 tracking-wide">
            OUR PROJECTS
          </h1>
          <div className="w-16 h-0.5 bg-blue-500 mx-auto"></div>
        </div>

        {/* Responsive Glassmorphism Filter Tabs */}
        <div className="flex justify-center mb-12 px-2">
          <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-2 shadow-2xl">
            {/* Glowing background effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur opacity-30"></div>

            <div className="relative flex flex-wrap gap-2 sm:gap-3 justify-center max-w-full">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-3 sm:px-3 md:px-6  py-2 sm:py-2 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 transform active:scale-95 hover:scale-105 whitespace-nowrap ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-blue-600/80 to-blue-900/80 text-white shadow-lg backdrop-blur-sm border border-white/20 shadow-blue-900/25"
                      : "text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-white/10 hover:shadow-lg"
                  }`}
                >
                  {/* Active tab glow effect */}
                  {activeCategory === category && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-xl blur opacity-60 -z-10"></div>
                  )}

                  <span className="relative z-10">{category}</span>

                  {/* Shimmer effect on active tab */}
                  {activeCategory === category && (
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] animate-pulse"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 lg:max-w-7xl md:max-w-3xl max-w-xl mx-auto">
        {filteredProjects.map((project) => (
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
              <div className="absolute top-4 left-4">
                <span className="bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-md text-sm font-medium border border-blue-500/30">
                  {project.category}
                </span>
              </div>
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
    </div>
  );
}
