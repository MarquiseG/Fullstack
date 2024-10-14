const Persons = (props) => {
    
    return (
      props.persons.map(person =>
        <li key={person.id}>
         {person.name}  &nbsp; {person.number}
        </li>
      )
    )
  }

  export default Persons