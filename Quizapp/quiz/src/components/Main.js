import React from 'react'
import { useState, useEffect } from 'react'
import Timer from './Timer'
import useSound from 'use-sound'


import wrong from '../sounds/wrong.mp3'
import wait from '../sounds/wait.mp3'
import correct from '../sounds/correct.mp3'
import play from '../sounds/play.mp3'
const Main = ({questionnumber,setquestionnumber, data, earned}) => {
  const [question, setquestion] =useState(null)
  const [selected, setselected] =useState('')
  const [classname, setclassname] = useState('')
  const [stop, setstop]= useState(false)
  const [wrongans] = useSound(wrong)
  const [lestplay] = useSound(play)
  
  const [waitfor] = useSound(wait)
  const [correctans] = useSound(correct)

  useEffect(()=>{
    lestplay()
  },[lestplay])


  useEffect(()=>{
     setquestion(data[questionnumber-1])

  },[data, questionnumber])

  const deley = (duration, callback)=>{
    setTimeout(()=>{
      callback()
    }, duration)
  }
  const handleclick=(a)=>{
       setselected(a)
       setclassname('op active')
      deley(3000, ()=>{
        setclassname(a.correct ? "op correct" : "op wrong")
      })

      deley(5000 , ()=>{
        if(a.correct){
          correctans();
          deley(1000,() => {
             setquestionnumber(prev=> prev+1)
             setselected(null)
          });
        }else{
           wrongans()
           deley(1000, ()=>{
             setstop(true)
           })
        }
      })
  }
return (
    <div className='main'>
     {
      stop ? (
        
            <h1 className="result"> You have earned : {earned} </h1>
      ) :(
        <>
        <section className='timer'>
         <div className="time">
           <Timer questionnumber= {questionnumber} setstop={setstop}/>
         </div>
       </section>
      <section className='quiz'>
        <div>
          <h1>{question?.question}</h1>
        </div>

        <div className="options">
        {question?.answers.map((a,index)=>(
          <div key={index} className={selected ===a ? classname : "op"}  onClick={()=> handleclick(a)}>{a.text}</div>
        ))}
          
        </div>
      </section>
        </>
      )
     }
       
    </div>
  )
}

export default Main
