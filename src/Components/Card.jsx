import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../Store/BagSlice";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.bag);
  const element = selector.indexOf(item.id) >= 0;

  function CardAddHandler() {
    dispatch(bagAction.addtoBag(item.id));
  }

  function CardAddremove() {
    dispatch(bagAction.removeBag(item.id));
  }

  return (
    <div className="flex flex-wrap">
      <div
        key={item.id}
        className="w-[250px] h-[500px] border p-4 m-10 bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <img src={item.image} alt={item.item_name} className="object-cover" />
        <div className="flex flex-col items-start">
          <div>
            {item.rating.stars}⭐|{item.rating.count}
          </div>
          <h2 className="text-xl font-semibold mb-2">{item.company}</h2>
          <h3 className="text-sm font-medium text-gray-800 mb-4">
            {item.item_name}
          </h3>
          <div className="font-medium">
            <div className="mb-2">
              <span className="text-gray-600 mr-1">₹</span>
              <span className="font-semibold text-green-500">
                {item.current_price}
              </span>
              <span className="line-through text-[12px] mx-2 text-gray-500">
                ${item.original_price}
              </span>
              <span className="text-sm font-semibold text-green-500">
                ({item.discount_percentage}% OFF)
              </span>
            </div>
          </div>
          {!element ? (
            <button
              onClick={CardAddHandler}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded"
            >
              ADD TO BAG
            </button>
          ) : (
            <button
              onClick={CardAddremove}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 w-full rounded"
            >
              REMOVE
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
