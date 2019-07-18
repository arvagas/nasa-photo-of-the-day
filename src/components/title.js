import React from 'react'

const Title = ({title}) => {
    if (!title) return <h1>Loading...</h1>
    return <h1>{title}</h1>
}

export default Title