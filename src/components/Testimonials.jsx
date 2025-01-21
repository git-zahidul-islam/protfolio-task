import Image from "next/image";
import testimonialsImage1 from '../assets/testimonials/Ellipse 10.png'

const Testimonials = () => {
    return (
        <section id="testimonials" className="md:w-[80%] w-full mx-auto md:px-0 px-2 md:pb-16 pb-6">
            <div className="space-y-3">
                <h1 className="md:text-[60px] text-[40px] font-semibold text-center">Testimonials</h1>
                <p className="text-xl font-normal md:w-[70%] mx-auto text-center">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>

                {/* reviews */}
                <div className="bg-[#F8F8F8] p-8 flex md:flex-row flex-col items-center gap-6 rounded-md md:w-[75%] w-full mx-auto">
                    <div>
                        <Image src={testimonialsImage1} alt="review images" width={230} height={230}></Image>
                    </div>
                    {/* text */}
                    <div>
                    <p>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.</p>
                    <p className="font-semibold">Name</p>
                    <p>CEO</p>
                    </div>
                </div>
                
                {/* slider indecadtor */}
                <div className="flex justify-center items-center gap-2 pt-8">
                    <div className="h-[16px] w-[55px] rounded-lg bg-[#D9D9D9]"></div>
                    <div className="h-[16px] w-[55px] rounded-lg bg-[#FD6F00]"></div>
                    <div className="h-[16px] w-[55px] rounded-lg bg-[#D9D9D9]"></div>
                    <div className="h-[16px] w-[55px] rounded-lg bg-[#D9D9D9]"></div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;