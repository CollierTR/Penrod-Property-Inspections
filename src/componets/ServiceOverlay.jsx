import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons"
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


      <div className="text-light fixed top-0 w-full bg-light  h-screen z-50 overflow-y-scroll">
        <Nav></Nav>
        <div className="py-28 flex w-10/12 justify-center place-items-center mx-auto gap-6">
          <div className="flex place-items-start justify-center w-1/2">
            <img src="https://placehold.co/400x400?text=Your+Image+Here" alt="" className="w-3/4" />
          </div>
          <div className="flex text-dark w-1/2 flex-col justify-start place-items-start gap-6">
            <h2 className="text-6xl text-pretty">{serviceMatch.ServiceName}</h2>
            <p className="text-2xl mb-2">{serviceMatch.Description}</p>
            <div className="flex w-full justify-start">
              <a href="tel:6604122963">
                <button className=" bg-primary text-light  rounded-full border-4 border-dark py-2 px-4 text-xl">
                  <FontAwesomeIcon icon={faCalendarDays} className="mr-4" />
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
