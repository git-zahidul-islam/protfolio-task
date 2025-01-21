const Button = ({address,name}) => {
    return (
        <>
          <button
              href={address}
              className="bg-[#fd6e00ea] px-4 pt-1 pb-[6px] text-white/90 rounded text-xl font-normal transition duration-300 ease-in-out transform hover:bg-[#FD6F00] hover:scale-105"
            >
              {name}
            </button>  
        </>
    );
};

export default Button;