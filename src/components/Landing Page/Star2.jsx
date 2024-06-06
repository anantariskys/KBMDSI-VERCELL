import React, { useRef, useState } from "react";
import star2 from "../../assets/landingpage/star3.png";
import { motion, useScroll, useTransform } from "framer-motion";

const Star2 = ({ className }) => {
    const [isHovered, setIsHovered] = useState(false);
    const target = useRef(null);
    const { scrollYProgress } = useScroll({
        target: target,
        offset: ["start 0.9", "start center"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [-100, 1]);
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
                          rotate: [0, 45, 0],
                      }
                    : { x: 0, y: 0, rotate: 0 }
            }
            transition={
                isHovered
                    ? { duration: 3, repeat: Infinity }
                    : { duration: 0.5 }
            }
            className={className}
            src={star2}
            alt="Bintang"
        />
    );
};

export default Star2;
