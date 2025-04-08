
const certImageAshi = '/ashi.png '
const certImageIca = '/ica.png '

export default function CertificationCloud() {


  return (
    <div className="flex justify-center place-items-center p-6 bg-dark gap-12 md:gap-40">
      <img src={certImageAshi} alt="ASHI Certification Bage" className="w-[25%] lg:w-[8%]" />
      <img src={certImageIca} alt="ICA Certification Bage" className="w-[30%] lg:w-[10%]" />
    </div>
  )
}
