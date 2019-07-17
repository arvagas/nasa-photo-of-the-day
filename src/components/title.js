import React from 'react'

const Title = ({title}) => {
    if (!title) return <h4>Loading...</h4>
    return <h1>{title}</h1>
}

export default Title