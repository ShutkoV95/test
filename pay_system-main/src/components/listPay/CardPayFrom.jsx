import { useDispatch } from "react-redux"
import { resetStylesFrom, selectedCardFrom } from "../../store/cardsSlice"
import { useContext } from "react"
import Context from "../../Context"

const CardPayFrom = ({card }) => {

const {id, number, date, balance, colorFrom} = card

const dispatch = useDispatch()

const {setIdFrom, setSummaFrom, setFromNumberCard } = useContext(Context)

const dataCard = (id, balance, number) => {
  setIdFrom(id)
  setSummaFrom(balance.balance)
  setFromNumberCard(number.number)
  dispatch (resetStylesFrom())
  dispatch (selectedCardFrom(id))
}

  return (
    <div className={`card_pay ${colorFrom? 'color': ''}`} onClick={() => dataCard({id}, {balance}, {number})}>
      <p>{number}</p>
      <p>{date}</p>
      <p>{balance} $</p>
    </div>
  )
}

export default CardPayFrom