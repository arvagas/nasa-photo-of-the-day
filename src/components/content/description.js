import React from 'react'
import Date from './Date'

const Description = ({desc, date}) => {
    return (
        <div className='content'>
            <Date date={date}/>
            <p className='description'>{desc}</p>
        </div>
    )
}

export default Description