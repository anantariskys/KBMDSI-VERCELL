import React, { useState, useEffect } from "react";
import cloud_1 from "../assets/cloud_1.svg";
import cloud_2 from "../assets/cloud_2.svg";
import cloud_3 from "../assets/cloud_3.svg";
import cloud_4 from "../assets/cloud_4.svg";
import swara from "../assets/swara.svg";
import shakti from "../assets/shakti.svg";
import swarashakti from "../assets/swarashakti.svg";
import { AnimatePresence, motion } from "framer-motion";

const Preload = () => {
   

 
   
    return (
        <AnimatePresence  >      
                <motion.div
                    initial={{  filter: 'blur(10px)' }} 
                    animate={{ opacity: 1, filter: 'blur(0px)' }} 
                    exit={{ opacity: 0, filter: 'blur(10px)' }}
                    transition={{ duration: 2 }}
                    className="w-full overflow-hidden h-screen bg-gradient-to-b from-black via-Custom-Dark-Blue to-orange-400 fixed top-0 left-0 z-[100]"
                >
                    {/* AWAN */}
                    <div className="w-full h-full ">
                        <motion.img
                            initial={{ x: 0, scale: 1.1 }}
                            animate={{ x: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }} 
                            draggable="false"
                            className="w-[200vw] scale-150 absolute bottom-[10%] lg:bottom-[8%]"
                            src={cloud_1}
                        />
                        <motion.img
                            initial={{ x: 0, scale: 1.1 }}
                            animate={{ x: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }} 
                            draggable="false"
                            className="w-[200vw] scale-150 absolute bottom-[8%] lg:bottom-[3%]"
                            src={cloud_2}
                        />
                        <motion.img
                            initial={{ x: 0, scale: 1.1 }}
                            animate={{ x: [0, 20, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }} 
                            draggable="false"
                            className="w-[200vw] scale-150 absolute bottom-[3%] lg:-bottom-[20%] z-40"
                            src={cloud_3}
                        />
                        <motion.img
                            initial={{ x: 0, scale: 1.1 }}
                            animate={{ x: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }} 
                            draggable="false"
                            className="w-[200vw] scale-150 absolute bottom-[0%] lg:-bottom-[10%] z-40"
                            src={cloud_4}
                        />
                    </div>

                    <div className="w-full h-full justify-center bottom-0 left-0 absolute flex">
                        <motion.img
                            initial={{ y: window.innerHeight, rotate: 0 }}
                            animate={{ y: 0, rotate: 360, scale: [1, 1.03, 1] }}
                            transition={{
                                type: "spring",
                                stiffness: 120,
                                duration: 1,
                                delay: 1.5,
                                scale: { repeat: Infinity, delay: 2.5, ease: 'easeInOut',duration:3 }, 
                            }}
                            src={swarashakti}
                            alt="img"
                            draggable="false"
                            className="w-[32vw] md:w-[30vw] z-10 -ml-2"
                        />
                        <motion.img
                            initial={{ y: window.innerHeight }}
                            animate={{ y: 0 }}
                            transition={{ ease: "easeInOut", duration: 1, delay: 2.5 }} 
                            src={swara}
                            alt="img"
                            draggable="false"
                            className="w-[32vw] md:w-[30vw] z-10 -ml-[5vw]"
                        />
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 4, ease: 'easeInOut' }} 
                            src={shakti}
                            alt="img"
                            draggable="false"
                            className="w-[32vw] md:w-[30vw] z-10 mr-[5vw]"
                        />
                    </div>
                </motion.div>
     
        </AnimatePresence>
    );
};

export default Preload;