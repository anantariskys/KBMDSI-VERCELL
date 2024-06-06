import { animate } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";

const CircleBackground = ({ className }) => {
    const randomNumber = Math.floor(Math.random() * 5);

    return (
        <motion.div
            animate={{
                // scale: [1, 1.5, 1.3, 1],
                // x: [0, 50, 0],
                y: [0, -randomNumber + 50, 0],
            }}
            transition={{
                repeat: Infinity,
                duration: randomNumber + 5,
                delay: randomNumber,
            }}
            className={`${className}`}
            style={{ zIndex: 0 }}
        ></motion.div>
    );
};

export default CircleBackground;
