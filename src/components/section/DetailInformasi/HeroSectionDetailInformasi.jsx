import React from "react";
import imgDetail from "../../../assets/imgDetail.png";

const HeroSectionDetailInformasi = () => {
    return (
        <section className="bg-gradient-to-b from-Custom-Dark-Blue to-[#3B5696] to-[107%] pb-24 sm:pb-36 lg:pb-64">
            <div className="container mx-auto">
                <div className="grid grid-cols-4 px-3">
                    <div className="col-span-4 lg:col-span-2 order-2 mt-4 md:mt-8 px-2 sm:px-20 md:px-7">
                        <h1 className="text-4xl lg:text-6xl md:text-left font-bold text-center text-slate-50">
                            CONTOH NAMA KEGIATAN BLABLABLABLA
                        </h1>
                        <p className="text-justify text-xl sm:text-2xl  lg:text-3xl text-slate-50 mt-4">
                            Careermation merupakan salah satu program kerja pada
                            bidang kesejahteraan mahasiswa dimana program kerja
                            ini bergerak dengan cara memberikan informasi
                            terkait lowongan kerja yang dapat diikuti oleh
                            mahasiswa Departemen Sistem InformasiI. Output dari
                            program kerja ini adalah postingan di sosial media
                            KBMDSI. Sumber lowongan kerja akan didapat dari unit
                            kemahasiswaan FILKOM ataupun dari sumber lainnya
                            yang dapat divalidasi.
                        </p>
                        <button className="p-4 hidden lg:block rounded-full bg-slate-50 text-black mt-8 px-12">
                            Learn More!
                        </button>
                    </div>
                    <div className="col-span-4 lg:col-span-2 lg:order-2 order-1 sm:px-20 md:px-7">
                        <img src={imgDetail} alt="" className="mt-6 md:mt-8" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSectionDetailInformasi;
