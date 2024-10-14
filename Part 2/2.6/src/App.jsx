import { useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';



const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' ,  number: '123', id: uuidv4() , },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: uuidv4() },
    { name: 'Dan Abramov', number: '12-43-234345', id: uuidv4() },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: uuidv4() }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filtered, setfiltered] = useState([])

  const addPerson= (event) => {
    event.preventDefault()

    const isFound = persons.some(element => {
      if (element.name === newName) {
        return true;
      }
      return false;
    });

    if (isFound)  {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const personObject = {
      name: newName, 
      number: newNumber,
      id: uuidv4(),
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  } 
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  } 
  const handleSearchChange = (event) => {
    console.log(event.target.value)
    const found = persons.filter(obj => {
      return obj.name.includes(event.target.value);
    });
    setfiltered(found)
  } 
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearchChange}/>
      <h2>Add a new user</h2> 
      <PersonForm handleNameChange={handleNameChange} 
      handleNumberChange={handleNumberChange} 
      addPerson={addPerson}></PersonForm>
      <h2>Numbers</h2>
      <Persons persons= {filtered}/>
    </div>
  )
}

export default App