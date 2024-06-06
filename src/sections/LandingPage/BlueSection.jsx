import React from "react";
import foto from "../../assets/landingpage/jasakoding.png"
import wave3 from "../../assets/landingpage/wave blue.png";
import ig from "../../assets/landingpage/instagram.png";
import wa from "../../assets/landingpage/whatsapp.png";

const BlueSection = () => {
    return (
        <div className="flex flex-col justify-center relative gap-4">
            <div className="flex flex-row justify-around">
                <div className="flex flex-col justify-end">
                    <h2 className="leading-none font-glacial-indifference-bold lg:text-7xl md:text-5xl text-2xl  text-[#F6EF3B]">
                        BINGUNG
                    </h2>
                    <h2 className="leading-none font-glacial-indifference-bold lg:text-8xl md:text-6xl text-4xl  text-[#F6EF3B]">
                        CODING ?
                    </h2>
                    <h2 className="leading-none my-2 font-glacial-indifference-bold lg:text-7xl md:text-4xl bg-gradient-to-b from-Custom-Blue to-Custom-Purple-1 inline-block text-transparent bg-clip-text">
                        JASA CODING
                    </h2>
                </div>
                <img className="" src={`${foto}`} alt="" />
            </div>
            <div className="flex flex-row justify-around">
                <p className="font-glacial-indifference-bold lg:text-2xl md:text-xl text-slate-50 lg:w-1/4 md:w-full">
                    Mari Wujudkan ide-ide cemerlang yang kamu miliki menjadi
                    kenyataan dengan tim ahli KBMDSI SwaraShakti. Jelajahi
                    potensi tanpa batas bersama kami!
                </p>
                <div className="flex justify-center gap-8">
                    <a
                        className=" bg-gradient-to-b from-Custom-Purple-1 to-Custom-Blue text-slate-50 
                    font-glacial-indifference-bold text-2xl rounded-full"
                        href="#"
                    >
                        Hubungi Kami
                    </a>
                    <a href="">
                        <img src={`${ig}`} alt="" />
                    </a>
                    <a href="">
                        <img src={`${wa}`} alt="" />
                    </a>
                </div>
            </div>
            <img className="w-full z-0 absolute bottom-0" src={wave3} alt="" />
        </div>
    );
}

export default BlueSection