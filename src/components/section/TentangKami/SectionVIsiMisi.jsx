import React, { useRef } from "react";
import wavePurpleSection from "../../../assets/wavePurpleSection.png";
import CircleBackground from "../../CircleBackground";

const SectionVIsiMisi = () => {
    const visiMisi = useRef(null);

    return (
        <section
            className="bg-Custom-Orange-1 relative pt-24 sm:pt-48 md:pt-52 lg:pt-80 pb-32 overflow-hidden"
            id="visi-misi"
            ref={visiMisi}
        >
            <img
                src={wavePurpleSection}
                alt=""
                className="absolute top-0 w-full z-10"
                draggable="false"
            />
            <div className="container mx-auto lg:hidden relative z-10">
                <h1
                    className="text-center text-4xl sm:text-6xl font-bold text-Custom-Purple-1"
                    style={{ WebkitTextStroke: "1px #fff" }}
                >
                    Visi dan Misi
                </h1>
                <div className="flex flex-col p-5 items-center sm:mt-10">
                    <div
                        className="w-full bg-gradient-to-l from-Custom-Orange-2 to-Custom-Purple-1
                        rounded-tr-[40px] sm:rounded-tr-[30px] rounded-bl-[40px] sm:rounded-bl-[30px] py-5 px text-3xl sm:text-[40px] sm:text-center
                        sm:leading-normal px-5 font-bold text-slate-50 z-20"
                        style={{
                            boxShadow: "5px 10px 12px 0px rgba(0, 0, 0, 0.20)",
                        }}
                    >
                        Menyongsong Mahasiswa Berkarakter, Inovatif, Kreatif dan
                        Berdaya Saing Global
                    </div>
                    <div
                        className="flex flex-wrap w-[95%] bg-slate-50 gap-2 sm:gap-5 p-2 justify-center rounded-b-3xl -my-4 py-8"
                        style={{
                            boxShadow: "5px 10px 4px 0px rgba(0, 0, 0, 0.25)",
                        }}
                    >
                        <div
                            className="rounded-[15px] w-[45%] bg-gradient-to-r from-Custom-Purple-1 to bg-Custom-Purple-2 text-white p-4 text-xs 
                        sm:text-2xl font-bold"
                        >
                            Meningkatkan kualitas dan pribadi mahasiswa yang
                            lebih unggul melalui kegiatan- kegiatan pembinaan
                            mahasiswa DSI baik dibidang akademik maupun akademik
                        </div>
                        <div
                            className="rounded-[15px] w-[45%] bg-gradient-to-r from-Custom-Orange-2 to bg-Custom-Orange-1 text-slate-50 text-xs 
                        sm:text-2xl font-bold p-4"
                        >
                            Menjadikan KBMDSI yang lebih proaktif untuk
                            berkolaborasi dan mengembangkan ide- ide inovatif
                            yang dapat memberikan kontribusi positif bagi
                            Departemen Sistem Informasi
                        </div>
                        <div
                            className="rounded-[15px] w-[45%] bg-gradient-to-r from-Custom-Orange-2 to bg-Custom-Orange-1 text-slate-50 text-xs p-4
                        sm:text-2xl font-bold"
                        >
                            Meningkatkan kualitas dan pribadi mahasiswa yang
                            lebih unggul melalui kegiatan- kegiatan pembinaan
                            mahasiswa DSI baik dibidang akademik maupun akademik
                        </div>
                        <div
                            className="rounded-[15px] w-[45%] bg-gradient-to-r from-Custom-Purple-1 to bg-Custom-Purple-2 text-white p-4 text-xs 
                        sm:text-2xl font-bold"
                        >
                            Meningkatkan kinerja Himpunan Mahasiswa Departemen
                            Sistem Informasi yang bisa menjembatani perbedaan
                            mahasiswa tanpa kesenjangan sosial.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto hidden lg:px-24 md:px-10 px-4 lg:block">
                <h1
                    className="text-center text-8xl font-bold text-Custom-Purple-1"
                    style={{ WebkitTextStroke: "4px #fff" }}
                >
                    Visi dan Misi
                </h1>
                <div className="flex p-5">
                    <div
                        className="w-1/3 bg-gradient-to-b from-Custom-Orange-2 to-Custom-Purple-1
                     rounded-tl-[40px] rounded-br-[40px] py-5 text-[42px] leading-relaxed flex items-center  px-5 font-bold text-slate-50 mr-[-16px] z-20"
                        style={{
                            boxShadow: "5px 10px 12px 0px rgba(0, 0, 0, 0.20)",
                        }}
                    >
                        Menyongsong Mahasiswa Berkarakter, Inovatif, Kreatif dan
                        Berdaya Saing Global
                    </div>
                    <div
                        className="flex flex-wrap w-2/3 bg-slate-50 gap-5 p-5 py-12 justify-center rounded-r-[40px] my-3 relative z-10"
                        style={{
                            boxShadow: "5px 10px 4px 0px rgba(0, 0, 0, 0.25)",
                        }}
                    >
                        <div
                            className="rounded-[15px] w-[45%] bg-gradient-to-b from-Custom-Orange-2 to bg-Custom-Orange-1 text-slate-50 p-4 
                        text-2xl font-bold"
                            style={{
                                boxShadow: "5px 10px 12px rgba(0, 0, 0, 0.20)",
                            }}
                        >
                            Menjadikan KBMDSI yang lebih proaktif untuk
                            berkolaborasi dan mengembangkan ide- ide inovatif
                            yang dapat memberikan kontribusi positif bagi
                            Departemen Sistem Informasi
                        </div>
                        <div
                            className="rounded-[15px] w-[45%] bg-gradient-to-b from-Custom-Purple-1 to bg-Custom-Purple-2 text-slate-50 p-4
                        text-2xl font-bold"
                            style={{
                                boxShadow: "5px 10px 12px rgba(0, 0, 0, 0.20)",
                            }}
                        >
                            Meningkatkan kinerja Himpunan Mahasiswa Departemen
                            Sistem Informasi yang bisa menjembatani perbedaan
                            mahasiswa tanpa kesenjangan sosial.
                        </div>
                        <div
                            className="rounded-[15px] w-[45%] bg-gradient-to-b from-Custom-Purple-1 to bg-Custom-Purple-2 text-slate-50 p-4
                        text-2xl font-bold"
                            style={{
                                boxShadow: "5px 10px 12px rgba(0, 0, 0, 0.20)",
                            }}
                        >
                            Meningkatkan kualitas dan pribadi mahasiswa yang
                            lebih unggul melalui kegiatan- kegiatan pembinaan
                            mahasiswa DSI baik dibidang akademik maupun akademik
                        </div>
                        <div
                            className="rounded-[15px] w-[45%] bg-gradient-to-b from-Custom-Orange-2 to bg-Custom-Orange-1 text-slate-50 p-4
                        text-2xl font-bold"
                            style={{
                                boxShadow: "5px 10px 12px rgba(0, 0, 0, 0.20)",
                            }}
                        >
                            Mengoptimalkan pelayanan bagi seluruh Keluarga Besar
                            Mahasiswa Departemen Sistem Informasi
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:hidden">
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] from-[27%] to-[#893b8480] to-[77%] aspect-square absolute rounded-full w-28 top-28 -right-12 "></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] from-[27%] to-[#893b8480] to-[77%] aspect-square absolute rounded-full w-28 -left-12 top-[30%] "></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] from-[27%] to-[#893b8480] to-[77%] aspect-square absolute rounded-full w-24 bottom-[10%] left-8  "></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] from-[27%] to-[#893b8480] to-[77%] aspect-square absolute rounded-full w-36 right-5 bottom-[8%] "></CircleBackground>
            </div>
            <div className="hidden sm:block lg:hidden">
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] from-[27%] to-[#893b8480] to-[77%] aspect-square absolute rounded-full w-60 top-6 -right-12 "></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] from-[27%] to-[#893b8480] to-[77%] aspect-square absolute rounded-full w-32 -left-12 top-[15%] "></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] from-[27%] to-[#893b8480] to-[77%] aspect-square absolute rounded-full w-52 bottom-[20%] -left-24  "></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] from-[27%] to-[#893b8480] to-[77%] aspect-square absolute rounded-full w-36 right-5 bottom-[8%] "></CircleBackground>
            </div>
            <div className="hidden lg:block">
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] from-[27%] to-[#893b8480] to-[77%] aspect-square absolute rounded-full w-64 top-[20%] -right-12 "></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] from-[27%] to-[#893b8480] to-[77%] aspect-square absolute rounded-full w-32 -left-12 top-[25%] "></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] from-[27%] to-[#893b8480] to-[77%] aspect-square absolute rounded-full w-60 bottom-[20%] -left-8  "></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] from-[27%] to-[#893b8480] to-[77%] aspect-square absolute rounded-full w-36 right-5 bottom-[8%] "></CircleBackground>
            </div>
        </section>
    );
};

export default SectionVIsiMisi;
