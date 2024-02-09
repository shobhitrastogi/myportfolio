"use client"

import { motion } from 'framer-motion'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center justify-center h-full'> 
    <motion.div
     className="w-96 h-96 bg-red-400 rounded"
     initial={{x:-100}}
     animate={{x:100}}
     ></motion.div>
    </div>
  )
}

export default page