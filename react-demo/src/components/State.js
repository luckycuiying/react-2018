import React from "react";
import ReactDOM  from 'react-dom';


class Counter extends React.Component{
    constructor(props){
        super(props)
        // 唯一可以给state赋初始值的地方
        this.state = {
            number:0 
        }
    }
    // 这个方法是直接 赋给组件实例上的， 而不是放在原型上的
    // 判断依据是console.log(this) 你看看就知道了
    add=()=>{
        // 会改变状态值， 但是不会重新render 渲染组件
        // this.state.number = this.state.number+1
        //修改state
        this.setState({
            number:this.state.number+1
        })
        // 强制更新，不管状态和属性有没有修改，都会强制刷新界面
        this.forceUpdate()
        // this.setState() 可能是异步的 
        this.setState({
            number:this.state.number+1
        })
        console.log(this.state.number)
        this.setState({
            number:this.state.number+1
        })
        console.log(this.state.number)

        this.setState({
            number:this.state.number+1
        })
        console.log(this.state.number)

        
    }
    render(){
        
        return(
        <div>
            <p>{this.state.number}</p>
            <button onClick={this.add}>+++++</button>
        </div>
        )
    }
}

ReactDOM.render(<Counter />,document.getElementById('root'))