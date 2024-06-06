import React from "react";
import HeroSectionTentangKami from "../components/section/TentangKami/HeroSectionTentangKami";
import StrukturOrganisasi from "../components/section/TentangKami/StrukturOrganisasi";
import SectionVIsiMisi from "../components/section/TentangKami/SectionVIsiMisi";
import LogoSectionTentangKami from "../components/section/TentangKami/LogoSectionTentangKami";
import HeroSectionMobileTentangKami from "../components/section/TentangKami/HeroSectionMobileTentangKami";
import HeroSectionTabTentangKami from "../components/section/TentangKami/HeroSectionTabTentangKami";
import BphSection from "../components/section/TentangKami/BphSection";
import StrukturBpi from "../components/section/TentangKami/StrukturBpi";

// import wavePurpleSection from "../../../assets/wavePurpleSection.png";
// import elipseSection from "../../../assets/elipsSection.png";

const TentangKami = () => {
    return (
        <>
            <HeroSectionMobileTentangKami />
            <HeroSectionTabTentangKami />
            <HeroSectionTentangKami />
            <SectionVIsiMisi />
            <LogoSectionTentangKami />
            <StrukturOrganisasi />
            <StrukturBpi />
            <BphSection />
        </>
    );
};

export default TentangKami;
