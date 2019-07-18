import React from 'react'
import Date from './Date'
import styled from "styled-components"

const Content = styled.div`
    margin: 5%;
    text-align: left;
`

const Description = ({desc, date, origLink}) => {
    if (!desc) return <h3>Loading...</h3>
    return (
        <Content>
            <Date date={date}/>
            <p className='description'>{desc}</p>
            <a className='App-link' href={`https://apod.nasa.gov/apod/ap${origLink}.html`}>Link to NASA's Post</a>
        </Content>
    )
}

export default Description