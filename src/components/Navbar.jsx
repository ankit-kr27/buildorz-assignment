import Button from "./Button"

const Navbar = () => {
  return (
    <div className="flex justify-between text-white sm:px-[120px] px-[24px]">
      <div className="flex gap-2 items-center">
        <img src="/Images/Logo.svg" className="sm:h-[40px] h-[34px]" />
        <span className="font-bold sm:text-2xl text-lg">Quick Swap</span>
      </div>
      <div className="sm:flex gap-12 justify-center items-center rounded-full border border-white/30 bg-[#090C1C] text-2xl py-4 px-8 font-bold hidden">
        <a className="hover:text-[#E7651D] transition-colors" href="#">Blog</a>
        <a className="hover:text-[#E7651D] transition-colors" href="#">Changelog</a>
        <a className="hover:text-[#E7651D] transition-colors" href="#">Documentation</a>
      </div>
      <div className="sm:flex items-center hidden">
        <Button btnText={"Launch App"} btnType={"primary"}/>
      </div>
      <div className="flex items-center">
        <img src="/Images/Hamburger.svg" className="sm:hidden w-[18px]" />
      </div>
    </div>
  )
}

export default Navbar
