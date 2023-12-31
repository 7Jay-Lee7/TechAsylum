/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from 'react'

import classes from './index.module.scss'

const Promotion = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  /* Original setting for days in the future
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 18) */

  // Set the target date to Christmas day (December 25th of the current year)
  const targetDate = new Date(new Date().getFullYear(), 11, 25)

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const currentTime = new Date()
      const timeDifference = Math.max(Number(targetDate) - Number(currentTime), 0)

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

      setTime({ days, hours, minutes, seconds })

      if (timeDifference === 0) {
        clearInterval(timerInterval)
        // You can add code here to handle what happens when the target date is reached.
      }
    }, 1000)

    return () => {
      clearInterval(timerInterval) // Cleanup the interval when the component unmounts.
    }
  }, [])

  return (
    <section className={classes.promotion}>
      <div className={classes.textBox}>
        <h3 className={classes.title}>🎄Christmas Countdown🎄</h3>
        <p>
          Unwrap the magic of the season with an extraordinary shopping adventure! 
          Immerse yourself in the joy of our grand Christmas countdown - it's not 
          just an advent calendar; it's your ticket to an online shopping extravaganza
          like never before.
          <br />
          Picture this: Every day brings a delightful new deal, leading up to the grand
          crescendo of our biggest-ever Christmas sale on the merriest day of the year.
          It's a celebration of savings, surprises, and the sheer delight of finding the
          perfect gifts for your loved ones. But here's the catch - each deal is a limited-time 
          offer, a fleeting moment of festivity waiting to be seized. 
          <br />
          Don't let the spirit of the season pass you by. Shop with us and unwrap daily delights 
          that culminate in the grand finale of our spectacular Christmas sale. Your perfect 
          gifts are just a click away, so don't miss the sleigh - dive into the magic of our Christmas countdown now! 🎁🛒
        </p>

        <ul className={classes.stats}>
          <StatBox label="Days" value={time.days} />
          <StatBox label="Hours" value={time.hours} />
          <StatBox label="Minutes" value={time.minutes} />
          <StatBox label="Seconds" value={time.seconds} />
        </ul>
      </div>
    </section>
  )
}

const StatBox = ({ label, value }: { label: string; value: number }) => (
  <li className={classes.statBox}>
    <h4>{value}</h4>
    <p>{label}</p>
  </li>
)

export default Promotion
