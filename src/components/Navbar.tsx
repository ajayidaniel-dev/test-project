import React from "react";
import { IoNotifications } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { userDp } from "../assets/images";

const Navbar = () => {
  return (
    <div className="w-full h-[80px] font-nunito lgss:h-[100px] bg-secondary flex justify-between items-center px-4 lgss:px-6 lgss:rounded-[30px] lgss:bg-white">
      <h4 className="text-[18px] lgss:text-[24px] font-semibold text-white lgss:text-[#242424]">
        Analytics dashboard
      </h4>
      <button className="lgss:hidden text-[14px] text-white w-[90px] h-[40px] rounded-xl bg-[#2D4696] flex justify-center items-center">
        Menu
      </button>
      <div className="hidden lgss:flex gap-4 justify-start items-center">
        <div className="flex justify-center items-center h-[50px] w-[50px] bg-[#ECF1FF] rounded-full">
          <div className="relative">
            <IoNotifications className="text-2xl lgss:text-3xl text-secondary cursor-pointer" />

            <div className="bell-light absolute top-0 animate-pulse -right-[1px] w-2 h-2 bg-[#FF0000] rounded-full" />
          </div>
        </div>
        <div className="flex justify-start w-[200px] gap-3 items-center">
          <div className="w-[50px] h-[50px]">
            <img src={userDp} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-[130px]">
            <h4 className="text-black text-[15px] font-bold">Dexter Olaniyi</h4>
            <div className="w-full justify-between flex items-center">
              <h4 className="text-[#818181] text-[12px] font-bold">
                Dexter Olaniyi
              </h4>
              <IoIosArrowDown className="text-black text-[24px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
