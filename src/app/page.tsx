'use client'
import Header from "./components/Header";
import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBox from "./components/searchBox";
import PlaceCard from "./components/placeCard";

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
    <main>
      {/* banner */}
      <div className=" bg-[#05203c] px-4 lg:px-6 py-24">
        <div className="mx-auto max-w-screen-xl">
          <h1 className='text-white mb-4 text-[2rem] font-[700]'>Millions of cheap prices. One simple search.</h1>
          <SearchBox />
        </div>
      </div>

      {/* card list */}
      <div className=" px-4 lg:px-6 py-8">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
            {
              [0, 1, 2].map(() => (
                <PlaceCard />
              ))
            }
          </div>
        </div>
      </div>
    </main>
  );
}
