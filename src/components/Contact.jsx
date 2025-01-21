const Contact = () => {
    return (
        <div id="contact">
            <h1 className="md:text-[60px] text-[35px] font-semibold">Lets Design Together</h1>
            <p className="text-xl font-normal">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
            <div>
                <input type="text" name="contact" id="contact" placeholder="Enter Your Email" className="p-3 border border-[#AFAFAF]"/>
                <button className="px-6 py-2 bg-[#FD6F00] text-white/90 rounded-md">Contact Me</button>
            </div>
        </div>
    );
};

export default Contact;