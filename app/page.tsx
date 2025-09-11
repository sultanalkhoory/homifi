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
        
        {/* iPhone Mockup with Dynamic Island */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-16 mb-16"
        >
          <div className="w-72 h-[580px] bg-black rounded-[2.5rem] p-2 shadow-2xl">
            <div className="w-full h-full bg-gray-900 rounded-[2rem] relative overflow-hidden">
              
              {/* Dynamic Island - iPhone 17 Style */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-28 h-8 bg-black rounded-full z-10 flex items-center justify-center px-2">
                <div className="w-2 h-2 bg-gray-800 rounded-full mr-2 opacity-80"></div>
                <div className="w-1 h-1 bg-gray-700 rounded-full opacity-60"></div>
              </div>
              
              {/* Content - Real Apple Home Style */}
              <div className="p-6 pt-16 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-white text-2xl font-medium">Home</div>
                    <div className="text-white/60 text-sm">My Home</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                    <div className="w-4 h-4 text-white/70 text-xs">⚙︎</div>
                  </div>
                </div>
                
                {/* Favorites Section */}
                <div className="mb-6">
                  <div className="text-white/80 text-sm font-medium mb-3">Favorites</div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-orange-500/20 rounded-2xl p-4 border border-orange-500/30">
                      <div className="w-6 h-6 mb-3">
                        <div className="w-full h-full bg-orange-400 rounded-lg"></div>
                      </div>
                      <div className="text-white text-sm font-medium">Good Night</div>
                      <div className="text-white/60 text-xs">Scene</div>
                    </div>
                    
                    <div className="bg-blue-500/20 rounded-2xl p-4 border border-blue-500/30">
                      <div className="w-6 h-6 mb-3">
                        <div className="w-full h-full bg-blue-400 rounded-lg"></div>
                      </div>
                      <div className="text-white text-sm font-medium">Thermostat</div>
                      <div className="text-white/60 text-xs">72°</div>
                    </div>
                  </div>
                </div>
                
                {/* Rooms Section */}
                <div>
                  <div className="text-white/80 text-sm font-medium mb-3">Rooms</div>
                  <div className="space-y-2">
                    <div className="bg-gray-800/40 rounded-xl p-3 border border-gray-700/20">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-yellow-500/30 rounded-lg mr-3 flex items-center justify-center">
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium">Living Room</div>
                            <div className="text-white/50 text-xs">8 accessories</div>
                          </div>
                        </div>
                        <div className="text-white/40 text-xs">›</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800/40 rounded-xl p-3 border border-gray-700/20">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-purple-500/30 rounded-lg mr-3 flex items-center justify-center">
                            <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium">Bedroom</div>
                            <div className="text-white/50 text-xs">5 accessories</div>
                          </div>
                        </div>
                        <div className="text-white/40 text-xs">›</div>
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
          className="absolute bottom-8 text-white/70 text-sm animate-bounce"
        >
          Scroll to illuminate
        </motion.div>
        
      </section>
      {/* Lighting Experience Section */}
<section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
  {/* Ambient warm glow */}
  <div className="absolute inset-0 bg-gradient-radial from-yellow-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-3000" id="ambient-glow"></div>
  
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
    
    {/* iPhone with lighting controls */}
    <motion.div 
      initial={{ opacity: 0.8, scale: 0.75 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="w-80 md:w-96 h-[640px] md:h-[770px] bg-black rounded-[3rem] p-3 shadow-2xl">
        <div className="w-full h-full bg-gray-900 rounded-[2.5rem] relative overflow-hidden">
          
          {/* Dynamic Island */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-28 h-8 bg-black rounded-full z-10 flex items-center justify-center px-2">
            <div className="w-2 h-2 bg-gray-800 rounded-full mr-2 opacity-80"></div>
            <div className="w-1 h-1 bg-gray-700 rounded-full opacity-60"></div>
          </div>
          
          {/* Lighting Controls Content */}
          <div className="p-8 pt-20 h-full">
            <div className="text-white text-4xl font-light mb-4">Lights</div>
            <div className="text-white/60 text-xl mb-12 font-light">Living Room</div>
            
            {/* Light controls */}
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0.6, scale: 1 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1.02,
                  backgroundColor: "rgba(251, 191, 36, 0.15)",
                  borderColor: "rgba(251, 191, 36, 0.3)"
                }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-800/60 rounded-3xl p-8 border border-gray-700/30"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-white text-xl font-medium">Ceiling Light</div>
                    <div className="text-white/60 text-lg mt-1">95%</div>
                  </div>
                  <motion.div 
                    initial={{ backgroundColor: "#4B5563" }}
                    whileInView={{ backgroundColor: "linear-gradient(135deg, #FFD60A, #FFB000)" }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <div className="w-8 h-8 rounded-full bg-white shadow-md"></div>
                  </motion.div>
                </div>
                <div className="h-3 bg-gray-700/60 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "95%" }}
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-amber-300 to-yellow-400 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0.6, scale: 1 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1.02,
                  backgroundColor: "rgba(251, 191, 36, 0.15)",
                  borderColor: "rgba(251, 191, 36, 0.3)"
                }}
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-gray-800/60 rounded-3xl p-8 border border-gray-700/30"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-white text-xl font-medium">Table Lamps</div>
                    <div className="text-white/60 text-lg mt-1">80%</div>
                  </div>
                  <motion.div 
                    initial={{ backgroundColor: "#4B5563" }}
                    whileInView={{ backgroundColor: "linear-gradient(135deg, #FFD60A, #FFB000)" }}
                    transition={{ duration: 0.7, delay: 1.1 }}
                    viewport={{ once: true }}
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <div className="w-8 h-8 rounded-full bg-white shadow-md"></div>
                  </motion.div>
                </div>
                <div className="h-3 bg-gray-700/60 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "80%" }}
                    transition={{ duration: 1, delay: 1.3 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-amber-300 to-yellow-400 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0.6, scale: 1 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1.02,
                  backgroundColor: "rgba(251, 191, 36, 0.15)",
                  borderColor: "rgba(251, 191, 36, 0.3)"
                }}
                transition={{ duration: 1, delay: 1.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/60 rounded-3xl p-8 border border-gray-700/30"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-white text-xl font-medium">Accent Lighting</div>
                    <div className="text-white/60 text-lg mt-1">65%</div>
                  </div>
                  <motion.div 
                    initial={{ backgroundColor: "#4B5563" }}
                    whileInView={{ backgroundColor: "linear-gradient(135deg, #FFD60A, #FFB000)" }}
                    transition={{ duration: 0.7, delay: 1.4 }}
                    viewport={{ once: true }}
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <div className="w-8 h-8 rounded-full bg-white shadow-md"></div>
                  </motion.div>
                </div>
                <div className="h-3 bg-gray-700/60 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "65%" }}
                    transition={{ duration: 1, delay: 1.6 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-amber-300 to-yellow-400 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            </div>
            
            {/* Scene selector */}
            <div className="absolute bottom-12 left-8 right-8">
              <div className="bg-black/40 rounded-3xl p-6 backdrop-blur-xl border border-gray-700/30">
                <div className="text-white/70 text-lg mb-2 font-light">Scene</div>
                <div className="text-white text-2xl font-medium">Evening Warmth</div>
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
