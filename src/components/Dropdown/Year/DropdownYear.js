import React,{useState} from 'react'
import {dropdownyear} from '../DropdownData'
import YearOptions from './YearOptions'

const DropdownYear = () => {
    return (
        <select>
            {dropdownyear.map(year=> (
                <YearOptions year={year}/>))
            }
        </select>
    )
}

export default DropdownYear