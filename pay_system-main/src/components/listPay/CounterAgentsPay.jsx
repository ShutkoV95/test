import { useSelector } from "react-redux"
import CardPayOn from "./CardPayOn"

const CounterAgentsPay = () => {

const cards = useSelector(state => state.cards.cards)
const counterAgent = useSelector (state => state.counterAgent.counterAgent)

  return (
    <div className="card_select">
      {cards.map((card) => 
      <CardPayOn 
      key={card.id} 
      card={card} 
      />)}
      {counterAgent.map((card) => 
      <CardPayOn 
      key={card.id} 
      card={card} 
      />)}
    </div>
  )
}

export default CounterAgentsPay