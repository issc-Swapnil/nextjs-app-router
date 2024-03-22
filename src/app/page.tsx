'use client'

import SearchBox from "./components/searchBox";
import PlaceCard from "./components/placeCard";

export default function Home() {
  return (
    <main>
      {/* banner */}
      <div className=" bg-[#05203c] px-4 lg:px-6 py-24">
        <div className="mx-auto max-w-screen-xl mt-12">
          <h1 className='text-white mb-4 text-[2rem] font-[700]'>Millions of cheap prices. One simple search.</h1>
          <SearchBox />
        </div>
      </div>

      {/* card list */}
      <div className=" px-4 lg:px-6 py-8">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
            {
              [0, 1, 2, 3, 4, 5].map(() => (
                <PlaceCard />
              ))
            }
          </div>
        </div>
      </div>
    </main>
  );
}
