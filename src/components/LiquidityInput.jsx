const LiquidityInput = ({ selectedCurrency, availableBalance}) => {
    return (
        <div className="odd:mb-[18px] sm:odd:mb-[28px]">
            <div className="flex items-center justify-between px-4 sm:px-[26px] py-[3px] sm:py-1 bg-[#161926] mb-1 sm:mb-3">
                <div className="flex items-center px-4 sm:px-6 py-[5px] sm:py-2 bg-[#1F2230] rounded-sm sm:rounded font-bold gap-[6px] sm:gap-[10px]">
                    <img src={`/Images/${selectedCurrency}.svg`} className="h-4 sm:h-6" />
                    <select className="appearance-none bg-transparent focus:outline-none text-[10px] sm:text-[16px]">
                        <option selected={selectedCurrency==="ETH"} value="ETH">
                            ETH
                        </option>
                        <option selected={selectedCurrency==="USDC"} value="USDC">
                            USDC
                        </option>
                    </select>
                </div>
                <input type="number" placeholder="0.0" className="bg-transparent focus:outline-none text-right font-extrabold text-xs sm:text-[1.125rem]" />
            </div>
            <div className="flex justify-between text-[#808080] text-[0.5rem] sm:text-xs">
                <span className="font-bold">
                    Available:
                </span>
                <span className="font-extrabold">
                    {availableBalance} {selectedCurrency}
                </span>
            </div>
        </div>
    );
};

export default LiquidityInput;
