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
        <div className="flex  gap-[5px] relative w-full flex-no-wrap">
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
            <div className="bg-white p-4 flex-grow rounded-r-lg">
                <label className='block text-gray-600 text-sm font-semibold leading-5 w-full'> Travellers and cabin class</label>
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
            <button className='bg-[#0000ff] p-4 text-white rounded-lg'>Search</button>
        </div>

    );
};

export default FlightSearchBar;
