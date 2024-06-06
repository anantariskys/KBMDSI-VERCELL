import React from "react";
import logoBnW from "../../../assets/logoBnW.png";
import logoKbmOren from "../../../assets/logoKbmOren.png";
import logoKbmUngu from "../../../assets/logoKbmUngu.png";
import logoGradien from "../../../assets/logoGradien.png";
import logoTentangKami from "../../../assets/logoTentangKami.png";
import elipseSection from "../../../assets/elipsSection.png";
// import elipseSection from "../assets/elipsSection.png";
import waveBackBlue from "../../../assets/waveBackBlue.png";
import CircleBackground from "../../CircleBackground";
import { motion } from "framer-motion";


const LogoSectionTentangKami = () => {
    return (
        <section className="bg-gradient-to-b from-Custom-Dark-Blue-2 to-Custom-Dark-Blue relative pt-2 md:pb-11 lg:pt-24 lg:pb-24 xl:pb-36 overflow-hidden " id="logo">
            <img
                src={elipseSection}
                alt=""
                className="absolute w-full -top-10"
                draggable="false"
            />
            <div className="container mx-auto py-9 sm:mt-16 xl:mt-36">
                <h1
                    className="bg-gradient-to-b from-Custom-Purple-1 from-21% to-Custom-Orange-1 to-91%  font-extrabold
                text-4xl sm:text-6xl lg:text-6xl pb-3 bg-clip-text text-transparent text-center"
                >
                    Logo KBMDSI
                </h1>
                <h3 className="font-semibold text-lg sm:text-3xl lg:text-4xl text-Custom-Orange-2 text-center">
                    Swara
                    <span className="text-Custom-Purple-1">Shakti</span>
                </h3>
                <div className="flex justify-center mt-3 lg:mt-9 px-3">
                    <div
                    
                    className="w-2/6 lg:w-[30%] flex items-center">
                        <motion.img 
                        animate={{
                            scale:[0.98,1.02,0.98]
                        }}
                        transition={{
                            repeat:Infinity,
                            duration:2,
                            ease:"linear"
                        }}
                        src={logoTentangKami} alt="" draggable='false' />
                    </div>
                    <div className="w-4/6 lg:w-[40%]">
                        <div className="flex items-center">
                            <img src={logoBnW} alt="" draggable='false' className=" w-1/3" />
                            <div>
                                <p className="p-2 bg-Custom-Purple-1 inline rounded-2xl text-slate-50 font-bold text-xs sm:text-2xl lg:text-2xl">
                                    Belah Ketupat
                                </p>
                                <p className="mt-2 text-slate-50 text-xs sm:text-2xl lg:text-2xl">
                                    Melambangkan keseimbangan dan harmoni
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center mt-4">
                            <img
                                src={logoBnW}
                                alt=""
                                className="-rotate-45 w-1/3"
                                draggable='false'
                            />
                            <div>
                                <p className="p-2 bg-Custom-Orange-2 inline rounded-2xl text-slate-50 font-bold text-xs sm:text-2xl lg:text-2xl">
                                    Huruf S
                                </p>
                                <p className="mt-2 text-slate-50 text-xs sm:text-2xl lg:text-2xl">
                                    Melambangkan inisial dari nama kabinet yaitu
                                    kabinet SwaraShakti
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center mt-4">
                            <img
                                src={logoBnW}
                                alt=""
                                className="rotate-45 w-1/3"
                                draggable='false'
                            />
                            
                            <div>
                                <p className="p-2 bg-Custom-Dark-Blue-2 inline rounded-2xl text-slate-50 font-bold text-xs sm:text-2xl lg:text-2xl">
                                    Kotak
                                </p>
                                <p className="mt-2 text-slate-50 text-xs sm:text-2xl lg:text-2xl">
                                    Melambangkan wadah untuk menampung aspirasi
                                    Keluarga Besar Departemen Sistem Informasi
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-rows-3 lg:grid-rows-none lg:grid-cols-3 px-14 mt-6 gap-5 relative z-10">
                    <div className="flex justify-center items-center lg:items-start gap-5 w-full">
                        <img
                            src={logoKbmOren}
                            alt=""
                            className="w-1/4 sm:w-1/6 lg:w-2/6 aspect-square as"
                            draggable='false'
                        />
                        <div>
                            <p className="text-xs sm:text-2xl lg:text-2xl text-slate-50">
                                <span className="text-Custom-Orange-2 font-bold">
                                    Warna Jingga
                                </span>{" "}
                                melambangkan antusiasme, kehangatan, dan
                                kenyamanan
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center lg:items-start gap-5 w-full">
                        <img
                            src={logoGradien}
                            alt=""
                            className="w-1/4 sm:w-1/6 lg:w-2/6 aspect-square as"
                            draggable='false'
                        />
                        <div>
                            <p className="text-xs sm:text-2xl lg:text-2xl text-slate-50">
                                <span className="bg-gradient-to-r from-Custom-Orange-2 to-Custom-Purple-1 bg-clip-text text-transparent font-bold">
                                    Gradasi 2 Warna
                                </span>
                                <br />
                                melambangkan perbedaan yang dapat bersatu dalam
                                satu wadah yaitu Keluarga Besar Mahasiswa
                                Departemen Sistem Informasi
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center sm:justify-start items-center lg:items-start gap-5">
                        <img
                            src={logoKbmUngu}
                            alt=""
                            className="w-1/4 sm:w-1/6 lg:w-2/6 aspect-square as"
                            draggable='false'
                        />
                        <div>
                            <p className="text-xs sm:text-2xl lg:text-2xl text-slate-50">
                                <span className="text-Custom-Purple-1 font-bold">
                                    Warna Ungu
                                </span>{" "}
                                melambangkan energi kreatif
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={waveBackBlue}
                alt=""
                className="w-full h-[25%] sm:h-auto absolute bottom-0"
                draggable="false"
            />
            <div className="sm:hidden">
                <CircleBackground className="bg-gradient-to-b from-[#4163e626] to-[#d56c3a26] aspect-square absolute rounded-full w-28 top-32 -left-8"></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#4163e626] to-[#d56c3a26] aspect-square absolute rounded-full w-14 top-[42%] -left-4"></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#4163e626] to-[#d56c3a26] aspect-square absolute rounded-full w-14 top-28 -right-4"></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#4163e626] to-[#d56c3a26] aspect-square absolute rounded-full w-8 top-[52%] left-12"></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#4163e626] to-[#d56c3a26] aspect-square absolute rounded-full w-28 top-[28%] right-16"></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#4163e626] to-[#d56c3a26] aspect-square absolute rounded-full w-14 top-[57%] right-4"></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#4163e626] to-[#d56c3a26] aspect-square absolute rounded-full w-16 bottom-[27%] left-8"></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#4163e626] to-[#d56c3a26] aspect-square absolute rounded-full w-8 bottom-[27%] right-8"></CircleBackground>
            </div>
            <div className="hidden sm:block lg:hidden">
                <CircleBackground className="bg-gradient-to-b from-[#4163e626] to-[#d56c3a26] aspect-square absolute rounded-full w-36 top-32 -left-8"></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#4163e626] to-[#d56c3a26] aspect-square absolute rounded-full w-14 top-[25%] left-14"></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#4163e626] to-[#d56c3a26] aspect-square absolute rounded-full w-28 top-28 -right-8"></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#4163e626] to-[#d56c3a26] aspect-square absolute rounded-full w-28 top-[28%] right-16"></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#4163e626] to-[#d56c3a26] aspect-square absolute rounded-full w-14 top-[57%] right-4"></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#4163e626] to-[#d56c3a26] aspect-square absolute rounded-full w-16 bottom-[43%] left-40"></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#4163e626] to-[#d56c3a26] aspect-square absolute rounded-full w-8 bottom-[27%] right-28"></CircleBackground>
            </div>
            <div className="hidden lg:block">
                <CircleBackground className="bg-gradient-to-b from-[#4163e626] to-[#d56c3a26] aspect-square absolute rounded-full w-48 top-[27%] -left-24"></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#4163e626] to-[#d56c3a26] aspect-square absolute rounded-full w-32 top-[38%] left-32"></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#4163e626] to-[#d56c3a26] aspect-square absolute rounded-full w-60 top-[22%] -right-8"></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#4163e626] to-[#d56c3a26] aspect-square absolute rounded-full w-24 bottom-[47%] right-[20%]"></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#4163e626] to-[#d56c3a26] aspect-square absolute rounded-full w-44 bottom-[27%] right-28"></CircleBackground>
            </div>
        </section>
    );
};

export default LogoSectionTentangKami;
