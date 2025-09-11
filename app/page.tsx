'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* New Emotional Hero Section - Room Transition */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Dark room background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/dark-room.jpg')`, // Dark room
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        
        {/* Lit room overlay - fades in on scroll */}
<motion.div 
  className="absolute inset-0 z-10"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 3, ease: "easeInOut", delay: 1 }}
  style={{
    backgroundImage: `url('/lit-room.png')`, // Your lit room image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
></motion.div>
        
        {/* Content overlay */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-8">
          
          {/* Main headline with breathing glow */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-center mb-16"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-thin mb-8 text-white"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(255, 255, 255, 0.1)",
                  "0 0 30px rgba(255, 255, 255, 0.2)", 
                  "0 0 20px rgba(255, 255, 255, 0.1)"
                ] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              HomiFi
            </motion.h1>
            <p className="text-2xl md:text-3xl text-white/90 font-light max-w-3xl">
              Your home. Intelligently connected.
            </p>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-12 text-white/70 text-lg font-light animate-bounce"
          >
            Scroll to illuminate
          </motion.div>
          
        </div>
      </section>

      {/* Dashboard Section - Now Section 2 */}
      <section className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 flex flex-col items-center justify-center relative overflow-hidden">
        
        {/* Section intro text */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-center px-8 z-10 mb-8"
        >
          <h2 className="text-4xl md:text-6xl font-thin mb-6 text-white">
            Control Everything
          </h2>
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl">
            Every device, every room, in one place.
          </p>
        </motion.div>
        
        {/* iPhone Mockup - Apple Home Dashboard */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="w-72 h-[580px] bg-black rounded-[2.5rem] p-2 shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-teal-800 rounded-[2rem] relative overflow-hidden">
              
              {/* Dynamic Island */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-28 h-8 bg-black rounded-full z-10 flex items-center justify-center px-2">
                <div className="w-2 h-2 bg-gray-800 rounded-full mr-2 opacity-80"></div>
                <div className="w-1 h-1 bg-gray-700 rounded-full opacity-60"></div>
              </div>
              
              {/* Status Elements Around Dynamic Island */}
              <div className="absolute top-3 left-6">
                <div className="text-white text-sm font-medium">1:17</div>
              </div>
              <div className="absolute top-3 right-6 flex items-center space-x-2">
                {/* WiFi */}
                <svg className="w-4 h-3 text-white" viewBox="0 0 20 15" fill="currentColor">
                  <path d="M2.5 8.5c3.5-3.5 9-3.5 12.5 0l-1.5 1.5c-2.5-2.5-6.5-2.5-9 0L2.5 8.5z"/>
                  <path d="M5 11c2-2 5-2 7 0l-1.5 1.5c-1-1-2.5-1-3.5 0L5 11z"/>
                  <circle cx="10" cy="14" r="1"/>
                </svg>
                {/* Battery */}
                <div className="flex items-center">
                  <div className="w-6 h-3 border border-white rounded-sm relative">
                    <div className="w-4 h-1.5 bg-green-400 rounded-sm absolute top-0.5 left-0.5"></div>
                  </div>
                  <div className="w-0.5 h-1.5 bg-white rounded-r ml-0.5"></div>
                </div>
              </div>
              
              {/* Content */}
              <div className="px-6 pt-16 pb-6 h-full">
                <div className="text-white text-3xl font-semibold mb-6">HomiFi</div>
                
                {/* Category Pills */}
                <div className="flex space-x-2 mb-6">
                  <div className="bg-blue-500/30 rounded-full px-3 py-1.5 border border-blue-400/30">
                    <div className="flex items-center">
                      <div className="text-blue-300 text-xs mr-1.5">💡</div>
                      <div>
                        <div className="text-white text-xs font-medium">Lights</div>
                        <div className="text-white/70 text-xs">3 On</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-500/30 rounded-full px-3 py-1.5 border border-green-400/30">
                    <div className="flex items-center">
                      <div className="text-green-300 text-xs mr-1.5">🔒</div>
                      <div>
                        <div className="text-white text-xs font-medium">Security</div>
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
                  <div className="bg-gray-900/60 rounded-2xl p-3 border border-gray-700/30 max-w-48">
                    <div className="flex items-center">
                      <div className="text-xl mr-3">🍿</div>
                      <div className="text-white text-sm font-medium">Movie Night</div>
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
      </section>

      {/* Lighting Experience Section */}
      <section 
        className="min-h-screen relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1a0f0a 0%, #2d1b0f 25%, #3d2515 50%, #2d1b0f 75%, #1a0f0a 100%)',
        }}
      >
        {/* Prominent warm glow overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 100% 60% at 50% 30%, rgba(255, 193, 7, 0.25) 0%, rgba(255, 165, 0, 0.15) 40%, transparent 70%)',
          }}
        ></div>
        
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
                
                {/* Status Elements Around Dynamic Island */}
                <div className="absolute top-3 left-6">
                  <div className="text-white text-sm font-medium">1:19</div>
                </div>
                <div className="absolute top-3 right-6 flex items-center space-x-2">
                  {/* WiFi */}
                  <svg className="w-4 h-3 text-white" viewBox="0 0 20 15" fill="currentColor">
                    <path d="M2.5 8.5c3.5-3.5 9-3.5 12.5 0l-1.5 1.5c-2.5-2.5-6.5-2.5-9 0L2.5 8.5z"/>
                    <path d="M5 11c2-2 5-2 7 0l-1.5 1.5c-1-1-2.5-1-3.5 0L5 11z"/>
                    <circle cx="10" cy="14" r="1"/>
                  </svg>
                  {/* Battery */}
                  <div className="flex items-center">
                    <div className="w-6 h-3 border border-white rounded-sm relative">
                      <div className="w-4 h-1.5 bg-green-400 rounded-sm absolute top-0.5 left-0.5"></div>
                    </div>
                    <div className="w-0.5 h-1.5 bg-white rounded-r ml-0.5"></div>
                  </div>
                </div>
                
                {/* Lights Interface Content */}
                <div className="px-6 pt-16 pb-6 h-full">
                  <div className="text-white text-3xl font-semibold mb-6">Lights</div>
                  
                  {/* Category Pills - Lights Selected */}
                  <div className="flex space-x-2 mb-6">
                    <motion.div 
                      initial={{ backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                      whileInView={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="rounded-full px-3 py-1.5 border border-blue-400/30"
                    >
                      <div className="flex items-center">
                        <div className="text-blue-600 text-xs mr-1.5">💡</div>
                        <div>
                          <motion.div 
                            initial={{ color: "rgb(255, 255, 255)" }}
                            whileInView={{ color: "rgb(0, 0, 0)" }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="text-xs font-medium"
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
                    
                    <div className="bg-green-500/30 rounded-full px-3 py-1.5 border border-green-400/30">
                      <div className="flex items-center">
                        <div className="text-green-300 text-xs mr-1.5">🔒</div>
                        <div>
                          <div className="text-white text-xs font-medium">Security</div>
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
                    <div className="bg-gray-900/60 rounded-2xl p-3 border border-gray-700/30 max-w-48">
                      <div className="flex items-center">
                        <div className="text-xl mr-3">🍿</div>
                        <div className="text-white text-sm font-medium">Movie Night</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Room Lights with Breathing Glow */}
                  <div>
                    <div className="text-white text-lg font-semibold mb-3">Living Room</div>
                    <div className="grid grid-cols-2 gap-3">
                      <motion.div 
                        initial={{ backgroundColor: "rgba(31, 41, 55, 0.6)" }}
                        whileInView={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                        transition={{ duration: 1, delay: 1 }}
                        viewport={{ once: true }}
                        className="rounded-2xl p-3 border border-gray-700/30"
                      >
                        <motion.div 
                          className="text-yellow-600 text-xl mb-2"
                          animate={{ 
                            textShadow: [
                              "0 0 5px rgba(255, 193, 7, 0.3)",
                              "0 0 10px rgba(255, 193, 7, 0.6)", 
                              "0 0 5px rgba(255, 193, 7, 0.3)"
                            ] 
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                          }}
                        >
                          💡
                        </motion.div>
                        <motion.div 
                          initial={{ color: "rgb(255, 255, 255)" }}
                          whileInView={{ color: "rgb(0, 0, 0)" }}
                          transition={{ duration: 1, delay: 1 }}
                          viewport={{ once: true }}
                          className="text-sm font-medium"
                        >
                          Cove Light
                        </motion.div>
                        <motion.div 
                          initial={{ color: "rgba(255, 255, 255, 0.5)" }}
                          whileInView={{ color: "rgba(0, 0, 0, 0.6)" }}
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
                        <motion.div 
                          className="text-yellow-600 text-xl mb-2"
                          animate={{ 
                            textShadow: [
                              "0 0 5px rgba(255, 193, 7, 0.3)",
                              "0 0 10px rgba(255, 193, 7, 0.6)", 
                              "0 0 5px rgba(255, 193, 7, 0.3)"
                            ] 
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                          }}
                        >
                          💡
                        </motion.div>
                        <motion.div 
                          initial={{ color: "rgb(255, 255, 255)" }}
                          whileInView={{ color: "rgb(0, 0, 0)" }}
                          transition={{ duration: 1, delay: 1.2 }}
                          viewport={{ once: true }}
                          className="text-sm font-medium"
                        >
                          Spotlight
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
