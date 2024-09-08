import CertificationCloud from "../componets/CertificationCloud";
import Reviews from "../componets/Reviews"
import Footer from "../componets/Footer";
import CenteredMap from "../componets/CenteredMap";
import Button from "../componets/Button";



export default function About() {



  return (
    <div>
      <div className="flex relative h-[600px] md:h-[600px] lg:h-[620px] xl:[1740px] flex-col justify-center place-items-center text-center">

        <div className='max-w-6xl absolute z-20 text-light flex flex-col gap-5 sm:gap-6 justify-center place-items-center shadow'>
          <div className=" text-4xl sm:text-6xl ">
            <h1>About Us</h1>
          </div>
          <div className="w-1/2 my-0 mx-auto border sm:border-2 border-light"></div>
          <p className='text-2xl sm:text-3xl text-wrap w-3/4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum maxime inventore tempora aperiam hic nam, itaque est amet et porro iusto saepe tenetur ipsam sit aspernatur cum perferendis exercitationem corrupti.</p>
          <a href="tel:6604122963">
            <Button padding='py-2 px-4' size='text-lg sm:text-xl' text='Give Us a Call!' isCallButton="yes"></Button>
          </a>
        </div>


        <div className={`bg-[url('../../public/house.png')] opacity-35 bg-no-repeat bg-cover bg-center h-full w-full overflow-hidden absolute z-10`}>
        </div>

      </div>




      <div className="flex flex-col justify-center place-items-center border-y-2 border-y-light">

        <div className="text-light w-full bg-primary text-center text-pretty lg:text-start">


          <div className="flex flex-col-reverse lg:flex-row-reverse bg-primary mx-auto gap-6 justify-center place-items-center py-12 w-10/12">
            <div className="flex flex-col gap-4 w-full lg:w-1/2 px-2">
              <h1 className="text-center text-4xl sm:text-6xl mb-2 text-light">Meet the Owner</h1>
              <p className="text-xl sm:text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam hic aut quisquam officia veritatis sunt eos, ipsa commodi, doloremque nemo, laboriosam velit nisi tempore necessitatibus eligendi numquam odio nobis provident!</p>
              <p className="text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam hic aut quisquam officia veritatis sunt eos, ipsa commodi, doloremque nemo, laboriosam velit nisi tempore necessitatibus eligendi numquam odio nobis provident!</p>
            </div>
            <div className="flex justify-center place-items-center w-full lg:w-1/2">
              <img src="https://placehold.co/500x500?text=Picture+Of+You+Here" alt="" />
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
