const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Content = (props) => {
  return (
     <>
      <Part part = {props.parts[0].part} exercise ={props.parts[0].exercise} />
      <Part part = {props.parts[1].part} exercise ={props.parts[1].exercise} />
      <Part part = {props.parts[2].part} exercise ={props.parts[2].exercise} />
    </>
    
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises  {props.total}</p>

  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = [
    { part: part1, exercise: exercises1 },
    { part: part2, exercise: exercises2 },
    { part: part3, exercise: exercises3 }
  ]

  return (
    <div>
       <Header course={course} />

       <Content parts= {parts} />

       <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App