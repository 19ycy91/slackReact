import React, { Component } from 'react';



const LabelTable = ({labelHead,func, label_list, symb}) => {
    console.log("y u pissed2?")
    console.log(label_list)
    return(
    <table>
    <tbody >
    {label_list.map((labelname) => 
    
    func(labelname,labelHead,symb )
    
    )}
  
    </tbody>
    
    
    </table>
    )
}

export {LabelTable};

