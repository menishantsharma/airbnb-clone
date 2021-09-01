import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className="flex py-7 px-2 border-b pr-4 cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 ">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p className="text-sm md:text-lg">{location}</p>
          <HeartIcon className="h-5 md:h-7 cursor-pointer" />
        </div>

        <h4 className="text-lg md:text-xl">{title}</h4>
        <div className="border-b w-10 pt-2"></div>
        <p className="pt-2 text-xs md:text-sm text-gray-500 flex-grow">
          {description}
        </p>

        <div className="flex justify-between items-end md:pt-5">
          <p className="flex items-center">
            <StarIcon className="md:h-5 h-3 text-red-400" />
            {star}
          </p>
          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
