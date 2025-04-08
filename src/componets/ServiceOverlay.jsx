import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import CertificationCloud from "./CertificationCloud"
import Nav from "./Nav"
import Footer from "./Footer"
import { RemoveScrollBar } from "react-remove-scroll-bar"
import serviceData from "../serviceData"
import CenteredMap from "./CenteredMap"


export default function ServiceOverlay() {




  let { service } = useParams()

  function findMatch(serviceData) {
    return serviceData.link == service
  }

  let serviceMatch = serviceData.find(findMatch)
  console.log(serviceMatch)

  /* { 
      ServiceName: "Home Inspection",
      Description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam hic aut quisquam officia veritatis sunt eos, ipsa commodi, doloremque nemo, laboriosam velit nisi tempore necessitatibus eligendi numquam odio nobis provident!",
      image: "",
      Price: 567,
      id: 1,
      link: "#",
    }
  */


  return (
    <div>
      <RemoveScrollBar />


      <div className="text-light fixed top-0 w-screen bg-light  h-screen z-50 overflow-y-scroll">
        <Nav></Nav>
        <div className="pb-10 lg:py-28 flex flex-col lg:flex-row w-10/12 justify-center place-items-center mx-auto gap-6">
          <div className="flex place-items-start justify-center w-10/12 lg:w-1/2">
            <img src={serviceMatch.image} alt={`Image of ${serviceMatch.ServiceName}`} className="mt-6 lg: mt-0 w-full lg:w-3/4 border-8 rounded-xl border-dark" />
          </div>

          <div className="text-center lg:text-start flex text-dark w-10/12 lg:w-1/2 flex-col justify-start place-items-center lg:place-items-start gap-6">
            <h2 className="text-6xl text-pretty text-center lg:text-start">{serviceMatch.ServiceName}</h2>
            <p className="text-2xl mb-2">{serviceMatch.Description}</p>
            <div className="flex w-fit justify-start place-items-center">
              <a href="tel:6604122963">
                <button className=" bg-primary text-light  rounded-full border-4 border-dark py-2 px-4 text-xl">
                  <FontAwesomeIcon icon={faPhone} className="mr-4" />
                  Schedule Today!
                </button>
              </a>
            </div>
          </div>

        </div>

        <CenteredMap hasBorder={true} />
        <CertificationCloud />
        <Footer />
      </div>

      <div className="text-light fixed top-0 w-full bg-dark  h-screen z-40">
      </div>

    </div>
  )
}
