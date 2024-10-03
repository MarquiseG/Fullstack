import { useState } from 'react'



const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const StatisticLine = props => <tr><td>{props.text}</td><td> {props.value}</td></tr>


const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        <strong>Statistics</strong>
        <br></br>
        No feedback is given
      </div>
    )
  }

  return (   
         <>
        <br></br>
        <b>Statistics</b>
        <table>
          <tbody>
        
      <StatisticLine text="good" value ={props.good}/>
       <StatisticLine text="neutral" value ={props.neutral} /> 
      <StatisticLine text="bad" value ={props.bad} />
    <StatisticLine text="Total" value ={props.total} />
      <StatisticLine text="positive" value ={props.good * 100 /props.total} />
     <StatisticLine text="average" value ={props.good - props.bad /props.total}/>
        
      
      </tbody>
      </table>
        </>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  


  const [allClicks, setAll] = useState([])

  const handleGoodClick = () => {
    // setAll(allClicks.concat('G'))
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
  }
  
  const handleNeutralClick = () => {
    // setAll(allClicks.concat('N'))
    const updatedNeutral= neutral + 1
    setNeutral(updatedNeutral)
    setTotal(good + updatedNeutral + bad)
  }
  
  const handleBadClick = () => {
    // setAll(allClicks.concat('B'))
    const updatedBad= bad + 1
    setBad(updatedBad)
    setTotal(good + neutral + updatedBad)
  }

  return (
    <>
      <b>Give feedback</b>
      <br></br>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>

     <Statistics good={good} neutral={neutral} bad={bad} total={total} ></Statistics>

    </>
  )
}

export default App