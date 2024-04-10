"use client"
import SearchCard from "../components/searchCard";

export default function Search() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="w-full flex flex-col items-start justify-start  border-[1px] border-[#E9E8FC] rounded-xl">
        <SearchCard
          // img={japan}
          duration="18h 22m"
          name="Japan Airlines"
          time="7:35AM - 12:15PM"
          stop="1 stop"
          hnl="50m in HKG"
          price="$663"
          trip="round trip"
        />
      </div>
    </main>
  );
}
