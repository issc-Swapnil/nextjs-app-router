import { useState } from "react";
import Autosuggest from "./autoSuggest";

const FlightSearchBar = () => {
    const [formData, setFormData] = useState({
        origin: '',
        destination: '',
        departureDate: '',
        returnDate: '',
        travelClass: '',
        tripType: 'oneWay', 
    });

    const [errors, setErrors] = useState({
        origin: '',
        destination: '',
        departureDate: '',
        returnDate: '',
        travelClass: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const validateForm = () => {
        const newErrors: any = {};
    
        Object.entries(formData).forEach(([fieldName, value]) => {
            if (value.trim() === '') {
                newErrors[fieldName] = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
            }
            if (fieldName === 'returnDate' && formData.tripType === 'oneWay') {
                delete newErrors[fieldName];
            }
        });
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Search initiated:', formData);
        } else {
            console.log('Form validation failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={`grid grid-cols-1  w-full h-full gap-[5px] relative items-center  ${formData.tripType === 'oneWay' ? 'md:grid-cols-5' : 'md:grid-cols-6'}`}>
                <div className="bg-white p-4 h-full rounded-l-lg shadow-md cursor-pointer">
                    <label htmlFor="autosuggest" className="text-gray-600 text-sm font-semibold py-2 pointer-events-none">From</label>
                    <Autosuggest onSelect={(value: string) => setFormData({ ...formData, origin: value })} />
                    {errors?.origin && <span className="text-red-500 text-xs">{errors?.origin}</span>}
                </div>
                <div className="bg-white p-4 h-full shadow-md cursor-pointer">
                    <label htmlFor="autosuggest" className="text-gray-600 text-sm font-semibold py-2 pointer-events-none">To</label>
                    <Autosuggest onSelect={(value: string) => setFormData({ ...formData, destination: value })} />
                    {errors?.destination && <span className="text-red-500 text-xs">{errors?.destination}</span>}
                </div>
                <div className="bg-white p-4 h-full shadow-md cursor-pointer">
                    <label htmlFor="autosuggest" className="text-gray-600 text-sm font-semibold py-2 pointer-events-none">Depart</label>
                    <input
                        name="departureDate"
                        value={formData.departureDate}
                        onChange={handleChange}
                        type="date"
                        className="w-full   placeholder-gray-400 text-gray-800 border-0 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
                        placeholder="Country, city or airport"
                    />
                    {errors?.departureDate && <span className="text-red-500 text-xs">{errors?.departureDate}</span>}
                </div>
                <div className="bg-white p-4 h-full shadow-md cursor-pointer"
                    style={{ display: formData.tripType === 'twoWay' ? 'block' : 'none' }}
                >
                    <label htmlFor="autosuggest" className="text-gray-600 text-sm font-semibold py-2 pointer-events-none">Return</label>
                    <input
                        name="returnDate"
                        value={formData.returnDate}
                        onChange={handleChange}
                        type="date"
                        className="w-full   placeholder-gray-400 text-gray-800 border-0 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
                        placeholder="Country, city or airport"
                    />
                    {errors?.returnDate && <span className="text-red-500 text-xs">{errors?.returnDate}</span>}
                </div>
                <div className="bg-white p-4 h-full shadow-md cursor-pointer">
                    <label htmlFor="autosuggest"
                        className="text-gray-600 text-sm font-semibold py-2 pointer-events-none overflow-hidden whitespace-nowrap overflow-ellipsis">
                        Travellers and cabin class</label>
                    <input
                        name="travelClass"
                        value={formData.travelClass}
                        onChange={handleChange}
                        type="text"
                        className="w-full   placeholder-gray-400 text-gray-800 border-0 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
                        placeholder="Country, city or airport"
                    />
                    {errors?.travelClass && <span className="text-red-500 text-xs">{errors?.travelClass}</span>}
                </div>
                <button type="submit"
                    className='text-white bg-[#008dd2] focus:ring-4 focus:ring-[#008dd2] font-medium rounded-r-lg  h-full text-sm p-4 focus:outline-none'>
                    Search
                </button>
            </div>

            <div className="p-4 h-full cursor-pointer text-white">
                <div>
                    <label htmlFor="oneWay" className="mr-2">
                        <input
                            type="radio"
                            id="oneWay"
                            name="tripType"
                            value="oneWay"
                            checked={formData.tripType === 'oneWay'}
                            onChange={handleChange}
                        />
                        One Way
                    </label>
                    <label htmlFor="twoWay">
                        <input
                            type="radio"
                            id="twoWay"
                            name="tripType"
                            value="twoWay"
                            checked={formData.tripType === 'twoWay'}
                            onChange={handleChange}
                        />
                        Two Way
                    </label>
                </div>
            </div>
        </form>
    );
};

export default FlightSearchBar;
