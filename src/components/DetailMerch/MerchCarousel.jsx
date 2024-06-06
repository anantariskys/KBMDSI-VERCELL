import React from "react";
import { merchData } from "../../data/merchData";
import MerchCard from "../MerchPage/MerchCard";
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
                perPage: "3",
                perMove: "1",
                height: "100%",
                type: "loop",
                rewindSpeed: "3000",
                arrows: "true",
                pagination: true,
                drag: "free",
                snap: true,
                extensions: { AutoScroll },
                autoScroll: {
                    speed: 5,
                    pauseOnHover: true,
                    pauseOnFocus: false,
                },
                breakpoints: {
                    1100: {
                        perPage: 2,
                    },
                    700: {
                        perPage: 1,
                    },
                },
            }}

            // ...
        >
            {data.map((item, index) => (
                <SplideSlide className="py-10" key={index}>
                    <MerchCard key={index} data={item} />
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

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const MerchCarousel = ({ data }) => {
//   var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 1000,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 750,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <div className="slider-container mx-auto">
//       <Slider {...settings}>
//         {data.map((merch) => (
//           <MerchCard key={merch.id} data={merch} />
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default MerchCarousel;
