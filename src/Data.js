import React,{useState, useEffect} from 'react'
import axios from 'axios'

// Import components
import Control from './components/Control'
import Title from './components/Title'
import MediaContainer from './components/Media/MediaContainer'
import Description from './components/Content/Description'
import StylesCard from './styles/StylesCard'

function Data({theme, toggleTheme}) {
    // Values related to NASA api
    const nasaApi = 'https://api.nasa.gov/planetary/apod?api_key=cySSy2EuIo1USEmHFXesxMwVk4UhxzDBNvn07ESW'

    const [title, setTitle] = useState('Loading...')
    const [desc, setDesc] = useState('Loading...')
    const [date, setDate] = useState('????-??-??')
    const [mediaUrl, setMediaUrl] = useState('Image is Loading')
    const [mediaType, setMediaType] = useState('photo')
    const [copyright, setCopyright] = useState('')
    const [origLink, setOrigLink] = useState('linkdate')

    const currentDate = new Date();
    const [apiYear, setApiYear] = useState(currentDate.getFullYear())
    const [apiMonth, setApiMonth] = useState(currentDate.getMonth() + 1)
    const [apiDay, setApiDay] = useState(currentDate.getDate())

    useEffect(() => {
        axios.get(`${nasaApi}&date=${apiYear}-${apiMonth}-${apiDay}`)
            .then(response => {
                console.log('NASA Photo API online:', response)
                const nasaTitle = response.data.title
                const nasaDesc = response.data.explanation
                const nasaDate = response.data.date
                const nasaMediaUrl = response.data.url
                const nasaMediaType = response.data.media_type
                const nasaCopyright = response.data.copyright

                setTitle(nasaTitle)
                setDesc(nasaDesc)
                setDate(nasaDate)
                setMediaUrl(nasaMediaUrl)
                setMediaType(nasaMediaType)
                setCopyright(nasaCopyright)

                let shortYear = `${apiYear}`.slice(-2)
                let ddMonth = (apiMonth < 10) ? `0${apiMonth}` : apiMonth
                let ddDay = (apiDay < 10) ? `0${apiDay}` : apiDay
                setOrigLink(`${shortYear}${ddMonth}${ddDay}`)
            })
            .catch(error => {
                console.log('API retrieval failed:', error)
            })
    }, [apiYear, apiMonth, apiDay])

    return (
        <div>
            <Control apiYear={apiYear} setApiYear={setApiYear} apiMonth={apiMonth} setApiMonth={setApiMonth} apiDay={apiDay} setApiDay={setApiDay} theme={theme} toggleTheme={toggleTheme}/>

            <StylesCard style={{
                borderColor: theme === 'night' ? '#fff' : '#000',
            }}>
                <Title title={title}/>
                <div className={(mediaType === 'image') ? 'image-container' : 'video-container'}>
                    <MediaContainer mediaUrl={mediaUrl} mediaType={mediaType} copyright={copyright} theme={theme}/>
                </div>
                <Description desc={desc} date={date} origLink={origLink}/>
            </StylesCard>
        </div>
    )
}

export default Data