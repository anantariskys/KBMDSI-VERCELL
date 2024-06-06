import React, { useRef } from "react";
import logo2 from "../../assets/landingpage/logo2.png";
import { useScroll, useTransform, motion } from "framer-motion";

const CardSambutanNew = ({
    reverse,
    jabatan,
    nama,
    namaPanggilan,
    foto,
    star,
}) => {
    const handleNameChange = () => {
        if (nama.includes(namaPanggilan)) {
            return (
                <span>
                    {nama.split(namaPanggilan).map((part, index) =>
                        index !== 0 ? (
                            <span key={index}>
                                <span className="text-Custom-Purple-1">
                                    {namaPanggilan}
                                </span>
                                {part}
                            </span>
                        ) : (
                            part
                        )
                    )}
                </span>
            );
        }
        return nama;
    };
    const target = useRef(null);
    const { scrollYProgress } = useScroll({
        target: target,
        offset: ["start 0.9", "center 0.8"],
    });

    const x = useTransform(scrollYProgress, [0, 1], [-100, 1]);
    const x2 = useTransform(scrollYProgress, [0, 1], [100, 1]);
    const op = useTransform(scrollYProgress, [0, 1], [0, 1]);
    return (
        <motion.div
            ref={target}
            style={{
                opacity: op,
                x: reverse ? x2 : x,
            }}
            className={`w-3/4 md:h-[100%] h-[150%] z-10 relative drop-shadow-[10px_15px_10px_rgba(0,0,0,0.25)] ${
                reverse
                    ? `lg:ms-56 md:ms-36 mx-auto z-10`
                    : `lg:ms-36 md:ms-16 mx-auto`
            }`}
        >
            <div
                className={`bg-slate-50 h-full relative ${
                    reverse ? `rounded-tr-3xl` : `rounded-tl-3xl`
                }`}
            >
                <div className="grid grid-cols-6 lg:h-36 md:h-28 h-12">
                    <img
                        className={`rounded-full relative ring-4 ring-slate-50 bg-gradient-to-r from-Custom-Purple-1 to-Custom-Orange-1
                      lg:-top-40 md:col-span-3 col-span-6 justify-self-center lg:size-80 md:size-40 md:-top-20 size-20 -top-10 ${
                          reverse ? `md:order-last -top-24` : ``
                      }`}
                        src={foto}
                        alt="Foto Ketua atau Wakil Himpunan"
                    />
                    <div
                        className={`flex flex-col relative lg:-top-9 md:-top-6 -top-10 md:col-span-2 col-span-6 items-center ${
                            reverse ? `-top-24` : ``
                        }`}
                    >
                        <div className="flex md:flex-col flex-row md:gap-0 gap-2 ">
                            <h2
                                className="white-border2 lg:text-6xl md:text-4xl text-xl font-glacial-indifference-bold text-center bg-gradient-to-b from-Custom-Purple-1
                 to-Custom-Orange-1 text-transparent bg-clip-text md:w-screen leading-none 
                      "
                            >
                                {jabatan}
                            </h2>
                            <h2
                                className="white-border2 lg:text-6xl md:text-4xl text-xl font-glacial-indifference-bold bg-gradient-to-b from-Custom-Purple-1
                 to-Custom-Orange-1 text-transparent bg-clip-text text-center leading-none
                      "
                            >
                                Himpunan
                            </h2>
                        </div>

                        <p className="mt-1 md:mt-2 md:mb-12 lg:text-2xl md:text-sm text-[10px] font-glacial-indifference-bold text-Custom-Orange-1">
                            {handleNameChange()}
                        </p>
                    </div>
                    <img
                        className={`col-span-1 relative md:-right-8 md:-top-8 -right-72 -top-4 ${
                            reverse
                                ? `order-first justify-self-start md:-left-11 -left-4`
                                : `justify-self-end -top-[8.5rem]`
                        }`}
                        src={star}
                        alt="bintang"
                    />
                </div>
                <p className="text-center lg:p-44 md:p-24 p-16 lg:text-2xl md:text-sm text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div
                className={`bg-Custom-Purple-1 flex justify-center h-6 md:h-12 lg:h-24 ${
                    reverse ? `rounded-bl-3xl` : `rounded-br-3xl`
                }  `}
            >
                <img src={logo2} alt="Logo Swarasakti" />
            </div>
        </motion.div>
    );
};

export default CardSambutanNew;
