import React from "react";
import waveMerch from "../../../assets/merch/wave-merch.png";
import awanAkatsuki from "../../../assets/merch/awan-akatsuki.png";

const SectionHeroMerch = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="py-52 bg-gradient-to-b from-[#893B84] via-[#B736C6] to-[#CA6CBA] flex flex-col md:flex-row justify-center items-center px-5 md:px-12 lg:px-20 gap-10 md:gap-0 lg:gap-10">
                <div className="order-2 md:order-1 w-full md:w-1/2 lg:w-2/3 text-slate-50 font-bold text-5xl bg-slate-200">
                    RunningMerch
                </div>
                <div className="order-1 md:order-2 w-full md:w-1/2 lg:w-1/3 mr-0 md:mr-12 text-center md:text-left">
                    <h1
                        className="font-glacial-indifference-bold text-6xl md:text-8xl"
                        style={{
                            backgroundImage:
                                "linear-gradient(#E28858, #BA5322)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            WebkitFilter:
                                "drop-shadow(5px 10px 4px rgba(0, 0, 0, 0.25))",
                            filter: "drop-shadow(5px 10px 4px rgba(0, 0, 0, 0.25))",
                            WebkitTextStrokeWidth: "3px",
                            WebkitTextStrokeColor: "#FFF",
                        }}
                    >
                        MERCH
                    </h1>

                    <h1
                        className="font-glacial-indifference-bold text-6xl md:text-8xl"
                        style={{
                            color: "#FFF",
                            textShadow: "5px 10px 4px rgba(0, 0, 0, 0.25)",
                            WebkitTextStrokeWidth: "3px",
                            WebkitTextStrokeColor: "#D56C3A",
                            lineHeight: "normal",
                        }}
                    >
                        KBMDSI
                    </h1>

                    <h1
                        className="text-6xl md:text-7xl font-glacial-indifference-bold"
                        style={{
                            color: "#E28858",
                            WebkitTextStrokeWidth: "1px",
                            WebkitTextStrokeColor: "#FFF",
                        }}
                    >
                        official
                    </h1>
                </div>
            </div>

            <img
                src={waveMerch}
                alt={waveMerch}
                className="absolute bottom-0 w-full aspect-auto lg:-bottom-[5%]"
            />

            {/* sm */}
            <img
                src={awanAkatsuki}
                alt={awanAkatsuki}
                className="md:hidden block w-[75px] absolute top-[25%] left-[5%] rotate-[15deg] -scale-x-100 border border-red-500"
            />
            <img
                src={awanAkatsuki}
                alt={awanAkatsuki}
                className="md:hidden block w-[75px] absolute top-[20%] right-[5%] border border-red-500"
            />
            <img
                src={awanAkatsuki}
                alt={awanAkatsuki}
                className="md:hidden block w-[75px] absolute bottom-[32%] left-[5%] -scale-x-100 border border-red-500"
            />
            <img
                src={awanAkatsuki}
                alt={awanAkatsuki}
                className="md:hidden block w-[75px] absolute bottom-[45%] right-[5%] -rotate-[15deg] border border-red-500"
            />
            <img
                src={awanAkatsuki}
                alt={awanAkatsuki}
                className="md:hidden block w-[75px] absolute bottom-0 right-[15%] -rotate-[15deg] border border-red-500"
            />
            <img
                src={awanAkatsuki}
                alt={awanAkatsuki}
                className="md:hidden block w-[75px] absolute bottom-0 left-[5%] rotate-[15deg] -scale-x-100 border border-red-500"
            />

            {/* md */}
            <img
                src={awanAkatsuki}
                alt={awanAkatsuki}
                className="w-[115px] lg:w-[150px] hidden md:block absolute top-[20%] left-0 lg:left-[5%] -scale-x-100 border border-red-500"
            />
            <img
                src={awanAkatsuki}
                alt={awanAkatsuki}
                className="w-[115px] lg:w-[150px] hidden md:block absolute bottom-[17%] lg:bottom-[45%] left-[45%] -rotate-[20deg] border border-red-500"
            />
            <img
                src={awanAkatsuki}
                alt={awanAkatsuki}
                className="w-[115px] lg:w-[150px] hidden md:block absolute bottom-0 lg:bottom-[20%] left-[10%] lg:left-[15%] -scale-x-100 border border-red-500"
            />
        </div>
    );
};

export default SectionHeroMerch;
