import React from "react";
import { pengembanganInternalData } from "../data/pengembanganInternalData.js";
import SectionHeroInternal from "../components/sections/pengembanganInternalPage/SectionHeroInternal.jsx";
import SectionTupoksiProkerInternal from "../components/sections/pengembanganInternalPage/SectionTupoksiProkerInternal.jsx";
import SectionAnggotaInternal from "../components/sections/pengembanganInternalPage/SectionAnggotaInternal.jsx";

const PengembanganInternal = () => {
    const internalData = pengembanganInternalData[0];
    return (
        <>
            <SectionHeroInternal dataHero={internalData} />
            <SectionTupoksiProkerInternal dataTupoksiProker={internalData} />
            <SectionAnggotaInternal dataAnggota={internalData} />
        </>
    );
};

export default PengembanganInternal;
