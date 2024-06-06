import React, { useRef } from "react";
import awanOrange1 from "../../assets/landingpage/awan orange1.png";
import awanOrange2 from "../../assets/landingpage/awan orange2.png";
import awanPutih1 from "../../assets/landingpage/awan putih1.png";
import awanPutih2 from "../../assets/landingpage/awan putih2.png";
import star1 from "../../assets/landingpage/star1.png";
import merch from "../../assets/landingpage/merch.png"
import arrow from "../../assets/landingpage/arrow.png"


const PurpleSection = () => {
    return (
        <div className="flex flex-col items-center relative mt-16 ml-16 mr-16">
            <h2
                className="white-border2 lg:whiteBorder font-glacial-indifference-bold bg-gradient-to-b from-Custom-Orange-1 to-[#C65B28] 
      inline-block text-transparent bg-clip-text lg:text-8xl md:text-6xl text-3xl">
                MERCHANDISE
            </h2>
            <h2 className="orange-border lg:mt-6 md:mt-4 w-1/2 md:ms-16 lg:mr-20 md:text-end text-center lg:orangeBorder font-glacial-indifference-bold text-slate-50 lg:text-7xl md:text-4xl text-xl md:-rotate-6">
                KBMDSI ?!
            </h2>
            <div className="awan">
                <img
                    className="absolute lg:left-32 md:left-4 lg:-top-36 md:-top-20 lg:size-72 md:size-36 size-14 -top-5 -left-0"
                    src={`${awanOrange1}`}
                    alt=""
                />
                <img
                    className="absolute lg:right-4 lg:top-20 lg:size-72 md:size-36 md:-right-4 size-14 top-3 -right-2"
                    src={`${awanOrange2}`}
                    alt=""
                />
                <img
                    className="absolute lg:left-80 md:left-20 lg:top-32 md:top-12 lg:size-44 md:size-20 size-7 top-10 left-8"
                    src={`${awanPutih1}`}
                    alt=""
                />
                <img
                    className="absolute lg:right-44 md:right-14 md:-top-16 lg:size-44 md:size-20 size-7 -top-4 right-6"
                    src={`${awanPutih2}`}
                    alt=""
                />
            </div>
            <div className="flex lg:flex-row flex-col-reverse lg:ms-20 justify-around">
                <div className="flex flex-col lg:w-1/2 w-screen justify-center lg:mt-32 ">
                    <p className="font-glacial-indifference-bold lg:text-4xl md:text-2xl text-sm lg:text-left text-center text-Custom-Orange-1 ">
                        Eksplorasi Lebih Lanjut dengan Merchandise Kami!
                    </p>
                    <p className="font-glacial-indifference-bold lg:text-2xl md:text-xl text-md lg:text-left text-center text-slate-50 mb-24">
                        Temukan koleksi eksklusif kami yang membanggakan. Mari
                        bergabung dalam perjalanan yang penuh makna dengan
                        KBMDSI SwaraShakti!
                    </p>
                    <button
                        className="bg-Custom-Orange-1 hover:bg-Custom-Orange-2 text-slate-50 rounded-full lg:w-3/4 w-1/2 md:text-2xl text-sm py-3 
                    font-glacial-indifference-bold lg:self-start self-center flex justify-between items-center lg:ps-10 md:px-5 px-2 ps-6 pe-2"
                    >
                        Info Selengkapnya
                        <img
                            className="self-end md:size-20 size-10"
                            src={arrow}
                            alt=""
                        />
                    </button>
                </div>
                <div className="relative">
                    <img className="mx-auto size-4/5" src={`${merch}`} alt="" />
                    <img
                        className="absolute lg:bottom-1 lg:left-52 md:bottom-16 md:right-24 md:size-44 size-20 right-16 bottom-11"
                        src={`${awanPutih2}`}
                        alt=""
                    />
                    <img
                        className="md:size-28 size-12 relative md:bottom-52 md:left-20 left-16 bottom-24"
                        src={awanOrange2}
                        alt=""
                    />
                </div>
            </div>
            <div className="star">
                <img
                    className="absolute lg:-bottom-80 md:-bottom-56 lg:-left-1 md:-left-10 lg:size-32 md:size-20 size-10 -bottom-28 -left-12"
                    src={`${star1}`}
                    alt=""
                />
                <img
                    className="absolute lg:-bottom-80 md:-bottom-56 md:-right-10 lg:-right-1 -rotate-45 lg:size-32 md:size-20 size-10 -bottom-28 -right-12"
                    src={`${star1}`}
                    alt=""
                />
                <img
                    className="absolute lg:size-24 md:size-12 lg:-bottom-[30rem] md:-bottom-56 lg:left-72 md:left-20 -rotate-45 size-6 -bottom-36 left-1"
                    src={`${star1}`}
                    alt=""
                />
                <img
                    className="absolute lg:size-24 md:size-12 lg:-bottom-[30rem] md:-bottom-56 lg:right-72 md:right-20 size-6 -bottom-36 right-1"
                    src={`${star1}`}
                    alt=""
                />
                <img
                    className="absolute lg:size-16 md:size-9 lg:-bottom-[32rem] lg:right-28 md:-bottom-72 md:-right-8 size-8 -bottom-44 -right-16"
                    src={`${star1}`}
                    alt=""
                />
                <img
                    className="absolute lg:size-16 md:size-9 lg:-bottom-[32rem] md:-bottom-72 lg:left-28 md:-left-8 rotate-90 size-8 -bottom-44 -left-16"
                    src={`${star1}`}
                    alt=""
                />
            </div>
        </div>
    );
};

export default PurpleSection;
