import React, { useState, useEffect } from "react";
import wave2 from "../assets/landingpage/wave orange 2.png";
import sky from "../assets/landingpage/awan biru.png";
import PurpleSection from "../components/sections/LandingPage/PurpleSection";
import OrangeSection from "../components/sections/LandingPage/OrangeSection";
import TopSection from "../components/sections/LandingPage/TopSection";
import BlueSectionNew from "../components/sections/LandingPage/BlueSectionNew";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preload from "./Preload";

const LandingPage = () => {
  
    return (
        <>
     
            <TopSection />
            <section className="bg-gradient-to-b relative from-[#C65D30] from-0% to-[#D56C3A] to-10% overflow-hidden">
                <OrangeSection />
            </section>
            <section className="bg-gradient-to-b from-Custom-Purple-2 overflow-hidden from-20% via-Custom-Purple-1 via-50% to-Custom-Purple-3 to-92%">
                <img
                    className="w-full col-span-12"
                    src={wave2}
                    alt="wave"
                    draggable="false"
                />
                <PurpleSection />
                <img
                    className="w-full col-span-12"
                    src={sky}
                    alt="wave"
                    draggable="false"
                />
            </section>
            <BlueSectionNew />
    
        </>
    );
};

export default LandingPage;
