import React from "react";
import logo from "../../assets/merch/logo-kbmdsi.png";
import { Link } from "react-router-dom";
import MerchInformation from "./MerchInformation";
import MerchCarousel from "./MerchCarousel";
import { motion } from "framer-motion";

const MerchCard = ({ data, index }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 200,
            }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeInOut",
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-[300px] bg-slate-50 rounded-md p-5 flex flex-col gap-2 justify-center mx-auto"
        >
            <div className="bg-gradient-to-b from-[#A839C0] to-[#6F66D0] p-2">
                <MerchCarousel data={data.img} />
            </div>
            <div className="flex justify-between">
                <MerchInformation data={data} type="card" />
                <div className="flex flex-col justify-between">
                    <Link
                        to={`/merch/${data.id}#hero`}
                        className="rounded-full bg-[#893B84] text-slate-50 text-center py-1 px-3 font-bold border-2 border-[#893B84] hover:bg-slate-50 hover:border-2 hover:border-[#893B84] hover:text-[#893B84] duration-300"
                    >
                        Detail
                    </Link>
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <p>{data.id}</p>
        </motion.div>
    );
};

export default MerchCard;
