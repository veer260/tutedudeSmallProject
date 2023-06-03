import React from "react";

interface EarningProps {
  header: string;
  value: string;
  space: boolean;
}

const Earning: React.FC<EarningProps> = ({ header, value, space }) => {
  return (
    <div className="flex flex-col gap-2 font-custom ">
      <h3 className="text-sm text-[#800080] font-medium ">{header}</h3>
      <span className="text-2xl font-medium ">
        {space ? "\u20B9 " : ""}

        {value}
      </span>
    </div>
  );
};

export default Earning;
