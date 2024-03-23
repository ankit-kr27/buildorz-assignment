const Button = ({btnText, btnType="primary"}) => {    // btnType -> primary and secondary
  return (
    <button className={`${btnType==="primary"?"bg-[#B44201] border border-[#E7651D]":"bg-[#090C1C] border border-[#D9D9D9]"} px-6 py-3  rounded-sm sm:text-2xl text-[1rem] font-bold text-white`}>
      {btnText}
    </button>
  )
}

export default Button
