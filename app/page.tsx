'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 flex flex-col items-center justify-center relative overflow-hidden">
        
        {/* HomiFi Title with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center px-8 z-10"
        >
          <h1 className="text-7xl md:text-9xl font-thin mb-8 text-white tracking-tight">
            HomiFi
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 font-light max-w-3xl">
            Your home. Intelligently connected.
          </p>
        </motion.div>
        
        {/* iPhone Mockup with Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-20 mb-16"
        >
          <div className="w-80 md:w-96 h-[640px] md:h-[770px] bg-black rounded-[3rem] p-2 shadow-2xl shadow-black/50">
            <div className="w-full h-full bg-gray-900 rounded-[2.5rem] relative overflow-hidden">
              {/* iPhone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-7 bg-black rounded-b-3xl z-10"></div>
              
              {/* iPhone Content */}
              <div className="p-8 pt-16 h-full">
                <div className="text-white text-3xl font-light mb-3">Home</div>
                <div className="text-white/60 text-lg mb-12 font-light">Good evening</div>
                
                {/* Smart Home Controls */}
                <div className="space-y-6">
                  <div className="bg-gray-800/40 rounded-3xl p-6 border border-gray-700/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white/90 text-lg font-medium">Lighting</div>
                        <div className="text-white/50 text-sm">8 lights off</div>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-gray-500"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/40 rounded-3xl p-6 border border-gray-700/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white/90 text-lg font-medium">Climate</div>
                        <div className="text-white/50 text-sm">72° • Auto</div>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-blue-500/70"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/40 rounded-3xl p-6 border border-gray-700/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white/90 text-lg font-medium">Security</div>
                        <div className="text-white/50 text-sm">Armed • Home</div>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-green-500/70"></div>
                      </div>
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
          className="absolute bottom-12 text-white/70 text-lg font-light animate-bounce"
        >
          Scroll to illuminate
        </motion.div>
        
      </section>
    </main>
  )
}
