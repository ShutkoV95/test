import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const Single = () => {

  const {id}= useParams()

  const cards = useSelector(state => state.cards.cards)
  const counterAgent = useSelector (state => state.counterAgent.counterAgent)

  const [card, setCard] = useState({})

  useEffect (() => {
    setCard(cards.find((item) => item.id === id)
    ?cards.find((item) => item.id === id)
    :counterAgent.find((item) => item.id === id)
    )
  }, [cards, counterAgent, id])

  const {number, date, balance, surname, name, patronymic, my} = card

  return (
    
      <div className="card_pay" >
      <p>{number}</p>
      <p>{date}</p>
      <p>{my
      ? `${balance} $`
      : `${surname} ${name} ${patronymic}`
      }</p>
    </div>

    
  )
}

export default Single