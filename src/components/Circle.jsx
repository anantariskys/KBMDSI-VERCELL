import React from 'react'
import { motion } from 'framer-motion'

const Circle = ({className}) => {
  return (
    <motion.div className={`${className}`} animate={{y:[0,10,0]}} transition={{repeat:Infinity ,delay:Math.random()}}>
    </motion.div>
  )
}

export default Circle