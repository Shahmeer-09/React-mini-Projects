import { useState,useEffect,  } from "react"


const Timer = ({setstop, questionnumber}) => {
  const [timer, settimer]= useState(30)

    useEffect(()=>{
      if (timer == 0) return setstop(true)
       const interval = setInterval(() => {
         settimer(prev=> prev-1)
        }, 1000);
       return ()=>clearInterval(interval)
   } ,[timer ,setstop])
    useEffect(()=>{
      settimer(30)

    }, [questionnumber])

    return timer
}

export default Timer 
