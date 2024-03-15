'use client'
import Header from "./components/Header";
import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBox from "./components/searchBox";

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
      <div className=" bg-[#05203c] p-24">
        <div className="mt-12">
          <h1 className='text-white mb-4 text-[2rem] font-[700]'>Millions of cheap prices. One simple search.</h1>
          <SearchBox />
        </div>
      </div>
    </main>
  );
}
