

const Button = ({reqType, setReqtype, dataText}) => {
  return (
      <button
        className={dataText === reqType ? 'selected' : null}
        onClick={(e)=> setReqtype(dataText) }
      >
       {dataText}
      </button>
  )
}

export default Button
