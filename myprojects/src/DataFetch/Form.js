
import Button from "./Button"
const Form = ({reqType, setReqtype}) => {
  return (
    <form onSubmit={(e)=> e.preventDefault()} >
        <Button
            dataText= 'users'
            setReqtype={setReqtype}
            reqType={reqType}
        />
        <Button
            dataText= 'posts'
            setReqtype={setReqtype}
            reqType={reqType}
        />
        <Button
            dataText= 'comments'
            setReqtype={setReqtype}
            reqType={reqType}
        />
    </form>
  )
}

export default Form
