import React, { useState, useEffect } from "react";
import cloud_1 from "../assets/cloud_1.svg";
import cloud_2 from "../assets/cloud_2.svg";
import cloud_3 from "../assets/cloud_3.svg";
import cloud_4 from "../assets/cloud_4.svg";
import rocket from "../assets/rocket.svg";
import astronot from "../assets/astronot.svg";
import empat from "../assets/empat.svg";
import { motion } from "framer-motion";

const getBreakpoint = (width) => {
    if (width < 640) return 'sm';
    if (width < 768) return 'md';
    return 'lg';
};

const useBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState(getBreakpoint(window.innerWidth));

    useEffect(() => {
        const handleResize = () => {
            setBreakpoint(getBreakpoint(window.innerWidth));
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return breakpoint;
};

const NotFound = () => {
    const breakpoint = useBreakpoint();

    const getAnimationProps = (type) => {
        const animations = {
            cloud1: {
                sm: { x: [0, -20, 0], scale: 1.9, duration: 4 },
                md: { x: [0, -30, 0], scale: 1.5, duration: 4 },
                lg: { x: [0, -30, 0], scale: 1.2, duration: 4 },
            },
            cloud2: {
                sm: { x: [0, 20, 0], scale: 1.9, duration: 5 },
                md: { x: [0, 30, 0], scale: 1.5, duration: 5 },
                lg: { x: [0, 30, 0], scale: 1.2, duration: 5 },
            },
            cloud3: {
                sm: { x: [0, -20, 0], scale: 1.9, duration: 4 },
                md: { x: [0, -30, 0], scale: 1.5, duration: 4 },
                lg: { x: [0, -30, 0], scale: 1.2, duration: 4 },
            },
            cloud4: {
                sm: { x: [0, 20, 0], scale: 1.9, duration: 5 },
                md: { x: [0, 30, 0], scale: 1.5, duration: 5 },
                lg: { x: [0, 30, 0], scale: 1.2, duration: 5 },
            },
            rocket: {
                sm: { y: -window.innerHeight * 2, scale: 1.8 },
                md: { y: -window.innerHeight * 2, scale: 1.5 },
                lg: { y: -window.innerHeight * 2, scale: 1 },
            },
            empatLeft: {
                sm: { x: '-20%', scale: 1.6 },
                md: { x: '-5%', scale: 1.5 },
                lg: { x: '25%', scale: 1 },
            },
            astronaut: {
                sm: { y: '4%', scale: 1.6 },
                md: { y: '5%', scale: 1.5 },
                lg: { y: '10%', scale: 1 },
            },
            empatRight: {
                sm: { x: '20%', scale: 1.6 },
                md: { x: '5%', scale: 1.5 },
                lg: { x: '-25%', scale: 1 },
            }
        };
        return animations[type][breakpoint];
    };

    return (
        <div className="w-full overflow-hidden h-screen bg-gradient-to-b from-Custom-Dark-Blue to-Custom-Blue relative">
            <div className="w-full h-full ">

                <motion.img 
                    initial={{ x:0, scale: getAnimationProps('cloud1').scale }}
                    animate={{ x: getAnimationProps('cloud1').x }}
                    transition={{ repeat:Infinity, duration: getAnimationProps('cloud1').duration }}
                    draggable='false'
                    className="w-[200vw] lg:scale-150 absolute bottom-[9%] lg:bottom-[8%]"
                    src={cloud_1}
                />

                <motion.img 
                    initial={{ x:0, scale: getAnimationProps('cloud2').scale }}
                    animate={{ x: getAnimationProps('cloud2').x }}
                    transition={{ repeat:Infinity, duration: getAnimationProps('cloud2').duration }}
                    draggable='false'
                    className="w-[200vw] lg:scale-150 absolute bottom-[6%] lg:bottom-[3%]"
                    src={cloud_2}
                />

                <motion.img 
                    initial={{ x:0, scale: getAnimationProps('cloud3').scale }}
                    animate={{ x: getAnimationProps('cloud3').x }}
                    transition={{ repeat:Infinity, duration: getAnimationProps('cloud3').duration }}
                    draggable='false'
                    className="w-[200vw] lg:scale-150 absolute -bottom-[5%] lg:-bottom-[20%] z-40"
                    src={cloud_3}
                />

                <motion.img 
                    initial={{ x:0, scale: getAnimationProps('cloud4').scale }}
                    animate={{ x: getAnimationProps('cloud4').x }}
                    transition={{ repeat:Infinity, duration: getAnimationProps('cloud4').duration }}
                    draggable='false'
                    className="w-[200vw] lg:scale-150 absolute -bottom-[5%] lg:-bottom-[10%] z-40"
                    src={cloud_4}
                />
              
            </div>

            {/* ROKET */}
            <motion.div
                className="flex justify-center"
                initial={{ y:0, scale: getAnimationProps('rocket').scale }}
                animate={{ y: getAnimationProps('rocket').y }}
                transition={{ duration: 4 }}
            >
                <img className="absolute w-[15vw]" src={rocket}></img>
            </motion.div>

            <div className="w-full h-full justify-center bottom-0 left-0 absolute z-50 flex ">

              {/* EMPAT */}
              <motion.img 
                  initial={{ x:-window.innerWidth, scale: getAnimationProps('empatLeft').scale }}
                  animate={{ x: getAnimationProps('empatLeft').x }}
                  transition={{ duration:4, delay:3.5 }}
                  src={empat} alt="img" draggable="false" className="w-1/6" />

             {/* KOSONG */}
              <motion.img 
                  initial={{ y:-window.innerHeight, scale: getAnimationProps('astronaut').scale }}
                  animate={{ y: getAnimationProps('astronaut').y }}
                  transition={{ duration:4, delay:3.5 }}
                  src={astronot} alt="img" draggable="false" className="w-1/5 z-50 " />

             {/* EMPAT */}
              <motion.img 
                  initial={{ x:window.innerWidth, scale: getAnimationProps('empatRight').scale }}
                  animate={{ x: getAnimationProps('empatRight').x }}
                  transition={{ duration:4, delay:3.5 }}
                  src={empat} alt="img" draggable="false" className="w-1/6" />
            
            </div>
        </div>
    );
};

export default NotFound;
