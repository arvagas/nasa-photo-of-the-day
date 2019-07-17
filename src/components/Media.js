import React from 'react'

const Media = ({mediaUrl, mediaType}) => {
    if (!mediaUrl) return <h3>Loading...</h3>

    if (mediaType === 'video') return <iframe className='video' src={mediaUrl}></iframe>
    else return <img className='img' src={mediaUrl}></img>
}

export default Media