import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'

// Import components
import Title from './components/Title'
import Media from './components/Media'
import Description from './components/content/Description'

function App() {
  // Values related to NASA api
  const nasaApi = 'https://api.nasa.gov/planetary/apod?api_key=cySSy2EuIo1USEmHFXesxMwVk4UhxzDBNvn07ESW'
  const apiYear = '2012'
  const apiMonth = '03'
  const apiDay = '14'

  const [title, setTitle] = useState('Testing')
  const [desc, setDesc] = useState('YADA YADA YADA')
  const [date, setDate] = useState('2019-07-17')
  const [mediaUrl, setMediaUrl] = useState('https://apod.nasa.gov/apod/image/1203/angrysun_friedman_960.jpg')
  const [mediaType, setMediaType] = useState('photo')

  useEffect(() => {
    axios.get(`${nasaApi}`)
      .then(response => {
        console.log('NASA Photo API online:', response)
        const nasaTitle = response.data.title
        const nasaDesc = response.data.explanation
        const nasaDate = response.data.date
        const nasaMediaUrl = response.data.url
        const nasaMediaType = response.data.media_type

        setTitle(nasaTitle)
        setDesc(nasaDesc)
        setDate(nasaDate)
        setMediaUrl(nasaMediaUrl)
        setMediaType(nasaMediaType)
      })
      .catch(error => {
        console.log('API retrieval failed:', error)
      })
  }, [apiYear, apiMonth, apiDay])

  return (
    <div className="App">
      <div className='container'>
        <Title title={title}/>
        <Media mediaUrl={mediaUrl} mediaType={mediaType}/>
        <Description desc={desc} date={date}/>
      </div>
    </div>
  )
}

export default App;
