'use client'

import { motion, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Home() {
  // All state declarations - properly declared
  const [lightsOn, setLightsOn] = useState(false)
  const [dashboardInView, setDashboardInView] = useState(false)
  const [curtainsInView, setCurtainsInView] = useState(false)
  const [curtainsClosed, setCurtainsClosed] = useState(false)
  
  // Enhanced spring transitions for cinematic feel
  const backgroundProgress = useSpring(0, { 
    stiffness: 80,   // Slightly slower for more drama
    damping: 20,     // Smoother motion
    mass: 1          // More weight for cinematic feel
  })
  
  const ambientGlow = useSpring(0, {
    stiffness: 60,
    damping: 25,
    mass: 1.2
  })
  
  const warmthProgress = useSpring(0, {
    stiffness: 50,
    damping: 30,
    mass: 1.5
  })

  // Curtains privacy effect
  const privacyDimming = useSpring(0, {
    stiffness: 70,
    damping: 25,
    mass: 1.3
  })

  const intimateGlow = useSpring(0, {
    stiffness: 60,
    damping: 30,
    mass: 1.4
  })

  // Auto-trigger lights when dashboard appears - Enhanced cinematic sequence
  useEffect(() => {
    if (dashboardInView && !lightsOn) {
      const timer = setTimeout(() => {
        setLightsOn(true)
        // Staggered lighting sequence for drama
        backgroundProgress.set(1)
        setTimeout(() => ambientGlow.set(1), 200)
        setTimeout(() => warmthProgress.set(1), 400)
      }, 1200) // Slightly longer delay for anticipation
      return () => clearTimeout(timer)
    }
  }, [dashboardInView, lightsOn, backgroundProgress, ambientGlow, warmthProgress])

  // Auto-trigger curtains when section appears
  useEffect(() => {
    if (curtainsInView && !curtainsClosed) {
      const timer = setTimeout(() => {
        setCurtainsClosed(true)
        // Staggered privacy effects
        privacyDimming.set(1)
        setTimeout(() => intimateGlow.set(1), 300)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [curtainsInView, curtainsClosed, privacyDimming, intimateGlow])

  // Handle manual light toggle - Enhanced with all layers
  const toggleLights = () => {
    const newState = !lightsOn
    setLightsOn(newState)
    
    if (newState) {
      // Lights on - staggered sequence
      backgroundProgress.set(1)
      setTimeout(() => ambientGlow.set(1), 150)
      setTimeout(() => warmthProgress.set(1), 300)
    } else {
      // Lights off - reverse sequence
      warmthProgress.set(0)
      setTimeout(() => ambientGlow.set(0), 100)
      setTimeout(() => backgroundProgress.set(0), 200)
    }
  }

  // Handle manual curtain toggle
  const toggleCurtains = () => {
    const newState = !curtainsClosed
    setCurtainsClosed(newState)
    
    if (newState) {
      // Curtains closing - privacy mode
      privacyDimming.set(1)
      setTimeout(() => intimateGlow.set(1), 200)
    } else {
      // Curtains opening - bright mode
      intimateGlow.set(0)
      setTimeout(() => privacyDimming.set(0), 150)
    }
  }

  return (
    <main className="bg-black text-white">
      {/* Hero Section - Dark Room Only */}
      <section className="min-h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/room-dark.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-8">
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

      {/* Lights Control Section */}
      <motion.section 
        className="min-h-screen relative overflow-hidden"
        onViewportEnter={() => setDashboardInView(true)}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Enhanced Multi-Layer Background System */}
        <div className="absolute inset-0 z-0">
          {/* Base dark room */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/room-dark.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          {/* Primary lighting - main room illumination */}
          <motion.div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/room-lit.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: backgroundProgress
            }}
          />
          
          {/* Ambient glow layer - ceiling and indirect lighting */}
          <motion.div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 80% 30% at 50% 20%, rgba(255, 248, 220, 0.15) 0%, transparent 70%),
                radial-gradient(ellipse 60% 40% at 25% 60%, rgba(255, 193, 7, 0.08) 0%, transparent 60%),
                radial-gradient(ellipse 60% 40% at 75% 60%, rgba(255, 193, 7, 0.06) 0%, transparent 60%)
              `,
              opacity: ambientGlow
            }}
          />
          
          {/* Warmth and atmosphere layer */}
          <motion.div 
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(180deg, 
                  rgba(255, 239, 186, 0.03) 0%, 
                  rgba(255, 224, 130, 0.05) 30%,
                  rgba(255, 193, 7, 0.04) 70%,
                  rgba(251, 146, 60, 0.02) 100%
                )
              `,
              opacity: warmthProgress
            }}
          />
          
          {/* Dynamic breathing glow - Enhanced */}
          <motion.div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 70% 35% at 50% 25%, rgba(255, 193, 7, 0.04) 0%, transparent 70%),
                radial-gradient(ellipse 90% 25% at 50% 80%, rgba(255, 224, 130, 0.02) 0%, transparent 60%)
              `,
            }}
            animate={lightsOn ? {
              opacity: [0.3, 0.7, 0.3]
            } : { opacity: 0 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Spotlight effects for individual lamp simulation */}
          <motion.div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle 200px at 30% 70%, rgba(255, 193, 7, 0.08) 0%, transparent 50%),
                radial-gradient(circle 150px at 70% 65%, rgba(255, 224, 130, 0.06) 0%, transparent 50%)
              `,
              opacity: backgroundProgress
            }}
          />
        </div>
        
        <div className="flex flex-col items-start justify-center min-h-screen px-8 md:px-16 relative z-10">
          
          {/* Text section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="mb-12 max-w-lg"
          >
            <h2 className="text-4xl md:text-6xl font-thin mb-6 text-white leading-tight">
              Perfect Light
            </h2>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
              Every room. Every moment. Exactly as you want it.
            </p>
          </motion.div>
          
          {/* Enhanced iPhone with better hover states */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-64 h-[520px] bg-black rounded-[2.5rem] p-2 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-teal-800 rounded-[2rem] relative overflow-hidden">
                
                {/* Dynamic Island */}
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10 flex items-center justify-center px-2">
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mr-1.5 opacity-80"></div>
                  <div className="w-1 h-1 bg-gray-700 rounded-full opacity-60"></div>
                </div>
                
                {/* Status Elements */}
                <div className="absolute top-2 left-4">
                  <div className="text-white text-xs font-medium">1:19</div>
                </div>
                <div className="absolute top-2 right-4 flex items-center space-x-1.5">
                  <svg className="w-3 h-2 text-white" viewBox="0 0 20 15" fill="currentColor">
                    <path d="M2.5 8.5c3.5-3.5 9-3.5 12.5 0l-1.5 1.5c-2.5-2.5-6.5-2.5-9 0L2.5 8.5z"/>
                    <path d="M5 11c2-2 5-2 7 0l-1.5 1.5c-1-1-2.5-1-3.5 0L5 11z"/>
                    <circle cx="10" cy="14" r="1"/>
                  </svg>
                  <div className="flex items-center">
                    <div className="w-5 h-2.5 border border-white rounded-sm relative">
                      <div className="w-3 h-1 bg-green-400 rounded-sm absolute top-0.5 left-0.5"></div>
                    </div>
                    <div className="w-0.5 h-1 bg-white rounded-r ml-0.5"></div>
                  </div>
                </div>
                
                {/* Lights Interface Content */}
                <div className="px-5 pt-12 pb-5 h-full">
                  <div className="text-white text-2xl font-semibold mb-4">Lights</div>
                  
                  {/* Enhanced Category Pills with better interactions */}
                  <div className="flex space-x-1.5 mb-5">
                    <motion.div 
                      className="rounded-full px-2.5 py-1 border cursor-pointer"
                      onClick={toggleLights}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        backgroundColor: lightsOn ? "rgba(255, 255, 255, 0.95)" : "rgba(59, 130, 246, 0.3)",
                        borderColor: lightsOn ? "rgba(255, 255, 255, 0.4)" : "rgba(96, 165, 250, 0.4)",
                        boxShadow: lightsOn ? 
                          "0 0 20px rgba(255, 193, 7, 0.3), 0 2px 10px rgba(0, 0, 0, 0.1)" : 
                          "0 0 0px rgba(255, 193, 7, 0)"
                      }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="flex items-center">
                        <motion.div 
                          className="text-xs mr-1"
                          animate={{
                            color: lightsOn ? "#d97706" : "#93c5fd",
                            textShadow: lightsOn ? [
                              "0 0 5px rgba(37, 99, 235, 0.3)",
                              "0 0 10px rgba(37, 99, 235, 0.6)", 
                              "0 0 5px rgba(37, 99, 235, 0.3)"
                            ] : "none"
                          }}
                          transition={{
                            color: { duration: 0.8 },
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
                    
                    <div className="bg-green-500/30 rounded-full px-2.5 py-1 border border-green-400/30">
                      <div className="flex items-center">
                        <div className="text-green-300 text-xs mr-1">🔒</div>
                        <div>
                          <div className="text-white text-xs font-medium">Security</div>
                          <div className="text-white/70 text-xs">Disarmed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Room Lights */}
                  <div>
                    <div className="text-white text-base font-semibold mb-3">Living Room</div>
                    <div className="grid grid-cols-2 gap-2.5">
                      <motion.div 
                        className="rounded-xl p-2.5 border border-gray-700/30 cursor-pointer"
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        animate={{
                          backgroundColor: lightsOn ? "rgba(255, 255, 255, 0.95)" : "rgba(31, 41, 55, 0.6)",
                          borderColor: lightsOn ? "rgba(255, 193, 7, 0.3)" : "rgba(75, 85, 99, 0.3)",
                          boxShadow: lightsOn ? 
                            "0 2px 10px rgba(255, 193, 7, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)" :
                            "0 1px 3px rgba(0, 0, 0, 0.1)"
                        }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <motion.div 
                          className="text-base mb-1.5"
                          animate={{
                            color: lightsOn ? "#d97706" : "#fbbf24",
                            textShadow: lightsOn ? [
                              "0 0 5px rgba(255, 193, 7, 0.3)",
                              "0 0 10px rgba(255, 193, 7, 0.6)", 
                              "0 0 5px rgba(255, 193, 7, 0.3)"
                            ] : "none"
                          }}
                          transition={{
                            color: { duration: 1 },
                            textShadow: {
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                        >
                          💡
                        </motion.div>
                        <motion.div 
                          className="text-xs font-medium"
                          animate={{
                            color: lightsOn ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"
                          }}
                          transition={{ duration: 1 }}
                        >
                          Cove Light
                        </motion.div>
                        <motion.div 
                          className="text-xs"
                          animate={{
                            color: lightsOn ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.5)"
                          }}
                          transition={{ duration: 1 }}
                        >
                          {lightsOn ? "On" : "Off"}
                        </motion.div>
                      </motion.div>
                      
                      <motion.div 
                        className="rounded-xl p-2.5 border border-gray-700/30 cursor-pointer"
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        animate={{
                          backgroundColor: lightsOn ? "rgba(255, 255, 255, 0.95)" : "rgba(31, 41, 55, 0.6)",
                          borderColor: lightsOn ? "rgba(255, 193, 7, 0.3)" : "rgba(75, 85, 99, 0.3)",
                          boxShadow: lightsOn ? 
                            "0 2px 10px rgba(255, 193, 7, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)" :
                            "0 1px 3px rgba(0, 0, 0, 0.1)"
                        }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <motion.div 
                          className="text-base mb-1.5"
                          animate={{
                            color: lightsOn ? "#d97706" : "#fbbf24",
                            textShadow: lightsOn ? [
                              "0 0 5px rgba(255, 193, 7, 0.3)",
                              "0 0 10px rgba(255, 193, 7, 0.6)", 
                              "0 0 5px rgba(255, 193, 7, 0.3)"
                            ] : "none"
                          }}
                          transition={{
                            color: { duration: 1, delay: 0.2 },
                            textShadow: {
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                        >
                          💡
                        </motion.div>
                        <motion.div 
                          className="text-xs font-medium"
                          animate={{
                            color: lightsOn ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"
                          }}
                          transition={{ duration: 1, delay: 0.2 }}
                        >
                          Spotlight
                        </motion.div>
                        <motion.div 
                          className="text-xs"
                          animate={{
                            color: lightsOn ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.5)"
                          }}
                          transition={{ duration: 1, delay: 0.2 }}
                        >
                          {lightsOn ? "On" : "Off"}
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Curtains/Privacy Section */}
      <motion.section 
        className="min-h-screen relative overflow-hidden"
        onViewportEnter={() => setCurtainsInView(true)}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Enhanced Background with Privacy Effects */}
        <div className="absolute inset-0 z-0">
          {/* Base dark room */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/room-dark.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          {/* Lit room base */}
          <motion.div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/room-lit.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.9 // Always slightly lit for this section
            }}
          />
          
          {/* Privacy dimming overlay - creates intimate atmosphere */}
          <motion.div 
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(180deg, 
                  rgba(0, 0, 0, 0.15) 0%, 
                  rgba(0, 0, 0, 0.25) 50%,
                  rgba(0, 0, 0, 0.15) 100%
                ),
                radial-gradient(ellipse 60% 80% at 50% 50%, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%)
              `,
              opacity: privacyDimming
            }}
          />
          
          {/* Intimate warm glow - cozy curtains-closed feeling */}
          <motion.div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 70% 40% at 50% 60%, rgba(255, 179, 102, 0.08) 0%, transparent 70%),
                linear-gradient(180deg, 
                  transparent 0%, 
                  rgba(255, 193, 107, 0.04) 40%,
                  rgba(255, 155, 85, 0.06) 80%,
                  transparent 100%
                )
              `,
              opacity: intimateGlow
            }}
          />
          
          {/* Soft ambient breathing for privacy mode */}
          <motion.div 
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 50% 60% at 50% 50%, rgba(255, 179, 102, 0.03) 0%, transparent 60%)`,
            }}
            animate={curtainsClosed ? {
              opacity: [0.2, 0.4, 0.2]
            } : { opacity: 0 }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="flex flex-col items-end justify-center min-h-screen px-8 md:px-16 relative z-10">
          
          {/* Text section - positioned on right */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="mb-12 max-w-lg text-right"
          >
            <h2 className="text-4xl md:text-6xl font-thin mb-6 text-white leading-tight">
              Perfect Privacy
            </h2>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
              Comfort and control. Exactly when you need it.
            </p>
          </motion.div>
          
          {/* iPhone with Curtains Interface */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-64 h-[520px] bg-black rounded-[2.5rem] p-2 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 rounded-[2rem] relative overflow-hidden">
                
                {/* Dynamic Island */}
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10 flex items-center justify-center px-2">
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mr-1.5 opacity-80"></div>
                  <div className="w-1 h-1 bg-gray-700 rounded-full opacity-60"></div>
                </div>
                
                {/* Status Elements */}
                <div className="absolute top-2 left-4">
                  <div className="text-white text-xs font-medium">1:19</div>
                </div>
                <div className="absolute top-2 right-4 flex items-center space-x-1.5">
                  <svg className="w-3 h-2 text-white" viewBox="0 0 20 15" fill="currentColor">
                    <path d="M2.5 8.5c3.5-3.5 9-3.5 12.5 0l-1.5 1.5c-2.5-2.5-6.5-2.5-9 0L2.5 8.5z"/>
                    <path d="M5 11c2-2 5-2 7 0l-1.5 1.5c-1-1-2.5-1-3.5 0L5 11z"/>
                    <circle cx="10" cy="14" r="1"/>
                  </svg>
                  <div className="flex items-center">
                    <div className="w-5 h-2.5 border border-white rounded-sm relative">
                      <div className="w-3 h-1 bg-green-400 rounded-sm absolute top-0.5 left-0.5"></div>
                    </div>
                    <div className="w-0.5 h-1 bg-white rounded-r ml-0.5"></div>
                  </div>
                </div>
                
                {/* Curtains Interface Content */}
                <div className="px-5 pt-12 pb-5 h-full">
                  <div className="text-white text-2xl font-semibold mb-4">Curtains</div>
                  
                  {/* Category Pills */}
                  <div className="flex space-x-1.5 mb-5">
                    <motion.div 
                      className="rounded-full px-2.5 py-1 border cursor-pointer"
                      onClick={toggleCurtains}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        backgroundColor: curtainsClosed ? "rgba(255, 255, 255, 0.95)" : "rgba(79, 70, 229, 0.3)",
                        borderColor: curtainsClosed ? "rgba(255, 255, 255, 0.4)" : "rgba(129, 140, 248, 0.4)",
                        boxShadow: curtainsClosed ? 
                          "0 0 20px rgba(255, 179, 102, 0.3), 0 2px 10px rgba(0, 0, 0, 0.1)" : 
                          "0 0 0px rgba(255, 179, 102, 0)"
                      }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="flex items-center">
                        <motion.div 
                          className="text-xs mr-1"
                          animate={{
                            color: curtainsClosed ? "#d97706" : "#a5b4fc",
                            textShadow: curtainsClosed ? [
                              "0 0 5px rgba(255, 179, 102, 0.3)",
                              "0 0 10px rgba(255, 179, 102, 0.6)", 
                              "0 0 5px rgba(255, 179, 102, 0.3)"
                            ] : "none"
                          }}
                          transition={{
                            color: { duration: 0.8 },
                            textShadow: {
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                        >
                          🏠
                        </motion.div>
                        <div>
                          <motion.div 
                            className="text-xs font-medium"
                            animate={{
                              color: curtainsClosed ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"
                            }}
                            transition={{ duration: 0.8 }}
                          >
                            Curtains
                          </motion.div>
                          <motion.div 
                            className="text-xs"
                            animate={{
                              color: curtainsClosed ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.7)"
                            }}
                            transition={{ duration: 0.8 }}
                          >
                            {curtainsClosed ? "Closed" : "Open"}
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <div className="bg-amber-500/30 rounded-full px-2.5 py-1 border border-amber-400/30">
                      <div className="flex items-center">
                        <div className="text-amber-300 text-xs mr-1">💡</div>
                        <div>
                          <div className="text-white text-xs font-medium">Lights</div>
                          <div className="text-white/70 text-xs">3 On</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Room Curtains */}
                  <div>
                    <div className="text-white text-base font-semibold mb-3">Living Room</div>
                    <div className="grid grid-cols-2 gap-2.5">
                      <motion.div 
                        className="rounded-xl p-2.5 border border-gray-700/30 cursor-pointer"
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        animate={{
                          backgroundColor: curtainsClosed ? "rgba(255, 255, 255, 0.95)" : "rgba(31, 41, 55, 0.6)",
                          borderColor: curtainsClosed ? "rgba(255, 179, 102, 0.3)" : "rgba(75, 85, 99, 0.3)",
                          boxShadow: curtainsClosed ? 
                            "0 2px 10px rgba(255, 179, 102, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)" :
                            "0 1px 3px rgba(0, 0, 0, 0.1)"
                        }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <motion.div 
                          className="text-base mb-1.5"
                          animate={{
                            color: curtainsClosed ? "#d97706" : "#a5b4fc",
                            textShadow: curtainsClosed ? [
                              "0 0 5px rgba(255, 179, 102, 0.3)",
                              "0 0 10px rgba(255, 179, 102, 0.6)", 
                              "0 0 5px rgba(255, 179, 102, 0.3)"
                            ] : "none"
                          }}
                          transition={{
                            color: { duration: 1 },
                            textShadow: {
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                        >
                          🪟
                        </motion.div>
                        <motion.div 
                          className="text-xs font-medium"
                          animate={{
                            color: curtainsClosed ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"
                          }}
                          transition={{ duration: 1 }}
                        >
                          Main Window
                        </motion.div>
                        <motion.div 
                          className="text-xs"
                          animate={{
                            color: curtainsClosed ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.5)"
                          }}
                          transition={{ duration: 1 }}
                        >
                          {curtainsClosed ? "Closed" : "Open"}
                        </motion.div>
                      </motion.div>
                      
                      <motion.div 
                        className="rounded-xl p-2.5 border border-gray-700/30 cursor-pointer"
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        animate={{
                          backgroundColor: curtainsClosed ? "rgba(255, 255, 255, 0.95)" : "rgba(31, 41, 55, 0.6)",
                          borderColor: curtainsClosed ? "rgba(255, 179, 102, 0.3)" : "rgba(75, 85, 99, 0.3)",
                          boxShadow: curtainsClosed ? 
                            "0 2px 10px rgba(255, 179, 102, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)" :
                            "0 1px 3px rgba(0, 0, 0, 0.1)"
                        }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <motion.div 
                          className="text-base mb-1.5"
                          animate={{
                            color: curtainsClosed ? "#d97706" : "#a5b4fc",
                            textShadow: curtainsClosed ? [
                              "0 0 5px rgba(255, 179, 102, 0.3)",
                              "0 0 10px rgba(255, 179, 102, 0.6)", 
                              "0 0 5px rgba(255, 179, 102, 0.3)"
                            ] : "none"
                          }}
                          transition={{
                            color: { duration: 1, delay: 0.2 },
                            textShadow: {
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                        >
                          🪟
                        </motion.div>
                        <motion.div 
                          className="text-xs font-medium"
                          animate={{
                            color: curtainsClosed ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"
                          }}
                          transition={{ duration: 1, delay: 0.2 }}
                        >
                          Side Window
                        </motion.div>
                        <motion.div 
                          className="text-xs"
                          animate={{
                            color: curtainsClosed ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.5)"
                          }}
                          transition={{ duration: 1, delay: 0.2 }}
                        >
                          {curtainsClosed ? "Closed" : "Open"}
                        </motion.div>
                      </motion.div>
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
