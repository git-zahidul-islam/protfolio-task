"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
// images import
import project1 from "../assets/projects/1st-project.png";
import project2 from "../assets/projects/2nd-project.png";
import project3 from "../assets/projects/3rd-project.png";

// Dynamically import the ProjectCard component
const ProjectCard = dynamic(() => import("./ui/ProjectCard"), {
  loading: () => (
    <div className="w-full h-[300px] bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse flex flex-col items-center justify-center">
      <div className="w-[90%] h-[60%] bg-gray-300 dark:bg-gray-600 rounded-md mb-4"></div>
      <div className="w-[70%] h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
      <div className="w-[50%] h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
    </div>
  ),
});

const MyProject = () => {
  const [selectedCategory, setSelectedCategory] = useState("Web Design");

  // Project data
  const projects = [
    { id: 1, image: project1, title: "Web Design", description: "Ecom Web Page Design", category: "Web Design" },
    { id: 2, image: project2, title: "Web Design", description: "Business Landing Page Design", category: "Web Design" },
    { id: 3, image: project3, title: "Web Design", description: "Portfolio Web Page Design", category: "Web Design" },
    { id: 4, image: project3, title: "UI/UX", description: "Mobile App UI Design", category: "UI/UX" },
    { id: 5, image: project2, title: "UI/UX", description: "Dashboard UI Design", category: "UI/UX" },
    { id: 6, image: project1, title: "App Design", description: "E-commerce App Design", category: "App Design" },
    { id: 7, image: project2, title: "Graphic Design", description: "Graphic Design", category: "Graphic Design" },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="project" className="md:w-[80%] w-full mx-auto md:px-0 px-2 md:pb-16 pb-6">
      <div>
        <h1 className="md:text-[65px] text-[40px] text-center font-semibold text-black/95 dark:text-white">Projects</h1>
        <p className="md:text-xl text-lg font-normal text-[#000000f2] dark:text-white md:w-[70%] w-full mx-auto text-center">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
        </p>

        {/* Category Buttons */}
        <div className="flex justify-center flex-wrap items-center gap-3 md:mt-5 mt-2">
          {["All", "UI/UX", "Web Design", "App Design", "Graphic Design"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-1 font-medium rounded-md ${
                selectedCategory === category
                  ? "text-white bg-[#FD6F00]"
                  : "border border-[#545454ca] hover:text-[#FD6F00] transition-all duration-300 ease-out dark:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 justify-items-center place-items-center md:mt-10 mt-4">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProject;
