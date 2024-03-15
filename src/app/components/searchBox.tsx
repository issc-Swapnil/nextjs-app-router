import { useState } from 'react';

const FlightSearchBar = () => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [travelClass, setTravelClass] = useState('');

    const handleSearch = () => {
        // Implement your search logic here
    };

    return (
        <div className="grid grid-cols-1 gap-[5px] w-full relative items-center  sm:grid-cols-2 md:grid-cols-6">
            <div className="bg-white p-4 rounded-l-lg shadow-md cursor-pointer">
                <label htmlFor="autosuggest" className="text-gray-600 text-sm font-semibold py-2 pointer-events-none">From</label>
                <input
                    id="autosuggest"
                    type="text"
                    className="w-full   placeholder-gray-400 text-gray-800 border-0 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
                    placeholder="Country, city or airport"
                />
                {/* <div className="absolute top-full left-0 z-10 bg-white border border-gray-300 rounded-md shadow-md mt-1">
                    <div className="p-2 cursor-pointer hover:bg-gray-100">Suggestion 1</div>
                </div> */}
            </div>
            <div className="bg-white p-4 shadow-md cursor-pointer">
                <label htmlFor="autosuggest" className="text-gray-600 text-sm font-semibold py-2 pointer-events-none">To</label>
                <input
                    id="autosuggest"
                    type="text"
                    className="w-full   placeholder-gray-400 text-gray-800 border-0 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
                    placeholder="Country, city or airport"
                />
                {/* <div className="absolute top-full left-0 z-10 bg-white border border-gray-300 rounded-md shadow-md mt-1">
                    <div className="p-2 cursor-pointer hover:bg-gray-100">Suggestion 1</div>
                </div> */}
            </div>
            <div className="bg-white p-4 shadow-md cursor-pointer">
                <label htmlFor="autosuggest" className="text-gray-600 text-sm font-semibold py-2 pointer-events-none">Depart</label>
                <input
                    id="autosuggest"
                    type="date"
                    className="w-full   placeholder-gray-400 text-gray-800 border-0 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
                    placeholder="Country, city or airport"
                />
                {/* <div className="absolute top-full left-0 z-10 bg-white border border-gray-300 rounded-md shadow-md mt-1">
                    <div className="p-2 cursor-pointer hover:bg-gray-100">Suggestion 1</div>
                </div> */}
            </div>
            <div className="bg-white p-4 shadow-md cursor-pointer">
                <label htmlFor="autosuggest" className="text-gray-600 text-sm font-semibold py-2 pointer-events-none">Return</label>
                <input
                    id="autosuggest"
                    type="date"
                    className="w-full   placeholder-gray-400 text-gray-800 border-0 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
                    placeholder="Country, city or airport"
                />
                {/* <div className="absolute top-full left-0 z-10 bg-white border border-gray-300 rounded-md shadow-md mt-1">
                    <div className="p-2 cursor-pointer hover:bg-gray-100">Suggestion 1</div>
                </div> */}
            </div>
            <div className="bg-white p-4 shadow-md cursor-pointer rounded-r-lg">
                <label htmlFor="autosuggest" className="text-gray-600 text-sm font-semibold py-2 pointer-events-none"> Travellers and cabin class</label>
                <input
                    id="autosuggest"
                    type="text"
                    className="w-full   placeholder-gray-400 text-gray-800 border-0 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
                    placeholder="Country, city or airport"
                />
                {/* <div className="absolute top-full left-0 z-10 bg-white border border-gray-300 rounded-md shadow-md mt-1">
                    <div className="p-2 cursor-pointer hover:bg-gray-100">Suggestion 1</div>
                </div> */}
            </div>
            <div>
                <button className='text-white bg-[#0000ff] focus:ring-4 focus:ring-[#0000ff] font-medium rounded-lg text-sm px-4 
                lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'>Search</button>
            </div>
        </div>

    );
};

export default FlightSearchBar;
