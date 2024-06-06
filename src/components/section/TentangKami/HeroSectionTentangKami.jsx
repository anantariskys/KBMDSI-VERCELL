import React, { useRef } from "react";
import wave from "../../../assets/Vector.png";
import logoTentangKami from "../../../assets/logoTentangKami.png";
import iconKabinet from "../../../assets/iconKabinet.png";
import iconLogo from "../../../assets/iconLogo.png";
import iconVisiMisi from "../../../assets/iconVisiMisi.png";
import iconArrow from "../../../assets/iconArrow.png";
import wavePurpleBack from "../../../assets/wavePurpleBack.png";
import CircleBackground from "../../CircleBackground";
import { Link } from "react-router-dom";

const HeroSectionTentangKami = () => {
    return (
        <section className="bg-Custom-Purple-2 relative pb-28 hidden lg:block">
            <div className="container mx-auto">
                <div className="flex px-20">
                    <div className="w-[70%] mt-20 relative z-20">
                        <h1 className="font-bold text-[72px] text-slate-50">
                            Apa itu SwaraShakti?
                        </h1>
                        <p className="text-2xl w-[90%] text-slate-50">
                            <span className="font-bold">“Swara”</span> merujuk
                            pada suara dan melodi,{" "}
                            <span className="font-bold">“Shakti”</span>{" "}
                            mengekspresikan kekuatan. Nama{" "}
                            <span className="font-bold">SwaraShakti</span>{" "}
                            adalah konsep energi kreatif yang mengalir melalui
                            suara-suara aspirasi dalam sebuah organisasi. Dalam
                            Departemen Sistem Informasi, ini menjadi wadah untuk
                            menampung dan mengalirkan ide-ide kreatif,
                            mengembangkan pemikiran yang dinamis, inovatif dan
                            inklusif melalui komunikasi terbuka.
                        </p>
                    </div>
                    <div className="flex w-[25%] justify-center ">
                        <div className="flex bg-white w-full lg:h-[70%] xl:h-[105%] z-20 rounded-b-full relative justify-center">
                            <img
                                src={wave}
                                alt=""
                                className="absolute top-[-10%] w-full"
                                draggable="false"
                            />
                            <img
                                src={logoTentangKami}
                                alt=""
                                className=" absolute bottom-[5%] w-[80%]"
                                draggable="false"
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="mx-16 grid grid-cols-3 z-30 relative bg-gradient-to-b from-Custom-Orange-2 from-36% to-Custom-Orange-1 
                to-90% py-4 rounded-2xl text-white text mt-20"
                >
                    <button
                        onClick={() => {
                            const element =
                                document.getElementById("visi-misi");
                            element?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                        className="flex justify-center items-center gap-2 font-bold text-2xl"
                    >
                        <img
                            src={iconVisiMisi}
                            alt=""
                            className="w-[35px] h-[35px]"
                            draggable="false"
                        />
                        Visi & Misi KBMDSI
                        <img src={iconArrow} alt="" draggable="false" />
                    </button>
                    <button
                        onClick={() => {
                            const element = document.getElementById("logo");
                            element?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                        className="flex justify-center items-center gap-2 font-bold text-2xl"
                    >
                        <img
                            src={iconLogo}
                            alt=""
                            className="w-[50px] h-[50px]"
                            draggable="false"
                        />
                        Logo KBMDSI
                        <img
                            src={iconArrow}
                            alt=""
                            className="w-[35px] h-[35px]"
                            draggable="false"
                        />
                    </button>
                    <button
                        onClick={() => {
                            const element = document.getElementById("kabinet");
                            element?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                        className="flex justify-center items-center gap-2 font-bold text-2xl"
                    >
                        <img
                            src={iconKabinet}
                            alt=""
                            className="w-[35px]"
                            draggable="false"
                        />
                        Kabinet KBMDSI
                        <img src={iconArrow} alt="" draggable="false" />
                    </button>
                </div>
            </div>
            <img
                src={wavePurpleBack}
                alt=""
                className="absolute bottom-0 w-full z-10 "
                draggable="false"
            />
            <CircleBackground className="bg-gradient-to-b from-[#b736c64d] to-[#d56c3a4d] aspect-square absolute rounded-full w-64 -top-16 -left-11"></CircleBackground>
            <CircleBackground className="bg-gradient-to-b from-[#b736c64d] to-[#d56c3a4d] aspect-square absolute rounded-full w-72 top-10 right-[20%]"></CircleBackground>
            <CircleBackground className="bg-gradient-to-b from-[#b736c64d] to-[#d56c3a4d] aspect-square absolute rounded-full w-24 top-[40%] right-12"></CircleBackground>
            <CircleBackground className="bg-gradient-to-b from-[#b736c64d] to-[#d56c3a4d] aspect-square absolute rounded-full w-52 bottom-[20%] left-32"></CircleBackground>
            <CircleBackground className="bg-gradient-to-b from-[#b736c64d] to-[#d56c3a4d] aspect-square absolute rounded-full w-20 bottom-[10%] left-[65%]"></CircleBackground>
        </section>
    );
};

export default HeroSectionTentangKami;
