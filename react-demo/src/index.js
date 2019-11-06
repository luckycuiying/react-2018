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
    // 组件挂载完成之后
    componentDidMount(){
        
    }
    add=()=>{
        this.setState({
            number:this.state.number+1
        })
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