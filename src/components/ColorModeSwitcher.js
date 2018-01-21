import React from 'react'

export const ColorModeSwitcher = () => {
  return (
    <div>
      <label>
        <input type="radio" value="option1" checked={true} onChange={(e)=>{alert(e.target.value)}}/>
        Option 1
      </label>
      <label>
        <input type="radio" value="option2" checked={false} onChange={(e)=>{alert(e.target.value)}}/>
        Option 2
      </label>
      <label>
        <input type="radio" value="option3" checked={false} onChange={(e)=>{alert(e.target.value)}}/>
        Option 3
      </label>
    </div>
  )
}
