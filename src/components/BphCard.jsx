import React, { useRef } from "react";
import imgPlane1 from "../assets/imgPLane1.png";
import imgPlane2 from "../assets/imgPlane2.png";
import { motion, useScroll, useTransform } from "framer-motion";

const BphCard = ({ nama, foto, index }) => {
    const target = useRef(null);
    const { scrollYProgress } = useScroll({
        target: target,
        offset: ["start 0.8", "center center"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [190, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div className="w-[170px] h-[143px] md:w-[280px] md:h-[236px] lg:w-[320px] lg:h-[270px] xl:w-[450px] xl:h-[379px] relative">
            <div className=" bg-Custom-Purple-1 rounded-t-full h-full w-full border-x-2 border-t-2 md:border-x-4 md:border-t-4 border-white">
                <motion.img
                    ref={target}
                    src={foto}
                    alt="img-bph"
                    draggable="false"
                    key={index}
                    className="absolute bottom-[10%]"
                    style={{ y: y, scale: scale }}
                />
                <img
                    src={imgPlane1}
                    alt=""
                    className="absolute w-8 -ms-2 -mt-2 md:w-[48px] lg:w-[60px] xl:w-[85px] lg:-ms-5 top-0 lg:-mt-4 z-10"
                    draggable="false"
                />
                <img
                    src={imgPlane2}
                    alt=""
                    className="absolute w-8 -right-2 md:w-[48px] md:-right-4 lg:w-[60px] xl:w-[85px] lg:-right-5 xl:-right-12 -bottom-2 z-10"
                    draggable="false"
                />
                <div
                    className="absolute w-[93%] h-[25%] bg-gradient-to-t from-Custom-Dark-Blue to-Custom-Dark-Blue-2
                    rounded-lg rounded-tr-3xl -ms-4 px-2 md:-ms-6 lg:-ms-7 -mb-4 bottom-0 border-[3px] border-slate-50 flex items-center justify-center
                    z-10"
                    style={{
                        boxShadow: "8px -11px 4px 0px rgba(0, 0, 0, 0.25)",
                    }}
                >
                    <p className="text-slate-50 text-[10px] md:text-base font-bold w-fit text-center">
                        {nama}
                    </p>
                </div>
            </div>
            <div className="absolute w-full h-[30%] -bottom-2 bg-gradient-to-b from-transparent to-Custom-Purple-1 to-[50%] z-0"></div>
        </div>
        // <div className="w-[170px] h-[143px] relative">
        //     <div className=" bg-Custom-Purple-1 rounded-t-full h-full w-full border-x-2 border-t-2 border-white">
        //         <img
        //             src={foto}
        //             alt="img-bph"
        //             draggable="false"
        //             key={index}
        //             className="absolute bottom-[10%]"
        //         />
        //         <img
        //             src={imgPlane1}
        //             alt=""
        //             className="absolute w-8 -ms-2 top-0 -mt-2 z-10"
        //         />
        //         <img
        //             src={imgPlane2}
        //             alt=""
        //             className="absolute w-8 -right-2 -bottom-2 z-10"
        //         />
        //         <div
        //             className="absolute w-[93%] h-[25%] bg-gradient-to-t from-Custom-Dark-Blue to-Custom-Dark-Blue-2
        //             rounded-lg rounded-tr-3xl -ms-4 -mb-4 px-2 bottom-0 border-[3px] border-slate-50 flex items-center justify-center
        //             z-10"
        //             style={{
        //                 boxShadow: "8px -11px 4px 0px rgba(0, 0, 0, 0.25)",
        //             }}
        //         >
        //             <p className="text-slate-50 font-bold w-fit text-center text-[10px]">
        //                 {nama}
        //             </p>
        //         </div>
        //     </div>
        //     <div className="absolute w-full h-[30%] -bottom-2 bg-gradient-to-b from-transparent to-Custom-Purple-1 to-[50%] z-0"></div>
        // </div>
    );
};

export default BphCard;
