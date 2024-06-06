import React from "react";
import waveGede from "../../../assets/Vector.png";
import logo from "../../../assets/logoTentangKami.png";
import iconVisiMisi from "../../../assets/iconVisiMisi.png";
import iconLogo from "../../../assets/iconLogo.png";
import iconKabinet from "../../../assets/iconKabinet.png";
import iconArrow from "../../../assets/iconArrow.png";
import wavePurpleBack from "../../../assets/wavePurpleBack.png";
import CircleBackground from "../../CircleBackground";

const HeroSectionTabTentangKami = () => {
    return (
        <section className="bg-Custom-Purple-2 pt-8 pb-12 relative hidden sm:block lg:hidden overflow-hidden">
            <div className="w-1/2 ms-auto relative z-10">
                <div className="relative w-full h-[250px] bg-slate-50 items-center rounded-l-full overflow-hidden flex">
                    <img
                        src={waveGede}
                        alt=""
                        className="absolute h-full rotate-90 -right-8 bottom-0"
                        draggable="false"
                    />
                    <img
                        src={logo}
                        alt=""
                        className="absolute h-2/3 rotate-90 left-[8%]"
                        draggable="false"
                    />
                </div>
            </div>
            <div className="px-[5%] mx-auto sm relative z-10">
                <div className="flex flex-col justify-center items-center mt-11">
                    <h1 className="font-bold text-5xl text-slate-50">
                        Apa itu SwaraShakti?
                    </h1>
                    <p className="text-xl text-slate-50 mt-2 text-center">
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
                <div
                    className="grid grid-cols-3 z-20 relative bg-gradient-to-b from-Custom-Orange-2 from-36% to-Custom-Orange-1 
                to-90% py-4 rounded-2xl text-white text mt-16"
                >
                    <button
                        onClick={() => {
                            const element =
                                document.getElementById("visi-misi");
                            element?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                        href="#"
                        className="flex justify-center items-center font-bold text-xl text-center px-3"
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
                        href="#"
                        className="flex justify-center items-center font-bold text-xl text-center px-4"
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
                        href="#"
                        className="flex justify-center items-center font-bold text-xl text-center px-4"
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
                className="absolute bottom-0 w-full z-0 "
                draggable="false"
            />
            <CircleBackground className="bg-gradient-to-b from-[#b736c64d] to-[#d56c3a4d] aspect-square absolute w-60 -top-20 -left-14 rounded-full z-0 "></CircleBackground>
            <CircleBackground className="bg-gradient-to-b from-[#b736c64d] to-[#d56c3a4d] aspect-square absolute w-24 top-44 left-[43%] rounded-full z-0"></CircleBackground>
            <CircleBackground className="bg-gradient-to-b from-[#b736c64d] to-[#d56c3a4d] aspect-square absolute w-44 top-[30%] -right-8 rounded-full z-0"></CircleBackground>
            <CircleBackground className="bg-gradient-to-b from-[#b736c64d] to-[#d56c3a4d] aspect-square absolute w-32 bottom-[30%] left-12 rounded-full z-0"></CircleBackground>
        </section>
    );
};

export default HeroSectionTabTentangKami;
