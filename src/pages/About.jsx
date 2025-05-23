import CertificationCloud from "../componets/CertificationCloud";
import Reviews from "../componets/Reviews"
import Footer from "../componets/Footer";
import CenteredMap from "../componets/CenteredMap";
import Button from "../componets/Button";



export default function About() {



  return (
    <div>
      <div className="flex relative h-[800px] md:h-[800px] lg:h-[820px] xl:[1740px] flex-col justify-center place-items-center text-center">

        <div className='max-w-6xl absolute z-20 text-light flex flex-col gap-5 sm:gap-6 justify-center place-items-center shadow'>
          <div className=" text-4xl sm:text-6xl ">
            <h1>About Us</h1>
          </div>
          <div className="w-1/2 my-0 mx-auto border sm:border-2 border-light"></div>
          <p className='text-2xl sm:text-3xl w-3/4 text-pretty'>Penrod Property Inspections provides the best comprehensive home inspections and sewer/septic system evaluations in Northen Missouri. Our experienced inspectors deliver detailed reports, ensuring you make informed decisions about your property.
          <br />
          <br />
          <span className="lg:font-semibold text-pretty">Don't risk the future of your home. Schedule your inspection today.</span>
          </p>
          <a href="tel:6604122963">
            <Button padding='py-2 px-4' size='text-lg sm:text-xl' text='Give Us a Call!' isCallButton="yes"></Button>
          </a>
        </div>


        <div className={`bg-[url('/house.png')] opacity-35 bg-no-repeat bg-cover bg-center h-full w-full overflow-hidden absolute z-10`}>
        </div>

      </div>




      <div className="flex flex-col justify-center place-items-center border-y-2 border-y-light">

        <div className="text-light w-full bg-primary text-center text-pretty lg:text-start">


          <div className="flex flex-col-reverse lg:flex-row-reverse bg-primary mx-auto gap-6 justify-center place-items-center py-12 w-10/12">
            <div className="flex flex-col gap-4 w-full lg:w-1/2 px-2">
              <h1 className="text-center text-4xl sm:text-6xl mb-2 text-light">Meet the Owner</h1>
              <p className="text-xl sm:text-2xl">Kyle is passionate about providing exceptional home inspection services. He takes pride in delivering accurate and informative reports, ensuring you have the knowledge you need to make informed decisions about your property.</p>
              <p className="text-2xl">He is committed to building strong relationships with clients and providing personalized service. Whether you're a first-time homebuyer or a seasoned homeowner, he is here to guide you through the inspection process.</p>
            </div>
            <div className="flex justify-center place-items-center w-full xl:w-1/2">
              <img src="/KyleOnLadder.png" alt="The owner on a ladder inspecting a house" className="w-4/5 lg:w-2/3 rounded-3xl border-4 border-dark"/>
            </div>
          </div>

        </div>
      </div>



      <Reviews />
      <CenteredMap hasBorder={true} />
      <CertificationCloud />
      <Footer />
    </div>
  )
}
