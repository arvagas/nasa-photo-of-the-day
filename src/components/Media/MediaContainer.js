import React from 'react'
import Media from './Media'

const MediaContainer = ({mediaUrl, mediaType, copyright, theme}) => {
    return (
        <div>
            <Media mediaUrl={mediaUrl} mediaType={mediaType} theme={theme} />
            <p>{(!copyright) ? `` : `© ${copyright}`}</p>
        </div>
    )
}

export default MediaContainer