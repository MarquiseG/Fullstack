const Header = (props) => {
    return (
      <div>
      <h1>{props.course}</h1>
      </div>
    )
  }
  const Part = (props) => {
    return (
      <>
      {props.part.name} &nbsp; {props.part.exercises}
      </>
    )
  }
  
  const Parts = (props) => {
    
    return (
      props.parts.map(part =>
        <li key={part.id}>
        <Part part = {part}/>
        </li>
      )
    )
  }
  const Total = props => {
    const total = props.parts.reduce((prevValue, currentValue) =>
       prevValue + currentValue.exercises,
      0)
    return (
      <div> <strong> Total of : {total} </strong></div>
    )
  }
  
  const Course = ({ course }) => {
    return (  
      <>
      <Header course={course.name} />
      <Parts parts={course.parts} />  
      <Total parts={course.parts} /> 
      </>
    )
  }
  export default Course