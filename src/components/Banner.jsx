import Image from "next/image";
import bannerImage from "../assets/banner/bannerimg.png"
// react icon
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Button from "./ui/Button";

const Banner = () => {
    return (
        <section className="md:w-[80%] w-full mx-auto md:px-0 px-2 md:py-16 py-6">
            <div className="flex md:flex-row flex-col gap-2">
            <div className="md:space-y-3 space-y-2 md:w-[50%] w-full">
                <p className="md:text-2xl text-lg font-semibold text-[#000000] dark:text-white">Hi I am</p>
                <div>
                    <h4 className="md:text-3xl text-xl text-[#FD6F00]">Muhammad Umair</h4>
                    <div className="md:text-8xl text-4xl font-bold text-[#000000] dark:text-white">
                        <h1>UI & UX</h1>
                        <h1 className="md:text-end">Designer</h1>
                    </div>
                </div>
                <p className="md:text-xl text-lg font-normal md:pt-6 dark:text-white">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                
                <div className="md:pt-6">
                    <Button name={'Hire Me'} address={'#'}/>
                </div>
            </div>


            <div className="md:w-[50%] w-full flex flex-col justify-center items-center space-y-5 relative">
                <Image src={bannerImage} alt="banner image" width={420} height={510}></Image>
                <div className="flex gap-3 items-center dark:text-white">
                    <FaFacebook size={30}/>
                    <FaTwitter size={30}/>
                    <FaInstagram size={30}/>
                    <FaLinkedin size={30}/>
                </div>
                <div className="h-[70px] w-[40%] bg-[#FD6F00] opacity-70 absolute top-10 right-30"></div>
            </div>
        </div>
        </section>
    );
};

export default Banner;