import React from "react"

const DayOptions = ({day}) => {
  return (
    <option key={day} value={day}>
      {day}
    </option>
  )
}

export default DayOptions