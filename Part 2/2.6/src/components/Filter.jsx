
const Filter = (props) => {   
  return (
      <form>
        <div>
          filter shown with: <input onChange={props.handleSearch }/>  
        </div>
      </form>
  )
}

export default Filter