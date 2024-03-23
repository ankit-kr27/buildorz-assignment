const LiquiditySwitch = ({transactionType, btnText, changeTransactionType}) => {
  return (
    <button className={`${transactionType===btnText?"bg-[#B44201]":"bg-[#2A2D3C]"} flex items-center px-4 sm:px-6 py-[5px] sm:py-2 justify-center gap-[2.53px] sm:gap-1 font-bold text-[10px] sm:text-base rounded-sm sm:rounded`}
    onClick={() => changeTransactionType(btnText)}
    >
      <div>
      {btnText}
      </div>
      <img className="h-6" src = {`${btnText === "deposit"? "/Images/downIcon.svg":"/Images/upIcon.svg"}`} />
    </button>
  )
}

export default LiquiditySwitch
