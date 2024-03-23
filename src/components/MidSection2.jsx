import MidSectionText from "./MidSectionText"

const MidSection2 = () => {
  return (
    <div className=" text-white px-6 sm:px-[120px] py-16 flex flex-col sm:flex-row-reverse sm:justify-between items-center sm:gap-[223px] min-h-[100vh]">
        <MidSectionText
          text="Perpetuals"
          heading="Long Volatility"
          para1="Turn Impermanent Loss into Impermanent Gain. Get perpetaul volatility exposure on any asset in the form of a long, short or straddle. Unlike perpetual futures, liquidations are time dependent - protecting traders from unexpected price movements."
          para2="GammaSwap perpetuals are fully collateralized offering non-linear returns that increase as price changes."
        />
        <div className="w-[100vw] sm:w-[632px] h-[623px] sm:h-[100vh] mt-[34px] sm:mt-0 relative sm:absolute sm:left-0 sm:overflow-hidden overflow-y-hidden">
          <img
            src="/Images/coinDollar.svg"
            className="absolute top-[7.75rem] sm:top-[18rem] left-[4.25rem] sm:left-[8rem] sm:w-[400px]"
          />
          <img
            src="/Images/rocket.svg"
            className="absolute right-3 sm:w-[250px] sm:right-18 sm:top-[10rem]"
          />
          <img
            src="/Images/pouch.svg"
            className="absolute right-0 top-[15.5rem] sm:top-[30rem] sm:w-[200px] sm:-right-4"
          />
          <div className="h-[273px] w-[273px] sm:w-[400px] sm:h-[400px] shrink-0 rounded-full bg-[#FF630B] blur-[102px] sm:blur-[150px] absolute bottom-4 sm:-bottom-20 left-0"></div>
        </div>
      </div>
  )
}

export default MidSection2