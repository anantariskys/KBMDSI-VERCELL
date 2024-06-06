import React from "react";
import ProkerCard from "../../departemenKomisiPage/ProkerCard";
import { motion } from "framer-motion";

const SectionTupoksiProkerDepartemen = ({ dataTupoksiProker }) => {
    // console.log({ dataTupoksiProker });
    return (
        <section className="overflow-hidden bg-gradient-to-b from-[#7746AE] to-[#3B5697] min-h-screen pb-16  md:px-12 relative z-10">
            <div className="container mx-auto  text-center text-slate-50 w-full">
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-5xl lg:px-24 md:px-10 px-4 font-glacial-indifference-bold mb-11"
                >
                    Tupoksi & Program kerja
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="mb-36 text-3xl lg:px-24 md:px-10 px-4 font-glacial-indifference-regular"
                >
                    {dataTupoksiProker.tupoksi}
                </motion.p>
                <div className="container mx-auto lg:px-24 md:px-10 px-4 flex w-full gap-8 justify-center flex-wrap">
                    {dataTupoksiProker.proker.map((proker, index) => (
                        <ProkerCard
                            key={proker.id}
                            data={proker}
                            index={index}
                            lastIndex={dataTupoksiProker.proker.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionTupoksiProkerDepartemen;
