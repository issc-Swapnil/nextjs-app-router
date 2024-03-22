import React from 'react';

interface DatePickerProps {
    name: string;
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ name, value, handleChange }) => {
    const minDate = new Date().toISOString().split('T')[0];

    return (
        <input
            name={name}
            value={value}
            onChange={handleChange}
            type="date"
            min={minDate}
            className="w-full placeholder-gray-400 text-gray-800 border-0 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
            placeholder="Country, city or airport"
        />
    );
};

export default DatePicker;
