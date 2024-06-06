import React from "react";

const FormRegister = () => {
    return (
        <form
            action=""
            className="order-1 lg:order-2 w-full lg:w-[55%] text-[#7363CE] flex flex-col gap-5 p-5 md:p-20 lg:px-20 items-center self-center"
        >
            <h1 className="text-center font-glacial-indifference-bold text-3xl ">
                Create Account
            </h1>
            <label
                htmlFor="nama"
                className="flex flex-col w-full font-glacial-indifference-bold"
            >
                Nama
                <input
                    id="nama"
                    type="text"
                    className="bg-slate-50 font-glacial-indifference-regular p-3 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-[#7363CE]"
                />
            </label>

            <label
                htmlFor="nim"
                className="flex flex-col w-full font-glacial-indifference-bold"
            >
                NIM
                <input
                    id="nim"
                    type="number"
                    className="bg-slate-50 font-glacial-indifference-regular p-3 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-[#7363CE]"
                />
            </label>

            <label
                htmlFor="email"
                className="flex flex-col w-full font-glacial-indifference-bold"
            >
                Email
                <input
                    id="email"
                    type="email"
                    className="bg-slate-50 font-glacial-indifference-regular p-3 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-[#7363CE]"
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
                    className="bg-slate-50 font-glacial-indifference-regular p-3 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-[#7363CE]"
                />
            </label>

            <button className="border-2 font-glacial-indifference-bold text-slate-50 border-[#7363CE] bg-[#7363CE] rounded-full text-xl py-2 px-5 hover:bg-transparent hover:text-[#7363CE] duration-300 w-fit">
                Sign Up
            </button>
        </form>
    );
};

export default FormRegister;
