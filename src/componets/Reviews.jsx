import ReviewCard from "./ReviewCard"

export default function Reviews() {

  return (
    <div className="flex relative py-20 h-auto   xl:[1740px] flex-col justify-center place-items-center text-center w-full">


      <div className=' z-20 text-light flex flex-col gap-5 sm:gap-8 justify-center place-items-center w-full'>
        <h2 className="text-2xl sm:text-5xl ">CUSTOMER REVIEWS</h2>
        <div className="flex flex-col lg:flex-row justify-center place-items-center gap-4 w-full">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>

      <div className={`bg-[url('../../public/house.png')] opacity-35 bg-no-repeat bg-cover bg-center h-full w-full overflow-hidden absolute z-10`}>
      </div>

    </div>
  )
}
