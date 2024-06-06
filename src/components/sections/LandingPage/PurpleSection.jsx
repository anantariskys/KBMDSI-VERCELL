import React, { useRef } from "react";
import awanOrange1 from "../../../assets/landingpage/awan orange1.png";
import awanOrange2 from "../../../assets/landingpage/awan orange2.png";
import awanPutih1 from "../../../assets/landingpage/awan putih1.png";
import awanPutih2 from "../../../assets/landingpage/awan putih2.png";
import merch from "../../../assets/landingpage/merch.png";
import arrow from "../../../assets/landingpage/arrow.png";
import Star from "../../Landing Page/Star";
import Star2 from "../../Landing Page/Star2";
import Awan from "../../Landing Page/Awan";
import { useScroll, useTransform, motion } from "framer-motion";

const PurpleSection = () => {
    const target1 = useRef(null);
    const target2 = useRef(null);
    const { scrollYProgress: scrollYProgress } = useScroll({
        target: target1,
        offset: ["start 0.9", "center center"],
    });
    const { scrollYProgress: scroll2 } = useScroll({
        target: target2,
        offset: ["start 0.9", "center center"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [-100, 1]);
    const op = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const x1 = useTransform(scroll2, [0, 1], [100, 1]);
    const x2 = useTransform(scroll2, [0, 1], [-100, 1]);
    const op2 = useTransform(scroll2, [0, 1], [0, 1]);

    return (
        <div className="flex flex-col items-center relative mt-20 mx-32">
            <motion.div
                ref={target1}
                style={{
                    y: y,
                    opacity: op,
                }}
                className=""
            >
                <h2
                    className="white-border2 lg:whiteBorder font-glacial-indifference-bold bg-gradient-to-b from-Custom-Orange-1 to-[#C65B28] 
      inline-block text-transparent bg-clip-text lg:text-8xl md:text-6xl text-3xl"
                >
                    MERCHANDISE
                </h2>
                <h2
                    className="orange-border md:mt-4 md:w-[92%] w-full md:ms-16 lg:mr-10 md:-mr-14 md:text-end text-center lg:orangeBorder font-glacial-indifference-bold text-slate-50
             lg:text-7xl md:text-4xl text-xl md:-rotate-6"
                >
                    KBMDSI ?!
                </h2>
            </motion.div>

            <div className="awan">
                <Awan
                    className="absolute lg:left-4 md:-left-16 lg:-top-20 md:-top-16 lg:w-80 lg:h-48 md:size-36 size-16 -top-2 -left-24"
                    img={awanOrange1}
                />
                <Awan
                    className="absolute lg:left-56 md:left-8 lg:top-24 md:top-14 lg:w-36 lg:h-24 md:size-24 size-7 top-14 -left-12"
                    img={awanPutih1}
                />
                <Awan
                    className="absolute lg:right-4 lg:top-16 lg:w-64 lg:h-48 md:size-36 md:-right-16 size-16 top-10 -right-24"
                    img={awanOrange2}
                />

                <Awan
                    className="absolute lg:right-40 md:-right-8 md:-top-10 lg:w-36 lg:h-24 md:size-24 size-7 -top-4 -right-16"
                    img={awanPutih2}
                />
            </div>
            <div className="flex lg:flex-row flex-col-reverse lg:ms-20 justify-around">
                <motion.div
                    ref={target2}
                    style={{
                        x: x2,
                        opacity: op2,
                    }}
                    className="flex flex-col lg:w-1/2 w-screen justify-center lg:mt-32 "
                >
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
                </motion.div>
                <motion.div
                    ref={target2}
                    style={{
                        x: x1,
                        opacity: op2,
                    }}
                    className="relative"
                >
                    <img
                        className="mx-auto size-4/5"
                        src={`${merch}`}
                        alt="Foto Merch"
                    />
                    <Awan
                        className="absolute lg:bottom-1 lg:left-52 md:bottom-16 md:right-24 md:size-44 size-20 right-16 bottom-11"
                        img={awanPutih2}
                    />
                    <Awan
                        className="md:size-28 size-12 relative md:bottom-52 md:left-20 left-16 bottom-24"
                        img={awanOrange2}
                    />
                </motion.div>
            </div>
            <div className="star">
                <Star className="absolute lg:-bottom-[48%] md:-bottom-56 lg:-left-[5%] md:-left-10 lg:size-32 md:size-20 size-10 -bottom-28 -left-12" />
                <Star2 className="absolute lg:-bottom-[48%] md:-bottom-56 md:-right-10 lg:-right-[5%] lg:size-32 md:size-20 size-10 -bottom-28 -right-12" />
                <Star2 className="absolute lg:size-24 md:size-12 lg:-bottom-[30rem] md:-bottom-56 lg:left-72 md:left-20 size-6 -bottom-36 left-1" />
                <Star className="absolute lg:size-24 md:size-12 lg:-bottom-[30rem] md:-bottom-56 lg:right-72 md:right-20 size-6 -bottom-36 right-1" />
                <Star className="absolute lg:size-16 md:size-9 lg:-bottom-[32rem] lg:right-28 md:-bottom-72 md:-right-8 size-8 -bottom-44 -right-16" />
                <Star2 className="absolute lg:size-16 md:size-9 lg:-bottom-[32rem] md:-bottom-72 lg:left-28 md:-left-8 size-8 -bottom-44 -left-16" />
            </div>
        </div>
    );
};

export default PurpleSection;
