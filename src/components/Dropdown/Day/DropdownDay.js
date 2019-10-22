import React from 'react'
import {dropdownday} from '../DropdownData'
import DayOptions from './DayOptions'

const DropdownDay = ({apiDay, setApiDay}) => {
    return (
        <select value={(apiDay < 10) ? `0${apiDay}` : apiDay} onChange={event => setApiDay(parseInt(event.target.value))}>
            {dropdownday.map(day=> (
                <DayOptions day={day}/>))
            }
        </select>
    )
}

export default DropdownDay