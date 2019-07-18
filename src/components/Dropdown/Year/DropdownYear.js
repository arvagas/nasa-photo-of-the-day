import React from 'react'
import {dropdownyear} from '../DropdownData'
import YearOptions from './YearOptions'

const DropdownYear = ({apiYear, setApiYear}) => {
    return (
        <select value={apiYear} onChange={event => setApiYear(event.target.value)}>
            {dropdownyear.map(year=> (
                <YearOptions year={year} />))
            }
        </select>
    )
}

export default DropdownYear