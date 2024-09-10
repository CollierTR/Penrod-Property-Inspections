import Footer from "../componets/Footer";
import Map from "../componets/Map";
import Button from "../componets/Button";
import CertificationCloud from "../componets/CertificationCloud";


export default function Contact() {


  return (
    <div>
      <div className="flex relative h-[600px] md:h-[600px] lg:h-[620px] xl:[1740px] flex-col justify-center place-items-center text-center">

        <div className=' max-w-6xl absolute z-20 text-light flex flex-col gap-5 sm:gap-6 justify-center place-items-center shadow'>
          <div className=" text-4xl sm:text-6xl ">
            <h1>Get In Touch!</h1>
          </div>
          <div className="w-1/2 my-0 mx-auto border sm:border-2 border-light"></div>
          <p className='text-2xl sm:text-3xl text-wrap w-3/4'>Have a question or need assistance? Fill out the form below, and we’ll get back to you soon. We’re here to help!</p>
          <a href="tel:6604122963">
            <Button padding='py-2 px-4' size='text-lg sm:text-xl' text='Give Us a Call!' isCallButton="yes"></Button>
          </a>
        </div>


        <div className={`bg-[url('/house.png')] opacity-35 bg-no-repeat bg-cover bg-center h-full w-full overflow-hidden absolute z-10`}>
        </div>

      </div>


      <Map />
      <CertificationCloud />
      <Footer />
    </div>
  )
}
