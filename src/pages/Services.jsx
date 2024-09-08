import Footer from "../componets/Footer";
import { Outlet } from "react-router-dom";
import CertificationCloud from "../componets/CertificationCloud";
import LargeServiceCard from "../componets/LargeServiceCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import serviceData from "../serviceData"
import Button from "../componets/Button";
import CenteredMap from "../componets/CenteredMap";


export default function Services() {


  return (
    <div className="">

      {// SECT: --------------------- hero section --------------------------]
      }
      <div className="flex relative h-[600px] md:h-[600px] lg:h-[620px] xl:[1740px] flex-col justify-center place-items-center text-center">

        <div className='max-w-6xl absolute z-20 text-light flex flex-col gap-5 sm:gap-6 justify-center place-items-center shadow'>
          <div className=" text-4xl sm:text-6xl ">
            <h1>Our Services</h1>
          </div>
          <div className="w-1/2 my-0 mx-auto border sm:border-2 border-light"></div>
          <p className='text-2xl sm:text-3xl text-wrap w-3/4 mb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit accusamus, inventore adipisci cum veniam nam aliquam sapiente laborum nesciunt corrupti, eveniet rerum rem minima voluptatibus eum necessitatibus est quam commodi.</p>
          <a href="tel:6604122963">
            <Button padding='py-3 px-6' isCallButton="true" size='text-lg sm:text-xl' text='Give Us a Call!'></Button>
          </a>
        </div>


        <div className={`bg-[url('/house.png')] opacity-35 bg-no-repeat bg-cover bg-center h-full w-full overflow-hidden absolute z-10`}>
        </div>

      </div>


      {// SECT: --------------------- Service-list section --------------------------]
      }
      <div className="bg-primary border-t-2 border-t-light pb-16">

        <div className="mx-auto py-20 sm:p-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center place-items-stretch bg-primary gap-4 lg:gap-6 w-11/12 xl:w-10/12">


          {// SECT: --------------------- Service Cards --------------------------]
          }
          {serviceData.map((service) => (
            <LargeServiceCard
              key={service.id}
              text={service.Description}
              title={service.ServiceName}
              href={service.link}
            />
          ))}

        </div>
        <div className="mx-auto my-0 flex justify-center">
          <button className="text-light text-2xl bg-dark border-2 border-light rounded-full py-2 px-4"><FontAwesomeIcon icon={faPhone} className="mr-4" />Give us a call!</button>
        </div>
      </div>



      <CenteredMap />
      <CertificationCloud />

      <Footer />

      <Outlet />
    </div>
  )
}
