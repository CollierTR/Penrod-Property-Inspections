import { Link } from "react-router-dom"
import Button from "./Button"
import ServiceCard from "./ServiceCard"



export default function ServicesSection() {

  return (


    <div className="py-20 flex w-screen bg-primary flex-col justify-center place-items-center text-center gap-8 text-light border-y-2 border-y-light">


      {
        //SECT: Title & Button
      }
      <div className="flex justify-between place-items-center gap-4 w-10/12 sm:w-3/5">
        <h2 className="text-2xl sm:text-5xl">
          Our Services
        </h2>
        <Link to={"services"}>
          <Button text="SEE ALL" bgColor="bg-dark" size="text-lg md:text-xl" padding="py-1 px-3" />
        </Link>
      </div>

      {
        //SECT: Three cards  
      }
      <div className="flex flex-col lg:flex-row justify-center place-items-center lg:place-items-stretch gap-4 text-dark w-full">
        <ServiceCard title="Home Inspection" href="home-inspection" />
        <ServiceCard title="Septic/Sewer Inspection" href="septic-inspection" />
        <ServiceCard title="Mold Testing" href="mold-testing" />
      </div>

    </div>

  )
}
