import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

function Card({ image, title, content, date, departemen, index, lastIndex }) {
    const target = useRef(null);
    const { scrollYProgress } = useScroll({
        target: target,
        offset: ["start 0.8", "start center"],
    });


    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [300, 0]);


    return (
        <motion.div
            ref={target}
            style={{
                y: y ,
                opacity,
            }}
            className="flex flex-col group justify-between md:w-full bg-slate-50 rounded-xl text-black justify-self-center drop-shadow-[10px_15px_10px_rgba(0,0,0,0.25)]"
        >
            <div className="w-full aspect-video overflow-hidden rounded-t-xl">
                <img
                    className=" group-hover:rotate-1 duration-200 ease-in-out  group-hover:scale-105 size-full object-cover"
                    src={`${image}`}
                    alt=""
                />
            </div>
            <div className="lg:px-4 px-2 flex flex-col gap-2">
            <h4 className="font-glacial-indifference-bold lg:text-3xl md:text-xl text-base pt-2 lg:pt-4 w-full">
                {title}
            </h4>
            <h4 className="font-glacial-indifference-bold  lg:text-xl md:text-xl text-base  md:py-1 lg:py-1">
                {departemen}
            </h4>
            <p className=" font-glacial-indifference-regular h-24 overflow-hidden line-clamp-4 lg:text-base text-xs">
                {content}
            </p>
            <p className=" lg:text-base md:text-md text-xs line-clamp-1">
                Regist: <small>{date}</small>
            </p>
            <a
                className="w-full p-1 md:p-2 text-center active:scale-95 duration-200 ease-in-out  mb-2 text-slate-50 rounded-md  lg:text-base md:text-sm text-xs bg-gradient-to-r from-Custom-Blue to-Custom-Purple-2"
                href="#"
            >
                Baca Selengkapnya
            </a>

            </div>
        </motion.div>
    );
}

export default Card;
