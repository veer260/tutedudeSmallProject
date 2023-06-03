import React from "react";
import { IconType } from "react-icons";
interface WorkProps {
  Icon: IconType;
  text: string;
  heading: string;
}

const Work: React.FC<WorkProps> = ({ Icon, text, heading }) => {
  return (
    <div className="grid items-center grid-cols-5 font-custom ">
      <div className="col-span-1 ">
        <div className="flex items-center justify-center h-[60px] w-[60px] bg-gray-200 rounded-full first-letter:">
          <Icon size={32} className="" />
        </div>
      </div>

      <div className="col-span-4 ">
        <div>
          <h3 className=" text-[#000000] text-base font-semibold ">
            {heading}
          </h3>
        </div>
        <div>
          <p className=" text-[#4c4c4c]  font-medium">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
