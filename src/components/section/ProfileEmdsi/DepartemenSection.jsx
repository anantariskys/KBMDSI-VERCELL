import React from "react";
import wavePurpleOrange from "../../../assets/wavePurpOrangeProfileEmdsi.png";
import DepartemenCard from "../../DepartemenCard";
import advokesma from "../../../assets/Advokesma.png";
import kwu from "../../../assets/Kwu.png";
import sosprof from "../../../assets/Sosprof.png";
import kp from "../../../assets/Kp.png";
import pit from "../../../assets/Pit.png";
import medkom from "../../../assets/Medkom.png";
import CircleBackground from "../../CircleBackground";

const data = [
    {
        foto: advokesma,
        departemen: "Advokesma",
        className: "col-span-6 lg:col-span-3",
    },
    {
        foto: kwu,
        departemen: "Kewirausahaan",
        className: "col-span-6 lg:col-span-3",
    },
    {
        foto: sosprof,
        departemen: "Sosial Profesi",
        className: "col-span-6 lg:col-span-3",
    },
    {
        foto: kp,
        departemen: "Keilmuan dan Pengajaran",
        className: "col-span-6 lg:col-span-3",
    },
    {
        foto: pit,
        departemen: "Pengembangan Informatika dan Teknologi",
        className: "col-span-6 lg:col-span-3",
    },
    {
        foto: medkom,
        departemen: "Medkominfo",
        className: "col-span-6 lg:col-span-3",
    },
    {
        foto: medkom,
        departemen: "Pengembangan Sumber Daya Manusia",
        className: "col-span-6 lg:col-span-3 lg:left-[50%]",
    },
];

const DepartemenSection = () => {
    return (
        <section className="bg-gradient-to-b from-Custom-Dark-Blue-2 to-[#1B203C] pb-16 overflow-hidden relative">
            <img src={wavePurpleOrange} alt="" />
            <div className="container mx-auto">
                <div className="grid grid-cols-6 md:ms-4 justify-items-center justify-center gap-5">
                    {data.map((item, index) => (
                        <DepartemenCard
                            foto={item.foto}
                            departemen={item.departemen}
                            className={item.className}
                            key={index}
                        />
                    ))}
                </div>
            </div>
            <div className="sm:hidden">
                <CircleBackground className="bg-gradient-to-r from-[#d56c3a80] to-[#e2885880] absolute aspect-square rounded-full w-20 top-[15%] -right-10 "></CircleBackground>
                <CircleBackground className="bg-gradient-to-r from-[#d56c3a80] to-[#e2885880] absolute aspect-square rounded-full w-32 top-[42%] -left-16 "></CircleBackground>
                <CircleBackground className="bg-gradient-to-r from-[#d56c3a80] to-[#e2885880] absolute aspect-square rounded-full w-24 top-[53%] right-6 "></CircleBackground>
                <CircleBackground className="bg-gradient-to-r from-[#d56c3a80] to-[#e2885880] absolute aspect-square rounded-full w-20 top-[66%] -right-12 "></CircleBackground>
                <CircleBackground className="bg-gradient-to-r from-[#d56c3a80] to-[#e2885880] absolute aspect-square rounded-full w-28 bottom-36 -left-8 "></CircleBackground>
                <CircleBackground className="bg-gradient-to-r from-[#d56c3a80] to-[#e2885880] absolute aspect-square rounded-full w-24 -bottom-12 right-2 "></CircleBackground>
                <CircleBackground className="bg-[#b736c680] absolute aspect-square rounded-full w-32 top-[8%] -left-12 "></CircleBackground>
                <CircleBackground className="bg-[#b736c680] absolute aspect-square rounded-full w-20 top-[38%] -left-10 "></CircleBackground>
                <CircleBackground className="bg-[#b736c680] absolute aspect-square rounded-full w-36 top-[48%] -right-12 "></CircleBackground>
                <CircleBackground className="bg-[#b736c680] absolute aspect-square rounded-full w-32 top-[57%] -left-10 "></CircleBackground>
                <CircleBackground className="bg-[#b736c680] absolute aspect-square rounded-full w-20 bottom-[15%] -left-2 "></CircleBackground>
                <CircleBackground className="bg-[#b736c680] absolute aspect-square rounded-full w-32 -bottom-2 -right-12 "></CircleBackground>
            </div>
            <div className="hidden sm:block lg:hidden">
                <CircleBackground className="bg-gradient-to-r from-[#d56c3a80] to-[#e2885880] absolute aspect-square rounded-full w-[30%] top-[15%] -right-[12%] "></CircleBackground>
                <CircleBackground className="bg-gradient-to-r from-[#d56c3a80] to-[#e2885880] absolute aspect-square rounded-full w-[24%] top-[45%] right-[15%] "></CircleBackground>
                <CircleBackground className="bg-gradient-to-r from-[#d56c3a80] to-[#e2885880] absolute aspect-square rounded-full w-[28%] top-[64%] -left-24 "></CircleBackground>
                <CircleBackground className="bg-gradient-to-r from-[#d56c3a80] to-[#e2885880] absolute aspect-square rounded-full w-[27%] bottom-[2%] left-[3%] "></CircleBackground>
                <CircleBackground className="bg-[#b736c680] absolute aspect-square rounded-full w-[35%] top-[5%] -left-12 "></CircleBackground>
                <CircleBackground className="bg-[#b736c680] absolute aspect-square rounded-full w-[18%] top-[33%] -left-24 "></CircleBackground>
                <CircleBackground className="bg-[#b736c680] absolute aspect-square rounded-full w-[38%] top-[44%] -right-12 "></CircleBackground>
                <CircleBackground className="bg-[#b736c680] absolute aspect-square rounded-full w-[22%] top-[72%] right-3 "></CircleBackground>
                <CircleBackground className="bg-[#b736c680] absolute aspect-square rounded-full w-[40%] bottom-[8%] -left-[18%] "></CircleBackground>
            </div>
            <div className="hidden lg:block">
                <CircleBackground className="bg-gradient-to-r from-[#d56c3a80] to-[#e2885880] absolute aspect-square rounded-full w-[13%] top-[33%] -right-8 "></CircleBackground>
                <CircleBackground className="bg-gradient-to-r from-[#d56c3a80] to-[#e2885880] absolute aspect-square rounded-full w-[24%] top-[45%] right-[15%] "></CircleBackground>
                <CircleBackground className="bg-gradient-to-r from-[#d56c3a80] to-[#e2885880] absolute aspect-square rounded-full w-[17%] bottom-[15%] -left-[3%] "></CircleBackground>
                <CircleBackground className="bg-gradient-to-r from-[#d56c3a80] to-[#e2885880] absolute aspect-square rounded-full w-[17%] bottom-[2%] right-[8%] "></CircleBackground>
                <CircleBackground className="bg-[#b736c680] absolute aspect-square rounded-full w-[23%] top-[18%] -left-12 "></CircleBackground>
                <CircleBackground className="bg-[#b736c680] absolute aspect-square rounded-full w-[22%] bottom-[8%] right-3 "></CircleBackground>
                <CircleBackground className="bg-[#b736c680] absolute aspect-square rounded-full w-[12%] bottom-[27%] left-[3%] "></CircleBackground>
            </div>
        </section>
    );
};

export default DepartemenSection;
