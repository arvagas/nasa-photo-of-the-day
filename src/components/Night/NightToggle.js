import React from 'react'

const NightToggle = ({theme, toggleTheme}) => {
    return (
        <button onClick={toggleTheme}>
            {(theme === 'light') ? 'Night' : 'Light'}
        </button> 
    )
}

export default NightToggle