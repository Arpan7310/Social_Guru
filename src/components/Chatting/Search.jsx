import React from 'react'

export const Search = () => {
  return (
    <div className="search">
    <div className="searchForm">
        <input type="text" 
        placeholder='Find the Person'
        />
        </div>  
    <div className="userChat">
    <img src = "https://imageio.forbes.com/specials-images/imageserve/5b8576db31358e0429c734e3/0x0.jpg?format=jpg&crop=2170,2172,x211,y900,safe&height=416&width=416&fit=bounds" />
    <div className="userChatInfo">
        <span>Steve</span>
    </div>
    </div> 
        
        </div>
  )
}
