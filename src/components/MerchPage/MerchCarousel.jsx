import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

const MerchCarousel = ({ data }) => {
    return (
        <Splide
            // ...

            options={{
                width: "100%",
                rewind: true,
                autoplay: "true",
                perPage: 1,
                perMove: "1",
                gap: "2rem",
                height: "15rem",
                type: "loop",
                rewindSpeed: "3000",
                arrows: false,
                pagination: false,
                extensions: { AutoScroll },
                autoScroll: {
                    speed: 3,
                    pauseOnHover: true,
                    pauseOnFocus: false,
                },
                breakpoints: {
                    1000: {
                        perPage: 1,
                    },
                },
            }}

            // ...
        >
            {data.map((item, index) => (
                <SplideSlide key={index}>
                    <img src={item} alt={item} />
                </SplideSlide>
            ))}
            {/* <SplideSlide>
                <img src="https://via.placeholder.com/300x300" alt="" />
            </SplideSlide>
            <SplideSlide>
                <img src="https://via.placeholder.com/301x301" alt="" />
            </SplideSlide>
            <SplideSlide>
                <img src="https://via.placeholder.com/302x302" alt="" />
            </SplideSlide>
            <SplideSlide>
                <img src="https://via.placeholder.com/303x303" alt="" />
            </SplideSlide>
            <SplideSlide>
                <img src="https://via.placeholder.com/304x304" alt="" />
            </SplideSlide>
            <SplideSlide>
                <img src="https://via.placeholder.com/305x305" alt="" />
            </SplideSlide> */}
        </Splide>
    );
};

export default MerchCarousel;
