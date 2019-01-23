import React, { Component } from 'react';
import {LabelTable} from './LabelTable'


const Labels = ({labelHeader, func, channels, people}) => {

    var channel = labelHeader[0]
    var peep =labelHeader[1]
 



    return (
    <div>
    <h5 className = "channel-header"> {channel}</h5>
        <LabelTable labelHead={channel} 
        func= {func}
        label_list= {channels}
        symb = {"#"}
        />  
    
    




    <h5 className = "channel-header"> {peep}</h5>
        <LabelTable labelHead={peep} 
        func= {func}
        label_list= {people}
        symb = {""}
        />
    </div>

    
    )
}




export default Labels;

