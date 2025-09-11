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
        
        {/* iPhone Mockup - Apple Home Dashboard */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-16 mb-16"
        >
          <div className="w-72 h-[580px] bg-black rounded-[2.5rem] p-2 shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-teal-800 rounded-[2rem] relative overflow-hidden">
              
              {/* Dynamic Island */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-28 h-8 bg-black rounded-full z-10 flex items-center justify-center px-2">
                <div className="w-2 h-2 bg-gray-800 rounded-full mr-2 opacity-80"></div>
                <div className="w-1 h-1 bg-gray-700 rounded-full opacity-60"></div>
              </div>
              
              {/* Status Bar Area */}
              <div className="pt-12 px-6">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-white text-sm font-medium">1:17</div>
                  <div className="flex items-center space-x-1">
                    <div className="text-white/80 text-xs">●●● ●</div>
                    <div className="text-white/80 text-xs">📶</div>
                    <div className="text-white/80 text-xs">🔋</div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="px-6 pt-4 pb-6 h-full">
                <div className="text-white text-3xl font-semibold mb-6">SK Home</div>
                
                {/* Category Pills */}
                <div className="flex space-x-3 mb-6 overflow-x-auto">
                  <div className="bg-blue-500/30 rounded-full px-4 py-2 border border-blue-400/30 flex-shrink-0">
                    <div className="flex items-center">
                      <div className="text-blue-300 text-xs mr-2">❄️</div>
                      <div>
                        <div className="text-white text-sm font-medium">Climate</div>
                        <div className="text-white/70 text-xs">21.5-22.5°</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-500/30 rounded-full px-4 py-2 border border-yellow-400/30 flex-shrink-0">
                    <div className="flex items-center">
                      <div className="text-yellow-300 text-xs mr-2">💡</div>
                      <div>
                        <div className="text-white text-sm font-medium">Lights</div>
                        <div className="text-white/70 text-xs">3 On</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-500/30 rounded-full px-4 py-2 border border-green-400/30 flex-shrink-0">
                    <div className="flex items-center">
                      <div className="text-green-300 text-xs mr-2">🔒</div>
                      <div>
                        <div className="text-white text-sm font-medium">Security</div>
                        <div className="text-white/70 text-xs">Disarmed</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Scenes */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-white text-lg font-semibold">Scenes</div>
                    <div className="text-white/60 text-sm">›</div>
                  </div>
                  <div className="bg-gray-900/60 rounded-2xl p-4 border border-gray-700/30">
                    <div className="flex items-center">
                      <div className="text-2xl mr-3">🍿</div>
                      <div className="text-white text-base font-medium">Movie Night</div>
                    </div>
                  </div>
                </div>
                
                {/* Favorites */}
                <div>
                  <div className="text-white text-lg font-semibold mb-3">Favorites</div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-500/20 rounded-2xl p-3 border border-blue-400/20">
                      <div className="text-blue-300 text-xl mb-2">🚪</div>
                      <div className="text-white text-sm font-medium">Main Entrance</div>
                      <div className="text-white text-xs font-semibold">Door</div>
                      <div className="text-white/60 text-xs">Locked</div>
                    </div>
                    
                    <div className="bg-teal-500/20 rounded-2xl p-3 border border-teal-400/20">
                      <div className="text-teal-300 text-xl mb-2">🏠</div>
                      <div className="text-white text-sm font-medium">Garage</div>
                      <div className="text-white text-xs font-semibold">Gate</div>
                      <div className="text-white/60 text-xs">Closed</div>
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

      {/* Lighting Experience Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="flex flex-col items-center justify-center min-h-screen px-8 relative z-10">
          
          {/* Text section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-thin mb-8 text-white">
              Perfect Light
            </h2>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl">
              Every room. Every moment. Exactly as you want it.
            </p>
          </motion.div>
          
          {/* iPhone with Lights Interface */}
          <motion.div 
            initial={{ opacity: 0.8, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-80 md:w-96 h-[640px] md:h-[770px] bg-black rounded-[3rem] p-3 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-teal-800 rounded-[2.5rem] relative overflow-hidden">
                
                {/* Dynamic Island */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-28 h-8 bg-black rounded-full z-10 flex items-center justify-center px-2">
                  <div className="w-2 h-2 bg-gray-800 rounded-full mr-2 opacity-80"></div>
                  <div className="w-1 h-1 bg-gray-700 rounded-full opacity-60"></div>
                </div>
                
                {/* Status Bar */}
                <div className="pt-12 px-6">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-white text-sm font-medium">1:19</div>
                    <div className="flex items-center space-x-1">
                      <div className="text-white/80 text-xs">●●● ●</div>
                      <div className="text-white/80 text-xs">📶</div>
                      <div className="text-white/80 text-xs">🔋</div>
                    </div>
                  </div>
                </div>
                
                {/* Lights Interface Content */}
                <div className="px-6 pt-4 pb-6 h-full">
                  <div className="text-white text-3xl font-semibold mb-6">Lights</div>
                  
                  {/* Category Pills - Lights Selected */}
                  <div className="flex space-x-3 mb-6 overflow-x-auto">
                    <div className="bg-blue-500/30 rounded-full px-4 py-2 border border-blue-400/30 flex-shrink-0">
                      <div className="flex items-center">
                        <div className="text-blue-300 text-xs mr-2">❄️</div>
                        <div>
                          <div className="text-white text-sm font-medium">Climate</div>
                          <div className="text-white/70 text-xs">21.5-23.0°</div>
                        </div>
                      </div>
                    </div>
                    
                    <motion.div 
                      initial={{ backgroundColor: "rgba(234, 179, 8, 0.3)" }}
                      whileInView={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="rounded-full px-4 py-2 border border-yellow-400/30 flex-shrink-0"
                    >
                      <div className="flex items-center">
                        <div className="text-yellow-600 text-xs mr-2">💡</div>
                        <div>
                          <motion.div 
                            initial={{ color: "rgb(255, 255, 255)" }}
                            whileInView={{ color: "rgb(0, 0, 0)" }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="text-sm font-medium"
                          >
                            Lights
                          </motion.div>
                          <motion.div 
                            initial={{ color: "rgba(255, 255, 255, 0.7)" }}
                            whileInView={{ color: "rgba(0, 0, 0, 0.6)" }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="text-xs"
                          >
                            3 On
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <div className="bg-green-500/30 rounded-full px-4 py-2 border border-green-400/30 flex-shrink-0">
                      <div className="flex items-center">
                        <div className="text-green-300 text-xs mr-2">🔒</div>
                        <div>
                          <div className="text-white text-sm font-medium">Security</div>
                          <div className="text-white/70 text-xs">Disarmed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 3 Lights Summary */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="flex items-center mb-6"
                  >
                    <div className="text-white text-2xl mr-3">💡</div>
                    <div>
                      <div className="text-white text-lg font-semibold">3 Lights</div>
                      <div className="text-white/60 text-sm">On</div>
                    </div>
                  </motion.div>
                  
                  {/* Scenes */}
                  <div className="bg-gray-900/60 rounded-2xl p-4 border border-gray-700/30 mb-6">
                    <div className="flex items-center">
                      <div className="text-2xl mr-3">🍿</div>
                      <div className="text-white text-base font-medium">Movie Night</div>
                    </div>
                  </div>
                  
                  {/* Room Lights */}
                  <div>
                    <div className="text-white text-lg font-semibold mb-3">Upstairs Living Room</div>
                    <div className="grid grid-cols-2 gap-3">
                      <motion.div 
                        initial={{ backgroundColor: "rgba(31, 41, 55, 0.6)" }}
                        whileInView={{ backgroundColor: "rgba(34, 197, 94, 0.2)" }}
                        transition={{ duration: 1, delay: 1 }}
                        viewport={{ once: true }}
                        className="rounded-2xl p-3 border border-gray-700/30"
                      >
                        <div className="text-yellow-400 text-xl mb-2">💡</div>
                        <div className="text-white text-sm font-medium">Cove Light</div>
                        <motion.div 
                          initial={{ color: "rgba(255, 255, 255, 0.5)" }}
                          whileInView={{ color: "rgba(255, 255, 255, 0.8)" }}
                          transition={{ duration: 1, delay: 1 }}
                          viewport={{ once: true }}
                          className="text-xs"
                        >
                          On
                        </motion.div>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ backgroundColor: "rgba(31, 41, 55, 0.6)" }}
                        whileInView={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                        transition={{ duration: 1, delay: 1.2 }}
                        viewport={{ once: true }}
                        className="rounded-2xl p-3 border border-gray-700/30"
                      >
                        <div className="text-yellow-600 text-xl mb-2">💡</div>
                        <motion.div 
                          initial={{ color: "rgb(255, 255, 255)" }}
                          whileInView={{ color: "rgb(0, 0, 0)" }}
                          transition={{ duration: 1, delay: 1.2 }}
                          viewport={{ once: true }}
                          className="text-sm font-medium"
                        >
                          Cove Light
                        </motion.div>
                        <motion.div 
                          initial={{ color: "rgba(255, 255, 255, 0.5)" }}
                          whileInView={{ color: "rgba(0, 0, 0, 0.6)" }}
                          transition={{ duration: 1, delay: 1.2 }}
                          viewport={{ once: true }}
                          className="text-xs"
                        >
                          On
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
