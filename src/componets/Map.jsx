


export default function Map() {


  return (
    <div className="relative">

      <div className="bg-primary relative z-20 flex border-y-2 border-y-light flex-col lg:flex-row justify-center place-items-center lg:place-items-start py-28  text-dark gap-16 lg:gap-6">


        <div className="  w-5/6 lg:w-2/5 " id="contactForm">
          <form
            className="flex flex-col gap-4 md:gap-6 place-items-center "
            name="Contact Form"
            method="post"
            action="/contact"
          >
            <p className="  text-4xl text-light">Contact Us!</p>
            <input type="hidden" name="form-name" value="Contact Form" className="" />
            <span className="flex gap-2 flex-col md:w-3/4 w-10/12">
              <input type="hidden" name="form-name" value="Contact Form" />
              <label htmlFor="firstName" className="text-base md:text-xl">
                First name:
              </label>
              <input
                type="text"
                name="firstName"
                required
                id="firstName"
                placeholder="John"
                className="md:text-xl border-2 rounded-lg p-2 border-dark"
              />
            </span>
            <span className="flex gap-2 flex-col md:w-3/4 w-10/12">
              <label htmlFor="lastName" className="text-base md:text-xl">
                Last Name:
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="md:text-xl border-2 rounded-lg p-2 border-dark"
                name="lastName"
                required
                id="lastName"
              />
            </span>
            <span className="flex gap-2 flex-col w-10/12 md:w-3/4">
              <label htmlFor="email" className="text-base md:text-xl">
                Email:
              </label>
              <input
                className="md:text-xl border-2 rounded-lg p-2 border-light-primary"
                type="email"
                required
                placeholder="example@email.com"
                id="email"
                name="email"
              />
            </span>
            <span className="flex gap-2 flex-col w-10/12 md:w-3/4">
              <label htmlFor="text" className="text-base md:text-xl">
                How can we help you?
              </label>
              <textarea
                required
                id="text"
                name="text"
                className="ease-soft md:text-xl border-2 rounded-lg p-2 border-dark h-40 text-wrap"
              ></textarea>
            </span>
            <button
              type="submit"
              className=" border border-light bg-dark rounded-lg w-10/12 md:w-3/4 md:text-2xl text-light py-2 md:py-3"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="flex flex-col w-5/6 lg:w-2/5 justify-start place-items-center text-center gap-4 md:gap-6">

          <p className="text-4xl text-light">Our Service Area</p>
          <div className="border-2 border-light w-5/6 mb-2"></div>
          <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1YLyK_sqFj2AQ7qbCuEq4HPDlRJYgdNw&ehbc=2E312F&noprof=1" height="480" className="w-full"></iframe>
        </div>
      </div>

    </div>
  )
}
