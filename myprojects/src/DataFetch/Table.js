import Row from "./Row"

const Table = ({data}) => {
  return (
    <div className='TableContent'>
      <table>
        <tbody>
            {data.map(item=>(
                <Row item={item} key={item.id} />
            ))}
        </tbody>
      </table>
       
    </div>
  )
}

export default Table
