import React from "react";

const Loader = () => {

  return (
    <div className="flex w-full h-full flex-row items-center justify-center">
      <div className="flex flex-wrap">
        <div className="w-[250px] h-[500px] border p-4 m-10 bg-gray-200 rounded-lg shadow-lg animate-pulse">
          <div className="h-[300px] bg-gray-300 mb-4" />
          <div className="flex flex-col items-start">
            <div className="h-4 w-16 bg-gray-300 mb-2" />
            <div className="h-6 w-full bg-gray-300 mb-2" />
            <div className="h-4 w-full bg-gray-300 mb-2" />
            <div className="h-4 w-full bg-gray-300 mb-2" />
            <div className="h-4 w-full bg-gray-300 mb-2" />
            <div className="h-10 w-full bg-gray-300 mb-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
