import Button from './Button'

export default function Hero() {


  return (
    <div className="flex relative h-[400px] sm:h-[600px] md:h-[600px] lg:h-[620px] xl:[1740px] flex-col justify-center place-items-center text-center">

      <div className='absolute z-20 text-light flex flex-col gap-5 sm:gap-6 justify-center place-items-center shadow'>
        <div className=" text-4xl sm:text-6xl ">
          <h1>Penrod Property</h1>
          <h1>Inspections</h1>
        </div>
        <div className="w-full my-0 mx-auto border sm:border-2 border-light"></div>
        <p className='text-2xl sm:text-3xl text-wrap'>"Where one call does it all!"</p>
        <a href="tel:6604122963">
          <Button padding='py-3 px-6' size='text-lg sm:text-xl' text='Give Us a Call!' isCallButton='yes'></Button>
        </a>
      </div>


      <div className={`bg-[url('/house.png')] opacity-35 bg-no-repeat bg-cover bg-center h-full w-full overflow-hidden absolute z-10`}>
      </div>

    </div>
  )
}
