import { useSelector } from "react-redux"
import ItemHistory from "./ItemHistory"

const History = () => {

  const history = useSelector(state => state.history.history)

  return (
    <div>
      {history.map((item) =>
      <ItemHistory key={item.id} item={item}/>
      )}
    </div>
  )
}

export default History