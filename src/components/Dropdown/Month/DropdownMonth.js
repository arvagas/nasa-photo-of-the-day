import React,{useState} from 'react'
import {dropdownmonth} from '../DropdownData'
import MonthOptions from './MonthOptions'

const DropdownMonth = () => {
    return (
        <select>
            {dropdownmonth.map(month=> (
                <MonthOptions month={month}/>))
            }
        </select>
    )
}

export default DropdownMonth