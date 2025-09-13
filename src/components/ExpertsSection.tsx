import React from "react";

const teamMembers = [
  {
    name: "Madhuransi Weerasekara",
    image: "/images/madhuransi.png", // replace with your image path
    qualifications:
      "B.SC.ENG.(HONS), C.ENG, M.SC. ENG. (GEOTECHNICAL - RDN), MIE(SL), AMSSE(SL)",
    role: "Consultant Structural Engineer",
  },
  {
    name: "Asanaka Piyasena",
    image: "/images/asanaka.png",
    qualifications:
      "B.SC.ENG.(HONS), C.ENG, PG DIP (BUILDING SERVICES), MIE(SL), AMSSE(SL)",
    role: "Construction Management Expert",
  },
  {
    name: "Aye Aye Khaing",
    image: "/images/ayeaye.png",
    qualifications:
      "B.ENG. (HONS) – MYANMAR, M. ENG – MYANMAR, MASTER (SPECIAL) – FRANCE",
    role: "Civil / Structural Engineer",
  },
];

// export function TeamSection() {
//   return (
//     <section id="team" className="max-w-6xl mx-auto">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold mb-4 text-center">
//           OUR EXPERTS
//           <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               className="max-w-md lg:max-w-xl mx-auto bg-gradient-to-b from-white/5 to-white/10 rounded-xl shadow-lg overflow-hidden text-center p-6 hover:scale-105 transition-transform duration-300 justify-items-center"
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-1/3 md:w-2/3 h-auto object-cover rounded-lg mb-4"
//               />
//               <h3 className="text-xl font-semibold text-white">
//                 {member.name}
//               </h3>
//               <p className="text-gray-400 text-sm mt-2 leading-relaxed">
//                 {member.qualifications}
//               </p>
//               <p className="mt-4 text-blue-300 font-semibold uppercase tracking-wide text-sm">
//                 {member.role}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
export function TeamSection() {
  return (
    <section id="team" className="max-w-6xl mx-auto">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center">
          OUR EXPERTS
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:[&>*:nth-child(3)]:col-start-1 md:[&>*:nth-child(3)]:col-end-3 md:[&>*:nth-child(3)]:justify-self-center lg:[&>*:nth-child(3)]:col-start-auto lg:[&>*:nth-child(3)]:col-end-auto lg:[&>*:nth-child(3)]:justify-self-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="max-w-md lg:max-w-xl mx-auto bg-gradient-to-b from-white/5 to-white/10 rounded-xl shadow-lg overflow-hidden text-center p-6 hover:scale-105 transition-transform duration-300 justify-items-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-1/3 md:w-2/3 h-auto object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white">
                {member.name}
              </h3>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                {member.qualifications}
              </p>
              <p className="mt-4 text-blue-300 font-semibold uppercase tracking-wide text-sm">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
