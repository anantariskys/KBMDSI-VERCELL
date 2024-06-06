import React from "react";
import Button from "./Button";
import advokasi from "../../assets/informasipage/advokasi.png";
import kemahasiswaan from "../../assets/informasipage/kemahasiswaan.png";
import artikel from "../../assets/informasipage/artikel.png";
import event from "../../assets/informasipage/event.png";
import { motion } from "framer-motion";

function FilterButton() {
    const filters = ["Advokasi", "Kemahasiswaan", "Artikel", "Event"];
    const Icons = [advokasi, kemahasiswaan, artikel, event];

    return (
        <motion.div
            whileInView={{ y: [100, 1], opacity: [0, 1] }}
            className="relative z-20 grid grid-cols-2 lg:grid-cols-4 bg-gradient-to-r from-Custom-Blue to-Custom-Purple-2 justify-center gap-4 lg:p-7 md:p-5 p-3 w-4/5 mx-auto rounded-xl my-12"
        >
            {filters.map((filter, index) => (
                <Button key={index} text={filter} icon={Icons[index]} />
            ))}
        </motion.div>
    );
}

export default FilterButton;
