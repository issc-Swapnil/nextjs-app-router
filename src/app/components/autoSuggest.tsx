import React, { useState } from 'react';
import { airports } from '../../utilis/airport'

interface AutosuggestProps {
    name: string
    onSelect: (value: string, name: string) => void;
}

const Autosuggest: React.FC<AutosuggestProps> = ({ onSelect, name }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchTerm(value);
        if (value.trim() === '') {
            setSuggestions([]);
        } else {
            const results = airports.filter(airport =>
                airport.country.toLowerCase().includes(value.toLowerCase()) ||
                airport.city.toLowerCase().includes(value.toLowerCase())
            ).map(airport => airport.country + ', ' + airport.city);
            setSuggestions(results);
        }
    };

    const handleSelectSuggestion = (suggestion: string) => {
        setSearchTerm(suggestion);
        onSelect(suggestion, name);
        setSuggestions([]);
    };

    return (
        <div className="relative">
            <input
                name={name}
                autoFocus={true}
                type="search"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Country, city or airport"
                className="w-full placeholder-gray-400 text-gray-800 border-0 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
            />
            {suggestions.length > 0 && (
                <ul className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-md max-h-48 overflow-y-auto">
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
