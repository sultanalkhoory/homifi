'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 flex flex-col items-center justify-center relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center px-8"
        >
          <h1 className="text-7xl md:text-9xl font-thin mb-8 text-white">
            HomiFi
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 font-light max-w-3xl">
            Your home. Intelligently connected.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-20"
        >
          <div className="w-80 h-[640px] bg-black rounded-[3rem] p-2 shadow-2xl">
            <div className="w-full h-full bg-gray-900 rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-7 bg-black rounded-b-3xl"></div>
              <div className="p-8 pt-16 h-full">
                <div className="text-white text-3xl font-light mb-3">Home</div>
                <div className="text-white/60 text-lg mb-12 font-light">Good evening</div>
                <div className="text-white/50 text-center mt-32">
                  Your smart home journey begins here...
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
