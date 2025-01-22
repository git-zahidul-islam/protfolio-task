const Manu = ({ manuName, address }) => {
    const handleScroll = (e) => {
      e.preventDefault(); // Prevent the default anchor behavior
      const targetElement = document.querySelector(address);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
  
    return (
      <>
        <a
          className="text-xl font-normal relative group hover:text-[#FD6F00] transition-all duration-300 ease-in-out dark:text-white"
          href={address}
          onClick={handleScroll} // Attach the handler here
        >
          {manuName}
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black dark:bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:right-0"></span>
        </a>
      </>
    );
  };
  
  export default Manu;
  