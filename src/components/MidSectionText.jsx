const MidSectionText = ({ text, heading, para1, para2 }) => {
  return (
    <div className="text-left sm:max-w-[477px]" >
      <h3 className="text-gray-text text-lg font-normal mb-6">{text}</h3>
      <h2 className="text-2xl font-extrabold mb-10">{heading}</h2>
      <p className="text-gray-text text-base font-normal mb-6">{para1}</p>
      <p className="text-gray-text text-base font-normal mb-6">{para2}</p>
      <button className="bg-[#232426] px-6 py-3  rounded-sm sm:text-2xl text-[1rem] font-bold text-white">
        Learn More
      </button>
    </div>
  );
};

export default MidSectionText;
