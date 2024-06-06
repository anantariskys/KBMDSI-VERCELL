import React from "react";
import ProkerCard from "../../departemenKomisiPage/ProkerCard";
import { motion } from "framer-motion";

const SectionTupoksiProkerKomisi = ({ dataTupoksiProker }) => {
    return (
        <section className="overflow-hidden bg-gradient-to-b from-[#7746AE] to-[#3B5697] min-h-screen pb-16 px-5 md:px-12">
            <div className="container mx-auto text-center text-slate-50">
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-5xl font-glacial-indifference-bold mb-11"
                >
                    Tupoksi & Program kerja
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="mb-36 text-3xl font-glacial-indifference-regular"
                >
                    {dataTupoksiProker.tupoksi}
                </motion.p>
                <div className="container mx-auto flex w-full gap-24 justify-center flex-wrap">
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

export default SectionTupoksiProkerKomisi;
