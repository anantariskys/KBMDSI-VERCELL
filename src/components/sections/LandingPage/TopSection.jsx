import React from 'react'
import ListCardAnggota from '../../../components/Landing Page/ListCardAnggota'
import logo from "../../../assets/landingpage/logo.png"
import wave1 from "../../../assets/landingpage/wave orange 1.png";
import { motion } from "framer-motion";
import ListCardAnggota2 from '../../Landing Page/ListCardAnggota2';

const TopSection = () => {
    return (
        <>
            <section className="relative h-screen md:h-[100%] bg-purple-900 overflow-hidden">
                <div
                    className="  absolute 
                flex flex-row   left-1/2 gap-8 rotate-45 -translate-x-1/2 h-screen -top-1/2 "
                >
                    <ListCardAnggota direction="t" />
                   <ListCardAnggota2/>
                    <ListCardAnggota direction="t" />
                   <ListCardAnggota2/>
                    <ListCardAnggota direction="t" />
                   <ListCardAnggota2/>
                    <ListCardAnggota direction="t" />
                   <ListCardAnggota2/>
                    <ListCardAnggota direction="t" />
                </div>
                <div className="relative flex lg:flex-row flex-col-reverse justify-center z-10 lg:py-[10%] py-[40%]">
                    <div className="flex flex-col justify-center">
                        <h2 className="lg:ps-0 md:ps-[10%] md:text-left text-center font-glacial-indifference-bold lg;text-[10rem] md:text-9xl text-6xl  leading-none bg-gradient-to-r from-[#D26938] to-[#AD37B9] bg-clip-text text-transparent">
                            KBMDSI
                        </h2>
                        <h2 className="md:ps-[11%] md:text-left text-center lg:ps-1 font-glacial-indifference-bold md:text-7xl text-4xl  ps-1 bg-gradient-to-r from-[#D26938] to-[#AD37B9] bg-clip-text text-transparent">
                            KABINET
                        </h2>
                    </div>
                    <motion.img
                        className="lg:size-96 md:size-60 size-56 w-fit md:self-start self-center"
                        src={logo}
                        alt=""
                        animate={{ rotate: [360, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 10,
                            ease: "linear",
                        }}
                        draggable='false'
                    />
                </div>
                <img
                    className="w-[100%] lg:relative absolute bottom-0"
                    src={`${wave1}`}
                    alt="wave"
                    draggable='false'
                />
            </section>
        </>
    );
};

export default TopSection