import React, { Component,PureComponent } from 'react'
// PureComponent 通过props和state 的浅比较来实现shouldComponentUpdate
// 函数组件如何能达到 PureComponent 的效果呢？
//
//--------

function memo(Fn){
    return class extends PureComponent{
        render(){
            // return <Fn  {...this.props} />
            return Fn(this.props)
        }
    }
}

function Title(props){
        return <div>{props.title}</div>
}
Title = memo(Title)
function Counter(props){
        return <div>{props.number}</div>
}
Counter = memo(Counter)
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



