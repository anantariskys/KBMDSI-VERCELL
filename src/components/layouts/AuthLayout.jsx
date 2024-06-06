import React from "react";
import Navbar from "../Navbar";

const AuthLayout = ({ children, type }) => {
    return (
        <div className="relative overflow-hidden">
            <Navbar />

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="921"
                height="532"
                viewBox="0 0 921 532"
                fill="none"
                className={`absolute top-0 ${
                    type === "login" ? "left-0" : "right-0 -scale-x-100"
                } `}
            >
                <g opacity="0.64" filter="url(#filter0_f_1_61)">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M523 326.243C704.149 326.243 851 208.216 851 62.6214C851 -82.9727 704.149 -201 523 -201C350.84 -201 342.883 -92.1651 385.437 75.8204C332.604 -30.124 200.325 -105.233 45.5 -105.233C-155.808 -105.233 -319 21.7462 -319 178.383C-319 335.021 -155.808 462 45.5 462C202.05 462 335.55 385.207 387.174 277.392C392.909 318.844 421.739 326.243 523 326.243Z"
                        fill="url(#paint0_linear_1_61)"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_f_1_61"
                        x="-389"
                        y="-271"
                        width="1310"
                        height="803"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feGaussianBlur
                            stdDeviation="35"
                            result="effect1_foregroundBlur_1_61"
                        />
                    </filter>
                    <linearGradient
                        id="paint0_linear_1_61"
                        x1="-319"
                        y1="130.5"
                        x2="851"
                        y2="130.5"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#B736C6" />
                        <stop offset="1" stop-color="#D56C3A" />
                    </linearGradient>
                </defs>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="839"
                height="320"
                viewBox="0 0 839 320"
                fill="none"
                className={`absolute bottom-0 ${
                    type === "login" ? "right-0" : "left-0 -scale-x-100"
                }`}
            >
                <g opacity="0.64" filter="url(#filter0_f_1_64)">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M398 205.757C216.851 205.757 70.0001 323.784 70.0001 469.379C70.0001 614.973 216.851 733 398 733C570.16 733 578.117 624.165 535.563 456.18C588.396 562.124 720.675 637.233 875.5 637.233C1076.81 637.233 1240 510.254 1240 353.617C1240 196.979 1076.81 70 875.5 70C718.95 70 585.45 146.793 533.826 254.608C528.091 213.156 499.261 205.757 398 205.757Z"
                        fill="url(#paint0_linear_1_64)"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_f_1_64"
                        x="0.00012207"
                        y="0"
                        width="1310"
                        height="803"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feGaussianBlur
                            stdDeviation="35"
                            result="effect1_foregroundBlur_1_64"
                        />
                    </filter>
                    <linearGradient
                        id="paint0_linear_1_64"
                        x1="1240"
                        y1="401.5"
                        x2="70"
                        y2="401.5"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#5B71A8" />
                        <stop offset="0.499" stop-color="#D589AA" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="bg-pink-400 flex justify-center items-center py-32 min-h-screen px-5 md:px-12 lg:px-0">
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
