import React, { useEffect, useRef } from "react";
import circlePurple from "../../../assets/komisiPage/circle-purple.png";
import wavePurple from "../../../assets/komisiPage/wave-purple.png";
import { useParams } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const SectionHeroKomisi = ({ dataHero }) => {
    const { id } = useParams();
    const elemenRef = useRef(null);

    useEffect(() => {
        if (elemenRef.current) {
            const offset = 100; // Adjust this value according to your needs
            const elementPosition =
                elemenRef.current.getBoundingClientRect().top +
                window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    }, [id]);

    const target = useRef(null);

    const { scrollYProgress } = useScroll({
        target: target,
        offset: ["start center", "end start"],
    });
    const x = useTransform(scrollYProgress, [0, 1], [0, -300]);

    return (
        <section
            ref={elemenRef}
            id="hero"
            className="bg-slate-500 min-h-screen flex justify-center items-center relative overflow-hidden px-5 md:px-12"
        >
            <img
                src={circlePurple}
                alt={circlePurple}
                className="z-10 absolute w-[240px] -top-[8%] -right-[25%] md:-top-[290px] md:-right-[320px] md:w-[769px] aspect-auto"
                draggable="false"
            />
            <img
                src={dataHero.imgHero}
                alt="imgHero"
                className="w-full object-cover h-screen absolute z-0"
                draggable="false"
            />
            <motion.div
                initial={{ x: -300 }} // Initial position to the left
                animate={{ x: 0 }} // Animate to position 0
                transition={{ duration: 0.5, ease: "easeInOut" }}
                ref={target}
                style={{ x }}
                className="container mx-auto text-slate-50 text-6xl font-bold z-10"
            >
                <h1 className="text-center md:text-left font-glacial-indifference-bold">
                    {dataHero.komisi}
                </h1>
                <h1 className="text-center md:text-left font-glacial-indifference-bold">
                    {dataHero.nama}
                </h1>
            </motion.div>
            <img
                src={wavePurple}
                alt={wavePurple}
                className="absolute w-full aspect-auto bottom-0 lg:-bottom-[5%]"
                draggable="false"
            />
        </section>
    );
};

export default SectionHeroKomisi;
