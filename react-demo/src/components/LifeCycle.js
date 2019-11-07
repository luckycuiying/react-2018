import React from 'react'

export default class Counter extends React.Component{
    static defaultProps ={ //1， 设置默认值
        name:'石头'
    }
    constructor(props){
        super(props) // 2.初始化state 和props
        this.state ={number:0}
        console.log('1, constructor 初始化属性对象和状态对象')

    }
    // componentWillMount 在渲染过程中会多次渲染。会多次调用接口等，
    componentWillMount(){// 虚拟Dom 转化成真实dom 的过程
        console.log('2.组件将要加载 componentWillMount');
    }
    // 一般在组件挂载调用副作用，因为只渲染依次
    componentDidMount(){
        console.log('4.组件挂载完成 componentDidMount');

    }
    handleClick=()=>{
        this.setState({number:this.state.number+1});

    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('5.组件是否更新 shouldComponentUpdate');
        return nextState.number%2;

    }
    componentWillUpdate(){
        console.log('6.组件将要更新 componentWillUpdate');

    }
    componentDidUpdate(){
        console.log('7.组件完成更新 componentDidUpdate');

    }
    render(){
        console.log('3.render')
        return(<div style={{border:'1px solid black'}}>
            <p>{this.state.number}</p>
          {this.state.number%2===0?null:<ChildCounter n={this.state.number}/>}
          <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}

class ChildCounter extends React.Component{
    componentWillUnmount(){
      console.log('组件将要卸载componentWillUnmount')
    }
    componentWillMount(){
      console.log('child componentWillMount')
    }
    render(){
      console.log('child-render')
      return (<div style={{border:'1px solid red'}}> 
        {this.props.n}
      </div>)
    }
    componentDidMount(){
      console.log('child componentDidMount')
    }
    componentWillReceiveProps(newProps){ // 第一次不会执行，之后属性更新时才会执行
      console.log('child componentWillReceiveProps')
    }
    shouldComponentUpdate(nextProps,nextState){
      return nextProps.n%2==0; //子组件判断接收的属性 是否满足更新条件 为true则更新
    }
  }