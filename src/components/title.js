import React from 'react'
import styled from 'styled-components'

const TitleProps = styled.h1`
    margin: 5%;
`

const Title = ({title}) => {
    if (!title) return <h1>Loading...</h1>
    return <TitleProps>{title}</TitleProps>
}

export default Title