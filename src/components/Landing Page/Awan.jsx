import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";

const Awan = ({ className, img }) => {
    const [isHovered, setIsHovered] = useState(false);
    const target = useRef(null);
    const { scrollYProgress } = useScroll({
        target: target,
        offset: ["start 0.9", "start center"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, 1]);
    const op = useTransform(scrollYProgress, [0, 1], [0, 1]);
    return (
        <motion.img
            ref={target}
            style={{
                y: y,
                opacity: op,
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            animate={
                isHovered
                    ? {
                          x: [0, 10, 0, -10, 0],
                          y: [0, 10, 0, -10, 0],
                          rotate: [0, 15, 0],
                      }
                    : { x: 0, y: 0, rotate: 0 }
            }
            transition={
                isHovered
                    ? { duration: 2, repeat: Infinity }
                    : { duration: 2 }
            }
            className={`${className} object-contain`}
            src={img}
            alt="Awan"
            draggable='false'
        />
    );
};

export default Awan;
