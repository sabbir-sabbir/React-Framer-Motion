/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

const Counter = () => {

  const count = useMotionValue(0)
  const roundedValue = useTransform(count, Math.round)

  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    // motion value
    const controls = animate(count, 100, { duration: 4 })

    // for UI value 
    const unsubscribe = roundedValue.on("change", (latest) => {
      setDisplayValue(latest)
    })

    return () => {
      controls.stop()
      unsubscribe()
    }
  }, [])

  return (
    <motion.div className="text-3xl font-bold">
      {displayValue}
    </motion.div>
  )
}

export default Counter
