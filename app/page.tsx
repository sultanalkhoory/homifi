// Auto-trigger lights when dashboard appears
  useEffect(() => {
    if (dashboardInView && !lightsOn) {
      const timer = setTimeout(() => {
        setLightsOn(true)
        backgroundProgress.set(1)
      }, 1000) // Back to 1 second delay
      return () => clearTimeout(timer)
    }
  }, [dashboardInView, lightsOn, backgroundProgress])

  // Auto-trigger curtains when section appears
  useEffect(() => {
    if (curtainsInView && !curtainsClosed) {
      const timer = setTimeout(() => {
        setCurtainsClosed(true)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [curtainsInView, curtainsClosed])
