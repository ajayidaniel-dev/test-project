import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo1, logo2 } from "../assets/images";
import {
  RiArrowRightSLine,
  RiHome5Line,
  RiShieldUserLine,
} from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { BsCreditCardFill, BsShop } from "react-icons/bs";
import { LiaCubesSolid } from "react-icons/lia";
import { FaCreditCard, FaMedal } from "react-icons/fa";
import { FiRadio } from "react-icons/fi";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState<number>(2);
  return (
    <div className="w-full pt-12">
      <div className="w-full hidden lgss:flex lgss:flex-col px-4 font-nunito h-full pb-12">
        <div className="w-full px-4 flex flex-col items-start justify-start gap-2">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
        </div>
        <div className="mt-8  grid grid-cols-10 gap-2 w-full">
          <div className="bg-[#394157] rounded-full h-[0.5px] " />
          <div className="bg-[#394157] rounded-full h-[0.5px] " />
          <div className="bg-[#394157] rounded-full h-[0.5px] " />
          <div className="bg-[#394157] rounded-full h-[0.5px] " />
          <div className="bg-[#394157] rounded-full h-[0.5px] " />
          <div className="bg-[#394157] rounded-full h-[0.5px] " />
          <div className="bg-[#394157] rounded-full h-[0.5px] " />
          <div className="bg-[#394157] rounded-full h-[0.5px] " />
          <div className="bg-[#394157] rounded-full h-[0.5px] " />
          <div className="bg-[#394157] rounded-full h-[0.5px] " />
        </div>
        <div className="flex flex-col mt-8 gap-4 justify-center items-center w-full">
          <Link
            to="/"
            onClick={() => setActiveLink(1)}
            className={
              activeLink === 1
                ? "w-full h-[48px] rounded-xl bg-[#192749] px-4 gap-3 flex justify-start items-center"
                : "w-full h-[48px] rounded-xl bg-transparent px-4 gap-3 flex justify-start items-center"
            }
          >
            <RiHome5Line
              className={
                activeLink === 1
                  ? "text-[#5879FD] text-[24px]"
                  : "text-white text-[24px]"
              }
            />
            <h4 className="text-[16px] font-semibold text-white">Home</h4>
          </Link>
          <Link
            to="/analytics-dashboard"
            onClick={() => setActiveLink(2)}
            className={
              activeLink === 2
                ? "w-full h-[48px] rounded-xl bg-[#192749] px-4 gap-3 flex justify-start items-center"
                : "w-full h-[48px] rounded-xl bg-transparent px-4 gap-3 flex justify-start items-center"
            }
          >
            <RxDashboard
              className={
                activeLink === 2
                  ? "text-[#5879FD] text-[24px]"
                  : "text-white text-[24px]"
              }
            />
            <h4 className="text-[16px] font-semibold text-white">
              Analytics Dashboard
            </h4>
          </Link>
          <div className="mt-4  grid grid-cols-10 gap-2 w-full">
            <div className="bg-[#394157] rounded-full h-[0.5px] " />
            <div className="bg-[#394157] rounded-full h-[0.5px] " />
            <div className="bg-[#394157] rounded-full h-[0.5px] " />
            <div className="bg-[#394157] rounded-full h-[0.5px] " />
            <div className="bg-[#394157] rounded-full h-[0.5px] " />
            <div className="bg-[#394157] rounded-full h-[0.5px] " />
            <div className="bg-[#394157] rounded-full h-[0.5px] " />
            <div className="bg-[#394157] rounded-full h-[0.5px] " />
            <div className="bg-[#394157] rounded-full h-[0.5px] " />
            <div className="bg-[#394157] rounded-full h-[0.5px] " />
          </div>
          <Link
            to="/"
            onClick={() => setActiveLink(3)}
            className={
              activeLink === 3
                ? "w-full h-[48px] rounded-xl bg-[#192749] pl-4  flex justify-between items-center"
                : "w-full h-[48px] rounded-xl bg-transparent pl-4  flex justify-between items-center"
            }
          >
            <div className="flex justify-start gap-3">
              <RxDashboard
                className={
                  activeLink === 3
                    ? "text-[#5879FD] text-[24px]"
                    : "text-white text-[24px]"
                }
              />
              <h4 className="text-[16px] font-semibold text-white">Personal</h4>
            </div>
            <RiArrowRightSLine className="text-white text-[26px]" />
          </Link>
          <Link
            to="/"
            onClick={() => setActiveLink(4)}
            className={
              activeLink === 4
                ? "w-full h-[48px] rounded-xl bg-[#192749] pl-4  flex justify-between items-center"
                : "w-full h-[48px] rounded-xl bg-transparent pl-4  flex justify-between items-center"
            }
          >
            <div className="flex justify-start gap-3">
              <BsShop
                className={
                  activeLink === 4
                    ? "text-[#5879FD] text-[24px]"
                    : "text-white text-[24px]"
                }
              />
              <h4 className="text-[16px] font-semibold text-white">Sale Hub</h4>
            </div>
            <RiArrowRightSLine className="text-white text-[26px]" />
          </Link>
          <Link
            to="/"
            onClick={() => setActiveLink(5)}
            className={
              activeLink === 5
                ? "w-full h-[48px] rounded-xl bg-[#192749] pl-4  flex justify-between items-center"
                : "w-full h-[48px] rounded-xl bg-transparent pl-4  flex justify-between items-center"
            }
          >
            <div className="flex justify-start gap-3">
              <LiaCubesSolid
                className={
                  activeLink === 5
                    ? "text-[#5879FD] text-[24px]"
                    : "text-white text-[24px]"
                }
              />
              <h4 className="text-[16px] font-semibold text-white">
                Talent management
              </h4>
            </div>
            <RiArrowRightSLine className="text-white text-[26px]" />
          </Link>
          <Link
            to="/"
            onClick={() => setActiveLink(6)}
            className={
              activeLink === 6
                ? "w-full h-[48px] rounded-xl bg-[#192749] pl-4  flex justify-between items-center"
                : "w-full h-[48px] rounded-xl bg-transparent pl-4  flex justify-between items-center"
            }
          >
            <div className="flex justify-start gap-3">
              <FaCreditCard
                className={
                  activeLink === 6
                    ? "text-[#5879FD] text-[24px]"
                    : "text-white text-[24px]"
                }
              />
              <h4 className="text-[16px] font-semibold text-white">
                Spend management
              </h4>
            </div>
            <RiArrowRightSLine className="text-white text-[26px]" />
          </Link>
          <Link
            to="/"
            onClick={() => setActiveLink(7)}
            className={
              activeLink === 7
                ? "w-full h-[48px] rounded-xl bg-[#192749] pl-4  flex justify-between items-center"
                : "w-full h-[48px] rounded-xl bg-transparent pl-4  flex justify-between items-center"
            }
          >
            <div className="flex justify-start gap-3">
              <BsCreditCardFill
                className={
                  activeLink === 7
                    ? "text-[#5879FD] text-[24px]"
                    : "text-white text-[24px]"
                }
              />
              <h4 className="text-[16px] font-semibold text-white">Cards</h4>
            </div>
            <RiArrowRightSLine className="text-white text-[26px]" />
          </Link>
          <div className="mt-4  grid grid-cols-10 gap-2 w-full">
            <div className="bg-[#394157] rounded-full h-[0.5px] " />
            <div className="bg-[#394157] rounded-full h-[0.5px] " />
            <div className="bg-[#394157] rounded-full h-[0.5px] " />
            <div className="bg-[#394157] rounded-full h-[0.5px] " />
            <div className="bg-[#394157] rounded-full h-[0.5px] " />
            <div className="bg-[#394157] rounded-full h-[0.5px] " />
            <div className="bg-[#394157] rounded-full h-[0.5px] " />
            <div className="bg-[#394157] rounded-full h-[0.5px] " />
            <div className="bg-[#394157] rounded-full h-[0.5px] " />
            <div className="bg-[#394157] rounded-full h-[0.5px] " />
          </div>
          <Link
            to="/"
            onClick={() => setActiveLink(8)}
            className={
              activeLink === 8
                ? "w-full h-[48px] rounded-xl bg-[#192749] px-4 gap-3 flex justify-start items-center"
                : "w-full h-[48px] rounded-xl bg-transparent px-4 gap-3 flex justify-start items-center"
            }
          >
            <FaMedal
              className={
                activeLink === 8
                  ? "text-[#5879FD] text-[24px] rotate-180"
                  : "text-white text-[24px] rotate-180"
              }
            />
            <h4 className="text-[16px] font-semibold text-white">
              Leaderboard
            </h4>
          </Link>
          <Link
            to="/"
            onClick={() => setActiveLink(9)}
            className={
              activeLink === 9
                ? "w-full h-[48px] rounded-xl bg-[#192749] px-4 gap-3 flex justify-start items-center"
                : "w-full h-[48px] rounded-xl bg-transparent px-4 gap-3 flex justify-start items-center"
            }
          >
            <RiShieldUserLine
              className={
                activeLink === 9
                  ? "text-[#5879FD] text-[24px] "
                  : "text-white text-[24px] "
              }
            />
            <h4 className="text-[16px] font-semibold text-white">
              Profile & Settings
            </h4>
          </Link>
          <Link
            to="/"
            onClick={() => setActiveLink(10)}
            className={
              activeLink === 10
                ? "w-full h-[48px] rounded-xl bg-[#192749] pl-4  flex justify-between items-center"
                : "w-full h-[48px] rounded-xl bg-transparent pl-4  flex justify-between items-center"
            }
          >
            <div className="flex justify-start gap-3">
              <FiRadio
                className={
                  activeLink === 10
                    ? "text-[#5879FD] text-[24px]"
                    : "text-white text-[24px]"
                }
              />
              <h4 className="text-[16px] font-semibold text-white">
                Bank performance
              </h4>
            </div>
            <RiArrowRightSLine className="text-white text-[26px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
