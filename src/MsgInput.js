import React, { Component } from 'react';


const MsgInput = ({value, onChange,  onKeyPress}) => {


    return (
        <div className='chat-input'>

        <input type="text" placeholder="Input a message" value={value} onChange={onChange} onKeyPress={onKeyPress} />

    </div>
    )
}


export {MsgInput}