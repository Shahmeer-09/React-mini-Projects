

import Listitem from "./Listitem"
const List = ({data}) => {
  return (
    <ul>
       {data.map( item =>(
         <Listitem key={item.id} item={item}/>
       ))}
    </ul>
  )
}

export default List
