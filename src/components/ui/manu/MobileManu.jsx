
const MobileManu = ({manuName,address}) => {
    return (
        <>
          <a
          href={address}
          className="block px-4 py-2 relative group dark:text-white"
        >
          {manuName}
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </a>  
        </>
    );
};

export default MobileManu;