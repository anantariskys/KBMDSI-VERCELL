import React from "react";
import strukturBpi from "../../../assets/strukturBPI.png";
import orangeCloudSection from "../../../assets/orangeCloudSection.png";
import CircleBackground from "../../CircleBackground";

const StrukturBpi = () => {
    return (
        <section
            className="bg-gradient-to-b from-Custom-Purple-2 via-Custom-Purple-1 to-Custom-Purple-3 overflow-hidden relative"
            id="bpi"
        >
            <div className="container mx-auto px-4 pt-5 relative z-10">
                <h1
                    className="text-3xl sm:text-6xl lg:hidden font-bold text-center mt-0 pb-4 bg-gradient-to-b from-Custom-Orange-1 to bg-Custom-Orange-2 bg-clip-text text-transparent"
                    style={{ WebkitTextStroke: "1px #fff" }}
                >
                    Badan Pengurus Inti
                </h1>
                <h1
                    className="hidden lg:block text-8xl font-bold text-center mt-0 pb-4 bg-gradient-to-b from-Custom-Orange-1 to bg-Custom-Orange-2 bg-clip-text text-transparent"
                    style={{ WebkitTextStroke: "2px #fff" }}
                >
                    Badan Pengurus Inti
                </h1>
                <img src={strukturBpi} alt="" className="mt-3 relative z-10" />
            </div>
            <img
                src={orangeCloudSection}
                alt=""
                className="w-full mt-6 sm:mt-10 md:mt-14 lg:mt-16 relative z-10"
                draggable="false"
            />

            <div className="sm:hidden">
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] to-[#893b8480] w-8 aspect-square rounded-full absolute left-[6%] top-[2%] "></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] to-[#893b8480] w-[20%] aspect-square rounded-full absolute right-[17%] bottom-[3%] "></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] to-[#893b8480] w-1/12 aspect-square rounded-full absolute right-[8%] bottom-[12%]"></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] to-[#893b8480] w-1/12 aspect-square rounded-full absolute left-[18%] bottom-[14%]"></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] to-[#893b8480] w-2/12 aspect-square rounded-full absolute left-[24%] bottom-[3%]"></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] to-[#893b8480] w-2/12 aspect-square rounded-full absolute left-[14%] bottom-[43%]"></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] to-[#893b8480] w-[20%] aspect-square rounded-full absolute -left-[8%] top-[29%] "></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] to-[#893b8480] w-[24%] aspect-square rounded-full absolute -right-[5%] top-[18%] "></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] to-[#893b8480] w-[24%] aspect-square rounded-full absolute -right-[5%] top-[18%] "></CircleBackground>
            </div>
            <div className="hidden sm:block lg:hidden">
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] to-[#893b8480] w-24 aspect-square rounded-full absolute left-[5%] top-[10%] "></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] to-[#893b8480] w-16 aspect-square rounded-full absolute left-[8%] top-[34%]"></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] to-[#893b8480] w-[35%] aspect-square rounded-full absolute -right-[12%] top-[8%] "></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] to-[#893b8480] w-28 aspect-square rounded-full absolute right-[30%] bottom-[52%]"></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] to-[#893b8480] w-1/12 aspect-square rounded-full absolute left-[18%] bottom-[32%]"></CircleBackground>
            </div>
            <div className="hidden lg:block">
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] to-[#893b8480] w-24 aspect-square rounded-full absolute left-[17%] top-[3%] "></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] to-[#893b8480] w-[20%] aspect-square rounded-full absolute right-[17%] bottom-[3%] "></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] to-[#893b8480] w-1/12 aspect-square rounded-full absolute right-[8%] bottom-[12%]"></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] to-[#893b8480] w-1/12 aspect-square rounded-full absolute left-[18%] bottom-[14%]"></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] to-[#893b8480] w-2/12 aspect-square rounded-full absolute left-[24%] bottom-[3%]"></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] to-[#893b8480] w-[18%] aspect-square rounded-full absolute right-[24%] top-[34%] "></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] to-[#893b8480] w-[20%] aspect-square rounded-full absolute -left-[8%] top-[29%] "></CircleBackground>
                <CircleBackground className="bg-gradient-to-b from-[#b736c680] to-[#893b8480] w-[24%] aspect-square rounded-full absolute -right-[5%] top-[18%] "></CircleBackground>
            </div>
        </section>
    );
};

export default StrukturBpi;
