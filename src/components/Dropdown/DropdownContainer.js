import React from 'react'
import DropdownYear from './Year/DropdownYear'
import DropdownDay from './Day/DropdownDay'
import DropdownMonth from './Month/DropdownMonth'

const DropdownContainer = ({apiYear, setApiYear}) => {  
    return (
        <div className='dropdown-container'>
            <div className='dropdown-year'>
                <h3>Year</h3>
                <DropdownYear apiYear={apiYear} setApiYear={setApiYear}/>
            </div>

            <div className='dropdown-day'>
                <h3>Day</h3>
                <DropdownDay />
            </div>

            <div className='dropdown-month'>
                <h3>Month</h3>
                <DropdownMonth />
            </div>
        </div>
    )
}

export default DropdownContainer