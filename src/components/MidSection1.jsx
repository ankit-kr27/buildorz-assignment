import MidSectionText from "./MidSectionText"

const MidSection1 = () => {
  return (
    <div className="text-white px-6 sm:px-[120px] pt-16 flex flex-col sm:flex-row sm:justify-between items-center min-h-[100vh]">
        <MidSectionText
          text="Liquidity Provisioning"
          heading="Earn by Providing Liquidity"
          para1="Earn a higher yield by providing liquidity through GammaSwap. Think of our wrapped pools like wrapped tokens."
          para2="The GammaSwap protocol will directly deposit liquidity into the underlying AMM and provide an LP token to the depositor representing the position."
        />
        <div className="relative max-w-fit mt-16">
          <img
            src="/Images/coinEth2.svg"
            className="absolute z-[0] right-[16%] sm:-top-12 sm:w-[275px]"
          />
          <img
            src="/Images/coinEth1.svg"
            className="relative z-[10] top-20 sm:w-[550px]"
          />
        </div>
      </div>
  )
}

export default MidSection1
