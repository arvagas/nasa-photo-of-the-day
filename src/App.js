import React, {lazy, Suspense} from "react";
import "./App.css";
import circle from './assets/circle.png'
import useNightMode from './components/Night/useNightMode'

// Import components
const Data = lazy(() => import('./Data'))

function App() {
  const [ theme, toggleTheme ] = useNightMode()

  return (
    <div className="App" style={{
      background: theme === 'night' ? '#000' : '#fff',
      color: theme === 'night' ? '#fff' : '#000',
    }}>
      <Suspense fallback={
        <div className='App-header'>
          <h1>Astronomy Picture of the Day</h1>
          <h2>Powered by NASA</h2>
          <img className='App-logo' src={circle}></img>
        </div>}>
        <div className='container'>
          {/* <p>
            Read through the instructions in the README.md file to build your NASA
            app! Have fun 🚀!
          </p> */}
          <Data theme={theme} toggleTheme={toggleTheme}/>
        </div>
      </Suspense>
    </div>
  )
}

export default App;
