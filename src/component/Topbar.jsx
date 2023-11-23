import React from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { RiContactsFill } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
import { FaChalkboard } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { RiSlideshow2Line } from "react-icons/ri";
import { GrDocumentText } from "react-icons/gr";
import { GrDocumentVideo } from "react-icons/gr";

const Topbar = () => {
  return (
    <div className="w-full">
      <div className="h-14 flex justify-between items-center pr-5">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 flex justify-center items-center bg-[#F0F1F3]  rounded-xl">
            <IoChevronBackSharp />
          </div>
          <p className="text-2xl font-bold">Basic Mathematics 101</p>
        </div>
        <div className="flex gap-5">
          <div className="flex gap-2">
            <div className="bg-[#0086A1] w-6 h-6 rounded-3xl justify-center items-center flex text-white">
              <BiSolidPhoneCall />
            </div>
            <p>Call Teacher</p>
          </div>
          <div className="flex gap-2">
            <div className="bg-[#F76203] w-6 h-6 rounded-3xl flex justify-center items-center text-white">
            <RiContactsFill />
            </div>
            <p>Support</p>
          </div>
        </div>
      </div>
      <div className="h-14 rounded-3xl bg-[#F0F1F3] flex items-center gap-2">
           <div className="flex items-center gap-2 w-32  justify-center rounded-3xl h-10">
           <SiGoogleclassroom />
           <p>Classroom</p>
           </div>
           <div className="flex items-center gap-2 w-32 justify-center rounded-3xl h-10">
           <FaChalkboard />
            <p>Whiteboad</p>
           </div>
           <div className="flex gap-2 w-32 h-10 justify-center hover:bg-white  rounded-3xl items-center">
           <FiYoutube />
           <p>Videos</p>
           </div>
           <div className="flex items-center w-32 gap-2 justify-center rounded-3xl h-10">
           <RiSlideshow2Line />
           <p>Slide Show</p>
           </div>
           <div className="flex items-center w-32 gap-2 justify-center rounded-3xl h-10">
           <GrDocumentText />
            <p>Document</p>
           </div>
           <div className="flex items-center w-32 gap-2 justify-center rounded-3xl h-10">
           <GrDocumentVideo />
           <p>Doc.Cam</p>
           </div>
      </div>
    </div>
  );
};

export default Topbar;
