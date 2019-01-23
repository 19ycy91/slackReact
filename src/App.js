import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {reactjsPosts} from './static-data';
import moment from 'moment';
import cx from 'classnames';
import Labels from './Labels';
import {MsgList} from './MsgList';
import {MsgInput} from './MsgInput'

class App extends Component {
  state= {
    messages : {},
    section: "",
    selected: "",
    value : ""
  }
    

  


  componentDidMount = () => {

    console.log("compmount")
    this.setState({
      messages : reactjsPosts,
      section: "CHANNELS",
    
      selected: "welcome"
      
    })
    // this.handleChange = this.handleChange.bind(this);



  }


  
  toggle = (newsection,selection) => {
    this.setState({
      section: newsection,
      // selected: {[selection]:this.state.messages[newsection][selection].thread}
      selected : selection,
      messages: {...this.state.messages, [newsection] : {...this.state.messages[newsection], [selection]:{
        ...this.state.messages[newsection][selection], hasUnread: false

      } }
  
}}
    )

  }



  handleChange = (event) => {
    this.setState({value: event.target.value})
  }



 timetoDate(unixtimestamp){

  var d = new Date(0);
  d.setUTCSeconds(unixtimestamp);
 
  
  return d.toString();
  
 }


  handleKeyPress = (event) => {
    if(!this.state.value) {
      console.log("fired")
      return;
    }

    if(event.key === 'Enter'){
      console.log("firedEnter")
      // this.setState({addedMsg: [...this.state.addedMsg, this.state.value]})
      console.log(this.state.value)
      console.log("check this")
      console.log((this.state.selected))
  

      this.setState({
        messages: {...this.state.messages, [this.state.section] : {...this.state.messages[this.state.section],[this.state.selected]:{"thread": 
          [...this.state.messages[this.state.section][this.state.selected].thread,  
          {"name":"myself","msg":this.state.value,"time":Math.round((new Date()).getTime() / 1000)}]}
      
    }}})
    this.setState({value: ""})

    console.log(this.state.messages)
    console.log("is it added?")
    console.log(this.state.messages[this.state.section][this.state.selected]["thread"])
    
    }

  }
 

  displayGroups (k, groupname, symbol) {
    //add unread
    // use section and selection to set classname here 
    console.log(this)
    console.log(this.state)
    console.log("groupname")
    console.log(groupname)
    console.log("head")
    console.log(k)
    console.log(symbol)
    const hasUnread = this.state.messages[groupname][k]["hasUnread"]

    const classes= cx({
      'label-name': true,
      'label-name--unread': hasUnread,
      'label-name--selected': (this.state.selected === k)
    })
    return(
    <tr className={classes} key={k}><td onClick = {this.toggle.bind(this,groupname,k)}>{symbol}{k}</td></tr>)
        

  }

  render() {
    console.log("RENDER")
    console.log(this.state)
    console.log(this.state.messages)
    console.log(this.state.selected)
    var channels = Object.keys((this.state.messages["CHANNELS"]||""))
   

    var people = Object.keys((this.state.messages["PEOPLE"]||""))
    
    // {[selection]:this.state.messages[newsection][selection].thread}
    console.log(this.state.messages)
    console.log(this.state.messages[this.state.section])
    var select =  (this.state.messages[this.state.section] === undefined ? [] :this.state.messages[this.state.section][this.state.selected]["thread"] )
    //var selected2 = (selected[0]||"")
    
   
    console.log(channels)
    console.log(people)
    console.log("Select")
    console.log(select)


    
    return (
      <div className="entireContainer">
      <div className = "leftSide">

      <Labels labelHeader={["CHANNELS","PEOPLE"]} func ={this.displayGroups.bind(this)} channels={channels} people = {people} />


      
      </div>


      <div className = "rightSide">
      <MsgList select = {select}  timetoDate = {this.timetoDate}/>
   

        {/* {chat input} */}

      <MsgInput value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
 
      </div>

      </div>
      


      
    );
  }
}

export default App;
