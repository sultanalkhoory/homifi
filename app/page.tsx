'use client'

import { motion, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Home() {
  const [lightsOn, setLightsOn] = useState(false)
  const [dashboardInView, setDashboardInView] = useState(false)
  const [curtainsInView, setCurtainsInView] = useState(false)
  const [curtainsClosed, setCurtainsClosed] = useState(false)
  const [lightsManuallyToggled, setLightsManuallyToggled] = useState(false)
  const [curtainsManuallyToggled, setCurtainsManuallyToggled] = useState(false)
  
  const backgroundProgress = useSpring(0, { 
    stiffness: 80,
    damping: 20,
    mass: 1
  })

  const curtainProgress = useSpring(1, {
    stiffness: 60,
    damping: 30,
    mass: 1.5
  })

  useEffect(() => {
    if (dashboardInView && !lightsOn && !lightsManuallyToggled) {
      const timer = setTimeout(() => {
        setLightsOn(true)
        backgroundProgress.set(1)
      }, 1200)
      return () => clearTimeout(timer)
    }
  }, [dashboardInView, lightsOn, lightsManuallyToggled, backgroundProgress])

  useEffect(() => {
    if (curtainsInView && !curtainsClosed && !curtainsManuallyToggled) {
      const timer = setTimeout(() => {
        setCurtainsClosed(true)
        curtainProgress.set(0)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [curtainsInView, curtainsClosed, curtainsManuallyToggled, curtainProgress])

  const toggleLights = () => {
    setLightsManuallyToggled(true)
    const newState = !lightsOn
    setLightsOn(newState)
    backgroundProgress.set(newState ? 1 : 0)
  }

  const toggleCurtains = () => {
    setCurtainsManuallyToggled(true)
    const newState = !curtainsClosed
    setCurtainsClosed(newState)
    curtainProgress.set(newState ? 0 : 1)
  }

  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/Curtains-Closed-Lights-Off.png')`,
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
            <h1 className="text-6xl md:text-8xl font-thin mb-8 text-white">
              HomiFi
            </h1>
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

      {/* Lights Section */}
      <motion.section 
        className="min-h-screen relative overflow-hidden"
        onViewportEnter={() => setDashboardInView(true)}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/Curtains-Closed-Lights-Off.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <motion.div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/Curtains-Closed-Lights-On.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: backgroundProgress
            }}
          />
        </div>
        
        <div className="flex flex-col items-start justify-start min-h-screen px-8 md:px-16 pt-32 relative z-10">
          {/* Text Content - Above iPhone */}
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
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-2">
              Every room. Every moment.
            </p>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
              Exactly as you want it.
            </p>
          </motion.div>
          
          {/* iPhone - Below Text */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <div className="w-64 h-[520px] bg-black rounded-[2.5rem] p-2 shadow-2xl">
              <div 
                className="w-full h-full rounded-[2rem] relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%)' }}
              >
                
                {/* Dynamic Island */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-full z-10 flex items-center justify-center">
                  <div className="flex items-center space-x-3">
                    {/* Front camera */}
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                    {/* Sensors */}
                    <div className="flex space-x-1">
                      <div className="w-1 h-3 bg-gray-900 rounded-full"></div>
                      <div className="w-1 h-3 bg-gray-900 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Status Bar */}
                <div className="absolute top-2 left-4">
                  <div className="text-white text-xs font-medium">1:19</div>
                </div>
                
                {/* Content */}
                <div className="px-5 pt-12 pb-5 h-full">
                  <div className="text-white text-2xl font-semibold mb-4">Lights</div>
                  
                  {/* Main Control */}
                  <div className="flex space-x-1.5 mb-5">
                    <motion.div 
                      className="rounded-full px-2.5 py-1 border cursor-pointer"
                      onClick={toggleLights}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        backgroundColor: lightsOn ? "rgba(255, 255, 255, 0.15)" : "rgba(99, 102, 241, 0.2)",
                        borderColor: lightsOn ? "rgba(255, 255, 255, 0.3)" : "rgba(129, 140, 248, 0.3)"
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="flex items-center">
                        <div className="text-xs mr-1">💡</div>
                        <div>
                          <div className="text-xs font-medium text-white">Lights</div>
                          <div className="text-xs text-white/70">{lightsOn ? "3 On" : "Off"}</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Room Details */}
                  <div>
                    <div className="text-white text-base font-semibold mb-3">Living Room</div>
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="rounded-xl p-2.5 border border-white/20 bg-white/10 backdrop-blur-sm">
                        <div className="text-base mb-1.5">💡</div>
                        <div className="text-xs font-medium text-white">Cove Light</div>
                        <div className="text-xs text-white/70">{lightsOn ? "On" : "Off"}</div>
                      </div>
                      
                      <div className="rounded-xl p-2.5 border border-white/20 bg-white/10 backdrop-blur-sm">
                        <div className="text-base mb-1.5">💡</div>
                        <div className="text-xs font-medium text-white">Spotlight</div>
                        <div className="text-xs text-white/70">{lightsOn ? "On" : "Off"}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Curtains Section */}
      <motion.section 
        className="min-h-screen relative overflow-hidden"
        onViewportEnter={() => setCurtainsInView(true)}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="absolute inset-0 z-0">
          <motion.div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/Curtains-Closed-Lights-On.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <motion.div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/Curtains-Open-Lights-On.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: curtainProgress
            }}
          />
        </div>
        
        <div className="flex flex-col items-start justify-start min-h-screen px-8 md:px-16 pt-32 relative z-10">
          {/* Text Content - Above iPhone */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="mb-12 max-w-lg"
          >
            <h2 className="text-4xl md:text-6xl font-thin mb-6 text-white leading-tight">
              Perfect Privacy
            </h2>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-2">
              Comfort and control.
            </p>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
              Exactly when you need it.
            </p>
          </motion.div>
          
          {/* iPhone - Below Text */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <div className="w-64 h-[520px] bg-black rounded-[2.5rem] p-2 shadow-2xl">
              <div 
                className="w-full h-full rounded-[2rem] relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%)' }}
              >
                
                {/* Notch */}
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10">
                  <div className="flex items-center justify-center h-full px-2">
                    <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-1.5"></div>
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Status Bar */}
                <div className="absolute top-2 left-4">
                  <div className="text-white text-xs font-medium">1:19</div>
                </div>
                
                {/* Content */}
                <div className="px-5 pt-12 pb-5 h-full">
                  <div className="text-white text-2xl font-semibold mb-4">Curtains</div>
                  
                  {/* Main Control */}
                  <div className="flex space-x-1.5 mb-5">
                    <motion.div 
                      className="rounded-full px-2.5 py-1 border cursor-pointer"
                      onClick={toggleCurtains}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        backgroundColor: curtainsClosed ? "rgba(255, 255, 255, 0.15)" : "rgba(79, 70, 229, 0.2)",
                        borderColor: curtainsClosed ? "rgba(255, 255, 255, 0.3)" : "rgba(129, 140, 248, 0.3)"
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="flex items-center">
                        <div className="text-xs mr-1">🏠</div>
                        <div>
                          <div className="text-xs font-medium text-white">Curtains</div>
                          <div className="text-xs text-white/70">{curtainsClosed ? "Closed" : "Open"}</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Room Details */}
                  <div>
                    <div className="text-white text-base font-semibold mb-3">Living Room</div>
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="rounded-xl p-2.5 border border-white/20 bg-white/10 backdrop-blur-sm">
                        <div className="text-base mb-1.5">🪟</div>
                        <div className="text-xs font-medium text-white">Sheer Curtain</div>
                        <div className="text-xs text-white/70">{curtainsClosed ? "Closed" : "Open"}</div>
                      </div>
                      
                      <div className="rounded-xl p-2.5 border border-white/20 bg-white/10 backdrop-blur-sm">
                        <div className="text-base mb-1.5">🪟</div>
                        <div className="text-xs font-medium text-white">Blackout Curtain</div>
                        <div className="text-xs text-white/70">{curtainsClosed ? "Closed" : "Open"}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
