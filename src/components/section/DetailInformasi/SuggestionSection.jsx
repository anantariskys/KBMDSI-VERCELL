import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import InformasiCard from "../../InformasiCard";

const SuggestionSection = () => {
    return (
        <section className="bg-gradient-to-b from-[#96399A] to-Custom-Orange-2">
            <div className="container mx-auto">
                <div className="flex justify-center items-center px-5 mb-5 ">
                    <div className="border-2 w-full rounded-full lg:hidden"></div>
                    <h3 className="w-fit px-5 lg:px-0 lg:pr-5 text-2xl sm:text-5xl text-slate-50 font-bold">
                        Suggestion
                    </h3>
                    <div className="border-2 w-full rounded-full"></div>
                </div>
                <div className="px-5">
                    <Splide
                        options={{
                            gap: "12px",
                            perMove: "1",
                            width: "100%",
                            rewind: true,
                            autoplay: "true",
                            perPage: "4",
                            perMove: "1",
                            height: "100%",
                            type: "loop",
                            rewindSpeed: "3000",
                            arrows: "true",
                            pagination: true,
                            drag: "free",
                            snap: true,
                            breakpoints: {
                                640: { perPage: 1 },
                                1024: { perPage: 2 },
                            },
                        }}
                        aria-label="My Favorite Images"
                    >
                        <SplideSlide>
                            <InformasiCard />
                        </SplideSlide>
                        <SplideSlide>
                            <InformasiCard />
                        </SplideSlide>
                        <SplideSlide>
                            <InformasiCard />
                        </SplideSlide>
                        <SplideSlide>
                            <InformasiCard />
                        </SplideSlide>
                        <SplideSlide>
                            <InformasiCard />
                        </SplideSlide>
                        <SplideSlide>
                            <InformasiCard />
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </section>
    );
};

export default SuggestionSection;
