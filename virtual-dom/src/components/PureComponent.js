import React, { Component } from 'react'
// PureComponent 通过props和state 的浅比较来实现shouldComponentUpdate
// 原理实现:  
 class PureComponent extends Component{
     isPureComponent=true
     shouldComponentUpdate(nextProps, nextState) {
       
        return !shallowEqual(this.props,nextProps) ||!shallowEqual(this.state,nextState)
     }
 }

 // 浅比较 ， 比较obj1 和 obj2 是否相等。如果相等的话则返回 true, 不相等返回false, 只是比较一层。

 function shallowEqual(obj1,obj2){
    if(obj1 === obj2){
        return true
    }
    if(typeof obj1 !='object' || obj1 === null || typeof obj2 !='object' || obj2 === null) {
        return false
    }
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    if(keys1.length!=keys2.length){
        return false
    }
    for(let key of keys1){
        if(!obj2.hasOwnProperty(key)||obj1[key]!=obj2[key]){
            return false
        }
    }
    return true

 }

//--------
class Title extends PureComponent{
    render(){
        console.log('Title render')
        return <div>{this.props.title}</div>
    }
}
class Counter extends PureComponent{
    render(){
        console.log('Counter render')
        return <div>{this.props.number}</div>
    }
}
export default class App extends PureComponent {
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
//  通过以上代码运行可以看出， 不管state 是否发生变化，点击三个组件都会重新render 渲染，所以需要使用
// purComponent 来优化。 



