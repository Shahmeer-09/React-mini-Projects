import colorNames from 'colornames'
import React from 'react'

const Input = ({myColor, setmyColor,setHeaxvalue, setisdark, isdark}) => {
  return (
    
   <form action="" onSubmit={(e)=>e.preventDefault() }>
      <label htmlFor="color">Enter a Color Value</label>
      <input
        type="text" 
        placeholder='Enter a Value'
        id='color'
        value={myColor}
        onChange={(e)=> {
        setmyColor(e.target.value)
        setHeaxvalue(colorNames(e.target.value))
        }}
       />
       <button
       onClick={()=>{
        setisdark(!isdark)}}
       >
       Toggele texy color
       </button>

   </form>
  )
}

export default Input
