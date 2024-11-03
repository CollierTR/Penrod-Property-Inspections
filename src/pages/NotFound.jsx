import Footer from "../componets/Footer";


export default function NotFound() {

  return (
    <div>

      <div className="flex flex-col place-items-center gap-10 justify-center h-screen">
        <p className="text-8xl text-light">Oops!</p>
        <p className=" text-light text-center text-xl md:text-6xl">It looks like you&apos;re lost!</p>
        <p className="text-[#074ab5] text-lg underline"><a href="/">return to home page</a></p>
      </div>

      <Footer></Footer>
    </div>
  )
}
