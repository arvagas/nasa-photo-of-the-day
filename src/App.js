import React, {lazy, Suspense} from "react";
import "./App.css";
import styled from "styled-components"

// Import components
const Data = lazy(() => import('./Data'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={
        <div className='App-header'>
          <h1>Astronomy Picture of the Day</h1>
          <h2>Powered by NASA</h2>
          <img className='App-logo' src='https://png2.kisspng.com/sh/bc177aa92d67923a659e890bc4a6a8cf/L0KzQYm3VcA6N6Zxj5H0aYP2gLBuTf5ie5IygdD8aXfxebK0jP9od15zeeZyb37kfH7ohQZqe5D3kZ9sb33wecX7hfUubpD3RadqZkLncYToUBRiOJc7RqMEMES5QYm9UcUzPWk7TaI6OEK4QoW1kP5o/kisspng-nasa-insignia-logo-national-advisory-committee-for-5af2da3a3da0f6.1904618615258650182524.png'></img>
        </div>}>
        <div className='container'>
          {/* <p>
            Read through the instructions in the README.md file to build your NASA
            app! Have fun 🚀!
          </p> */}
        
          <Data />
        </div>
      </Suspense>
    </div>
  )
}

export default App;
