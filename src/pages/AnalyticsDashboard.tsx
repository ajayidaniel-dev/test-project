import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { moreTransactions, transactions } from "../constants/Constants";
import PieChart from "../components/PieChart";

const AnalyticsDashboard = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const sentMoney = 105000000;
  const cashout = 16578947.37;
  const utilities = 16578947.37;
  return (
    <div className="bg-white font-nunito lgss:bg-primary  w-full flex h-full justify-start items-start">
      <div className="w-1/5 hidden lgss:flex">
        <Sidebar />
      </div>
      <div className="w-full lgss:w-4/5 lgss:pl-2 lgss:pr-6  lgss:pt-4  lgss:pb-4">
        <div className="lgss:rounded-[30px] bg-white w-full  h-full">
          <Navbar />
          <div className="w-full px-4 pt-8 pb-8 bg-[#F8F9FB] h-full lgss:rounded-b-[30px]">
            <div className="w-full grid grid-cols-1 gap-4 lgss:grid-cols-4 ">
              <div className="h-[190px] bg-wallet bg-cover lgss:h-[160px] p-6 lgss:p-4 rounded-xl bg-secondary">
                <h4 className="text-[#CDCDCD] font-medium text-[16px] tracking-wider ">
                  Wallet Balance
                </h4>
                <div className="flex justify-start gap-4  items-center mt-3">
                  <h4 className="font-sora text-white  font-semibold text-[24px]">
                    {visible ? `₦50,000.00` : "***********"}
                  </h4>
                  {!visible ? (
                    <AiOutlineEyeInvisible
                      onClick={() => setVisible((prev) => !prev)}
                      className="text-white  text-[24px]"
                    />
                  ) : (
                    <AiOutlineEye
                      onClick={() => setVisible((prev) => !prev)}
                      className="text-white text-[24px]"
                    />
                  )}
                </div>
                <div className="w-full mt-4 flex justify-center items-center gap-4">
                  <button className=" text-[14px] text-white w-1/2 h-[44px] rounded-xl bg-[#2D4696] flex justify-center items-center">
                    Add fund
                  </button>
                  <button className=" text-[14px] text-white w-1/2 h-[44px] rounded-xl bg-[#2D4696] flex justify-center items-center">
                    Withdraw
                  </button>
                </div>
              </div>
              <div className="h-[190px] lgss:h-[160px] rounded-xl bg-white p-2">
                <div className="w-full bg-[#F6FAFF] rounded-xl h-[130px] lgss:h-[110px] pt-6 px-4">
                  <h4 className="text-[#4F64A7] font-medium text-[16px] tracking-wider ">
                    Total savings balance
                  </h4>
                  <h4 className="text-secondary mt-4 text-[20px] font-semibold font-sora ">
                    ₦194,000
                  </h4>
                </div>
                <div className="flex justify-start mt-4 lgss:mt-3 items-center gap-3">
                  <h4 className="text-[#4F64A7] font-medium text-[16px] tracking-wider ">
                    View details
                  </h4>
                  <RiArrowRightDoubleLine className="text-[18px] text-secondary" />
                </div>
              </div>
              <div className="h-[190px] lgss:h-[160px] rounded-xl bg-white p-2">
                <div className="w-full bg-[#F6FAFF] rounded-xl h-[140px] lgss:h-[110px] pt-6 px-4">
                  <h4 className="text-[#4F64A7] font-medium text-[16px] tracking-wider ">
                    Total customers
                  </h4>
                  <h4 className="text-secondary mt-4 text-[20px] font-semibold font-sora ">
                    919
                  </h4>
                </div>
                <div className="flex justify-start mt-2 items-center gap-3">
                  <h4 className="text-[#4F64A7] font-medium text-[16px] tracking-wider ">
                    View details
                  </h4>
                  <RiArrowRightDoubleLine className="text-[18px] text-secondary" />
                </div>
              </div>
              <div className="h-[190px] lgss:h-[160px] rounded-xl bg-white p-2">
                <div className="w-full bg-[#F6FAFF] rounded-xl h-[140px] lgss:h-[110px] pt-6 px-4">
                  <h4 className="text-[#4F64A7] font-medium text-[16px] tracking-wider ">
                    Total POS
                  </h4>
                  <h4 className="text-secondary mt-4 text-[20px] font-semibold font-sora ">
                    0
                  </h4>
                </div>
                <div className="flex justify-start mt-2 items-center gap-3">
                  <h4 className="text-[#4F64A7] font-medium text-[16px] tracking-wider ">
                    View details
                  </h4>
                  <RiArrowRightDoubleLine className="text-[18px] text-secondary" />
                </div>
              </div>
            </div>
            <div className="grid w-full mt-4 grid-cols-1 lgss:grid-cols-4 gap-4">
              {transactions.map((transaction, index) => (
                <div
                  key={index}
                  className="h-[270px] lgss:h-[250px]  rounded-xl bg-white p-3 lgss:p-2"
                >
                  <div className="w-full bg-[#F6FAFF] rounded-xl h-full  pt-6 lgss:pt-4 px-4">
                    <div className="w-full justify-between items-center flex">
                      <h4 className="text-[#4F64A7] font-medium text-[16px] lgss:text-[11px] lg:text-[13px] tracking-wider ">
                        {transaction.name}
                      </h4>
                      <select className="text-[14px] outline-none text-secondary font-medium w-[30%] lgss:w-[35%] px-2 h-[44px] rounded-xl bg-[#EAF4FF] flex justify-center items-center">
                        <option value="More">More</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-3  w-full mt-4">
                      {transaction.value.map((values, index) => (
                        <div key={index}>
                          <h4 className="text-[#4F64A7]  font-medium text-[15px] lgss:text-[11px] lg:text-[13px] tracking-wider ">
                            {values.name}
                          </h4>
                          <h4 className="text-secondary lgss:text-[11px] lg:text-[13px] mt-4 text-[20px] font-semibold font-sora ">
                            ₦{values.value.toLocaleString("en-US")}
                          </h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid w-full mt-4 grid-cols-1 lgss:grid-cols-4 gap-4">
              {moreTransactions.map((transactionsDetail, index) => (
                <div
                  key={index}
                  className="h-[200px]  rounded-xl bg-white p-3 lgss:p-2"
                >
                  <div className="w-full bg-[#F6FAFF] rounded-xl h-full  pt-6 lgss:pt-4 px-4">
                    <div className="w-full justify-between items-center flex">
                      <h4 className="text-[#4F64A7] font-medium text-[16px] lgss:text-[11px] lg:text-[13px]tracking-wider ">
                        {transactionsDetail.name}
                      </h4>
                      <select className="text-[14px] outline-none text-secondary font-medium w-[30%] lgss:w-[35%] px-2 h-[44px] rounded-xl bg-[#EAF4FF] flex justify-center items-center">
                        <option value="Today">Today</option>
                        <option value="Yesterday">Yesterday</option>
                        <option value="This week">This week</option>
                        <option value="Last week">Last week</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-3  w-full mt-4">
                      {transactionsDetail.value.map((value, newIndex) => (
                        <div key={newIndex}>
                          <h4 className="text-[#4F64A7] flex justify-start items-center gap-1 font-medium lgss:text-[11px] lg:text-[13px] text-[15px] tracking-wider ">
                            {index === 1 && (
                              <span
                                className={
                                  value.name === "Successful"
                                    ? "bg-[#18A201] w-[8px] h-[8px] rounded-full"
                                    : value.name === "Failed"
                                    ? "bg-[#FF0000] w-[8px] h-[8px] rounded-full"
                                    : ""
                                }
                              ></span>
                            )}
                            {value.name}
                          </h4>
                          <h4 className="text-secondary mt-4 text-[20px] lgss:text-[11px] lg:text-[13px] font-semibold font-sora ">
                            {` ${
                              value.name === "Count" || index === 1 ? "" : "₦"
                            }${value.value.toLocaleString("en-US")}`}
                          </h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col lgss:flex-row justify-start gap-4 mt-4 items-center w-full">
              <div className="h-[200px]  rounded-xl bg-white p-3 lgss:p-2 w-full lgss:w-[24%]">
                <div className="w-full bg-[#F6FAFF] rounded-xl h-full  pt-6 lgss:pt-4 px-4">
                  <div className="w-full justify-between items-center flex">
                    <h4 className="text-[#4F64A7] font-medium text-[16px] lgss:text-[11px] lg:text-[13px] tracking-wider lgss:tracking-normal ">
                      Average commission per transaction
                    </h4>
                    <select className="text-[14px] lgss:text-[12px] outline-none text-secondary font-medium w-[30%] lgss:w-[40%] px-2 lgss:px-1 h-[44px] rounded-xl bg-[#EAF4FF] flex justify-center items-center">
                      <option value="Today">Today</option>
                      <option value="Yesterday">Yesterday</option>
                      <option value="This week">This week</option>
                      <option value="Last week">Last week</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-3  w-full mt-4">
                    <div>
                      <h4 className="text-[#4F64A7] flex lgss:text-[11px] lg:text-[13px] justify-start items-center gap-1 font-medium text-[16px] tracking-wider ">
                        POS commission
                      </h4>
                      <h4 className="text-secondary mt-4 text-[20px] lgss:text-[11px] lg:text-[13px] font-semibold font-sora ">
                        ₦500
                      </h4>
                    </div>
                    <div>
                      <h4 className="text-[#4F64A7] lgss:text-[11px] lg:text-[13px] flex justify-start items-center gap-1 font-medium text-[16px] tracking-wider ">
                        Lotto commission
                      </h4>
                      <h4 className="text-secondary mt-4 text-[20px] lgss:text-[11px] lg:text-[13px] font-semibold font-sora ">
                        ₦200
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lgss:w-[60%] w-full h-[400px] lgss:h-[200px] flex justify-start items-start  gap-4 flex-col lgss:flex-row  rounded-xl bg-white p-5 lgss:p-3">
                <div className="w-full lgss:w-[57%]">
                  <h4 className="text-[#37474F] font-medium text-[16px] lgss:text-[11px] lg:text-[13px] tracking-wider lgss:tracking-normal ">
                    Transaction Comparative
                  </h4>
                  <h4 className="text-[#4F64A7] flex justify-start items-center mt-4 lgss:mt-2 gap-1 font-medium lgss:text-[11px] lg:text-[13px] text-[15px] tracking-wider ">
                    <span className="bg-secondary w-[8px] h-[8px] rounded-full"></span>
                    Send money
                  </h4>
                  <h4 className="text-[#263238] mt-2 text-[16px] lgss:text-[11px] lg:text-[13px] font-semibold font-sora ">
                    ₦{sentMoney.toLocaleString("en-US")}
                  </h4>
                  <div className="mt-8 lgss:mt-4 grid grid-cols-10 gap-2 w-full">
                    <div className="bg-[#EDE1FF] rounded-full h-[0.5px] " />
                    <div className="bg-[#EDE1FF] rounded-full h-[0.5px] " />
                    <div className="bg-[#EDE1FF] rounded-full h-[0.5px] " />
                    <div className="bg-[#EDE1FF] rounded-full h-[0.5px] " />
                    <div className="bg-[#EDE1FF] rounded-full h-[0.5px] " />
                    <div className="bg-[#EDE1FF] rounded-full h-[0.5px] " />
                    <div className="bg-[#EDE1FF] rounded-full h-[0.5px] " />
                    <div className="bg-[#EDE1FF] rounded-full h-[0.5px] " />
                  </div>
                  <div className="flex w-full justify-start items-center gap-2">
                    <div className="w-2/5">
                      <h4 className="text-[#4F64A7] flex justify-start items-center mt-4 gap-1 font-medium lgss:text-[11px] lg:text-[13px] text-[15px] tracking-wider ">
                        <span className="bg-[#F4BE38] w-[8px] h-[8px] rounded-full"></span>
                        Cashout
                      </h4>
                      <h4 className="text-[#263238] mt-2 text-[16px] lgss:text-[11px] lg:text-[13px] font-semibold font-sora ">
                        ₦{cashout.toLocaleString("en-US")}
                      </h4>
                    </div>
                    <div className="w-1/2">
                      <h4 className="text-[#4F64A7] flex justify-start items-center mt-4 gap-1 font-medium lgss:text-[11px] lg:text-[13px] text-[15px] tracking-wider ">
                        <span className="bg-[#EDE1FF] w-[8px] h-[8px] rounded-full"></span>
                        Utilities and Bills
                      </h4>
                      <h4 className="text-[#263238] mt-2 text-[16px] lgss:text-[11px] lg:text-[13px] font-semibold font-sora ">
                        ₦{utilities.toLocaleString("en-US")}
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="mt-4 font-nunito">
                  <PieChart
                    sentMoney={sentMoney}
                    cashout={cashout}
                    utilities={utilities}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
