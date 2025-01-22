"use client"
import Image from "next/image";
import testimonialsImage1 from '../assets/testimonials/Ellipse 10.png';
import testimonialsImage2 from '../assets/testimonials/Ellipse 10.png'; // Add another image for demo
import React from "react";

const Testimonials = () => {
    const reviews = [
        {
            image: testimonialsImage1,
            text: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
            name: "John Doe",
            role: "CEO",
        },
        {
            image: testimonialsImage2,
            text: "Aliquam ultrices sapien nisi, vel tincidunt risus ultricies quis. Fusce mollis eget nunc eget pellentesque. Integer eu nisl vitae ligula tincidunt gravida a a enim.",
            name: "Jane Smith",
            role: "Founder",
        },
        {
            image: testimonialsImage2,
            text: "Aliquam ultrices sapien nisi, vel tincidunt risus ultricies quis. Fusce mollis eget nunc eget pellentesque. Integer eu nisl vitae ligula tincidunt gravida a a enim.",
            name: "Jane Smith",
            role: "Founder",
        },
        {
            image: testimonialsImage2,
            text: "Aliquam ultrices sapien nisi, vel tincidunt risus ultricies quis. Fusce mollis eget nunc eget pellentesque. Integer eu nisl vitae ligula tincidunt gravida a a enim.",
            name: "Jane Smith",
            role: "Founder",
        },
    ];

    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    React.useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000); // Auto-slide every 5 seconds

        return () => clearInterval(interval); // Cleanup the interval on unmount
    }, []);

    return (
        <section id="testimonials" className="md:w-[80%] w-full mx-auto md:px-0 px-2 md:pb-16 pb-6 dark:text-white">
            <div className="space-y-3">
                <h1 className="md:text-[60px] text-[40px] font-semibold text-center">Testimonials</h1>
                <p className="text-xl font-normal md:w-[70%] mx-auto text-center">
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
                </p>

                {/* reviews */}
                <div className="relative md:w-[75%] w-full mx-auto overflow-hidden">
                    <div
                        className="flex transition-transform duration-500"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                className="bg-[#F8F8F8] p-8 flex md:flex-row flex-col items-center gap-6 rounded-md w-full flex-shrink-0 dark:text-black"
                            >
                                <div>
                                    <Image src={review.image} alt="review images" width={230} height={230} />
                                </div>
                                <div>
                                    <p>{review.text}</p>
                                    <p className="font-semibold">{review.name}</p>
                                    <p>{review.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* slider indicators */}
                <div className="flex justify-center items-center gap-2 pt-8">
                    {reviews.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-[16px] w-[55px] rounded-lg cursor-pointer ${
                                currentIndex === index ? "bg-[#FD6F00]" : "bg-[#D9D9D9]"
                            }`}
                        ></div>
                    ))}
                </div>

                
            </div>
        </section>
    );
};

export default Testimonials;
