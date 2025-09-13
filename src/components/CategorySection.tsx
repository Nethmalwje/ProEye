// const projects = [
//   {
//     id: 1,
//     title: "Lotus Tower",
//     location: "Colombo, Sri Lanka",
//     category: "Commercial",
//     image: "/images/lotus-tower.jpg",
//     description:
//       "The tallest tower in South Asia, built for telecommunication and tourism.",
//   },
//   {
//     id: 2,
//     title: "Altair",
//     location: "Colombo, Sri Lanka",
//     category: "Residential",
//     image: "/images/altair.jpg",
//     description:
//       "Iconic twin tower apartments designed by architect Moshe Safdie.",
//   },
//   {
//     id: 3,
//     title: "Shangri-La Hotel",
//     location: "Colombo, Sri Lanka",
//     category: "Hospitality",
//     image: "/images/shangri-la.jpg",
//     description: "Five-star luxury hotel overlooking the Galle Face Green.",
//   },
// ];

// import { motion } from "framer-motion";
// // import { Link } from "react-router-dom";

// type Project = {
//   id: number | string;
//   title: string;
//   location: string;
//   category: string;
//   image: string;
//   description: string;
// };

// type CategorySectionProps = {
//   projects: Project[];
// };

// const CategorySection: React.FC<CategorySectionProps> = () => {
//   // group projects by category inside the component
//   const groupedProjects: Record<string, Project[]> = projects.reduce(
//     (acc: Record<string, Project[]>, project: Project) => {
//       if (!acc[project.category]) {
//         acc[project.category] = [];
//       }
//       acc[project.category].push(project);
//       return acc;
//     },
//     {}
//   );

//   return (
//     <div className="mx-auto max-w-7xl px-4">
//       {Object.entries(groupedProjects).map(([category, items], idx) => (
//         <div key={idx} className="mb-10">
//           {/* Category title */}
//           <motion.h2
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="text-xl font-bold mb-4"
//           >
//             {category}
//           </motion.h2>

//           {/* Cards grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {items.slice(0, 3).map((item, i) => (
//               <motion.div
//                 key={item.id}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: i * 0.1 }}
//                 className="rounded-2xl shadow-md overflow-hidden bg-white hover:shadow-xl hover:scale-[1.02] transition transform"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-40 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold">{item.title}</h3>
//                   <p className="text-sm text-gray-500">{item.location}</p>
//                   <p className="text-sm text-blue-600 font-medium">
//                     {item.category}
//                   </p>
//                   <p className="text-sm text-gray-600 mt-1 line-clamp-2">
//                     {item.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* View More Button */}
//           <div className="mt-4">
//             {/* <Link to={`/category/${category}`}> */}
//             <button className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition">
//               View More
//             </button>
//             {/* </Link> */}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CategorySection;
