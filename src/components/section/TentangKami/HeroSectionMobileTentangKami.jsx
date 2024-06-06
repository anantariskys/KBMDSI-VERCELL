import React from "react";
import wave from "../../../assets/waveOrangeSm.png";
import logo from "../../../assets/logoTentangKami.png";
import iconVisiMisi from "../../../assets/iconVisiMisi.png";
import iconLogo from "../../../assets/iconLogo.png";
import iconKabinet from "../../../assets/iconKabinet.png";
import iconArrow from "../../../assets/iconArrow.png";
import wavePurpleBack from "../../../assets/wavePurpleBack.png";
import CircleBackground from "../../CircleBackground";

const HeroSectionMobileTentangKami = () => {
    return (
        <section className="relative pt-7 pb-7 bg-Custom-Purple-2 sm:hidden overflow-hidden">
            <div className="w-full bg-slate-50 relative rounded-r-full flex items-center overflow-hidden z-10">
                <img
                    src={wave}
                    alt=""
                    className="absolute w-[80%] h-full left-0 top-0 "
                    draggable="false"
                />
                <img
                    src={logo}
                    alt=""
                    className="absolute right-[5%] h-[50%] max-w-[30%] object-contain"
                    draggable="false"
                />
                <div className="w-[60%] py-2 ps-4 z-10">
                    <h1 className="font-bold text-md text-slate-50">
                        Apa itu SwaraShakti?
                    </h1>
                    <p className="text-xs text-slate-50 mt-2">
                        <span className="font-bold">“Swara”</span> merujukS pada
                        suara dan melodi,{" "}
                        <span className="font-bold">“Shakti”</span>{" "}
                        mengekspresikan kekuatan. Nama{" "}
                        <span className="font-bold">SwaraShakti</span> adalah
                        konsep energi kreatif yang mengalir melalui suara-suara
                        aspirasi dalam sebuah organisasi. Dalam Departemen
                        Sistem Informasi, ini menjadi wadah untuk menampung dan
                        mengalirkan ide-ide kreatif, mengembangkan pemikiran
                        yang dinamis, inovatif dan inklusif melalui komunikasi
                        terbuka.
                    </p>
                </div>
            </div>
            <div
                className="grid grid-cols-3 mx-8 z-30 relative bg-gradient-to-b from-Custom-Orange-2 from-36% to-Custom-Orange-1 
                to-90% py-2 rounded-full text-white text mt-16"
                style={{ boxShadow: "0px 10px 5px 0px rgba(0, 0, 0, 0.25)" }}
            >
                <button
                    onClick={() => {
                        const element = document.getElementById("visi-misi");
                        element?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                    href="#"
                    className="flex justify-center items-center font-bold text-xs text-center px-2"
                >
                    <img
                        src={iconVisiMisi}
                        alt=""
                        className="w-[20%] aspect-square"
                        draggable="false"
                    />
                    Visi & Misi KBMDSI
                    <img
                        src={iconArrow}
                        alt=""
                        className="w-[20%] aspect-square"
                        draggable="false"
                    />
                </button>
                <button
                    onClick={() => {
                        const element = document.getElementById("logo");
                        element?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                    href="#"
                    className="flex justify-center items-center font-bold text-xs text-center px-3"
                >
                    <img
                        src={iconLogo}
                        alt=""
                        className="w-[30%] aspect-square"
                        draggable="false"
                    />
                    Logo KBMDSI
                    <img
                        src={iconArrow}
                        alt=""
                        className="w-[20%] aspect-square"
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
                    href="#"
                    className="flex justify-center items-center font-bold text-xs text-center px-3"
                >
                    <img
                        src={iconKabinet}
                        alt=""
                        className="w-[20%] aspect-square"
                        draggable="false"
                    />
                    Kabinet KBMDSI
                    <img
                        src={iconArrow}
                        alt=""
                        className="w-[20%] aspect-square"
                        draggable="false"
                    />
                </button>
            </div>
            <img
                src={wavePurpleBack}
                alt=""
                className="absolute bottom-0 w-full z-10 "
                draggable="false"
            />
            <CircleBackground className="bg-gradient-to-b from-[#b736c64d] to-[#d56c3a4d] w-16 aspect-square rounded-full absolute -top-4 -right-2 z-0"></CircleBackground>
            <CircleBackground className="bg-gradient-to-b from-[#b736c64d] to-[#d56c3a4d] w-16 aspect-square rounded-full absolute top-1/2 right-4 z-0"></CircleBackground>
            <CircleBackground className="bg-gradient-to-b from-[#b736c64d] to-[#d56c3a4d] w-16 aspect-square rounded-full absolute top-[55%] -left-2 z-0"></CircleBackground>
            <CircleBackground className="bg-gradient-to-b from-[#b736c64d] to-[#d56c3a4d] w-16 aspect-square rounded-full absolute top-4 left-[30%] z-0"></CircleBackground>
        </section>
    );
};

export default HeroSectionMobileTentangKami;
