'use client'
import React, { FC, useState } from 'react';
import Autosuggest from './autoSuggest';
import DatePicker from './datePicker';
import { useRouter } from 'next/navigation';

interface FlightSearchBarProps { }

const FlightSearchBar: FC<FlightSearchBarProps> = () => {
    const [formData, setFormData] = useState({
        origin: '',
        destination: '',
        departureDate: '',
        returnDate: '',
        tripType: 'oneWay',
        adults: 1,
        minors: 0,
    });

    const [errors, setErrors] = useState({
        origin: '',
        destination: '',
        departureDate: '',
        returnDate: '',
    });

    const [showTravellersDropdown, setShowTravellersDropdown] = useState(false);

    const router = useRouter();

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

    const handleOptions = (type: 'adults' | 'minors', action: 'i' | 'd') => {
        if (action === 'i') {
            setFormData({
                ...formData,
                [type]: formData[type] + 1,
            });
        } else if (action === 'd') {
            if (formData[type] > 0) {
                setFormData({
                    ...formData,
                    [type]: formData[type] - 1,
                });
            }
        }
    };

    const onSelect = (value: string, name: string) => {
        if (name === 'origin') {
            setFormData({ ...formData, origin: value });
        } else if (name === 'destination') {
            setFormData({ ...formData, destination: value });
        }
        setErrors({
            ...errors,
            [name]: '',
        });
    };

    console.log('Form', formData , showTravellersDropdown);

    const validateForm = () => {
        const newErrors: any = {};
        Object.entries(formData).forEach(([fieldName, value]) => {
            if (typeof value === 'string' && value.trim() === '') {
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
            router.push('/search');
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
                    <div onClick={()=>{setShowTravellersDropdown(!showTravellersDropdown)}}>
                    <label htmlFor="travellers" className="text-gray-600 text-sm font-semibold py-2 pointer-events-none cursor-pointer">
                        Travellers and cabin class
                    </label>
                    <span className='inline-block'>
                        {`${formData?.adults} Adult - ${formData?.minors} Minor `}
                    </span>
                    </div>
                    <div className={`${showTravellersDropdown ? 'block' : 'hidden'} w-52 h-fit flex flex-col gap-4 rounded-md bg-white shadowCard absolute lg:top-[70px] top-64 p-4 z-10`}>
                        <div className="flex justify-between items-center">
                            <span className="text-[#7C8DB0] text-base leading-6">Adults:</span>
                            <div className="flex items-center gap-4">
                                <button
                                    className="border-2 border-[#605DEC] px-2 text-[#7C8DB0] disabled:cursor-not-allowed"
                                    onClick={() => handleOptions('adults', 'd')}
                                    disabled={formData.adults <= 1}
                                >
                                    -
                                </button>
                                <span className="text-[#7C8DB0]">{formData.adults}</span>
                                <button className="border-2 border-[#605DEC] px-2 text-[#7C8DB0]" onClick={() => handleOptions('adults', 'i')}>
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-[#7C8DB0] text-base leading-6">Minors:</span>
                            <div className="flex items-center gap-4">
                                <button
                                    className="border-2 border-[#605DEC] px-2 text-[#7C8DB0] disabled:cursor-not-allowed"
                                    onClick={() => handleOptions('minors', 'd')}
                                    disabled={formData.minors <= 0}
                                >
                                    -
                                </button>
                                <span className="text-[#7C8DB0]">{formData.minors}</span>
                                <button className="border-2 border-[#605DEC] px-2 text-[#7C8DB0]" onClick={() => handleOptions('minors', 'i')}>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
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
