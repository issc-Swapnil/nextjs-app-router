import Image from "next/image";

interface PlacesCardProps {
  image: any;
  title: string;
  name: string;
  desc: string;
}

const PlacesCard: React.FC<PlacesCardProps> = ({ image, title, name, desc }) => {
  return (
    <>
    <div className=" flex flex-col justify-start gap-2 dealsShadow rounded-b">
       <div className="">
         <Image width={100} height={100} src={image} alt="images" className="w-full h-full object-cover rounded-t"/>
       </div>
       <div className="w-full h-full flex flex-col items-start justify-center gap-1 px-4">
        <h1 className="text-[#6E7491] text-base font-medium capitalize">{title} <span className="text-[#54cdb7]">{name}</span></h1>
        <p className="text-[#7C8DB0] text-sm font-normal">{desc}</p>
       </div>
    </div>
    </>
  )
}

export default PlacesCard