import { motion } from "framer-motion";
import React from "react";
export function FounderSection() {
  return (
    <section className=" ">
      <div className="container mx-auto px-4 xl:px-20 ">
        <h2 className="text-3xl font-bold mb-4 text-center">
          FOUNDER
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8 rounded-lg overflow-hidden">
          <div className="md:w-1/3 w-2/4 ">
            {/* <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="Anuruddha Herath"
              className="w-full h-full object-cover"
            /> */}
            <img
              src="images/founder.png"
              alt="Anuruddha Herath"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-4 md:w-2/3">
            {/* <h3 className="text-2xl font-bold text-blue-300">
              ANURUDDHA HERATH
            </h3>
            <p className="text-gray-400 mb-4">
              Founder & Chief Executive Officer
            </p> */}
            {/* <div className="text-sm font-bold text-white bg-white/10 px-4 py-2 rounded inline-block font-poppins mb-4">
              FOUNDER
            </div> */}
            <h1 className="text-2xl lg:text-4xl  font-extrabold tracking-tight bg-gradient-to-r from-amber-100 via-amber-300 to-amber-300 bg-clip-text text-transparent font-poppins">
              ANURUDDHA HERATH
            </h1>
            <div className="space-y-2">
              <p className="text-white/80 text-xs md:text-sm font-medium font-poppins mb-4">
                B.SC.ENG.(HONS), C.ENG, M.PHIL (RDN.), MIE(SL),
                <br />
                AMSSE(SL), GREEN(SL)(AP)
              </p>
              {/* <p className="text-white/80 text-sm font-medium font-poppins">
                AMSSE(SL), GREEN(SL)(AP)
              </p> */}
            </div>
            <h3 className="text-md md:text-xl font-bold text-blue-300 uppercase tracking-wide font-poppins mb-4">
              DIRECTOR / CHIEF STRUCTURAL ENGINEER
            </h3>

            <p className="text-gray-300 mb-4 text-sm  md:text-md  text-justify">
              Anuruddha Herath is a Chartered Civil & Structural Engineer and
              the visionary founder behind Proeye Consultants (Pvt) Ltd. A proud
              graduate of the University of Moratuwa, He has built a reputation
              for delivering innovative and dependable structural solutions
              across Sri Lanka.
            </p>
            <p className="text-gray-300 mb-4 text-sm  md:text-md  text-justify">
              With hands-on experience at some of the country&apos;s most
              reputed structural design firms, Anuruddha went on to earn his
              Chartered status in 2022 — the same year he launched Proeye
              Consultants with a bold mission: to redefine structural design
              through precision, integrity, and forward-thinking engineering.
              Since its inception, he has led the design and delivery of 350+
              diverse projects, earning the trust of clients through a deep
              commitment to quality, safety, and sustainability. He is currently
              pursuing his M.Phil. at the University of Moratuwa, specializing
              in lateral load resisting systems for high-rise buildings,
              reinforcing his dedication to advancing the field.
            </p>
            <p className="text-gray-300 text-sm  md:text-md  text-justify">
              Anuruddha is a licensed designer for intermediate-rise buildings
              in Sri Lanka and continues to push the boundaries of what
              structural engineering can achieve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
