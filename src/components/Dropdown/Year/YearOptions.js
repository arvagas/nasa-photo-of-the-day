import React from "react"

const YearOptions = ({year}) => {
  return (
    <option key={year} value={year}>
      {year}
    </option>
  )
}

export default YearOptions