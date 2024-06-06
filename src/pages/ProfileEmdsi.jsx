import React from "react";
import HeroSectionProfileEmdsi from "../components/section/ProfileEmdsi/HeroSectionProfileEmdsi";
import InformasiEmdsi from "../components/section/ProfileEmdsi/InformasiEmdsi";
import DepartemenSection from "../components/section/ProfileEmdsi/DepartemenSection";

const ProfileEmdsi = () => {
    return (
        <>
            <HeroSectionProfileEmdsi />
            <InformasiEmdsi />
            <DepartemenSection />
        </>
    );
};

export default ProfileEmdsi;
