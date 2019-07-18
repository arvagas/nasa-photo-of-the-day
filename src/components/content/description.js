import React from 'react'
import Date from './Date'

const Description = ({desc, date, origLink}) => {
    if (!desc) return <h3>Loading...</h3>
    return (
        <div className='content'>
            <Date date={date}/>
            <p className='description'>{desc}</p>
            <a className='App-link' href={`https://apod.nasa.gov/apod/ap${origLink}.html`}>Link to NASA's Post</a>
        </div>
    )
}

export default Description