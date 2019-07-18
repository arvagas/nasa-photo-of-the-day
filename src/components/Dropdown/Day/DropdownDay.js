import React,{useState} from 'react'
import {dropdownday} from '../DropdownData'
import DayOptions from './DayOptions'

const DropdownDay = () => {
    return (
        <select>
            {dropdownday.map(day=> (
                <DayOptions day={day}/>))
            }
        </select>
    )
}

export default DropdownDay