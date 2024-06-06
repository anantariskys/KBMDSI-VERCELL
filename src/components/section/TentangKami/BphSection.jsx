import React from "react";
import bphcard from "../../BphCard";
import BphCard from "../../BphCard";
import bphAdvo from "../../../assets/BphAdvo.png";
import bphMedkom from "../../../assets/BphMedkom.png";
import bphSosprof from "../../../assets/BphSosprof.png";
import bphKp from "../../../assets/BphKp.png";
import bphPit from "../../../assets/BphPit.png";
import bphKwu from "../../../assets/BphKwu.png";
import bphPsdm from "../../../assets/BphPsdm.png";
import CircleBackground from "../../CircleBackground";

const data = [
    {
        img: [bphPit],
        nama: "Pengembangan Informatika dan Teknologi",
    },
    {
        img: [bphAdvo],
        nama: "Advokasi dan Kesejahteraan Mahasiswa",
    },
    {
        img: [bphMedkom],
        nama: "Media Informasi dan Komunikasi",
    },
    {
        img: [bphSosprof],
        nama: "Sosial Profesi",
    },
    {
        img: [bphKp],
        nama: "Keilmuan dan Pengajaran",
    },
    {
        img: [bphKwu],
        nama: "kewirausahaan",
    },
    {
        img: [bphPsdm],
        nama: "Pengembangan Sumber Daya Manusia",
    },
];

