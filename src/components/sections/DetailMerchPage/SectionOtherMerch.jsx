import React, { useEffect, useRef, useState } from "react";
import MerchCard from "../../MerchPage/MerchCard.jsx";
import MerchCarousel from "../../DetailMerch/MerchCarousel.jsx";
import { merchData } from "../../../data/merchData.js";

const SectionRecommendationMerch = ({ merchId }) => {
    console.log({ merchId });
    const otherItems = merchData.filter((item) => item.id != merchId);
    console.log({ otherItems });

    return (
        <div className="px-5 md:px-12 xl:px-10 pb-12 relative z-10">
            <h1
                className="font-glacial-indifference-bold text-3xl text-white mb-12 bg-gradient-to-b from-[#A839C0] to-[#6F66D0] bg-clip-text"
                style={{
                    WebkitTextStroke: "5px transparent",
                }}
            >
                More Accessories
            </h1>

            <MerchCarousel data={otherItems} />
        </div>
    );
};

export default SectionRecommendationMerch;
