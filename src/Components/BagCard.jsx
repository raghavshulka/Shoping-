import React from "react";
import { RxCross2 } from "react-icons/rx";

const Card = ({ Values }) => {
  return (
    <>
    
      {Values.map((Items, key) => (
        <div
          key={Items.id}
          className="  border p-4 m-10 bg-white rounded-lg flex shadow-lg overflow-hidden"
        ><div className=" sticky top-1 left-[95%] "><button className="  ">< RxCross2 /></button></div>
          <img
            src={Items.image}
            alt={Items.item_name}
            className="object-cover pr-4  w-26 h-28"
          />
          <div className="flex flex-col items-start">
            <h2 className="text-xl font-semibold mb-2">{Items.company}</h2>
            <h3 className="text-sm font-medium text-gray-800 mb-4">
              {Items.item_name}
            </h3>
            <div className="font-medium">
              <div className="mb-2">
                <span className="text-gray-600 mr-1">₹</span>
                <span className="font-semibold text-green-500">
                  {Items.current_price}
                </span>
                <span className="line-through text-[12px] mx-2 text-gray-500">
                  ${Items.original_price}
                </span>
                <span className="text-sm font-semibold text-green-500">
                  ({Items.discount_percentage}% OFF)
                </span>
              </div>
              <div className=" text-[11px] ">
                <span>Delivered By </span>
                <span className="  text-[11px] text-sm font-semibold text-blue-500">
                  Delivered By {Items.delivery_date}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
