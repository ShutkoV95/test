const Card = ({card}) => {

  const { number, date, balance,  surname, name, patronymic, my} = card

  return (
    <div className="card_pay">
      <p>{number}</p>
      <p>{date}</p>
      <p>{my
      ? `${balance} $`
      : `${surname} ${name} ${patronymic}`
      }</p>
    </div>
  )
}

export default Card