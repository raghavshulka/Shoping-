import React from "react";

const BagSummary = () => {
  const totalMRP = 2500;
  const totalDiscount = 500;
  const convenienceFees = 100;
  const totalAmount = totalMRP - totalDiscount + convenienceFees;

  return (
    <div className=" h-[340px] shadow-lg font-normal m-10 w-[300px] flex flex-col gap-4 border p-5">
      <div className="bg-white rounded-lg shadow-lg">
        <h2 className="text-[13px] font-medium mb-4">Price Detail (3 items) </h2>
        <div className=" gap-4 mb-4">
          <div>
            <p className="text-gray-600">Total MRP:</p>
            <p className="text-lg font-semibold">₹{totalMRP}</p>
          </div>

          <div>
            <p className="text-gray-600">Convenience Fees:</p>
            <p className="text-lg font-semibold">₹{convenienceFees}</p>
          </div>
          <div>
            <p className="text-gray-600">Discount on MRP:</p>
            <p className="text-lg font-semibold">-₹{totalDiscount}</p>
          </div>
          <div className="  border-t border-gray-200 py-2">
            <p className="text-xl font-semibold">
              Total Amount: ₹{totalAmount}
            </p>
          </div>
        </div>
        <button className="bg-pink-700 self-center w-full hover:bg-red-500 text-white font-semibold py-2 px-4  focus:outline-none focus:ring-2  focus:ring-opacity-50">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default BagSummary;
