import { useDispatch } from "react-redux"
import { deleteItemHistory } from "../store/historySlice"

const ItemHistory = ({item}) => {

const {from, on, summa, name, appointment, time, date, my, id} = item

const dispatch = useDispatch()

  return (
    <div className="item_history">
       <p>time : <span>{time}</span></p>
       <p>date : <span>{date}</span> </p> 
       <p>card transfer : <span>{from}</span> </p>
       <p>transfer to the card : <span>{on}</span> </p>
       <p>summa : <span>{summa} $</span> </p>
       <p>the name of the recipient : <span>{!my? name : "transfer of own money"}</span> </p>
       <p>appointment : <span>{appointment}</span> </p>
       <button onClick={() => dispatch(deleteItemHistory(id))}>delete</button>
    </div>
  )
}

export default ItemHistory