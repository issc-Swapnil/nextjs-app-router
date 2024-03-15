import Link from "next/link"
import React from "react"

const PlaceCard: React.FC<{}> = () => {
    return (
        <Link href="/" target="_blank" rel="noreferrer"
            className="block w-full  rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
            <div className="relative">
                <div className="bg-cover bg-center h-48" style={{ backgroundImage: "url('https://content.skyscnr.com/ec26cc7ac3371abc1b8ea45df0b88791/GettyImages-480882769.jpg')" }}></div>
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">India</h3>
                <div className="flex justify-between">
                    <p className="text-gray-700 mb-2">Flights<span className="font-bold"> • </span>Direct</p>
                    <div className="flex items-center text-[#0000ff]">
                        <span className="text-md font-semibold">₹ 2,101</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 ml-1 fill-current"><path d="M22.5 9a1.5 1.5 0 01-3 0V3a1.5 1.5 0 013 0z"></path><path d="M22.5 3A1.5 1.5 0 0121 4.5h-6a1.5 1.5 0 010-3h6A1.5 1.5 0 0122.5 3z"></path><path d="M12.44 11.56a1.5 1.5 0 010-2.12l7.5-7.5a1.5 1.5 0 012.12 2.12l-7.5 7.5a1.5 1.5 0 01-2.12 0z"></path><path d="M7.5 6a3 3 0 00-3 3v7.5a3 3 0 003 3H15a3 3 0 003-3V15a1.5 1.5 0 013 0v1.5a6 6 0 01-6 6H7.5a6 6 0 01-6-6V9a6 6 0 016-6H9a1.5 1.5 0 010 3z"></path></svg>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PlaceCard