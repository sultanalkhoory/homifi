'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 flex flex-col items-center justify-center relative overflow-hidden">
        
        {/* HomiFi Title */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center px-8 z-10"
        >
          <h1 className="text-6xl md:text-8xl font-thin mb-8 text-white">
            HomiFi
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl">
            Your home. Intelligently connected.
          </p>
        </motion.div>
        
        {/* iPhone Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-16 mb-16"
        >
          <div className="w-72 h-[580px] bg-black rounded-[2.5rem] p-2 shadow-2xl">
            <div className="w-full h-full bg-gray-900 rounded-[2rem] relative overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
              
              {/* Content */}
              <div className="p-6 pt-12 h-full">
                <div className="text-white text-2xl font-light mb-2">Home</div>
                <div className="text-white/60 text-sm mb-8">Good evening</div>
                
                {/* Controls */}
                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white text-sm font-medium">Lighting</div>
                        <div className="text-white/50 text-xs">8 lights off</div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white text-sm font-medium">Climate</div>
                        <div className="text-white/50 text-xs">72° • Auto</div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-blue-500/70"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white text-sm font-medium">Security</div>
                        <div className="text-white/50 text-xs">Armed • Home</div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-green-500/70"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 text-white/70 text-sm animate-bounce"
        >
          Scroll to illuminate
        </motion.div>
        
      </section>
    </main>
  )
}
