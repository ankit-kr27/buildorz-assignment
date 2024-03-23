import Button from "./Button"
import LiquidityPanel from "./LiquidityPanel"
import StarAsset from "./StarAsset"

const Hero = () => {
  return (
    <div className="bg-[url('Images/heroPattern.png')] min-h-[100vh] px-8 text-[#fafafa] flex flex-col items-center pt-[5rem] sm:pt-[10rem] sm:px-32 relative overflow-hidden">
      <div className="text-center">
        <h1 className="font-extrabold text-2xl mb-12 sm:text-5xl sm:leading-normal">
            Oracle Free Perpetual<br/>Volatility Trading
        </h1>
        <p className="max-w-[548px] text-lg font-normal text-[rgba(250, 250, 250, 0.80)] mb-12 sm:text-2xl">
            A novel primitive for scaling DeFi liquidity through permissionless risk markets
        </p>
      </div>
      <div className="flex gap-12">
        <Button btnText={"Launch App"}/>
        <Button btnText={"Learn More"} btnType="secondary"/>
      </div>
      <div className="z-10 mb-[160px] sm:mb-[20px]">
        <LiquidityPanel />
      </div>
      <div className="absolute -bottom-10 sm:-bottom-32 sm:right-24 z-0 overflow-hidden">
        <img src="/Images/Ellipse.svg" className="w-[500px] sm:w-[600px]" />
      </div>   
      <div className="absolute bottom-32 sm:bottom-80 left-[44px] sm:left-[22vw] rotate-[-30.139deg]"><StarAsset value={3.3}/></div>
      <div className="absolute bottom-32 sm:bottom-28 sm:right-[71vw] right-[44px]  rotate-[-30.139deg]"><StarAsset value={4.8} /></div>
    </div>
  )
}

export default Hero
