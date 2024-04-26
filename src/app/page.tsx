'use client'

import SearchBox from "./components/searchBox";
import FlightDeals from "./components/FlightDeals";
import Places from "./components/Places";

const Home: React.FC<{}> = () => {
  return (
    <main>
      {/* banner */}
      <div className=" bg-cover bg-bottom px-4 lg:px-6 py-24 hero">
        <div className="mx-auto max-w-screen-xl mt-12">
          <h1 className='text-white mb-4 text-[2rem] font-[700]'>JOURNEY TO EXPLORE WORLD.</h1>
          <SearchBox />
        </div>
      </div>

      <div className="mt-[40px]">
        <div className="mx-auto max-w-screen-xl">
          <FlightDeals />
        </div>
      </div>

      <div className="mt-[60px]">
        <div className="mx-auto max-w-screen-xl">
          <Places />
        </div>
      </div>


    </main>
  );
}

export default Home
