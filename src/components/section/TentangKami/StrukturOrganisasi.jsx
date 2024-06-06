import React from "react";
import purpleCloudSection from "../../../assets/purpleCloudSection.png";
import wavePurple from "../../../assets/wavePurpleStruktur.png";
import iconArrow from "../../../assets/iconArrow.png";
import iconPengurus from "../../../assets/iconPengurus.png";

const StrukturOrganisasi = () => {
    return (
        <section className=" bg-Custom-Purple-2 relative pt-1" id="kabinet">
            <img
                src={wavePurple}
                alt=""
                className="absolute -mt-14 sm:-mt-24 lg:-mt-36 xl:-mt-52 z-10"
                draggable="false"
            />
            <div className="w-1/3 absolute right-0 z-0 hidden lg:flex">
                <div className="flex rounded-b-full w-1/3 h-[340px]">
                    <div className="bg-Custom-Orange-2 h-full w-1/2 rounded-bl-full"></div>
                    <div className="bg-slate-50 h-full w-1/2 rounded-br-full"></div>
                </div>
                <div className="flex rounded-b-full w-1/3 h-[440px]">
                    <div className="bg-Custom-Orange-1 h-full w-1/2 rounded-bl-full"></div>
                    <div className="bg-slate-50 h-full w-1/2 rounded-br-full"></div>
                </div>
                <div className="flex rounded-b-full w-1/3 h-[290px]">
                    <div className="bg-[#FF9E6A] h-full w-1/2 rounded-bl-full"></div>
                    <div className="bg-slate-50 h-full w-1/2 rounded-br-full"></div>
                </div>
            </div>
            <div className="container mx-auto mt-12 sm:mt-32 lg:mt-44 px-6 sm:px-14">
                <h1 className=" text-4xl sm:text-8xl lg:text-8xl font-bold text-center sm:text-start lg:inline">
                    <span className="bg-gradient-to-b from-Custom-Orange-1 to-Custom-Orange-2 bg-clip-text text-transparent">
                        Struktur
                    </span>{" "}
                    <br />
                    <span className="bg-gradient-to-b from-Custom-Orange-1 to-Custom-Orange-2 bg-clip-text text-transparent">
                        Organisasi
                    </span>
                </h1>
                <div
                    className="grid grid-cols-2 p-2 mt-5 max-w-72 sm:mx-0 sm:max-w-none md:mt-12 sm:w-2/3 bg-Custom-Orange-1 divide-x-2 divide-slate-50 items-center rounded-full
                sm:rounded-xl mx-auto"
                >
                    <button
                        onClick={() => {
                            const element = document.getElementById("bpi");
                            element?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                        className="flex font-bold text-slate-50 justify-center items-center text-xs sm:text-base lg:text-2xl xl:text-3xl gap-1 px-2 lg:py-2 xl:py-4 "
                    >
                        <img src={iconPengurus} alt="" draggable="false" />
                        Pengurus Inti
                        <img src={iconArrow} alt="" draggable="false" />
                    </button>
                    <button
                        onClick={() => {
                            const element = document.getElementById("bph");
                            element?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                        className="flex font-bold text-slate-50 justify-center items-center text-xs sm:text-base lg:text-2xl xl:text-3xl gap-1 px-2 lg:py-2 xl:py-4"
                    >
                        <img src={iconPengurus} alt="" draggable="false" />
                        Pengurus Harian
                        <img src={iconArrow} alt="" draggable="false" />
                    </button>
                </div>
            </div>
            <img
                src={purpleCloudSection}
                alt=""
                className="w-full"
                draggable="false"
            />
        </section>
    );
};

export default StrukturOrganisasi;
