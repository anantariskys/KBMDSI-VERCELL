import React from "react";
import waveBlue from "../../../assets/waveBlueDetailInformasi.png";

const ContentDetailInformasi = () => {
    return (
        <section className="bg-gradient-to-b from-Custom-Blue to-[#98399A] relative pt-24">
            <img
                src={waveBlue}
                alt=""
                className="absolute -top-[8%] sm:-top-[8%] md:-top-[12%] lg:-top-[18%]"
            />
            <div className="container mx-auto p-5">
                <p className="font-bold text-lg sm:text-3xl text-slate-50 ">
                    📆: Jumat, 8 November 2023
                </p>
                <p className="font-bold  text-lg sm:text-3xl text-slate-50 ">
                    ⏰: 13.00-15.00
                </p>
                <p className="font-bold  text-lg sm:text-3xl text-slate-50 ">
                    📍: Gedung Algoritma, UB oleh Great Speaker
                </p>
                <p className="font-bold  text-lg sm:text-3xl text-slate-50 ">
                    🎙️: Contoh nama speaker
                </p>
                <p className="font-bold  text-lg sm:text-3xl text-slate-50 ">
                    Benefit Kegiatan:
                </p>
                <p className="text-lg sm:text-3xl text-slate-50">
                    Dalam Economic Inspiring Seminar(EIS), kamu akan mendapat
                    benefit seperti
                </p>
                <p className="text-lg sm:text-3xl text-slate-50">
                    ✨Free E-Certificate & Consumption
                </p>
                <p className="text-lg sm:text-3xl text-slate-50">
                    ✨Doorprize Souvenir
                </p>
                <p className="text-lg sm:text-3xl text-slate-50">
                    ✨Relation Student ITS
                </p>
                <p className="text-lg sm:text-3xl text-slate-50">
                    ✨Get Insight in Financial and Branding
                </p>
                <p className="text-lg sm:text-3xl text-slate-50">
                    ✨Motivated to be Entrepreneur
                </p>
                <p className="text-lg sm:text-3xl text-slate-50">
                    Jadi tunggu apa lagi, segera daftarkan dirimu pada link
                    berikut!
                </p>
                <p className="text-lg sm:text-3xl text-slate-50">
                    kbmdsi.ub.ac.id/registrasi-Ac
                </p>
                <p className="text-lg sm:text-3xl text-slate-50">
                    Contact Person:
                </p>
                <p className="text-lg sm:text-3xl text-slate-50">
                    082211101150 (John Doe)
                </p>
                <p className="text-lg sm:text-3xl text-slate-50">
                    Advokasi KBMDSI
                </p>
                <p className="text-lg sm:text-3xl text-slate-50">
                    KBMDSI UB Swara Shakti 2023/2024
                </p>
            </div>
        </section>
    );
};

export default ContentDetailInformasi;
