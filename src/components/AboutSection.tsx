import React from "react";
export function AboutSection() {
  return (
    <section id="about" className=" ">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 ">
            <h2 className="text-3xl font-bold mb-6 text-blue-300">
              WHO WE ARE
            </h2>
            <p className="text-gray-300 mb-4">
              PROEYE CONSULTANTS (PVT) LTD is a premier consulting firm
              specializing in structural engineering and construction
              management. Our team of experienced professionals delivers
              exceptional solutions for projects of all sizes.
            </p>
            <p className="text-gray-300 mb-4">
              With deep technical expertise and an unwavering commitment to
              quality, we provide comprehensive consulting services across the
              full project lifecycle. Our approach combines innovative design
              thinking with practical execution, ensuring optimal outcomes for
              all stakeholders.
            </p>
            <p className="text-gray-300">
              We serve clients across various sectors including commercial,
              residential, industrial, and infrastructure development, bringing
              the same level of excellence to every project.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <img
              src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
              alt="Construction site at sunset"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-10 -left-10 bg-blue-900 p-8 rounded-lg shadow-xl md:ml-0 ml-8">
              <div className="text-5xl font-bold text-white">350+</div>
              <div className="text-xl text-blue-300">PROJECTS</div>
            </div>
            <div className="absolute -top-8 -right-4 bg-white p-1 rounded-lg  md:ml-0 ml-8 shadow-2xl">
              <img
                src="images/logo.png"
                alt="Construction site at sunset"
                className="md:w-30 w-18 h-auto rounded-lg "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
