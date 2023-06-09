import { useState } from "react"
import CardsPay from "./listPay/CardsPay"
import CounterAgentsPay from "./listPay/CounterAgentsPay"
import { useDispatch } from "react-redux"
import { minusBalance, plusBalance, resetStylesFrom, resetStylesOn } from "../store/cardsSlice"
import { newItemHistory } from "../store/historySlice"
import { resetStylesOnCA } from "../store/counterAgentsSlice"
import Context from "../Context"
import { useForm } from "react-hook-form"

const Home = () => {

  // const [summa, setSumma] = useState(0)
  // const [appointment, setAppointment] = useState('')

  const [idFrom, setIdFrom] = useState(null)
  const [idOn, setIdOn] = useState(null)
  const [summaFrom, setSummaFrom] = useState(null)

  const [fromNumberCard, setFromNumberCard] = useState('')
  const [onNumberCard, setOnNumberCard] = useState('')
  const [name, setName] = useState('')
  const [isMy, setIsMy] = useState(false)

  const dispatch = useDispatch()


  function resetData() {
    dispatch (resetStylesFrom())
    dispatch (resetStylesOn())
    dispatch (resetStylesOnCA())
    setFromNumberCard('')
    setOnNumberCard('')
    setName('')
    reset ({
      summa: '',
      appointment: '',
    })
    // setSumma(0)
    // setAppointment('')
  }

  const pay = (payCard) => {

    const {summa, appointment} = payCard
  
    if (payCard.summa <= 0 ) {
      resetData()
      return alert('Enter summa')
    }
    if (idOn.id === idFrom.id) {
      resetData()
      return alert('Choose another card')
    }
    if (summaFrom <= payCard.summa) {
      resetData()
      return alert('Not enough money')
    }
  
  dispatch (plusBalance({idOn, summa}))
  dispatch (minusBalance({idFrom, summa}))
  dispatch (newItemHistory({fromNumberCard, onNumberCard, summa, name, appointment, isMy}))
  
  resetData()
}



// localStorage.clear()

const context = { 
  setIdFrom,
  setSummaFrom,
  setFromNumberCard, 
  setIdOn,
  setOnNumberCard,
  setName,
  setIsMy,
};

const {register, handleSubmit, reset, formState: {errors}} = useForm({
  mode: 'onChange'
})

  return (
    <Context.Provider value={ context }>
      <div>
      <h2>Card transfer</h2>
      <div className="container_from">
      <p>Choose the card from which funds will be debited:</p>
      <CardsPay />
      </div>
     <div className="container_on">
     <p>Choose the card to which the money will be transferred:</p>
      <CounterAgentsPay />
     </div>
     
      <form className="container_form" onSubmit={handleSubmit(pay)}>
        <p>Enter the transfer amount</p>
        <label htmlFor="summa">
        Summa : <input type="number" id="summa" name="summa"  {... register('summa', 
       {required: 'is require', pattern: {
        value: /[0-9]/,
        message:'Enter only number',
     }}
      )}/>
        </label>
        {errors.summa && <p>{errors.summa?.message}</p>}
        <label htmlFor="appointment">
        Appointment : <input type="text" id="appointment" name="appointment"  {... register('appointment')}/>
        </label>
        <button>Submit</button>
      </form>
    </div>
    </Context.Provider>
    
  )
}

export default Home