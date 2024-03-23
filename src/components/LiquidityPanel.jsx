import LiquidityInput from "./LiquidityInput"
import LiquiditySwitch from "./LiquiditySwitch"
import { useState } from "react"


const LiquidityPanel = () => {
    const [transactionType, setTransactionType] = useState("deposit")
    const changeTransactionType = (type) => {
        setTransactionType(type)
    }
    return (
        <div className="flex flex-col pt-4 pb-6 px-9 items-center mt-[72px] bg-[#131625] rounded-[10px] sm:rounded-2xl sm:pt-6 sm:pb-10 sm:px-12">
            <div className="flex items-baseline gap-1 w-full">
                <h2 className="text-xs sm:text-lg">Add Liquidity</h2>
                <button><img src="Images/info.svg" className="h-3 sm:h-4" /></button>
            </div>
            <div className="w-full flex gap-[116px] sm:gap-[183px] mt-3 sm:mt-[1.125rem] mb-7 sm:mb-11 px-2 sm:px-3 py-[3px] sm:pt-1 rounded-lg sm:rounded-xl bg-[#1F2230]">
                <LiquiditySwitch transactionType={transactionType} btnText={"deposit"} changeTransactionType={changeTransactionType}/>
                <LiquiditySwitch transactionType={transactionType} btnText={"withdraw"}  changeTransactionType={changeTransactionType}/>
            </div>
            <div className="w-full mb-[1.9rem] sm:mb-12">
                <h3 className="text-[8px] sm:text-xs font-bold mb-2 sm:mb-3">Provide collateral</h3>
                <div>
                    <LiquidityInput selectedCurrency={"ETH"} availableBalance = {2.473844736} isActive={true} />
                    <LiquidityInput selectedCurrency={"USDC"} availableBalance = {2234.12} isActive={false} />
                </div>
            </div>
            <button className="w-full py-2 sm:py-3 bg-[#B44201] text-xs sm:text-lg font-bold rounded sm:rounded-sm">Provide Liquidity</button>
        </div>
    )
}

export default LiquidityPanel
