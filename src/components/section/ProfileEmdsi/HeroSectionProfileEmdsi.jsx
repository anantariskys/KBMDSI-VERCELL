import React from "react";
import fotoEmdsi from "../../../assets/FotoEmdsi.png";

const HeroSectionProfileEmdsi = () => {
    return (
        <section className="h-[50vh] sm:h-full relative inline">
            <div className="container mx-auto relative z-10 px-5 py-[20%]">
                <div className="flex flex-col items-center">
                    <h1
                        className="bg-gradient-to-r from-Custom-Orange-1 to-Custom-Purple-1 w-fit bg-clip-text text-transparent 
                        text-5xl font-bold text-center sm:text-7xl"
                    >
                        EMDSI
                    </h1>
                    <p className="text-xs sm:text-2xl lg: font-bold text-center text-slate-50 mt-4">
                        Eksekutif Mahasiswa Departemen Sistem Informasi
                        merupakan badan yang memiliki fungsi eksekutif di KBMDSI
                        dimana bertugas untuk membuat dan merancang gagasan
                        program kerja serta melaksanakan program kerja selama
                        satu periode kepengurusan.
                    </p>
                </div>
            </div>
            <img
                src={fotoEmdsi}
                alt=""
                className="h-[115%] sm:w-full object-cover top-0 absolute"
            />
        </section>
    );
};

export default HeroSectionProfileEmdsi;
