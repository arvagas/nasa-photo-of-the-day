import React from "react"

const MonthOptions = ({month}) => {
  return (
    <option key={month} value={month}>
      {month}
    </option>
  )
}

export default MonthOptions