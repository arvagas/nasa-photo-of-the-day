import React from 'react'

const Media = ({mediaUrl, mediaType}) => {
    if (!mediaUrl) return <h3>Loading...</h3>

    if (mediaType === 'video') return <iframe className='video' title='NASA Video of the Day' src={mediaUrl} alt='NASA VotD'></iframe>
    else return <img className='image' src={mediaUrl} alt='NASA PotD'></img>
}

export default Media