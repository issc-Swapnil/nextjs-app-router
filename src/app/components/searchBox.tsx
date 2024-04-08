'use client'
import { useState } from "react";
import Autosuggest from "./autoSuggest";
import DatePicker from "./datePicker";
import {  useRouter } from "next/navigation";

const FlightSearchBar: React.FC<{}> = () => {
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

    const router = useRouter()

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

    const onSelect = (value:string , name:string) => {
        if (name === 'origin') {
            setFormData({ ...formData, origin: value });
        } else if (name === 'destination') {
            setFormData({ ...formData, destination: value });
        }
        setErrors({
            ...errors,
            [name]: '',
        });
    }
    console.log("Form",formData);

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
            router.push('/search')
        } else {
            console.log('Form validation failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={`grid grid-cols-1  w-full h-full gap-[5px] relative items-center  ${formData.tripType === 'oneWay' ? 'md:grid-cols-5' : 'md:grid-cols-6'}`}>
                <div className="bg-white p-4 h-full rounded-l-lg shadow-md cursor-pointer">
                    <label htmlFor="autosuggest" className="text-gray-600 text-sm font-semibold py-2 pointer-events-none">From</label>
                    <Autosuggest onSelect={onSelect} name="origin" />
                    {errors?.origin && <span className="text-red-500 text-xs">{errors?.origin}</span>}
                </div>
                <div className="bg-white p-4 h-full shadow-md cursor-pointer">
                    <label htmlFor="autosuggest" className="text-gray-600 text-sm font-semibold py-2 pointer-events-none">To</label>
                    <Autosuggest onSelect={onSelect} name="destination" />
                    {errors?.destination && <span className="text-red-500 text-xs">{errors?.destination}</span>}
                </div>
                <div className="bg-white p-4 h-full shadow-md cursor-pointer">
                    <label htmlFor="autosuggest" className="text-gray-600 text-sm font-semibold py-2 pointer-events-none">Depart</label>
                    <DatePicker
                        name="departureDate"
                        value={formData.departureDate}
                        handleChange={handleChange}                    
                    />
                    {errors?.departureDate && <span className="text-red-500 text-xs">{errors?.departureDate}</span>}
                </div>
                <div className="bg-white p-4 h-full shadow-md cursor-pointer"
                    style={{ display: formData.tripType === 'twoWay' ? 'block' : 'none' }}
                >
                    <label htmlFor="autosuggest" className="text-gray-600 text-sm font-semibold py-2 pointer-events-none">Return</label>
                    <DatePicker
                        name="returnDate"
                        value={formData.returnDate}
                        handleChange={handleChange}
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
                <label htmlFor="oneWay" className="inline-block pl-6 relative mr-4">
                    <input
                        className=" border-3 border-solid border-gray-700 rounded-3xl 
                            cursor-pointer h-5 left-0 m-0 p-0 absolute top-0 inline-block w-5"
                        type="radio"
                        id="oneWay"
                        name="tripType"
                        value="oneWay"
                        checked={formData.tripType === 'oneWay'}
                        onChange={handleChange}
                    />
                    <span>One Way</span>
                </label>
                <label htmlFor="twoWay" className="inline-block pl-6 relative">
                    <input
                        className=" border-3 border-solid border-gray-700 rounded-3xl 
                            cursor-pointer h-5 left-0 m-0 p-0 absolute top-0 inline-block w-5"
                        type="radio"
                        id="twoWay"
                        name="tripType"
                        value="twoWay"
                        checked={formData.tripType === 'twoWay'}
                        onChange={handleChange}
                    />
                    <span>Return</span>
                </label>
            </div>
        </form>
    );
};

export default FlightSearchBar;
