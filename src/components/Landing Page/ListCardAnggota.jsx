import React from "react";
import CardAnggota from "./CardAnggota";
import { motion } from "framer-motion";

const ListCardAnggota = () => {
    return (
        <motion.div
            animate={{ y:  ["-30%", "0%"]  }}
            transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
            className="flex flex-col gap-8 h-fit"
        >
            <div className="h-1/2 ">
                <CardAnggota />
            </div>
            <div className="h-1/2 ">
                <CardAnggota />
            </div>
            <div className="h-1/2 ">
                <CardAnggota />
            </div>
            <div className="h-1/2 ">
                <CardAnggota />
            </div>
            <div className="h-1/2 ">
                <CardAnggota />
            </div>
            <div className="h-1/2 ">
                <CardAnggota />
            </div>
        </motion.div>
    );
};

export default ListCardAnggota;
