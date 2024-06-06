import React from "react";
import star from "../../assets/landingpage/star.png";
import star2 from "../../assets/landingpage/star2.png"
import kahim from "../../assets/landingpage/kahim.png";
import wakahim from "../../assets/landingpage/wakahim.png";
import orangewave from "../../assets/landingpage/orangewave.png"
import oranginwave from "../../assets/landingpage/wave-in-orange.png";
import CardSambutanNew from "../../components/Landing Page/CardSambutanNew";
import CardKbmNew from "../../components/Landing Page/CardKbmNew";
import Circle from "../../components/Circle";
import "../../styles/landingPage.css"


const OrangeSection = () => {
    return (
        <div className="relative">
            <Circle className="lg:size-60 md:size-36 size-16 bg-Custom-Orange-1 rounded-full absolute z-10 md:-right-[4%] lg:top-[2%] -right-[7%] opacity-45" />
            <Circle className="lg:size-32 size-24 bg-Custom-Orange-1 rounded-full absolute z-10 md:-left-[3%] -left-[12%] lg:top-[18%] md:top-[20%] opacity-45" />
            <div className="flex flex-col aspect-auto w-full relative">
                <div className="bg-[#C65D30] lg:pb-[2%] md:pb-[8%] pb-[5%]">
                    <div className="flex mt-5 justify-center pt-[5%]">
                        <img
                            className="lg:w-28 md:w-14 w-7 lg:h-32 md:h-16 h-8 self-start"
                            src={`${star}`}
                            alt=""
                        />
                        <div className="flex flex-col">
                            <h2
                                className="leading-none lg:text-9xl md:text-8xl text-4xl font-glacial-indifference-bold text-slate-50 
                            bg-gradient-to-br from-Custom-Orange-1 to-[#AD37B9] bg-clip-text"
                                style={{ WebkitTextStroke: "10px transparent" }}
                            >
                                Sepintas
                            </h2>
                            <h2
                                className="white-border leading-none lg:text-7xl text-2xl md:text-6xl font-glacial-indifference-bold bg-gradient-to-b from-Custom-Purple-1
                            to-Custom-Orange-1 inline-block text-transparent bg-clip-text self-end"
                            >
                                KBMDSI
                            </h2>
                        </div>
                        <img
                            className="lg:w-28 md:w-14 w-7 lg:h-32 md:h-16 h-8 self-end"
                            src={`${star}`}
                            alt=""
                        />
                    </div>
                    <CardKbmNew />
                    <div className="flex flex-col absolute left-[15%] right-[15%] z-10">
                        <h2
                            className="leading-none lg:text-9xl md:text-8xl text-4xl font-glacial-indifference-bold text-slate-50 mx-auto
                        bg-gradient-to-br from-Custom-Orange-1 to-[#AD37B9] bg-clip-text"
                            style={{ WebkitTextStroke: "10px transparent" }}
                        >
                            Sambutan
                        </h2>
                        <h2 className="white-border leading-none nama lg:text-4xl md:text-3xl text-base font-glacial-indifference-bold bg-gradient-to-br from-[#D26938] to-[#AD37B9] inline-block text-transparent bg-clip-text mx-auto">
                            Ketua dan Wakil Ketua
                        </h2>
                    </div>
                </div>
                <img
                    className="w-full drop-shadow-xl relative z-0"
                    src={orangewave}
                    alt=""
                />
                <div className="grid grid-cols-1 lg:gap-y-80 md:gap-y-40 gap-y-20 lg:mt-44 md:mt-28 mt-14 lg:mb-96 md:mb-44 mb-28 relative">
                    <div className="div">
                        <CardSambutanNew
                            foto={kahim}
                            jabatan="Ketua"
                            nama="Farchan Suryadio Rizki"
                            namaPanggilan="dio"
                            star={star}
                        />
                        <Circle className="lg:size-72 md:size-52 size-32 bg-[#C65D30] rounded-full absolute z-0 -left-[8%] md:-top-[15%] -top-[10%] opacity-50" />
                        <Circle className="lg:size-32 md:size-24 size-20 bg-[#C65D30] rounded-full absolute z-0 lg:left-[5%] md:left-[2%] left-[10%] top-[35%] lg:top-[30%] md:top-[20%] opacity-50" />
                        <Circle className="lg:size-32 md:size-24 size-14 bg-[#C65D30] rounded-full absolute z-0 -top-[6%] md:right-[7%] right-[10%] opacity-55" />
                        <Circle className="lg:size-72 md:size-52 size-28 bg-[#C65D30] rounded-full absolute z-0 md:bottom-[51%] bottom-[40%] md:-right-[10%] -right-[7%] opacity-55" />
                    </div>
                    <CardSambutanNew
                        foto={wakahim}
                        jabatan="Wakil Ketua"
                        nama="Adhitya Difka Yana"
                        namaPanggilan="Adhit"
                        star={star2}
                        reverse={true}
                    />
                    <img
                        className="absolute xl:-bottom-[24.46%] md:-bottom-[19.5%] -bottom-[20.6%] z-0 w-full"
                        src={oranginwave}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default OrangeSection