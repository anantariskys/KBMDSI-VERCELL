import React from "react";
import SectionHeroDetailMerch from "../components/sections/DetailMerchPage/SectionHeroDetailMerch";
import SectionOtherMerch from "../components/sections/DetailMerchPage/SectionOtherMerch";
import { useParams } from "react-router-dom";
import CircleBackground from "../components/CircleBackground";
import waveDm from "../assets/detailMerch/wave-dm.png";

const DetailMerch = () => {
    const { id } = useParams();
    return (
        <div className="bg-gradient-to-t from-[#151E4F] to-[#273FD4] relative overflow-hidden">
            <SectionHeroDetailMerch merchId={id} />
            <SectionOtherMerch merchId={id} />

            {/* sm */}

            <CircleBackground
                className={
                    "absolute top-[1%] -left-[9%] w-[120px] h-[120px] md:w-[300px] md:h-[300px] bg-gradient-to-b from-[#B736C64D] to-[#D56C3A4D] rounded-full"
                }
            />

            <CircleBackground
                className={
                    "absolute top-[12%] right-0 md:-top-[7%] md:-right-[10%] w-[70px] h-[70px] md:w-[350px] md:h-[350px] bg-gradient-to-b from-[#B736C64D] to-[#D56C3A4D] rounded-full"
                }
            />

            <CircleBackground
                className={
                    "absolute top-[41%] right-[12%] w-[160px] h-[160px] bg-gradient-to-b from-[#B736C64D] to-[#D56C3A4D] rounded-full z-0"
                }
            />

            <CircleBackground
                className={
                    "absolute bottom-[28%] left-[18%] w-[200px] h-[200px] bg-gradient-to-b from-[#B736C64D] to-[#D56C3A4D] rounded-full z-0"
                }
            />

            <img
                src={waveDm}
                alt={waveDm}
                className="absolute bottom-0 w-full aspect-auto"
            />
        </div>
    );
};

export default DetailMerch;
