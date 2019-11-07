import React from "react";
import ReactDOM  from 'react-dom';

// ref 的值是一个字符串
class Sum extends React.Component{
    handleAdd=(e)=>{
        let a = this.refs.a.value;
        let b = this.refs.b.value
        this.refs.c.value = a+b;
    }
    render(){
        return(
            <div>
                <input ref="a"/> + <input ref='b' /> 
                <button onClick={this.handleAdd}>=</button> 
                <input ref="c" />
            
            </div>
        )
    }
}
// ref 的值是函数

class Sum2 extends React.Component{
    handleAdd=(e)=>{
        let a = this.a.value;
        let b = this.b.value;
        // a,b 都是字符串，数字需要用parseIn() 转义一下
        this.result.value = a+b
    }
    render(){
       return( <div>
        <input ref={ref=>this.a=ref}/> + <input ref={ref => this.b =ref} /> 
        <button onClick={this.handleAdd}>=</button> 
        <input ref={ref=>this.result=ref}/>
    
    </div>)
    }
}

//最新版本



class Sum3 extends React.Component{
    constructor(props){
        super(props)
        this.a = React.createRef();
        this.b = React.createRef();
        this.result = React.createRef();
    }
    handleAdd=(e)=>{
        let a = this.a.current.value;
        let b = this.b.current.value;
        // a,b 都是字符串，数字需要用parseIn() 转义一下
        this.result.current.value = a+b
    }
    render(){
       return( <div>
        <input ref={this.a}/> + <input ref={this.b} /> 
        <button onClick={this.handleAdd}>=</button> 
        <input ref={this.result}/>
    
    </div>)
    }
}

export {
    Sum,
    Sum2,
    Sum3
}


