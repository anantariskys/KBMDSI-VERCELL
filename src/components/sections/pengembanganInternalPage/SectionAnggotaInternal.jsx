import React, { useRef } from "react";
import AnggotaCard from "../../departemenKomisiPage/AnggotaCard";
import wave from "../../../assets/komisiPage/wave.png";
import CircleBackground from "../../CircleBackground";
import textile from "../../../assets/komisiPage/textile.png";
import beesTexture from "../../../assets/komisiPage/beesTexture.png";
import { motion, useScroll, useTransform } from "framer-motion";

const SectionAnggotaInternal = ({ dataAnggota }) => {
    const target = useRef(null);
    const { scrollYProgress } = useScroll({
        target: target,
        offset: ["start 0.8", "center end"],
    });

    const x = useTransform(scrollYProgress, [0, 1], [-1000, 0]);

    return (
        <section className="bg-[#E28858] pt-40 md:pt-60 lg:pt-80 pb-20 relative overflow-hidden">
            <img
                src={wave}
                alt={wave}
                className="absolute  z-10 -top-[1.3%] md:-top-[4%] lg:-top-[8%] w-full aspect-auto"
                draggable="false"
            />
            <div className="container mx-auto text-slate-50">
                <motion.h1
                    className="relative z-10 text-6xl font-glacial-indifference-bold text-center mb-10"
                    style={{
                        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: { duration: 0.8, ease: "easeInOut" },
                    }}
                    initial={{ x: "-100%", opacity: 0 }}
                >
                    OUR TEAMS
                </motion.h1>
                <motion.h1
                    className="relative z-10 text-4xl font-glacial-indifference-bold text-center mb-32"
                    style={{
                        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: { duration: 0.8, ease: "easeInOut" },
                    }}
                    initial={{ x: "100%", opacity: 0 }}
                >
                    Koordinator
                </motion.h1>
                <div className="container mx-auto flex w-full flex-wrap justify-center gap-x-24 gap-y-48 md:px-8">
                    {dataAnggota.tim[0].koordinator.map((anggota) => (
                        <AnggotaCard key={anggota.id} data={anggota} />
                    ))}
                </div>
                <motion.h1
                    className="text-4xl font-glacial-indifference-bold text-center my-32 relative z-10"
                    style={{
                        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.8, ease: "easeInOut" },
                    }}
                    initial={{ y: "-200%", opacity: 0 }}
                >
                    Anggota
                </motion.h1>
                <div className="container mx-auto flex w-full flex-wrap justify-center gap-x-24 gap-y-48 md:px-8">
                    {dataAnggota.tim[0].anggota.map((anggota) => (
                        <AnggotaCard key={anggota.id} data={anggota} />
                    ))}
                </div>
            </div>

            {/* sm */}

            <CircleBackground className="md:hidden absolute top-[7%] left-0 w-[65px] h-[65px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="md:hidden absolute top-[5%] right-[3%] w-[30px] h-[30px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="md:hidden absolute top-[15%] left-[20%] w-[160px] h-[160px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="md:hidden absolute top-[10%] right-[8%] w-[63px] h-[63px] bg-[#D56C3A] rounded-full" />

            <img
                src={beesTexture}
                alt={beesTexture}
                className="md:hidden absolute top-[20%] right-0 w-32"
                draggable="false"
            />

            <CircleBackground className="md:hidden absolute top-[25%] left-[8%] w-[75px] h-[75px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="md:hidden absolute top-[30%] -left-[20%] w-[160px] h-[160px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="md:hidden absolute top-[32%] -right-[20%] w-[240px] h-[240px] bg-[#D56C3A] rounded-full" />

            <img
                src={textile}
                alt={textile}
                className="md:hidden absolute top-[40%] left-0 w-20"
                draggable="false"
            />

            <CircleBackground className="md:hidden absolute top-[40.5%] left-0 w-[65px] h-[65px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="md:hidden absolute top-[40%] right-[3%] w-[30px] h-[30px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="md:hidden absolute top-[42%] left-[30%] w-[160px] h-[160px] bg-[#D56C3A] rounded-full" />

            <img
                src={beesTexture}
                alt={beesTexture}
                className="md:hidden absolute top-[45%] right-0 w-20"
                draggable="false"
            />

            <CircleBackground className="md:hidden absolute top-[48%] left-[18%] w-[75px] h-[75px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="md:hidden absolute top-[52%] -left-[20%] w-[160px] h-[160px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="md:hidden absolute top-[55%] -right-[20%] w-[240px] h-[240px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="md:hidden absolute top-[58%] left-0 w-[65px] h-[65px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="md:hidden absolute top-[61%] right-[3%] w-[30px] h-[30px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="md:hidden absolute top-[64%] left-[20%] w-[160px] h-[160px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="md:hidden absolute top-[67%] right-[8%] w-[63px] h-[63px] bg-[#D56C3A] rounded-full" />

            <img
                src={beesTexture}
                alt={beesTexture}
                className="md:hidden absolute top-[70%] right-0 w-32"
                draggable="false"
            />

            <CircleBackground className="md:hidden absolute top-[73%] left-[8%] w-[75px] h-[75px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="md:hidden absolute top-[76%] -left-[20%] w-[160px] h-[160px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="md:hidden absolute top-[79%] -right-[20%] w-[240px] h-[240px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="md:hidden absolute top-[82%] left-[18%] w-[75px] h-[75px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="md:hidden absolute top-[85%] -left-[20%] w-[160px] h-[160px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="md:hidden absolute top-[88%] -right-[20%] w-[240px] h-[240px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="md:hidden absolute top-[91%] left-0 w-[65px] h-[65px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="md:hidden absolute top-[94%] right-[3%] w-[30px] h-[30px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="md:hidden absolute top-[97%] left-[20%] w-[160px] h-[160px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="md:hidden absolute top-[100%] right-[8%] w-[63px] h-[63px] bg-[#D56C3A] rounded-full" />

            {/* md */}

            <CircleBackground className="hidden md:block absolute top-[7%] left-0 w-[95px] h-[95px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="hidden md:block absolute top-[5%] right-[3%] w-[60px] h-[60px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="hidden md:block absolute top-[15%] left-[20%] w-[190px] h-[190px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="hidden md:block absolute top-[10%] right-[8%] w-[95px] h-[95px] bg-[#D56C3A] rounded-full" />

            <img
                src={beesTexture}
                alt={beesTexture}
                className="hidden md:block absolute top-[20%] right-0 w-40"
                draggable="false"
            />

            <CircleBackground className="hidden md:block absolute top-[25%] left-[8%] w-[105px] h-[105px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="hidden md:block absolute top-[30%] -left-[20%] w-[190px] h-[190px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="hidden md:block absolute top-[32%] -right-[20%] w-[280px] h-[280px] bg-[#D56C3A] rounded-full" />

            <img
                src={textile}
                alt={textile}
                className="hidden md:block absolute top-[40%] left-0 w-20"
                draggable="false"
            />

            <CircleBackground className="hidden md:block absolute top-[40.5%] left-0 w-[105px] h-[105px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="hidden md:block absolute top-[42%] left-[30%] w-[190px] h-[190px] bg-[#D56C3A] rounded-full" />

            <img
                src={beesTexture}
                alt={beesTexture}
                className="hidden md:block absolute top-[45%] right-0 w-20"
                draggable="false"
            />

            <CircleBackground className="hidden md:block absolute top-[48%] left-[18%] w-[105px] h-[105px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="hidden md:block absolute top-[52%] -left-[20%] w-[190px] h-[190px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="hidden md:block absolute top-[55%] -right-[20%] w-[280px] h-[280px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="hidden md:block absolute top-[58%] left-0 w-[105px] h-[105px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="hidden md:block absolute top-[61%] right-[3%] w-[60px] h-[60px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="hidden md:block absolute top-[64%] left-[20%] w-[190px] h-[190px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="hidden md:block absolute top-[67%] right-[8%] w-[95px] h-[95px] bg-[#D56C3A] rounded-full" />

            <img
                src={beesTexture}
                alt={beesTexture}
                className="hidden md:block absolute top-[70%] right-0 w-32"
                draggable="false"
            />

            <CircleBackground className="hidden md:block absolute top-[73%] left-[8%] w-[105px] h-[105px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="hidden md:block absolute top-[76%] -left-[20%] w-[160px] h-[160px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="hidden md:block absolute top-[79%] right-[10%] w-[280px] h-[280px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="hidden md:block absolute top-[82%] left-[18%] w-[105px] h-[105px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="hidden md:block absolute top-[85%] -left-[20%] w-[160px] h-[160px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="hidden md:block absolute top-[91%] left-0 w-[105px] h-[105px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="hidden md:block absolute top-[94%] right-[23%] w-[60px] h-[60px] bg-[#D56C3A] rounded-full" />

            <CircleBackground className="hidden md:block absolute top-[97%] left-[20%] w-[160px] h-[160px] bg-[#D56C3A] rounded-full" />
        </section>
    );
};

export default SectionAnggotaInternal;
