import React from 'react';
import { height } from 'window-size';

// 滚动条获取上一屏的scrollTop 值, 需求是总是展示首屏
export default  class GetSnapshotBeforeUpdate extends React.Component{ 
    constructor(props){
        super(props)
        this.wrapper = React.createRef()
        this.state={
            messages:[]
        }
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                messages:[this.state.messages.length, ...this.state.messages]
            })
        }, 1000);
    }
    getSnapshotBeforeUpdate(){
        // 返回新内容的高度
        return this.wrapper.current.scrollHeight;
    }
    componentDidUpdate(prevProps,prevState,prevScrollHeight){
        this.wrapper.current.scrollTop = this.wrapper.current.scrollTop+(this.wrapper.current.scrollHeight-prevScrollHeight)
    }
    render(){
        let style = {
            width:'200px',
            height:'100px',
            border:'1px solid red',
            overflow:'auto'
        }
        return(
            <ul style={style} ref={this.wrapper}>
                {
                    this.state.messages.map((message,index)=>{
                        return <li key ={index}>{message}</li>
                    })
                }
            </ul>
        )
    }
}