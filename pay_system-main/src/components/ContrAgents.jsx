
import Card from "./listPay/Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCardCA, delCardCA } from "../store/counterAgentsSlice";
import { useForm } from "react-hook-form";

const ContrAgents = () => {

  const {register, handleSubmit, reset, formState: {errors}} = useForm({
    mode: 'onChange'
  })

  const counterAgent = useSelector (state => state.counterAgent.counterAgent)
  const dispatch = useDispatch()

  function resetDataCA () {
    reset({
      number: '',
      date: '',
      surname: '',
      name: '',
      patronymic: '',
    })
  }

  const createCardCA = (card) => {
    const {number, date, name, surname, patronymic} = card
    dispatch(addCardCA({number, date, name, surname, patronymic}))
    resetDataCA()
  }

  const editCardCA = (id, number, date, surname, name, patronymic) => {
    reset({
      number,
      date,
      surname,
      name,
      patronymic,
    })
    dispatch(delCardCA(id))
  }

  return (
    <div>
      <div >
      <form onSubmit={handleSubmit(createCardCA)}>
      <label htmlFor="number">
      Number : <input type="number" id="number" name="number"  placeholder="Eight-digit number"
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
      <label htmlFor="surname">
      Surname : <input type="text" id="surname" name="surname"  {... register('surname',
       {required: 'is require', pattern: {
        value: /[a-zA-Z]/,
        message:'Enter only letters',
     }}
      )}/>
      </label> 
      {errors.surname && <p>{errors.surname?.message}</p>}
      <label htmlFor="name">
        Name : <input type="text" id="name" name="name" {... register('name',
         {required: 'is require', pattern: {
          value: /[a-zA-Z]/,
          message:'Enter only letters',
       }}
        )}/>
      </label>
      {errors.name && <p>{errors.name?.message}</p>}
      <label htmlFor="patronymic">
      Patronymic : <input type="text" id="patronymic" name="patronymic"  {... register('patronymic', 
       {required: 'is require', pattern: {
        value: /[a-zA-Z]/,
        message:'Enter only letters',
     }}
      )}/>
      </label>
      {errors.patronymic && <p>{errors.patronymic?.message}</p>} 
        <button>Add new card</button>
      </form>
      <div className="card_container">
      {counterAgent.map((card) =>
        <div className="container_for_card" key={card.id}> 
          <Link to={`/pay_system/${card.id}`}>
            <Card card={card} />
          </Link>
            <button onClick={() => dispatch(delCardCA(card.id))}>delete</button>
            <button onClick={() => editCardCA(card.id, card.number, card.date, card.surname, card.name, card.patronymic)}>edit</button>
        </div>
       )}
      </div>
        
      </div>
    </div> 
  )
}

export default ContrAgents