const PersonForm = (props) => {

    return (
      <form>
      <div>
        name: <input onChange={props.handleNameChange}/>
        
      </div>
      <div>number: <input onChange={props.handleNumberChange}/></div>
  
      <div>
      <button type="submit" onClick={props.addPerson}>add</button>    
      </div>
    </form>
  )
}
  export default PersonForm