import React from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { VscBellDot } from "react-icons/vsc";
import { BsSpeedometer2 } from "react-icons/bs";
import { FaRegCalendarCheck } from "react-icons/fa";
import { GoEye } from "react-icons/go";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineBarChart } from "react-icons/md";

const Manubar = () => {
  return (
    <div className=" bg-[#F0F1F3] w-16 pt-5 h-[592px]">
      <div>
        <div className="w-16 pb-5 flex justify-center ">
          <img
            src="/images/whitehat-jr-logo.png"
            alt=""
            className="w-12 h-12 "
          />
        </div>
        <div className="bg-[#F0F1F3] w-16 flex flex-col items-center gap-7">
          <HiMiniBars3CenterLeft className="w-6 h-6" />
          <VscBellDot className="w-6 h-6" />
          <BsSpeedometer2 className="w-6 h-6" />
          <FaRegCalendarCheck className="w-6 h-6" />
          <GoEye className="w-6 h-6" />
          <FaUserFriends className="w-6 h-6" />
          <MdOutlineBarChart className="w-6 h-6" />
        </div>
      </div>
      <div className="w-16 pt-24 flex justify-center bg-[#F0F1F3]">
        <img src="/images/student.png" alt="" className="w-12 h-12 " />
      </div>
    </div>
  );
};

export default Manubar;
