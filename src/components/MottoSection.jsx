const MottoSection = () => {
  return (
    <div className="px-6 py-16 sm:px-[132px] sm:pt-[117px] sm:pb-16">
        <div className="flex flex-col sm:flex-row sm:justify-between text-white items-center  px-7 sm:pl-[121px] sm:pr-4 py-16 sm:py-0 rounded-[20px] border-2 border-[#828282] backdrop-blur-[150px] bg-gradient-to-b from-gray-light to-gray-dark">
          <div className="flex flex-col items-center sm:items-start sm:w-fit gap-6 ">
            <h2 className="text-[#D66A1E] font-extrabold text-2xl sm:text-5xl">
              Discover new possibilities
            </h2>
            <p className="text-center text-base sm:text-2xl sm:max-w-[440px] font-normal">
              We believe everyone should have access to open & powerful
              financial tools.
            </p>
            <button className="bg-[#232426] px-6 py-3 sm:text-2xl text-[1rem] font-bold text-white rounded-md">
              Explore App
            </button>
          </div>
          <div className="relative max-w-fit mt-16 sm:m-0 sm:top-9">
            <img
              src="/Images/coinEth2.svg"
              className="absolute z-[0] right-[16%] sm:-top-12 w-[100px] sm:w-[175px]"
            />
            <img
              src="/Images/coinEth1.svg"
              className="relative z-[10] top-[48px] w-[200px] sm:w-[350px]"
            />
          </div>
        </div>
      </div>
  )
}

export default MottoSection
