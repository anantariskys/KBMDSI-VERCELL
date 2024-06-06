import React from "react";
import Logo from "../assets/LogoNavbar.png";
import imgInstagram from "../assets/footer/instagram.png";
import imgTiktok from "../assets/footer/tiktok.png";
import imgLine from "../assets/footer/line.png";
import imgLinkedin from "../assets/footer/linkedin.png";
import imgYoutube from "../assets/footer/youtube.png";
import imgX from "../assets/footer/x.png";

const Footer = () => {
    return (
        <footer className="w-full bg-Custom-Blue pt-16 flex flex-col gap-10 font-glacial-indifference-regular">
            <main className="container lg:px-24 md:px-10 px-4 mx-auto lg:divide-x-2 divide-slate-50 flex flex-col lg:flex-row gap-5 text-base text-slate-50">
                <div className="flex flex-col gap-3 px-5  lg:w-2/6 w-full items-center lg:items-baseline ">
                    <img
                        src={Logo}
                        className="w-4/5   aspect-auto"
                        draggable="false"
                        alt="logo-img"
                    />
                    <p className=" text-center lg:text-start">
                        Sebuah organisasi yang merupakan gabungan dari 3 program
                        studi yakni Sistem Informasi, Teknologi Informasi, dan
                        Pendidikan Teknologi Informasi.
                    </p>
                    <p className="font-bold">©Kmbdsi.ub</p>
                </div>
                <div className="flex flex-col gap-3 px-5 lg:w-2/6 w-full ">
                    <h3 className=" font-glacial-indifference-bold text-2xl bg-gradient-to-br from-Custom-Orange-2 to-Custom-Purple-1 text w-fit text-transparent bg-clip-text  mx-auto lg:mx-0">
                        Informasi Kontak
                    </h3>
                    <div className="text-center lg:text-start">
                        <h3 className="font-glacial-indifference-bold text-xl">
                            Phone
                        </h3>
                        <p>+62 812-3456-7890</p>
                    </div>
                    <div className="text-center lg:text-start">
                        <h3 className="font-glacial-indifference-bold text-xl">
                            Email
                        </h3>
                        <p>kbmdsi@gmail.com</p>
                    </div>
                    <div className="text-center lg:text-start">
                        <h3 className="font-glacial-indifference-bold text-xl">
                            Alamat
                        </h3>
                        <p className="lg:w-3/5 ">
                            Gedung Kreativitas Mahasiswa (GKM) Lantai 2
                            Sekretariat KBMDSI Fakultas Ilmu Komputer
                            Universitas Brawijaya.
                        </p>
                    </div>
                </div>
                <h3 className=" lg:hidden block font-glacial-indifference-bold text-2xl bg-gradient-to-br from-Custom-Orange-2 to-Custom-Purple-1 text w-fit text-transparent bg-clip-text  mx-auto lg:mx-0">
                    Sosial Media
                </h3>
                <div className="lg:flex flex-col grid grid-cols-3 grid-rows-1 gap-3 px-5 lg:w-1/6  ">
                    <h3 className=" hidden lg:block lg:font-glacial-indifference-bold text-2xl bg-gradient-to-br from-Custom-Orange-2 to-Custom-Purple-1 text w-fit text-transparent bg-clip-text  mx-auto lg:mx-0">
                        Sosial Media
                    </h3>
                    <div className="flex items-center gap-2 ">
                        <a
                            href="https://instagram.com/kbmdsi.ub"
                            target="_blank"
                            className="w-2/6 lg:w-7"
                        >
                            <img
                                src={imgInstagram}
                                alt="imgInstagram"
                                className="w-full h-full"
                                draggable="false"
                            />
                        </a>
                        <a
                            href="https://instagram.com/kbmdsi.ub"
                            target="_blank"
                            className="text-xs md:text-base w-full hover:underline"
                        >
                            @kbmdsi.ub
                        </a>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <a
                            href="https://www.linkedin.com/company/kbmdsi-filkom-ub/?originalSubdomain=id"
                            target="_blank"
                            className="w-2/6 lg:w-7"
                        >
                            <img
                                src={imgLinkedin}
                                alt="imgLinkedin"
                                className="w-full h-full"
                                draggable="false"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/kbmdsi-filkom-ub/?originalSubdomain=id"
                            target="_blank"
                            className="text-xs md:text-base w-full hover:underline"
                        >
                            KBMDSI FILKOM UB
                        </a>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <a
                            href="https://www.tiktok.com/@kbmdsi.ub"
                            target="_blank"
                            className="w-2/6 lg:w-7"
                        >
                            <img
                                src={imgTiktok}
                                alt="imgTiktok"
                                className="w-full h-full"
                                draggable="false"
                            />
                        </a>
                        <a
                            href="https://www.tiktok.com/@kbmdsi.ub"
                            target="_blank"
                            className="text-xs md:text-base w-full hover:underline"
                        >
                            @kbmdsi.ub
                        </a>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <a
                            href="https://line.me/R/ti/p/@069urvnb?from=page&liff.referrer=https%3A%2F%2Fkbmdsi.ub.ac.id%2F&accountId=069urvnb"
                            target="_blank"
                            className="w-2/6 lg:w-7"
                        >
                            <img
                                src={imgLine}
                                alt="imgLine"
                                className="w-full h-full"
                                draggable="false"
                            />
                        </a>
                        <a
                            href="https://line.me/R/ti/p/@069urvnb?from=page&liff.referrer=https%3A%2F%2Fkbmdsi.ub.ac.id%2F&accountId=069urvnb"
                            target="_blank"
                            className="text-xs md:text-base w-full hover:underline"
                        >
                            @kbmdsi.ub
                        </a>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <a
                            href="https://twitter.com/kbmdsi_ub?s=21&t=b4_7QmCxRXOiyrPuK6uoVQ"
                            target="_blank"
                            className="w-2/6 lg:w-7"
                        >
                            <img
                                src={imgX}
                                alt="imgX"
                                className="w-full h-full"
                                draggable="false"
                            />
                        </a>
                        <a
                            href="https://twitter.com/kbmdsi_ub?s=21&t=b4_7QmCxRXOiyrPuK6uoVQ"
                            target="_blank"
                            className="text-xs md:text-base w-full hover:underline"
                        >
                            @KBMDSI_UB
                        </a>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <a
                            href="https://www.youtube.com/@KBMDSIFILKOMUB"
                            target="_blank"
                            className="w-2/6 lg:w-7"
                        >
                            <img
                                src={imgYoutube}
                                alt="imgYoutube"
                                className="w-full h-full"
                                draggable="false"
                            />
                        </a>
                        <a
                            href="https://www.youtube.com/@KBMDSIFILKOMUB"
                            target="_blank"
                            className="text-xs md:text-base w-full hover:underline"
                        >
                            KBMDSI FILKOM UB
                        </a>
                    </div>
                </div>
                <div className="flex flex-col text-center lg:text-start gap-3 px-5 lg:w-1/6">
                    <p>SwaraShakti 2024</p>
                </div>
            </main>
            <p className="text-sm container mx-auto px-4 text-opacity-75 text-slate-50 pb-10 text-center">
                Made by Pengembangan Informasi dan Teknologi (PIT) KBMDSI 2024
            </p>
        </footer>
    );
};

export default Footer;
