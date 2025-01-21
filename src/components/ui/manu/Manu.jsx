const Manu = ({manuName,address}) => {
    return (
        <>
            <a
                className="text-xl font-normal relative group hover:text-[#FD6F00] transition-all duration-300 ease-in-out"
                href={address}
            >
                {manuName}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full group-hover:right-0"></span>
            </a>
        </>
    );
};

export default Manu;