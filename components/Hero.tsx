"use client"

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-10 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Turning Data into <span className="text-blue-500">Insights</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Data Scientist & Analyst specializing in ML, Visualization, and Business Analytics
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

