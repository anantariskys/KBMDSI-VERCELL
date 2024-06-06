import React from 'react'
import FilterButton from '../components/Informasi Page/FilterButton'
import Cards from '../components/Informasi Page/Cards'
import "../styles/informasi.css"
import Circle from '../components/Circle';
import { motion } from "framer-motion";

function InformasiPage() {
    return (
        <section className="bg-Custom-Mid-Blue md:py-20 py-10 relative overflow-hidden">
            <motion.h2
                whileInView={{ y: [-100, 1], opacity: [0, 1] }}
                className="whiteBorderSlim relative z-20 lg:text-8xl md:text-6xl text-4xl font-glacial-indifference-bold text-Custom-Dark-Blue text-center"
            >
                Informasi
            </motion.h2>
            <FilterButton />
            <Cards />
            <div className="circle">
                <Circle className="big md:size-96 size-44 bg-Custom-Blue rounded-full absolute z-10 md:-left-[10%] md:-top-[5%] -top-[5%] -left-[15%] opacity-45" />
                <Circle className="big md:size-96 size-44 bg-Custom-Blue rounded-full absolute z-10 lg:-left-[10%] md:-left-[20%] md:-bottom-[8%] -left-[15%] -bottom-[2%] opacity-45" />
                <Circle className="big md:size-96 size-44 bg-Custom-Blue rounded-full absolute z-10 lg:-right-[10%] md:-right-[30%] lg:-bottom-[5%] md:bottom-[10%] bottom-[20%] -right-[15%] opacity-45" />
                <Circle className="big lg:size-96 md:hidden size-16 bg-Custom-Blue rounded-full absolute z-10 md:right-[25%] md:top-[28%] opacity-45" />
                <Circle className="medium md:size-60 size-28 bg-Custom-Blue rounded-full absolute z-10 lg:left-[10%] lg:top-[25%] md:left-[50%] md:top-[50%] top-[19%] right-[20%] opacity-45" />
                <Circle className="small md:size-40 size-20 bg-Custom-Blue rounded-full absolute z-10 lg:left-[44%] lg:top-[8%] md:left-[60%] md:top-[20%] -top-[1%] right-[10%] opacity-45" />
                <Circle className="small md:size-40 size-20 bg-Custom-Blue rounded-full absolute z-10 lg:-right-[2%] lg:-top-[5%] md:-top-[5%] md:-right-[5%] right-[2%] bottom-[2%] opacity-45" />
                <Circle className="xtrasmall md:size-40 size-14 bg-Custom-Blue rounded-full absolute z-10 lg:right-[50%] lg:bottom-[10%] md:right-[90%] md:bottom-[50%] right-[30%] bottom-[55%] opacity-45" />
            </div>
        </section>
    );
}

export default InformasiPage