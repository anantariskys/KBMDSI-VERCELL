import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

const SectionTengah = () => {
    const target = useRef(null);
    const { scrollYProgress } = useScroll({
        target: target,
        offset: ["start 0.9", "center center"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-100, 1]);
    const y2 = useTransform(scrollYProgress, [0, 1], [100, 1]);
    const op = useTransform(scrollYProgress, [0, 1], [0, 1]);
    return (
        <>
            <section className="bg-gradient-to-b from-[#14216E] to-Custom-Dark-Blue-2 lg:mt-[13%] -mt-[15%] lg:pt-[25%] pt-[24%] px-[10%] lg:pb-[5%] ">
                <div className="lg:w-3/4 flex flex-col">
                    <motion.h2
                        ref={target}
                        style={{
                            y: y,
                            opacity: op,
                        }}
                        className="text-slate-50 bg-gradient-to-r from-transparent to-[#6D94F9] md:text-5xl text-2xl 
                  font-glacial-indifference-bold md:p-4 p-2 rounded-e-full w-fit"
                    >
                        Komisi BPMDSI
                    </motion.h2>
                    <motion.p
                        ref={target}
                        style={{
                            y: y2,
                            opacity: op,
                        }}
                        className="mt-8 font-glacial-indifference-regular md:text-2xl text-base text-slate-50"
                    >
                        Dalam Struktur BPMDSI sendiri terdapat 2 komisi yang
                        memiliki tugasnya masing-masing, yakni Komisi I Hukum
                        dan Komisi II Komunikasi dan Informasi.
                    </motion.p>
                </div>
            </section>
        </>
    );
};

export default SectionTengah;
