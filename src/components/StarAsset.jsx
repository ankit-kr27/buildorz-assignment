const StarAsset = ({value}) => {
  return (
    <div className="flex justify-center bg-[#2C1310] py-2 px-[14px] rounded text-[#B44201] gap-1">
      <img src="/Images/Star.svg" />
      <span>{value}%</span>
    </div>
  )
}

export default StarAsset
