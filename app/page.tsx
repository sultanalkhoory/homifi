'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Home() {
  const [lightsOn, setLightsOn] = useState(false)
  const [dashboardInView, setDashboardInView] = useState(false)
  
  // Create smooth spring transition for background opacity - more Apple-like
  const backgroundProgress = useSpring(0, { 
    stiffness: 60, 
    damping: 25,
    mass: 0.8
  })
  
  const litOpacity = useTransform(backgroundProgress, [0, 1], [0, 1])

  // Auto-trigger lights when dashboard appears with Apple-style timing
  useEffect(() => {
    if (dashboardInView && !lightsOn) {
      const timer = setTimeout(() => {
        setLightsOn(true)
        // Gradual, breathing transition - very Apple-like
        backgroundProgress.set(1)
      }, 1500) // Longer delay for anticipation
      return () => clearTimeout(timer)
    }
  }, [dashboardInView, lightsOn, backgroundProgress])

  // Handle manual light toggle with smooth spring
  const toggleLights = () => {
    const newState = !lightsOn
    setLightsOn(newState)
    backgroundProgress.set(newState ? 1 : 0)
  }

  return (
    <main className="bg-black text-white">
      {/* Hero Section - Dark Room Only (No Lighting) */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Static Dark Background - No Transition Here */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/room-dark.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
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

      {/* Dashboard Section - With Gradual Lighting Transition */}
      <motion.section 
        className="min-h-screen relative overflow-hidden"
        onViewportEnter={() => setDashboardInView(true)}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Background with Apple-style Crossfade */}
        <div className="absolute inset-0 z-0">
          {/* Dark room base */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/room-dark.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          {/* Lit room - gradual, breathing overlay */}
          <motion.div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/room-lit.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: litOpacity
            }}
          />
          
          {/* Additional warm glow layer for breathing effect */}
          <motion.div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(255, 193, 7, 0.15) 0%, transparent 70%)',
              opacity: litOpacity
            }}
            animate={lightsOn ? {
              opacity: [0.8, 1, 0.8]
            } : {}}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="flex flex-col items-center justify-center min-h-screen px-8 relative z-10">
          
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
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
                    <motion.div 
                      className="rounded-full px-3 py-1.5 border cursor-pointer"
                      onClick={toggleLights}
                      animate={{
                        backgroundColor: lightsOn ? "rgba(255, 255, 255, 0.9)" : "rgba(59, 130, 246, 0.3)",
                        borderColor: lightsOn ? "rgba(255, 255, 255, 0.3)" : "rgba(96, 165, 250, 0.3)"
                      }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="flex items-center">
                        <motion.div 
                          className="text-xs mr-1.5"
                          animate={{
                            color: lightsOn ? "#2563eb" : "#93c5fd",
                            textShadow: lightsOn ? [
                              "0 0 5px rgba(37, 99, 235, 0.3)",
                              "0 0 10px rgba(37, 99, 235, 0.6)", 
                              "0 0 5px rgba(37, 99, 235, 0.3)"
                            ] : "none"
                          }}
                          transition={{
                            textShadow: {
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                        >
                          💡
                        </motion.div>
                        <div>
                          <motion.div 
                            className="text-xs font-medium"
                            animate={{
                              color: lightsOn ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"
                            }}
                            transition={{ duration: 0.8 }}
                          >
                            Lights
                          </motion.div>
                          <motion.div 
                            className="text-xs"
                            animate={{
                              color: lightsOn ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.7)"
                            }}
                            transition={{ duration: 0.8 }}
                          >
                            {lightsOn ? "3 On" : "Off"}
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
        </div>
      </motion.section>
    </main>
  )
}
