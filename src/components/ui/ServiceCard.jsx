import Image from "next/image";

const ServiceCard = ({descriptions,image,height,width,title}) => {
    return (
        <div className="bg-[#F8F8F8] md:block flex flex-col items-center justify-center rounded-md space-y-3 px-3 py-8 hover:bg-[#f3efef] transition-all duration-700 ease-in-out">
            <Image src={image} alt="skill images" width={width} height={height}></Image>
            <h4 className="md:text-2xl text-xl font-semibold">{title}</h4>
            <p className="text-base text-black/70">{descriptions}</p>
        </div>
    );
};

export default ServiceCard;