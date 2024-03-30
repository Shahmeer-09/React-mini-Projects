
const Amount = ({moneyPyramid, questionnumber}) => {
  
  return (
    <div className='amount'>
     <ul className="moneylist">
      {moneyPyramid.map((money)=>(
        <li key={money.id} className={questionnumber===money.id ? "listitem active" :"listitem"
          
        }>
        <span className="amountnumber">{money.id}</span>
        <span className="amounttext">{money.amount}</span>

        </li>
        
      ))}
      </ul>
    </div>
  )
}

export default Amount 