import React from "react";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/x.svg";
import tiktok from "../assets/tiktok.svg";
import line from "../assets/line.svg";
import mail from "../assets/mail.svg";
import phone from "../assets/phone.svg";
import location from "../assets/location.svg";
import bgContactUs from "../assets/backgroundContactUs.svg";

const ContactUs = () => {
    return (
        <div
            className=" w-full py-24 bg-cover "
            style={{ backgroundImage: `url(${bgContactUs})` }}
            >
            <div class="flex justify-center">
                <p className=" md:bg-[#DA9391] lg:bg-transparent text-slate-50 max-md:bg-gradient-to-b from-Custom-Purple-1 to-Custom-Mid-Blue max-md:bg-clip-text md:text-5xl text-[min(13vw,4rem)] items-center text-center font-glacial-indifference-bold mb-5 md:mb-20 p-5 rounded-3xl"
                    style={{
                        WebkitTextStroke: "5px transparent",
                        WebkitFilter: "drop-shadow(5px 10px 4px rgba(0, 0, 0, 0.25)",
                        filter: "drop-shadow(5px 10px 4px rgba(0, 0, 0, 0.25)"
                    }}>
                    Get In Touch.
                </p>
            </div>
            <div className="h-4/5 w-4/5 mx-auto bg-slate-50 rounded-[60px] md:rounded-[40px] md:border-4 border-8 border-slate-50 flex lg:flex-row flex-col">
                <div className="h-full lg:w-3/5 w-full bg-gradient-to-l from-Custom-Purple-1 to-Custom-Mid-Blue rounded-t-[54px] lg:bg-gradient-to-b md:rounded-t-[44px]  md:rounded-bl-[44px] lg:rounded-tr-none lg:rounded-br-[44px] px-8 py-7">
                    <p className="text-slate-50 md:text-5xl text-[6vw] lg:text-[2.5vw] font-glacial-indifference-bold text-center pt-2 lg:pt-7">
                        Our Social Media.
                    </p>
                    <div className="flex justify-center md:mt-10 ">
                        <div class="mt-5  flex flex-col md:gap-4 gap-0">
                            <div className="w-fit">
                                <p className=" md:text-Custom-Blue text-slate-50 md:text-3xl text-[4vw] lg:text-[1.5vw] font-glacial-indifference-bold md:bg-slate-50 rounded-full p-4 flex items-center">
                                    <img
                                        class="float-left mr-2 p-2 md:p-0 bg-slate-50 rounded-full md:rounded-none md:w-10 w-[8vw] lg:w-[2vw]"
                                        draggable="false"
                                        src={instagram}
                                    ></img>
                                    @kbmdsi.ub
                                </p>
                            </div>
                            <div className="w-fit">
                                <p className=" md:text-Custom-Blue text-slate-50 md:text-3xl text-[4vw] lg:text-[1.5vw] font-glacial-indifference-bold md:bg-slate-50 rounded-full p-4 flex items-center md:ml-14 lg:ml-[3vw]">
                                    <div className="">
                                        <img
                                            class="float-left mr-2 md:mr-4 p-2 md:p-0 bg-slate-50 rounded-full md:rounded-none md:w-10 w-[8vw] lg:w-[2vw]"
                                            draggable="false"
                                            src={youtube}
                                        ></img>
                                        KBMDSI FILKOM UB
                                    </div>
                                </p>
                            </div>
                            <div className="w-fit">
                                <p className=" md:text-Custom-Blue text-slate-50 md:text-3xl text-[4vw] lg:text-[1.5vw] font-glacial-indifference-bold md:bg-slate-50 rounded-full p-4 flex items-center">
                                    <img
                                        class="float-left mr-2 md:mr-4-2 md:p-0 bg-slate-50 rounded-full md:rounded-none md:w-10 w-[8vw] lg:w-[2vw]"
                                        draggable="false"
                                        src={linkedin}
                                    ></img>
                                    KBMDSI FILKOM UB
                                </p>
                            </div>
                            <div className="w-fit">
                                <p className=" md:text-Custom-Blue text-slate-50 md:text-3xl text-[4vw] lg:text-[1.5vw] font-glacial-indifference-bold md:bg-slate-50 rounded-full p-4 flex items-center md:ml-14 lg:ml-[3vw]">
                                    <img
                                        class="float-left mr-2 md:mr-4 p-2 md:p-0 bg-slate-50 rounded-full md:rounded-none md:w-10 w-[8vw] lg:w-[2vw]"
                                        draggable="false"
                                        src={twitter}
                                    ></img>
                                    @KBMDSI_UB
                                </p>
                            </div>
                            <div className="w-fit">
                                <p className=" md:text-Custom-Blue text-slate-50 md:text-3xl text-[4vw] lg:text-[1.5vw] font-glacial-indifference-bold md:bg-slate-50 rounded-full p-4 flex items-center">
                                    <img
                                        class="float-left mr-2 md:mr-4 p-2 md:p-0 bg-slate-50 rounded-full md:rounded-none md:w-10 w-[8vw] lg:w-[2vw]"
                                        draggable="false"
                                        src={tiktok}
                                    ></img>
                                    @KBMDSI_UB
                                </p>
                            </div>
                            <div className="w-fit">
                                <p className=" md:text-Custom-Blue text-slate-50 md:text-3xl text-[4vw] lg:text-[1.5vw] font-glacial-indifference-bold md:bg-slate-50 rounded-full px-4 py-2.5 flex items-center md:ml-14 lg:ml-[3vw]">
                                    <img
                                        class="float-left mr-2 md:mr-4 p-2 bg-slate-50 rounded-full md:rounded-none md:w-14 w-[8vw] lg:w-[3vw]"
                                        draggable="false"
                                        src={line}
                                    ></img>
                                    @KBMDSI_UB
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="lg:px-10 md:px-20 px-5">
                        <p className="pt-6 md:pt-12 lg:text-[2.5vw] text-[5vw] font-glacial-indifference-bold text-black text-center lg:text-left ">
                            Contact Information
                        </p>
                        <div className="mx-5">
                            <p className="pt-5 md:pt-12 lg:pt-16 lg:text-4xl text-[min(5vw,2rem)] font-glacial-indifference-bold text-black">
                                <img
                                    class="float-left pr-5 max-md:w-[min(10vw,4rem)]"
                                    draggable="false"
                                    src={phone}
                                ></img>
                                Phone
                            </p>
                            <p className="pl-[10vw] md:pl-14 lg:pt-2 lg:text-[1.5vw] max-md:text-[min(4vw,1rem)] md:text-[2vw] font-glacial-indifference-bold text-black">
                                +62 812-3456-7890
                            </p>
                            <p className="pt-5 md:pt-10 lg:pt-16 lg:text-4xl text-[min(5vw,2rem)] font-glacial-indifference-bold text-black">
                                <img
                                    class="float-left pr-5 max-md:w-[min(10vw,4rem)]"
                                    draggable="false"
                                    src={mail}
                                ></img>
                                Email
                            </p>
                            <p className=" pl-[12vw] md:pl-14 lg:pt-2 lg:text-[1.5vw] max-md:text-[min(4vw,1rem)] md:text-[2vw] font-glacial-indifference text-black">
                                kbmdsi@gmail.com
                            </p>
                            <p className="pt-5 md:pt-10 lg:pt-16 lg:text-4xl text-[min(5vw,2rem)] font-glacial-indifference-bold text-black">
                                <img
                                    class="float-left pr-5 max-md:w-[min(10vw,4rem)]"
                                    draggable="false"
                                    src={location}
                                ></img>
                                Alamat
                            </p>
                            <p className="pl-[10vw] md:pl-14 lg:pt-2 lg:text-[1.5vw] max-md:text-[min(4vw,1rem)] md:text-[2vw] font-glacial-indifference text-black mb-5 md:mb-16">
                                Gedung Kreativitas Mahasiswa (GKM) Lantai 2
                                Sekretariat KBMDSI Fakultas Ilmu Komputer
                                Universitas Brawijaya.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
