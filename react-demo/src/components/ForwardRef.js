import React from "react";
import ReactDOM  from 'react-dom';

export default class Form extends React.Component{
    constructor(props){
        super(props)
        this.input = React.createRef();
       
    }
    getInput=()=>{
       console.log(
        this.input.current
       )
    }
    add=()=>{
        console.log('add')
    }
    render(){
       return( <div>
        <TextInput ref ={this.input} onClick={this.add} />
        <button onClick={this.getInput}>=</button> 
    </div>)
    }
}
// 函数组件
// function TextInput(){
//     return <input />
// }

const TextInput = React.forwardRef((props,ref)=>{
    console.log(props)
    return <input ref={ref}  />
} 
)


