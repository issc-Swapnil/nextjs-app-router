import React, { useState } from 'react';

interface AutosuggestProps {
      onSelect: (value: string) => void;
}

const countries = [
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'Germany',
    // Add more countries as needed
];

const cities = [
    'New York City',
    'Los Angeles',
    'Toronto',
    'London',
    'Sydney',
    'Berlin',
    // Add more cities as needed
];

const Autosuggest: React.FC<AutosuggestProps> = ({ onSelect }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchTerm(value);
        if (value.trim() === '') {
            setSuggestions([]);
        } else {
            const results = [...countries, ...cities].filter(item =>
                item.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(results);
        }
    };

    const handleSelectSuggestion = (suggestion: string) => {
        setSearchTerm(suggestion);
        onSelect(suggestion);
        setSuggestions([]);
    };

    return (
        <div className="relative">
            <input
                autoFocus={true}
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Country, city or airport"
                className="w-full placeholder-gray-400 text-gray-800 border-0 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
            />
            {suggestions.length > 0 && (
                <ul className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-md">
                    {suggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelectSuggestion(suggestion)}
                            className={`px-4 py-2 cursor-pointer ${index !== suggestions.length - 1 ? 'border-b border-gray-300' : ''
                                } ${index === 0 ? 'rounded-t-md' : ''} ${index === suggestions.length - 1 ? 'rounded-b-md' : ''
                                }`}
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Autosuggest;
