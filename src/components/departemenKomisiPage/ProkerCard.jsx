import { useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ProkerCard = ({ data, index, lastIndex }) => {
    const target = useRef(null);
    const { scrollYProgress } = useScroll({
        target: target,
        offset: ["start end", "start center"],
    });

    const x = useTransform(scrollYProgress, [0, 1], [-300, 0]);
    const x2 = useTransform(scrollYProgress, [0, 1], [300, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [300, 0]);

    let xPosition = 0;
    let yPosition = 0;

    if ((index + 3) % 3 === 1 && index !== lastIndex) {
        xPosition = 0;
        yPosition = y;
    }
    if ((index + 3) % 3 === 1 && index === lastIndex) {
        xPosition = x2;
        yPosition = 0;
    }
    if ((index + 3) % 3 === 0 && index !== lastIndex) {
        xPosition = x;
        yPosition = 0;
    }
    if ((index + 3) % 3 === 2) {
        xPosition = x2;
        yPosition = 0;
    }

    return (
        <motion.section
            ref={target}
            style={{
                x: window.innerWidth >= 1065 ? xPosition : 0,
                y: window.innerWidth >= 1065 ? yPosition : 0,
                opacity,
            }}
            className="rounded-3xl text-black bg-slate-100 w-full md:w-[45%] lg:w-[23%] p-5 min-h-[250px]"
        >
            <h1 className="text-5xl font-glacial-indifference-bold text-right">
                0{data.id}
            </h1>
            <h1 className="text-4xl font-glacial-indifference-bold text-left">
                {data.judul}
            </h1>
            <p className="text-left font-glacial-indifference-regular">
                {data.deskripsi}
            </p>
        </motion.section>
    );
};

export default ProkerCard;
