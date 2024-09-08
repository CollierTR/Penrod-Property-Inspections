


export default function CenteredMap({ hasBorder = false }) {



  return (
    <div className={`bg-primary flex flex-col w-full justify-start place-items-center text-center gap-4 md:gap-6 py-12 ${hasBorder ? "border-y-2 border-y-light " : ""}`}>

      <p className="text-4xl text-light">Our Service Area</p>
      <div className="border-2 border-light w-1/2 mb-2"></div>
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1YLyK_sqFj2AQ7qbCuEq4HPDlRJYgdNw&ehbc=2E312F&noprof=1" height="480" className="w-3/4"></iframe>
    </div>
  )
}
