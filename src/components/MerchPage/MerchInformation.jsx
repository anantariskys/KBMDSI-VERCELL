import React from "react";

const MerchInformation = ({ data, type }) => {
    return type === "detail" ? (
        <div className="flex flex-col gap-2">
            <p className="text-[#893B84] font-glacial-indifference-bold capitalize text-xl">
                {data.type}
            </p>
            <h1 className="text-[#B736C6] font-glacial-indifference-bold capitalize text-3xl">
                {data.name}
            </h1>

            <div className="flex gap-2">
                {data.type === "accesoris" &&
                    data.colors.map((color) => (
                        <div
                            className="rounded-full w-8 h-8"
                            key={color}
                            style={{ backgroundColor: color }}
                        />
                    ))}

                {data.type === "wearable" &&
                    data.sizes.map((size) => (
                        <div
                            className="rounded-full border-2 border-[#D56C3A] bg-slate-50 flex justify-center items-center w-8 h-8"
                            key={size}
                        >
                            <p className="uppercase text-[#D56C3A] font-glacial-indifference-bold text-lg">
                                {size}
                            </p>
                        </div>
                    ))}
            </div>
            <p className="text-[#B736C6] font-glacial-indifference-bold text-2xl">
                Rp. {data.price}
            </p>
            <p className="text-[#E28858] text-xl font-glacial-indifference-bold">
                Nego bisa pc admin yah (ini cuma bwat uji coba aja yah)
            </p>
        </div>
    ) : (
        <div className="flex flex-col gap-2">
            <p className="text-[#893B84] font-glacial-indifference-bold capitalize">
                {data.type}
            </p>
            <h1 className="text-[#B736C6] font-glacial-indifference-bold capitalize">
                {data.name}
            </h1>

            <div className="flex gap-2">
                {data.type === "accesoris" &&
                    data.colors.map((color) => (
                        <div
                            className="rounded-full w-7 h-7"
                            key={color}
                            style={{ backgroundColor: color }}
                        />
                    ))}

                {data.type === "wearable" &&
                    data.sizes.map((size) => (
                        <div
                            className="rounded-full border-2 border-[#D56C3A] bg-slate-50 flex justify-center items-center w-7 h-7"
                            key={size}
                        >
                            <p className="uppercase text-[#D56C3A] font-glacial-indifference-bold">
                                {size}
                            </p>
                        </div>
                    ))}
            </div>
            <p className="text-[#B736C6] font-glacial-indifference-bold">
                Rp. {data.price}
            </p>
        </div>
    );
};

export default MerchInformation;
