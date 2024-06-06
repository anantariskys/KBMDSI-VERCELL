import React, { useRef } from "react";
import logo from "../../assets/images/logo.png";
import Circle from "../Circle";
import { motion, useScroll, useTransform } from "framer-motion";

const CardKbmNew = () => {
    const target = useRef(null);
    const { scrollYProgress } = useScroll({
        target: target,
        offset: ["start end", "center 0.8"],
    });

    const possX = useTransform(scrollYProgress, [0, 1], [-200, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <>
            <motion.div
                ref={target}
                style={{
                    x: possX,
                    opacity: opacity,
                }}
                className="relative z-10 bg-slate-50 grid grid-cols-12 rounded-3xl md:w-4/5 lg:w-3/4 w-3/4  mx-auto \
                lg:my-16 my-9 drop-shadow-[10px_15px_10px_rgba(0,0,0,0.25)]"
            >
                <div
                    className="md:col-span-8 col-span-12 md:order-1 order-2 bg-gradient-to-tr from-Custom-Purple-1 to-Custom-Orange-2 md:p-8 p-4 flex flex-col lg:gap-8 gap-4 md:gap-6 rounded-3xl 
                drop-shadow-[2px_1px_3px_rgba(0,0,0,0.75)] "
                >
                    <h2 className="text-slate-50 lg:text-5xl md:text-4xl text-2xl font-glacial-indifference-bold md:text-left text-center">
                        Apa itu KBMDSI?
                    </h2>
                    <p className="text-slate-50 xl:text-3xl lg:text-2xl text-base font-glacial-indifference-regular">
                        KBMDSI adalah sebuah organisasi himpunan yang merupakan
                        gabungan dari 3 program studi Fakultas Ilmu Komputer
                        Universitas Brawijaya, yakni Sistem Informasi, Teknologi
                        Informasi, dan Pendidikan Teknologi Informasi. KBMDSI
                        terdiri atas EMDSI yang memiliki 6 Departemen dan BPMDSI
                        yang memiliki 2 Komisi, dimana setiap Departemen/Komisi
                        memiliki tugas dan tanggung-jawabnya masing-masing.
                    </p>
                </div>
                <div className="md:col-span-4 col-span-12 md:order-2 flex">
                    <img
                        className="self-center md:size-full size-36 object-contain"
                        src={logo}
                        alt="logo"
                        draggable='false'
                    />
                    <div className="flex gap-2 md:hidden self-center">
                        <h2 className="text-2xl font-glacial-indifference-bold text-Custom-Orange-1">
                            Swara
                        </h2>
                        <h2 className="text-2xl font-glacial-indifference-bold text-Custom-Purple-1">
                            Shakti
                        </h2>
                    </div>
                </div>
            </motion.div>
            <Circle className="bg-Custom-Orange-1 opacity-55 lg:size-60 md:size-36 size-16 absolute z-0 rounded-full lg:top-[6.5%] md:top-[9%] top-[26.8%] md:left-[8%] left-[8%]" />
            <Circle className="bg-Custom-Orange-1 md:opacity-40 opacity-70 lg:size-40 md:size-24 size-14 absolute z-0 rounded-full lg:top-[15%] md:top-[18%] md:right-[6%] top-[27%] right-[8%] " />
            <Circle className="bg-Custom-Orange-1 opacity-40 hidden  lg:size-40 md:size-24 size-12 absolute z-0 rounded-full lg:top-[15%] md:top-[18%] md:right-[6%] top-[6%] right-[20%]" />
        </>
    );
};

export default CardKbmNew;
