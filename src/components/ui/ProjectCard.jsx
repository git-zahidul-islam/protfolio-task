import Image from "next/image";

const ProjectCard = ({title,description,image}) => {
    return (
        <div>
            <Image className="rounded-lg" src={image} width={450} height={448} objectFit="cover" alt="project image 1"></Image>
            <div className="md:mt-5 mt-2">
                <h4 className="md:text-xl text-lg font-normal text-[#FD6F00]">{title}</h4>
                <p className="md:text-2xl text-xl  text-black/90 font-bold">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;