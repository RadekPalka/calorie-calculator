import React, { useState } from "react"

function useInput(initialValue= 0){
  const [value, setValue]= useState('')

  const handleInput= e=>{
    setValue(value=> value = e.target.value)
  }
  return [value, handleInput]
}

function Bmi(){
  const [weight, setWeight] = useInput('')
  const [height, setHeight] = useInput('')

  const [result, setResult] = useState(0)

  const handleButton =  e =>{
    e.preventDefault()
    const weightToNumber = Number(weight)
    const heightToNumber = Number(height)
    if (isNaN(weightToNumber) || isNaN(heightToNumber)) return alert("Źle wypełniony formularz")
    setResult((weightToNumber/((heightToNumber/100)*(heightToNumber/100))).toFixed(2))
  }
  return(
    <div className="bmi">
      <h2>Wyświetlam BMI</h2>
      <form onSubmit={handleButton}>
        <label htmlFor="weight">Podaj swoją wagę w kilogramach
        <input type="number" name="userweight" id="weight" value={weight} onChange={setWeight}/></label>
        <label htmlFor="height">Podaj swój wzrost w centymetach
        <input type="number" name="userheight" id="height" value={height} onChange={setHeight}/></label>
        <button>Oblicz</button>
      </form>
      {result>0 ? <p>Twoje BMI to {result}</p>: null}
    </div>

  )
}
export default Bmi