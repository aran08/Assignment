import React from "react";
import Topbar from "../component/Topbar";
import Manubar from "../component/Manubar";
import { RiVideoChatFill } from "react-icons/ri";
import { FaMicrophoneLines } from "react-icons/fa6";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";

const Classes = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className=" w-[70%] h-[600px] border-4 rounded border-black">
        <div className="flex">
          <div>
            <Manubar />
          </div>
          <div className="w-full px-8">
            <div className="">
              <Topbar />
            </div>
            <div className=" py-8 h-[480px] flex pr-4">
              <div className="h-[480] w-1/6 flex-col flex gap-3">
                <div className="relative">
                  <img
                    src="/images/studentprofile.webp"
                    alt=""
                    className="rounded-3xl w-32 h-28"
                  />
                  <div className="absolute bottom-0 left-0 p-1 text-sm font-semibold bg-[#F0F1F3] rounded-r-xl">
                    Aran
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="/images/teacher.avif"
                    alt=""
                    className="rounded-2xl w-32 h-28"
                  />
                  <div className="absolute bottom-0 left-0 p-1 text-sm font-semibold bg-[#F0F1F3] rounded-r-xl">
                    Muskan
                  </div>
                </div>
                <div className="flex pt-6 gap-4 flex-wrap">
                  <div className="w-8 h-8 bg-[#F0F1F3] rounded-lg flex justify-center items-center">
                    <RiVideoChatFill />
                  </div>
                  <div className="w-8 h-8 bg-[#F0F1F3] rounded-lg flex justify-center items-center">
                    <FaMicrophoneLines />
                  </div>
                  <div className="w-8 h-8 bg-[#F0F1F3] rounded-lg flex justify-center items-center">
                    <FaRegShareFromSquare />
                  </div>
                  <div className="w-8 h-8 bg-[#F0F1F3] rounded-lg flex justify-center items-center">
                    <IoChatboxEllipsesOutline />
                  </div>
                  <div className="w-8 h-8 bg-[#00879D] rounded-lg flex justify-center items-center">
                    <IoExitOutline />
                  </div>
                </div>
              </div>
              <div className="w-full relative pl-5">
                    <video src="https://youtu.be/Lh3EpcVZOL0?si=jJB74P4jR7a99EaW" controls className="w-full min-h-full"></video>
                    <div className="absolute top-3 text-sm left-10 text-white">
                        Basic Mathematics Learning 001
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
