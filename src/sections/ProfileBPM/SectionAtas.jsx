import React from 'react'
import bg from "../../assets/profileBPMDSI/bpmdsi.png"

const SectionAtas = () => {
  return (
      <section className="relative md:h-[50vh] h-full">
          <div className="relative flex flex-col mx-auto items-center px-5 py-[20%] z-10">
            <h2 className="font-glacial-indifference-bold md:text-9xl text-5xl bg-gradient-to-r from-Custom-Orange-2 to-Custom-Purple-1 inline-block text-transparent bg-clip-text">
                BPMDSI
            </h2>
            <p className="font-glacial-indifference-bold md:text-2xl text-sm text-slate-50 w-3/4 mt-8 text-center">
                Badan Perwakilan Mahasiswa Departemen Sistem Informasi merupakan
                badan yang memiliki fungsi legislatif di KBMDSI dimana bertugas
                untuk melakukan perumusan produk hukum, pengawasan dan evaluasi
                terhadap pelaksanaan kegiatan dan program kerja EMDSI selama satu
                periode kepengurusan.
            </p>
          </div>
          <img className="w-full lg:h-fit h-[120%] absolute object-cover top-0 blur-sm" src={bg} alt="" />
      </section>
  );
}

export default SectionAtas