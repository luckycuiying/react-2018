import React from "react";
import ReactDOM  from 'react-dom';

export default class Form extends React.Component{
    constructor(props){
        super(props)
        this.input = React.createRef();
       
    }
    getFocus=()=>{
       this.input.current.getFocus()
       console.log(this.input.current)
    }
    render(){
       return( <div>
        <TextInput ref ={this.input}/>
        <button onClick={this.getFocus}>=</button> 
    
    </div>)
    }
}

class TextInput extends React.Component{
    constructor(props){
        super(props);
        this.input = React.createRef();
    }
    getFocus =()=>{
        this.input.current.focus();
    }
    render(){
        return <input ref={this.input}/>
    }
}

