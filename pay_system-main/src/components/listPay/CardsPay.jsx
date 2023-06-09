import { useSelector } from "react-redux"
import CardPayFrom from "./CardPayFrom"

const CardsPay = () => {

    const cards = useSelector(state => state.cards.cards)

  return (
    <div className="card_select">
      {cards.map((card) => 
      <CardPayFrom key={card.id} 
      card={card} 
      />)}
    </div>
  )
}

export default CardsPay