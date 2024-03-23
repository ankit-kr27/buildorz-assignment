const Footer = () => {
  return (
    <div className="text-white flex flex-col px-6 sm:px-[120px] overflow-hidden">
        <div className="sm:flex justify-between min-h-[193px]">
          <div>
            <div className="flex gap-2 items-center mb-[50px] sm:mb-6">
              <img src="/Images/Logo.svg" className="w-16" />
              <h2 className="text-[34px] font-bold mb-[4px]">Quick Swap</h2>
            </div>
            <p className="text-base sm:text-lg text-[#808080] mb-[76px] sm:mb-0">
              Oracle Free Perpetual Volatility Trading
            </p>
          </div>
          <div className="flex gap-[100px] sm:gap-[93px] mb-[84px] sm:mb-0">
            <div className="flex flex-col gap-[8px] text-[#808080] text-lg sm:text-2xl font-medium">
              <h3 className="mb-[7px] text-white text-2xl sm:text-[28px] font-bold">Protocol</h3>
              <a href="#">Blog</a>
              <a href="#">Changelog</a>
              <a href="#">Github</a>
              <a href="#">Media Kits</a>
            </div>
            <div className="flex flex-col gap-[8px] text-[#808080] text-lg sm:text-2xl font-medium">
              <h3 className="mb-[7px] text-white text-2xl sm:text-[28px] font-bold">Resources</h3>
              <a href="#">Bounty Program</a>
              <a href="#">Documentation</a>
              <a href="#">Support</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
        <div className="mx-auto sm:mx-0 sm:flex sm:justify-between">
          <div className="flex flex-col items-center gap-[25px] mb-[119px] sm:mb-[284px]">
            <h3 className="text-[28px] sm:text-[34px] font-bold">Community</h3>
            <div className="flex gap-12">
              <a href="#">
                <img className="h-[34px]" src="/Images/twitter.svg" />
              </a>
              <a href="#">
                <img src="/Images/medium.svg" />
              </a>
              <a href="#">
                <img src="/Images/telegram.svg" />
              </a>
              <a href="#">
                <img src="/Images/discord.svg" />
              </a>
            </div>
          </div>
          <p className="text-center text-lg text-[#808080] font-bold mb-[225px] sm:mt-[162px]">© 2023 GammaSwap Labs LLC.</p>
        </div>
        <div>
          <div className="relative">
          <div className="h-[133px] w-[133px] sm:w-[400px] sm:h-[400px] rounded-full bg-[#FF630B] blur-[75px] sm:blur-[150px] absolute -bottom-10 sm:-bottom-[200px] -left-10 sm:-left-[100px]"></div>
        </div>
        </div>
      </div>
  )
}

export default Footer
