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
        <ServiceCard text="Ensure your home is safe and sound with our comprehensive home inspection services. Our certified inspectors thoroughly evaluate all major systems and components, providing you with a detailed report and peace of mind." title="Home Inspection" href="home-inspection" img="/KyleOnRoof.png" />
        <ServiceCard text="Ensure your septic and sewer systems are functioning properly with our thorough inspection services. Our certified inspectors identify issues early, providing you with detailed reports and effective solutions to maintain a healthy and efficient system." title="Septic/Sewer Inspection" href="septic-inspection" img="https://allsepticandsewer.com/wp-content/uploads/2021/05/PHOTO-FINAL-WHO-PAYS-FOR-SEPTIC-SYSTEM-INSPECITON.jpg" />
        <ServiceCard text="Our certified experts provide thorough mold inspections to ensure your home is safe and healthy. We detect both visible and hidden mold, offering accurate results and effective solutions." title="Mold Testing" href="mold-testing" img="https://bactronix.com/wp-content/uploads/2024/05/AdobeStock_188815897-scaled.jpeg" />
      </div>

    </div>

  )
}
