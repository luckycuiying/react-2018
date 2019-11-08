import React, { Component } from 'react'
import { parse } from '@babel/core';
// PureComponent 通过props和state 的浅比较来实现shouldComponentUpdate

function Title(props){
    console.log('Title render')
    return <div>{props.title}</div>
}
class Counter extends Component{
    render(){
        console.log('Counter render')
        return <div>{this.props.number}</div>
    }
}
export default class App extends Component {
    constructor(props){
       super(props)
       this.state ={title:'计数器', number:0}
       this.inputRef = React.createRef()
    }
    add =()=>{
       this.setState({
           number:this.state.number+parseInt(this.inputRef.current.value)
       }) 
    }
    render() {
        console.log('App render')
        return (
            <div>
               <Title title={this.state.title}/> 
               <Counter number={this.state.number} />
               <input ref ={this.inputRef} />
               <button onClick={this.add}>+</button>
            </div>
        )
    }
}
//  通过以上代码运行可以看出， 不管state 是否发生变化，点击三个组件都会重新render 渲染


