import React from "react";
import BagSummary from "../Components/BagSummary";
import BagCard from "../Components/BagCard";
import { useSelector } from "react-redux";

const Bag = () => {
  const items = useSelector((store) => store.item);
  const bag = useSelector((store) => store.bag);

  const finalItems = items.filter((item) => {
    const itemIndex = bag.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <div className=" flex justify-center items-center mx-8  ">
      <div className="  flex">
        <div className="a">
          {finalItems.map((items) => (
            <BagCard item={items} />
          ))}
        </div>
        <div className=" flex flex-row">
            <BagSummary />
        </div>
      </div>
    </div>
  );
};

export default Bag;
