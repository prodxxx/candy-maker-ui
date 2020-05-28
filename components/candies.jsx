import React, { useState } from 'react'

export default () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="page">
      <div className="title">Candy Makers</div>
      <input type="textbox" onChange={(event) => { setSearchTerm(event.target.value) }} value={searchTerm} />
      <div className="searchTerm">{searchTerm}</div>
    </div>
  )
}
