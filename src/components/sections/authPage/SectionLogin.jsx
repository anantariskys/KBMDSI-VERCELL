import React from "react";
import FormLogin from "../../authPage/FormLogin";
import { Link } from "react-router-dom";

const SectionLogin = () => {
    return (
        <div className="w-full lg:w-[80%] bg-[#E9DBF1] rounded-[42px] flex flex-col lg:flex-row overflow-hidden z-10 shadow-2xl">
            <FormLogin />
            <div className="w-full lg:w-[45%] text-slate-50 text-center bg-gradient-to-b from-[#A839C0] to-[#6F66D0] rounded-[42px] flex justify-center items-center flex-col px-10 gap-5 lg:ml-[0.5px] py-10 md:py-20">
                <h1 className="text-4xl font-glacial-indifference-bold">
                    Don’t Have an Account?
                </h1>
                <h2 className="text-gray-200 text-lg font-glacial-indifference-regular">
                    STAFF MUDA KBMDSI 2024’s OPEN REGISTRATION
                </h2>
                <Link
                    to="/register"
                    className="border-2 border-slate-50 bg-transparent rounded-full text-xl py-2 px-5 hover:bg-slate-50 hover:text-[#6F66D0] duration-300 font-glacial-indifference-bold"
                >
                    Sign In
                </Link>
            </div>
        </div>
    );
};

export default SectionLogin;
