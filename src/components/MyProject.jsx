import Image from "next/image";
// images import
import pro1p1 from '../assets/projects/pro1p1.png'
import pro1p2 from '../assets/projects/pro1p2.png'
import pro2p1 from '../assets/projects/pro2p1.png'
import pro2p2 from '../assets/projects/pro2p2.png'
import pro3p1 from '../assets/projects/pro3p1.png'
import pro3p2 from '../assets/projects/pro3p2.png'


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

                <div className="md:mt-8 mt-4 grid md:grid-cols-3 grid-cols-1 gap-5">
                    {/* project 01 */}
                    <div className="space-y-3 py-8">
                        <div className="bg-[#FFEBDB] flex h-[490px] justify-end pr-4 relative rounded-md">
                            <Image src={pro1p1} alt="skill images" width={240} height={350}></Image>
                            <Image className="shadow-sm absolute -bottom-1 md:right-24 right-11" src={pro1p2} alt="skill images" width={250} height={590}></Image>
                        </div> 
                        <h4 className="md:text-xl text-lg font-normal text-[#FD6F00]">Web Design</h4>
                        <p className="md:text-2xl text-xl  text-black/90">AirCalling Landing Page Design </p>
                    </div>
                    {/* project 02 */}
                    <div className="space-y-3 py-8">
                        <div className="bg-[#FFEBDB] flex h-[490px] justify-end pr-4 relative rounded-md">
                            <Image src={pro2p1} alt="skill images" width={240} height={355}></Image>
                            <Image className="shadow-sm absolute -bottom-1 md:right-24 right-11" src={pro2p2} alt="skill images" width={250} height={590}></Image>
                        </div> 
                        <h4 className="md:text-xl text-lg font-normal text-[#FD6F00]">Web Design</h4>
                        <p className="md:text-2xl text-xl  text-black/90">Business Landing Page Design</p>
                    </div>
                    {/* project 01 */}
                    <div className="space-y-3 py-8">
                        <div className="bg-[#FFEBDB] flex h-[490px] justify-end pr-4 relative rounded-md">
                            <Image src={pro3p1} alt="skill images" width={240} height={350}></Image>
                            <Image className="shadow-sm absolute -bottom-1 md:right-24 right-11" src={pro3p2} alt="skill images" width={250} height={590}></Image>
                        </div> 
                        <h4 className="md:text-xl text-lg font-normal text-[#FD6F00]">Web Design</h4>
                        <p className="md:text-2xl text-xl  text-black/90">Ecom Web Page Design </p>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default MyProject;