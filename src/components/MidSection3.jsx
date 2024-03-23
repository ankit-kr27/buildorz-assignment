import MidSectionText from "./MidSectionText";

const MidSection3 = () => {
  return (
    <div className="text-white px-6 sm:px-[120px] sm:pr-0 pt-16 sm:pt-0 flex flex-col sm:flex-row sm:justify-between items-center min-h-[100vh]">
        <MidSectionText
          text="Multiple AMMs"
          heading="Earn by Providing Liquidity"
          para1="Earn a higher yield by providing liquidity through GammaSwap. Think of our wrapped pools like wrapped tokens."
          para2="The GammaSwap protocol will directly deposit liquidity into the underlying AMM and provide an LP token to the depositor representing the position."
        />
        <div className="bg-[url('/Images/heroPattern.png')] pt-[71px] sm:pt-[221px] w-[100vw] flex justify-center mt-14 sm:mt-0 sm:h-[100vh]">
          <div className="mb-[160px]">
            <img src="/Images/Group.png" />
          </div>
        </div>
      </div>
  )
}

export default MidSection3

