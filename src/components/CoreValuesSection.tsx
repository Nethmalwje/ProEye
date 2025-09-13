import React from "react";
import {
  CheckCircleIcon,
  UserIcon,
  BriefcaseIcon,
  AwardIcon,
  HeartIcon,
  ShieldIcon,
} from "lucide-react";
export function CoreValuesSection() {
  const values = [
    {
      icon: <CheckCircleIcon className="text-blue-400" />,
      title: "Integrity",
      description:
        "We uphold honesty, transparency, and accountability in every relationship and decision.",
    },
    {
      icon: <AwardIcon className="text-blue-400" />,
      title: "Excellence",
      description:
        "Our commitment to high standards ensures consistent quality and reliable performance.",
    },
    {
      icon: <BriefcaseIcon className="text-blue-400" />,
      title: "Innovation",
      description:
        "We apply forward-looking thinking and modern tools to deliver smarter, future-ready solutions.",
    },
    {
      icon: <UserIcon className="text-blue-400" />,
      title: "Precision",
      description:
        "Detail and accuracy form the core of our engineering processes—no shortcuts, no guesswork.",
    },
    {
      icon: <ShieldIcon className="text-blue-400" />,
      title: "Sustainability",
      description:
        "Our designs aim for long-term structural, environmental, and economic resilience.",
    },
    {
      icon: <HeartIcon className="text-blue-400" />,
      title: "Professionalism",
      description:
        "We work with respect, discipline, and responsiveness—building trust through every engagement.",
    },
  ];
  return (
    <section id="values" className="py-20 ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          CORE VALUES
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
          At PROEYE CONSULTANTS, we are guided by core values that define our
          approach and culture across all our operations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex gap-4 p-4 rounded-2xl bg-white/5  shadow-xl"
            >
              <div className="mt-1">{value.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-300">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
