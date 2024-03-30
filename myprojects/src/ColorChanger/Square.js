import React from 'react'

const Square = ({myColor, hexValue, isdark}) => {
  
  return (
    <section
    className='square'
     style={{backgroundColor: myColor, color:isdark ? '#000':"#fff"  }}
    >
      <p>{myColor? myColor : "Empty value"}</p>
      <p>{hexValue? hexValue : null}</p>
    </section>
  )
}

export default Square
