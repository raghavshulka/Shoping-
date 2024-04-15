import React from 'react'

const Card = ({Values}) => {
    return (
        <>
          {Values.map((Items,key) => (
            <div
            key={Items.id}
              className="w-[250px] h-[500px] border p-4 m-10 bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img src={Items.image} alt={Items.item_name} className="object-cover" />
              <div className="flex flex-col items-start">
                <div>
                  {Items.rating.stars}⭐|{Items.rating.count}
                </div>
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
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded">
                  ADD TO BAG
                </button>
              </div>
            </div>
          ))}
        </>)
}

export default Card