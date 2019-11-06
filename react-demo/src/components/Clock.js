import React from "react";
import ReactDOM  from 'react-dom';


class Clock extends React.Component{
    constructor(props){
        super(props)
        // 唯一可以给state赋初始值的地方
        this.state = {
            date: new Date().toLocaleTimeString()
        }
    }
    // 组件挂载完成之后
    componentDidMount(){
        this.timer = setInterval(()=>{
            this.setState({date:new Date().toLocaleTimeString()})
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        return<div>时间:{this.state.date}</div>
    }
}

ReactDOM.render(<Clock />,document.getElementById('root'))