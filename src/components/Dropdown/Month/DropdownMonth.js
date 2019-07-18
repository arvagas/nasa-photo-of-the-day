import React from 'react'
import {dropdownmonth} from '../DropdownData'
import MonthOptions from './MonthOptions'

const DropdownMonth = ({apiMonth, setApiMonth}) => {
    return (
        <select value={(apiMonth < 10) ? `0${apiMonth}` : apiMonth} onChange={event => setApiMonth(event.target.value)}>
            {dropdownmonth.map(month=> (
                <MonthOptions month={month}/>))
            }
        </select>
    )
}

export default DropdownMonth