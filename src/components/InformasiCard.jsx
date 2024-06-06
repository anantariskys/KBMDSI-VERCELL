import React from "react";
import cardSuggestionImg from "../assets/CardSuggestionImg.png";

const InformasiCard = () => {
    return (
        <div className="flex flex-col rounded-2xl bg-slate-50 mx-w-calc relative">
            <img
                src={cardSuggestionImg}
                alt=""
                className="h-44 rounded-t-2xl object-cover"
            />
            <div className="px-4 py-6 deskripsi h-72 sm:h-[340px]">
                <h3 className="font-bold text-xl sm:text-2xl line-clamp-2 text-black">
                    CAREERMATION (CAREER INFORMATION)
                </h3>
                <h4 className="font-bold text-base sm:text-xl text-black mt-1.5">
                    Departemen balbla
                </h4>
                <p className="text-xs sm:text-base text-black line-clamp-4 mt-3.5">
                    Careermation merupakan salah satu program kerja pada bidang
                    kesejahteraan mahasiswa dimana program kerja ini bergerak
                    dengan cara memberikan informasi terkait lowongan kerja yang
                    dapat diikuti oleh mahasiswa Departemen Sistem InformasiI.
                </p>
                <p className="text-xs sm:text-base text-black font-bold mt-2">
                    Regist: 5 Mei - 15 Mei 2024
                </p>
                <button className="text-sm font-bold text-slate-50 bg-gradient-to-r from-Custom-Blue to-[#8A2895] w-fit rounded-full px-4 py-2 mt-4">
                    Baca Selengkapnya
                </button>
            </div>
        </div>

        // <div
        //     role="status"
        //     class="max-w-sm p-4 border border-gray-200 rounded shadow  md:p-6 dark:border-gray-700 bg-slate-50"
        // >
        //     <div className="animate-pulse">
        //         <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700 ">
        //             <svg
        //                 class="w-10 h-10 text-gray-200 dark:text-gray-600"
        //                 aria-hidden="true"
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 fill="currentColor"
        //                 viewBox="0 0 16 20"
        //             >
        //                 <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
        //                 <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
        //             </svg>
        //         </div>
        //         <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        //         <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        //         <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        //         <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        //         <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        //         <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        //         <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 ms-8 w-24 mb-4"></div>
        //         <span class="sr-only">Loading...</span>
        //     </div>
        // </div>
    );
};

export default InformasiCard;
