import React from "react";
import wavePurpleOrange from "../../../assets/wavePurpOrangeProfileEmdsi.png";

const InformasiEmdsi = () => {
    return (
        <section className="bg-gradient-102 from-[#D26938] to-[#AD37B9] to-[91.19%] pt-[20%] pb-[10%] md:-mt-10 xl:-mt-24">
            <div className="container mx-auto lg:px-24 md:px-10 px-4">
                <h2
                    className="bg-gradient-to-l from-Custom-Purple-2 via-Custom-Purple-1 via-[24%] to-transparent w-fit py-2 px-4 
                text-slate-50 font-bold text-xl sm:text-4xl lg:text-5xl rounded-full ms-3"
                >
                    Departemen EMDSI
                </h2>
                <p className="text-slate-50 text-base sm:text-xl lg:text-2xl">
                    Dalam Struktur EMDSI sendiri terdapat 7 departemen yang
                    memiliki tugasnya masing-masing, yakni Pengembangan Sumber
                    Daya Manusia (PSDM), Keilmuan dan Pengajaran (KP), Advokasi
                    dan Kesejahteraan Mahasiswa (ADVOKESMA), Sosial Profesi
                    (SOSPRO), Kewirausahaan (KWU), Media Komunikasi Informasi
                    (MEDKOMINFO), serta Pengambangan Informasi dan Teknologi
                    (PIT)
                </p>
            </div>
        </section>
    );
};

export default InformasiEmdsi;
