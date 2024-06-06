import React from "react";
import FormRegister from "../../authPage/FormRegister";
import { Link } from "react-router-dom";

const SectionRegister = () => {
    return (
        <div className="w-full lg:w-[80%] bg-[#E9DBF1] rounded-[42px] flex flex-col lg:flex-row overflow-hidden z-10 shadow-2xl">
            <div className="order-2 lg:order-1 w-full lg:w-[45%] text-slate-50 text-center bg-gradient-to-b from-[#A839C0] to-[#6F66D0] rounded-[42px] flex justify-center items-center flex-col px-10 gap-5 py-10 md:py-20">
                <h1 className="text-4xl font-glacial-indifference-bold">
                    Welcome Back!
                </h1>
                <h2 className="text-gray-200 text-lg font-glacial-indifference-regular">
                    STAFF MUDA KBMDSI 2024’s OPEN REGISTRATION
                </h2>
                <Link
                    to="/login"
                    className="font-glacial-indifference-bold border-2 border-slate-50 bg-transparent rounded-full text-xl py-2 px-5 hover:bg-slate-50 hover:text-[#6F66D0] duration-300"
                >
                    Sign In
                </Link>
            </div>
            <FormRegister />
        </div>
    );
};

export default SectionRegister;
