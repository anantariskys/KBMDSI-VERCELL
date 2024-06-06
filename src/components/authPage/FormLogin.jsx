import React from "react";
import { Link } from "react-router-dom";

const FormLogin = () => {
    return (
        <form
            action=""
            className="w-full lg:w-[55%] text-[#7363CE] flex flex-col gap-5 p-5 md:p-20 lg:px-20 lg:py-40 items-center self-center"
        >
            <h1 className="text-center font-glacial-indifference-bold text-3xl ">
                Sign In
            </h1>
            <label
                htmlFor="email"
                className="flex flex-col w-full font-glacial-indifference-bold"
            >
                Email
                <input
                    id="email"
                    type="email"
                    className="p-3 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-[#7363CE] bg-slate-50 font-glacial-indifference-regular"
                />
            </label>

            <label
                htmlFor="password"
                className="flex flex-col w-full font-glacial-indifference-bold"
            >
                Password
                <input
                    id="password"
                    type="password"
                    className="p-3 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-[#7363CE] bg-slate-50 font-glacial-indifference-regular"
                />
            </label>
            <button className="border-2 font-glacial-indifference-bold text-slate-50 border-[#7363CE] bg-[#7363CE] rounded-full text-xl py-2 px-5 hover:bg-transparent hover:text-[#7363CE] duration-300 w-fit">
                Sign Up
            </button>
            <p className="font-glacial-indifference-regular">
                Forgot Password?{" "}
                <Link className="font-glacial-indifference-bold hover:underline">
                    Reset Password
                </Link>
            </p>
        </form>
    );
};

export default FormLogin;
