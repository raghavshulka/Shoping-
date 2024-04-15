import React from "react";
import BagSummary from "../Components/BagSummary";
import BagCard from "../Components/BagCard";
const Items = [
  {
    id: "001",
    image: "images/1.jpg",
    company: "Carlton London",
    item_name: "Rhodium-Plated CZ Floral Studs",
    original_price: 1045,
    current_price: 606,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: { stars: 4.5, count: 1400 },
  },
];
const Bag = () => {
  return (
    <div className=" flex justify-center items-center mx-8  ">
    <div className="  flex">  <div className="a">
        <BagCard Values={Items} />
        
      </div>
      <div className=" flex flex-row">
        <BagSummary />
        
      </div></div>
    </div>
  );
};

export default Bag;
