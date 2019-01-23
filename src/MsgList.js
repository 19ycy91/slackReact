import React, { Component } from 'react';


const MsgList = ({select, timetoDate}) => {

    return (
        <div className = "message-list">
        <div className='anchor-messages-bottom'>
  
         { select === undefined ? "" : select.map((e)=>
  
        <div key = {e["name"].concat(e["time"])} >
          
          <div className='message--avatar'><img className="thumb1"></img></div>
          <span className='message--name'>{e["name"]}{" "} </span>
          <span className = "message--time ">{timetoDate(e["time"])}</span> 
          <p  className = "message ">{e["msg"]}</p> 
  
        </div>)}
  
  
        </div>
        </div>
    )
}

export {MsgList}