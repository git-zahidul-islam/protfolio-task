import Image from "next/image";
import logo from "../assets/logo.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#F8F8F8] md:space-y-10 space-y-5">
            <div className="md:pt-16">
            <a href="/" className="text-xl font-bold flex gap-3 items-center justify-center">
            <Image src={logo} alt="logo" width={45} height={45}></Image>
            <h1 className="md:text-[45px] text-[35px] md:block hidden"><span className="font-bold text-[#000000f0]">M</span><span className="font-normal text-[#8a8a8a]">umair</span></h1>
            </a>
            </div>

            {/* menu */}
            <div className="flex items-center gap-3 justify-center flex-wrap">
                <a className="text-xl font-normal block" href="#">Home</a>
                <a className="text-xl font-normal block" href="#">About Me</a>
                <a className="text-xl font-normal block" href="#">Services</a>
                <a className="text-xl font-normal block" href="#">Project</a>
                <a className="text-xl font-normal block" href="#">Testimonials</a>
                <a className="text-xl font-normal block" href="#">Contact</a>
            </div>
            <div className="flex gap-3 items-center justify-center">
                    <FaFacebook size={30}/>
                    <FaTwitter size={30}/>
                    <FaInstagram size={30}/>
                    <FaLinkedin size={30}/>
            </div>
            <div className="bg-[#545454] py-4">
                <h6 className="text-lg font-normal text-center text-white/95">© 2023 <span className="text-[#FD6F00]">Mumair</span> All Rights Reserved , Inc.</h6>
            </div>
        </div>
    );
};

export default Footer;