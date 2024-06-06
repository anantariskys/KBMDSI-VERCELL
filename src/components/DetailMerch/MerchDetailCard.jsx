import React from "react";
import MerchInformation from "../MerchPage/MerchInformation";

const MerchDetailCard = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white overflow-hidden rounded-xl">
      <div className="w-full md:w-[45%] lg:w-1/3 bg-gradient-to-b from-[#A839C0] to-[#6F66D0] p-9 rounded-xl">
        <img src="https://via.placeholder.com/300" alt="" className="w-full h-full" />
      </div>
      <div className="w-full md:w-[55%] lg:w-2/3 p-5 md:p-12">
        <MerchInformation data={data} type="detail" />
      </div>
    </div>
  );
};

export default MerchDetailCard;
