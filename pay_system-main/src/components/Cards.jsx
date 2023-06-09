import { useDispatch, useSelector } from "react-redux"
import Card from "./listPay/Card"
import { Link } from "react-router-dom"
import { addCard, delCard } from "../store/cardsSlice"
import { useForm } from "react-hook-form"

const Cards = () => {

  const {register, handleSubmit, reset, formState: {errors}} = useForm({
    mode: 'onChange'
  })

  const cards = useSelector(state => state.cards.cards)
  const dispatch = useDispatch()

  function resetData () {
    reset({
      number: '',
      date: '',
    })
  }

  const createCard = (card) => {
    const {number, date} = card
    dispatch(addCard({number, date}))
    resetData()
  }

  const editCard = (id, number, date) => {
    reset({
      number,
      date,
    })
    dispatch(delCard(id))
  }

  return (
    <div>
       <div >
       <form onSubmit={handleSubmit(createCard)}>
      <label htmlFor="number">
      Number : <input type="number" id="number" name="number" placeholder="Eight-digit number"
      {... register('number',
      {required: 'is require', 
      minLength: {
        value:8,
        message:'Enter an eight-digit number',
     },
    maxLength: {
        value:8,
        message:'Enter an eight-digit number',
     },
    }
      )}/>
      </label>
      {errors.number && <p>{errors.number?.message}</p>}
      <label htmlFor="date">
      Date : <input type="text" id="date" name="date" placeholder="31/12/2000" {... register('date', 
      {required: 'is require', pattern: {
         value: /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g,
         message:'Enter the date according to the template 31/12/2000',
      }} )}/>
      </label>
      {errors.date && <p>{errors.date?.message}</p>}
     
        <button>Add new card</button>
      </form>
      <div className="card_container">
      {cards.map((card) =>
        <div className="container_for_card" key={card.id}> 
        <Link to={`/pay_system/${card.id}`}>
          <Card card={card} />
        </Link>
        <button onClick={() => dispatch(delCard(card.id))}>delete</button>
        <button onClick={() => editCard(card.id, card.number, card.date)}>edit</button>
        </div> 
        )}
      </div>
        
      </div>
    </div>
  )
}

export default Cards