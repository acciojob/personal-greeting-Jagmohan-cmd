
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [name , setName] = useState("");

  const onInputChange = (e) => {
    setName(e.target.value);
  }
  return (
    <div>
      <form>
        {/* Do not remove the main div */}
      <label htmlFor="name">Enter your name:</label>
      <input id="name" onChange={onInputChange} type = "text"/>
      </form>
     {
      name && <p>`Hello ${name}!`</p>
     } 
    </div>
  )
}

export default App
