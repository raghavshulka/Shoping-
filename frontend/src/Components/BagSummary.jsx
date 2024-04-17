import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagItemIds = useSelector((state) => state.bag);
  const items = useSelector((state) => state.item);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItemIds.indexOf(item.id);
    return itemIndex >= 0;
  });

  const CONVENIENCE_FEES = 99;
  let totalItem = bagItemIds.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  return (
    <div className="h-[340px] shadow-lg font-normal m-10 w-[300px] flex flex-col gap-4 border p-5">
      <div className="bg-white rounded-lg shadow-lg">
        <h2 className="text-[13px] font-medium mb-4">Price Detail {totalItem}</h2>
        <div className="gap-4 mb-4">
          <div>
            <p className="text-gray-600">Total MRP:</p>
            <p className="text-lg font-semibold">₹{totalMRP}</p>
          </div>

          <div>
            <p className="text-gray-600">Convenience Fees:</p>
            <p className="text-lg font-semibold">₹{CONVENIENCE_FEES}</p>
          </div>
          <div>
            <p className="text-gray-600">Discount on MRP:</p>
            <p className="text-lg font-semibold">-₹{totalDiscount}</p>
          </div>
          <div className="border-t border-gray-200 py-2">
            <p className="text-xl font-semibold">
              Total Amount: ₹{finalPayment}
            </p>
          </div>
        </div>
        <button className="bg-pink-700 self-center w-full hover:bg-red-500 text-white font-semibold py-2 px-4 focus:outline-none focus:ring-2 focus:ring-opacity-50">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default BagSummary;
