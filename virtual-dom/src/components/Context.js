import React from 'react';
import ReactDOM from 'react-dom';
let ColorContext =React.createContext()
//  context 上下文
/**
 * 1.状态提升  就是多个组件需要共享一个状态的话， 就需要所有他们的状态提升到他们共同的父组件上。
 * 二： 通过上下文来传递数据
 *  1，  let Context =React.createContext()  // 返回一个Context实例
 *      const  {Provder, Consumer } = Context;
 * 2, 获取或者说使用Context 数据有两种方式，分别对应类组件和函数组件
 * 
 */
function Title(){
    return (
        // 函数组件的使用方式
        <ColorContext.Consumer>
               {
                   value =>(
                    <div style={{border:`1px solid ${value.color}`,padding:'5px'}}>Title</div>
                   )
               } 
        </ColorContext.Consumer>
    )
}
function Content(){
    return (
        // 函数组件的使用方式
        <ColorContext.Consumer>
               {
                   value =>(
                    <div style={{border:`1px solid ${value.color}`,padding:'5px'}}>
                        Content
                        <button style={{margin:10}} onClick={()=>value.changeColor('green')}>变绿</button>
                        <button onClick={()=>value.changeColor('blue')}>变蓝</button>
                    
                    </div>
                   )
               } 
        </ColorContext.Consumer>
    )
}
class Header extends React.Component{
    // 类组件使用方式
    static contextType = ColorContext;
    render(){
        console.log(this.context)
        return <div style={{border:`1px solid ${this.context.color}`,padding:'5px'}}>
            Header
            <Title />
        </div>
    }
}
class Main extends React.Component{
    static contextType = ColorContext;
    render(){
        return <div style={{border:`1px solid ${this.context.color}`,padding:'5px'}}>
        Main
        <Content />
        </div>
    }
}
export default class Panel extends React.Component{
    state={
        color:'red'
    }
    changeColor = (color)=>{
        this.setState({color})
    }
    render(){
        let contextValue = {color:this.state.color,changeColor:this.changeColor}
        return(
            // 1，父组件提供状态数据
            <ColorContext.Provider value={contextValue}>
                <div style={{border:`1px solid ${this.state.color}`,padding:'5px'}}>
                <Header></Header>
                <Main></Main>
            </div>
            </ColorContext.Provider>
            
        )
    }
}
// react组件通信有哪几种方式？
// 1， 属性传递， 2 context 上下文
// ReactDOM.render(<Panel />, document.getElementById('root'))