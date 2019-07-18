import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
    width: 100%;
    border-radius: 50px;
`

const Video = styled.iframe`
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
`

const Media = ({mediaUrl, mediaType, copyright, theme}) => {
    if (!mediaUrl) return <h3>Loading...</h3>

    if (mediaType === 'video') return <Video title='NASA Video of the Day' src={mediaUrl} alt='NASA VotD'></Video>
    else return <Image src={mediaUrl} alt='NASA PotD' style={{
        borderColor: theme === 'night' ? '#fff' : 'none',
        borderStyle: theme === 'night' ? 'solid' : 'none',
        borderSize: theme === 'night' ? '1' : 'none',
    }}></Image>
}

export default Media