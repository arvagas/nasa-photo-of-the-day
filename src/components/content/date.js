import React from 'react'
import styled from "styled-components"

const DateProps = styled.p`
    font-weight: bold;
`

const Date = ({date}) => {
    return <DateProps>{date}</DateProps>
}

export default Date