import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'

function App() {
  const nasaApi = 'https://api.nasa.gov/planetary/apod?api_key=cySSy2EuIo1USEmHFXesxMwVk4UhxzDBNvn07ESW'
  const apiYear = '2012'
  const apiMonth = '03'
  const apiDay = '14'

  const [title, setTitle] = useState('Testing')
  const [desc, setDesc] = useState('YADA YADA YADA')
  const [data, setDate] = useState('2019-07-17')
  const [img, setImg] = useState([])

  useEffect(() => {
    axios.get(`${nasaApi}&date=${apiYear}-${apiMonth}-${apiDay}`)
      .then(response => {
        console.log('NASA Photo API online:', response)
      })
      .catch(error => {
        console.log('API retrieval failed:', error)
      })
  }, [apiYear, apiMonth, apiDay])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
