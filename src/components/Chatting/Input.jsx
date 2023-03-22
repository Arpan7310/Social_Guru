import React from 'react'

export const Input = () => {
  return (
    <div className="input">
<input type="text" placeholder="Type Something...." />
<div className="send">
    <img src="" alt="png" />
    <input type="file" style={{display:"none"}}
    id='file'
    />
    <label htmlFor="file">
        <img src="" alt="pdf" />
    </label>
    <button>Send</button>

    
</div>

    </div>
  )
}
