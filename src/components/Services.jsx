import Image from "next/image";
// images import
import uiux from '../assets/services/Vector.png'
import webDesign from '../assets/services/Layer_1.png'
import appDesign from '../assets/services/Group 18.png'
import graphic from '../assets/services/Vector (1).png'
import ServiceCard from "./ui/ServiceCard";


const Services = () => {
    return (
        <section id="service" className="md:w-[80%] w-full mx-auto md:px-0 px-2 md:pb-16 pb-6">
            <div>
                <h1 className="md:text-[65px] text-[40px] text-center font-semibold text-black/95">Services</h1>
                <p className="md:text-xl text-lg font-normal text-[#000000f2] md:w-[70%] w-full mx-auto text-center">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>

                <div className="md:mt-8 mt-4 grid md:grid-cols-4 grid-cols-2 gap-5">
                    <ServiceCard image={uiux} title={'UI'} descriptions={'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum'} width={67} height={67}/>
                    <ServiceCard image={webDesign} title={'Web Design'} descriptions={'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum'} width={67} height={67}/>
                    <ServiceCard image={appDesign} title={'App Design'} descriptions={'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum'} width={47} height={47}/>
                    <ServiceCard image={graphic} title={'UI'} descriptions={'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum'}
                    width={67} height={67}/>
                </div>
            </div>
        </section>
    );
};

export default Services;