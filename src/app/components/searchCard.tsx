import React, { FC } from 'react';

interface SearchCardProps {
  duration: string;
  name: string;
  time: string;
  stop: string;
  hnl: string;
  price: string;
  trip: string;
}

const SearchCard: FC<SearchCardProps> = ({
  duration,
  name,
  time,
  stop,
  hnl,
  price,
  trip
}) => {
  return (
    <>
      <div
        className="w-full cursor-pointer border-b-[1px] border-[#E9E8FC]  hover:bg-[#F6F6FE] transition-all duration-300 focus:bg-[#F6F6FE]"
      >
        <div className="w-full flex flex-row items-start justify-between gap-7 p-4 ">
          <div className="flex items-start gap-2">
            {/* <img src={img} alt="hawaiian" className="w-6 h-6 sm:w-9 sm:h-9 object-contain" /> */}
            <div className="flex flex-col items-start justify-start">
              <h2 className="text-[#27273F] font-normal text-xs  md:text-base">{duration}</h2>
              <p className="text-[#7C8DB0] font-normal text-xs   md:text-base">{name}</p>
            </div>
          </div>
          <div className="flex items-start justify-start">
            <p className="text-[#27273F] font-normal text-xs  md:text-base">{time}</p>
          </div>
          <div className="flex flex-col  items-center sm:items-end justify-start">
            <p className="text-[#27273F] font-normal text-xs   md:text-base">{stop}</p>
            <p className="text-[#7C8DB0] font-normal text-xs   md:text-base">{hnl}</p>
          </div>
          <div className="flex flex-col items-center sm:items-end justify-start">
            <p className="text-[#27273F] font-normal text-xs  md:text-base">{price}</p>
            <p className="text-[#7C8DB0] font-normal text-xs   md:text-base">{trip}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchCard;
