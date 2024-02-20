'use client'
import Header from "./components/Header";
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://agoda-com.p.rapidapi.com/flights/auto-complete', {
          params: {
            q: searchQuery
          },
          headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': process.env.HOST,
          }
        });
        setSuggestions(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (searchQuery) {
      fetchData();
    }
  }, [searchQuery]);

  const handleSearchChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: any) => {
    e.preventDefault();
    // Perform search action here, like fetching data with the searchQuery
    console.log("Search for:", searchQuery);
  };

  return (
    <>
      <main className="flex  flex-col items-center justify-between p-24">
        Welcome to Flight Search App.
        <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
          <form onSubmit={handleSearchSubmit}>
            <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
              <input
                id="autocomplete"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="From"
                value={searchQuery}
                onChange={handleSearchChange}
                autoComplete="off"
                list="suggestions"
              />
              <div>
                {suggestions?.map((suggestion: any, index: number) => (
                  <div
                    key={index}
                  >
                    {suggestion?.airports?.map((airport: any, airportIndex: number) => (
                      <div key={airportIndex} onClick={() => console.log(airport?.code)}
                        style={{ cursor: 'pointer', padding: '5px' }}>
                        <div>Airport name: {airport.name}</div>
                        <div>Code: {airport.code}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
      </main>
    </>

  );
}
