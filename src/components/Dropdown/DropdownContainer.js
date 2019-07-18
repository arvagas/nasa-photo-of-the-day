import React from 'react'
import DropdownYear from './Year/DropdownYear'
import DropdownDay from './Day/DropdownDay'
import DropdownMonth from './Month/DropdownMonth'
import styled from "styled-components"

const DropdownHouse = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2%;
`

const DropdownIndivContainer = styled.div`
    margin: 0 15px;
`

const DropdownContainer = ({apiYear, setApiYear, apiMonth, setApiMonth, apiDay, setApiDay}) => {  
    return (
        <DropdownHouse>
            <DropdownIndivContainer>
                <h3>Year</h3>
                <DropdownYear apiYear={apiYear} setApiYear={setApiYear}/>
            </DropdownIndivContainer>

            <DropdownIndivContainer>
                <h3>Month</h3>
                <DropdownMonth apiMonth={apiMonth} setApiMonth={setApiMonth}/>
            </DropdownIndivContainer>

            <DropdownIndivContainer>
                <h3>Day</h3>
                <DropdownDay apiDay={apiDay} setApiDay={setApiDay}/>
            </DropdownIndivContainer>
        </DropdownHouse>
    )
}

export default DropdownContainer