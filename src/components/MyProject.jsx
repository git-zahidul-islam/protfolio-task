import Image from "next/image";
// images import
import project1 from '../assets/projects/1st-project.png'
import project2 from '../assets/projects/2nd-project.png'
import project3 from '../assets/projects/3rd-project.png'
import ProjectCard from "./ui/ProjectCard";

const MyProject = () => {
    return (
        <section id="project" className="md:w-[80%] w-full mx-auto md:px-0 px-2 md:pb-16 pb-6">
            <div>
                <h1 className="md:text-[65px] text-[40px] text-center font-semibold text-black/95">Projects</h1>
                <p className="md:text-xl text-lg font-normal text-[#000000f2] md:w-[70%] w-full mx-auto text-center">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>

                <div className="flex justify-center flex-wrap items-center gap-3 md:mt-5 mt-2">
                    <p className="px-5 py-1 font-medium border border-[#545454ca] rounded-md">All</p>
                    <p className="px-5 py-1 font-medium border border-[#545454ca] rounded-md">UI/UX</p>
                    <p className="px-5 py-1 font-medium text-white rounded-md bg-[#FD6F00]">Web Design</p>
                    <p className="px-5 py-1 font-medium border border-[#545454ca] rounded-md">App Design</p>
                    <p className="px-5 py-1 font-medium border border-[#545454ca] rounded-md">Graphic Design</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 justify-items-center place-items-center md:mt-10 mt-4">
                    <ProjectCard image={project1} title={'Web Design'} description={'Ecom Web Page Design'}/>
                    <ProjectCard image={project2} title={'Web Design'} description={'Business Landing Page Design'}/>
                    <ProjectCard image={project3} title={'Web Design'} description={'Ecom Web Page Design '}/>
                </div>
            </div>
        </section>
    );
};

export default MyProject;