const BphSection = () => {
    return (
        <section
            className="bg-gradient-to-b from-Custom-Orange-2 from-[6%] to-[#FFAD81] to-[90%] py-5 sm:py-10 lg:py-16 relative overflow-hidden"
            id="bph"
        >
            <div className="container mx-auto relative z-10">
                <div className="flex justify-center">
                    <h1
                        className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl pb-4 font-bold text-center bg-gradient-167 from-Custom-Blue from-[45%] to-Custom-Dark-Blue to-[90%] 
                w-fit bg-clip-text text-transparent"
                        style={{ WebkitTextStroke: "1px #fff" }}
                    >
                        Badan Pengurus Harian
                    </h1>
                </div>
                <div
                    className="flex px-5 gap-x-8 gap-y-10 md:gap-x-24 md:gap-y-16 lg:gap-x-36 lg:gap-y-24 xl:gap-44
                justify-center flex-wrap mt-8 lg:mt-20"
                >
                    {data.map((item, index) => (
                        <BphCard nama={item.nama} foto={item.img} key={index} />
                    ))}
                </div>
            </div>
            <div className="sm:hidden">
                <CircleBackground className="bg-gradient-to-bl from-[#e28858da] to-[#d56b3abb] absolute aspect-square rounded-full w-16 -left-3 top-14"></CircleBackground>
                <CircleBackground className="bg-gradient-to-bl from-[#e28858da] to-[#d56b3abb] absolute aspect-square rounded-full w-32 -right-8 top-[22%]"></CircleBackground>
                <CircleBackground className="bg-gradient-to-bl from-[#e28858da] to-[#d56b3abb] absolute aspect-square rounded-full w-16 -left-3 top-[50%]"></CircleBackground>
                <CircleBackground className="bg-gradient-to-bl from-[#e28858da] to-[#d56b3abb] absolute aspect-square rounded-full w-14 -right-8 top-[40%]"></CircleBackground>
                <CircleBackground className="bg-gradient-to-bl from-[#e28858da] to-[#d56b3abb] absolute aspect-square rounded-full w-20 -left-3 bottom-[27%]"></CircleBackground>
                <CircleBackground className="bg-gradient-to-bl from-[#e28858da] to-[#d56b3abb] absolute aspect-square rounded-full w-10 -left-3 bottom-5"></CircleBackground>
                <CircleBackground className="bg-gradient-to-bl from-[#e28858da] to-[#d56b3abb] absolute aspect-square rounded-full w-10 left-20 bottom-28"></CircleBackground>
                <CircleBackground className="bg-gradient-to-bl from-[#e28858da] to-[#d56b3abb] absolute aspect-square rounded-full w-28 right-3 -bottom-8"></CircleBackground>
                <CircleBackground className="bg-gradient-to-bl from-[#e28858da] to-[#d56b3abb] absolute aspect-square rounded-full w-10 -right-2 bottom-20"></CircleBackground>
            </div>
            <div className="hidden sm:block lg:hidden">
                <CircleBackground className="bg-gradient-to-bl from-[#e28858da] to-[#d56b3abb] absolute aspect-square rounded-full w-20 left-14 top-[2%]"></CircleBackground>
                <CircleBackground className="bg-gradient-to-bl from-[#e28858da] to-[#d56b3abb] absolute aspect-square rounded-full w-[30%] -right-2 top-[8%]"></CircleBackground>
                <CircleBackground className="bg-gradient-to-bl from-[#e28858da] to-[#d56b3abb] absolute aspect-square rounded-full w-[30%] -left-8 top-[18%]"></CircleBackground>
                <CircleBackground className="bg-gradient-to-bl from-[#e28858da] to-[#d56b3abb] absolute aspect-square rounded-full w-[30%] right-20 top-[46%]"></CircleBackground>
                <CircleBackground className="bg-gradient-to-bl from-[#e28858da] to-[#d56b3abb] absolute aspect-square rounded-full w-36 -left-5 bottom-[27%]"></CircleBackground>
                <CircleBackground className="bg-gradient-to-bl from-[#e28858da] to-[#d56b3abb] absolute aspect-square rounded-full w-10 -left-3 bottom-5"></CircleBackground>
                <CircleBackground className="bg-gradient-to-bl from-[#e28858da] to-[#d56b3abb] absolute aspect-square rounded-full w-20 left-20 bottom-[15%]"></CircleBackground>
                <CircleBackground className="bg-gradient-to-bl from-[#e28858da] to-[#d56b3abb] absolute aspect-square rounded-full w-[20%] -right-8 bottom-20"></CircleBackground>
            </div>
            <div className="hidden lg:block">
                <CircleBackground className="bg-gradient-to-bl from-[#e28858da] to-[#d56b3abb] absolute aspect-square rounded-full w-20 left-14 top-[2%]"></CircleBackground>
                <CircleBackground className="bg-gradient-to-bl from-[#e28858da] to-[#d56b3abb] absolute aspect-square rounded-full w-[20%] -right-2 top-[8%]"></CircleBackground>
                <CircleBackground className="bg-gradient-to-bl from-[#e28858da] to-[#d56b3abb] absolute aspect-square rounded-full w-[20%] -left-8 top-[18%]"></CircleBackground>
                <CircleBackground className="bg-gradient-to-bl from-[#e28858da] to-[#d56b3abb] absolute aspect-square rounded-full w-[20%] right-[30%] top-[46%]"></CircleBackground>
                <CircleBackground className="bg-gradient-to-bl from-[#e28858da] to-[#d56b3abb] absolute aspect-square rounded-full w-[10%] -right-8 bottom-[30%]"></CircleBackground>
                <CircleBackground className="bg-gradient-to-bl from-[#e28858da] to-[#d56b3abb] absolute aspect-square rounded-full w-[15%] -left-5 bottom-[27%]"></CircleBackground>
                <CircleBackground className="bg-gradient-to-bl from-[#e28858da] to-[#d56b3abb] absolute aspect-square rounded-full w-[8%] -left-3 bottom-5"></CircleBackground>
                <CircleBackground className="bg-gradient-to-bl from-[#e28858da] to-[#d56b3abb] absolute aspect-square rounded-full w-20 left-[22%] bottom-[15%]"></CircleBackground>
                <CircleBackground className="bg-gradient-to-bl from-[#e28858da] to-[#d56b3abb] absolute aspect-square rounded-full w-[20%] -right-8 bottom-20"></CircleBackground>
            </div>
        </section>
    );
};

export default BphSection;
