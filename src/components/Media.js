import React from 'react'
import styled from "styled-components"

const Image = styled.img`
    width: 100%;
`

const Video = styled.iframe`
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
`

const Media = ({mediaUrl, mediaType}) => {
    if (!mediaUrl) return <h3>Loading...</h3>

    if (mediaType === 'video') return <Video title='NASA Video of the Day' src={mediaUrl} alt='NASA VotD'></Video>
    else return <Image src={mediaUrl} alt='NASA PotD'></Image>
}

export default Media