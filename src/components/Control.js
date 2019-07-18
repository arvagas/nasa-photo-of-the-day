import React from 'react'
import DropdownContainer from './Dropdown/DropdownContainer'
import NightToggle from './Night/NightToggle'
import styled from 'styled-components'

const ControlHouse = styled.div`
    display: flex;
    max-width: 1000px;
    justify-content: space-around;
    align-items: center;
`

const Control = ({apiYear, setApiYear, apiMonth, setApiMonth, apiDay, setApiDay, theme, toggleTheme}) => {
    return (
        <ControlHouse>
            <DropdownContainer apiYear={apiYear} setApiYear={setApiYear} apiMonth={apiMonth} setApiMonth={setApiMonth} apiDay={apiDay} setApiDay={setApiDay}/>
            <NightToggle theme={theme} toggleTheme={toggleTheme}/>
        </ControlHouse>
    )
}

export default Control