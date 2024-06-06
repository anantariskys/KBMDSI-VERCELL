import React from "react";
import layer from "../assets/layer.png";
import aksen from "../assets/aksen.png";

const DepartemenCard = ({ departemen, foto, className }) => {
    return (
        <div
            className={`relative w-[90%] md:left-0 z-20 left-[14%] ${className}`}
        >
            <div className="">
                <img
                    className="md:w-[95%] w-[70%] absolute z-10 md:left-5 left-4 top-12 md:top-20"
                    src={foto}
                    alt=""
                />
                <img
                    className="md:w-[95%] w-[70%] relative z-50 mx-auto md:top-20 -left-[3.2rem] top-[3.5rem] md:-left-3"
                    src={aksen}
                    alt=""
                />
            </div>

            <div
                className="bg-gradient-to-br from-[#D26938] to-[#AD37B9] md:h-20 h-14 w-3/4 md:w-full
          md:rounded-md rounded-xl relative md:-bottom-12 -bottom-10 z-0 
          md:shadow-[2px_-10px_20px_-1px_rgba(0,0,0,0.55)] shadow-[2px_-10px_15px_-1px_rgba(0,0,0,0.75)]"
            ></div>
            <div
                className="text-slate-50 grid grid-cols-6 bg-gradient-to-br from-[#D26938] to-[#AD37B9] md:h-1/4 h-14 md:w-full w-3/4 md:rounded-md rounded-xl relative z-20 
          md:shadow-[10px_9px_20px_-1px_rgba(0,0,0,0.5)] shadow-[2px_10px_15px_-1px_rgba(0,0,0,0.75)]"
            >
                <h2
                    className="px-5 text-center col-span-5 self-center justify-self-center font-glacial-indifference-bold md:text-3xl text-sm
              "
                >
                    {departemen}
                </h2>
                <img
                    className="justify-self-center md:w-[100%] w-[85%]"
                    src={layer}
                    alt=""
                />
            </div>
        </div>
    );
};

export default DepartemenCard;
