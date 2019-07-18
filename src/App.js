import React from "react";
import "./App.css";

// Import components
import Data from './Data'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <p>
          Read through the instructions in the README.md file to build your NASA
          app! Have fun 🚀!
        </p>
      
        <Data />
      </div>
    </div>
  )
}

export default App;
