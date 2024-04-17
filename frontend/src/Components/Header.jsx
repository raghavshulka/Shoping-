import React from "react";
import { BsPerson } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const bag = useSelector((store) => store.bag);
  return (
    <div className=" font-semibold z-50 text-sm shadow-sm  shadow-gray-200  flex  items-center h-full px-7 py-5 flex-row gap-9">
      <Link to="/">
        <img
          className=" mx-7 w-[35ps] h-[35px]"
          src="https://logosarchive.com/wp-content/uploads/2021/12/Myntra-icon-logo.svg "
        />
      </Link>
      <div className="flex  bg-slate-50">
        <a className="p-2 px-4 group " href="#">
          MEN
          <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </a>
        <a className="p-2 px-4 group" href="#">
          WOMAN
          <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </a>
        <a className="p-2 px-4 group" href="#">
          KIDS
          <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </a>
        <a className="p-2 px-4  group" href="#">
          Home & LIVING
          <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </a>
        <a className="p-2 px-4 group" href="#">
          BEAUTY
          <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </a>
        <a className="p-2 px-4 group" href="#">
          STUDIO
          <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </a>
      </div>
      <div className=" flex  items-center  mx-6">
        <div className="  px-2 absolute ">
          <CiSearch size={20} />
        </div>
        <input
          className="  bg-gray-100 py-3 px-3 w-[500px]"
          type=""
          placeholder="      search for product, brands and more"
        />
      </div>
      <div className=" ml-6 text-[12px] tezt-[12px] font-[650]  text-gray-700 flex justify-center items-center gap-5">
        <div className=" flex flex-col justify-center items-center">
          <BsPerson size={21} />
          <p>Profile</p>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <CiHeart size={21} />
          <p>Wishlist</p>
        </div>
        <Link to="/bag">
          {" "}
          <div className=" flex flex-col justify-center items-center">
            <IoBagHandleOutline size={21} />
            <p>Bag</p>
            <diV className=" top-[6px] right-[42px] absolute border  px-2  rounded-full bg-red-600 text-white text-[10px] font-[10]  ">
              {bag.length}
            </diV>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
