import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";

const Profile = () => {
  return (
    <div className="">
      <div className="flex items-center gap-x-1 px-4 py-3 rounded-md text-white md:text-[#800080] bg-[#800080]  md:bg-white ">
        <div className="hidden md:flex">
          <FaUserCircle size={20} />
        </div>
        <div>
          <span className="font-medium md:font-semibold text-md font-custom">
            ProfileName
          </span>
        </div>
        <div className="">
          <BiChevronDown />
        </div>
      </div>
    </div>
  );
};

export default Profile;
