import React, { useRef } from "react";
import imgStar from "../../assets/komisiPage/img-star.png";
import imgPlanePaper from "../../assets/komisiPage/img-planePaper.png";
import { motion, useScroll, useTransform } from "framer-motion";

const AnggotaCard = ({ data }) => {
    // console.log(data.nama);
    const target = useRef(null);
    const { scrollYProgress } = useScroll({
        target: target,
        offset: ["start 0.8", "center center"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [190, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section className="bg-[#3B5697] rounded-tl-[90px] rounded-tr-3xl w-64 h-56 rounded-br-[90px] rounded-bl-3xl relative z-20 shadow-2xl">
            <img
                src={imgPlanePaper}
                alt={imgPlanePaper}
                className="absolute -top-[30px] -left-[30px] w-16 h-16"
                draggable="false"
            />

            <div className="w-72 bg-black">
                <motion.img
                    ref={target}
                    style={{
                        y: y,
                        scale: scale,
                    }}
                    src={data.img}
                    alt={data.name}
                    className="w-72 absolute bottom-0"
                    draggable="false"
                />
            </div>

            <div className="absolute -bottom-[10%] -right-[25%] pb-4 pl-7 pt-5 bg-[#151E4F] rounded-tl-[100px] rounded-tr-[30px] rounded-b-[30px] w-52 shadow-2xl">
                <img
                    src={imgStar}
                    alt={imgStar}
                    className="absolute -right-[13px] -top-[23px] w-16"
                    draggable="false"
                />
                <h1 className="text-base font-glacial-indifference-bold text-slate-50">
                    {data.nama}
                </h1>
                <p className="text-slate-50 font-glacial-indifference-bold text-sm">
                    {data.jabatan}
                </p>
            </div>
        </section>
    );
};

export default AnggotaCard;
